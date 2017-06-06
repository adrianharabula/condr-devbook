## Run Laravel in Docker for dev purposes

### Featuring php7cli-oci docker image

Which can be found here https://github.com/adrianharabula/php7cli-with-oci8

Dockerfile used is:

```bash
FROM php:latest

RUN apt-get update && apt-get install -y \
        unzip \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng12-dev \
        libaio1 \
        nano \
    && docker-php-ext-install -j$(nproc) iconv mcrypt gettext \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd

RUN printf "log_errors = On \nerror_log = /dev/stderr\n" > /usr/local/etc/php/conf.d/php-logs.ini

# Oracle instantclient
ADD instantclient-basiclite-linux.x64-12.2.0.1.0.zip /tmp/
ADD instantclient-sdk-linux.x64-12.2.0.1.0.zip /tmp/
ADD instantclient-sqlplus-linux.x64-12.2.0.1.0.zip /tmp/

RUN unzip /tmp/instantclient-basiclite-linux.x64-12.2.0.1.0.zip -d /usr/local/
RUN unzip /tmp/instantclient-sdk-linux.x64-12.2.0.1.0.zip -d /usr/local/
RUN unzip /tmp/instantclient-sqlplus-linux.x64-12.2.0.1.0.zip -d /usr/local/

RUN ln -s /usr/local/instantclient_12_2 /usr/local/instantclient
RUN ln -s /usr/local/instantclient/libclntsh.so.12.1 /usr/local/instantclient/libclntsh.so
RUN ln -s /usr/local/instantclient/sqlplus /usr/bin/sqlplus

RUN echo 'export LD_LIBRARY_PATH="/usr/local/instantclient"' >> /root/.bashrc
RUN echo 'umask 002' >> /root/.bashrc

RUN echo 'instantclient,/usr/local/instantclient' | pecl install oci8
RUN echo "extension=oci8.so" > /usr/local/etc/php/conf.d/php-oci8.ini

EXPOSE 80
```

## Usage instructions with Laravel

Create a new image
```Dockerfile
FROM adrianharabula/php7cli-with-oci8
RUN mkdir /root/app
WORKDIR /root/app
EXPOSE 8000
CMD [ "php", "artisan", "serve", "--host=0.0.0.0" ]
```

Build it with
```bash
docker build -t my-laravel-app .
```

Run your laravel installation with:

```bash
docker run -p8000:8000 -v laravel/app/folder/:/root/app my-laravel-app
```

## Sample docker-compose.yml with Oracle database here:

```yml
version: '3'

services:
   oracledb:
     image: wnameless/oracle-xe-11g
     restart: always
     ports:
      - "1521:1521"

   devapp:
     depends_on:
       - oracledb
     build:
       context: ./Dockerfiles/php7cli/
       dockerfile: Dockerfile
     image: condr/php7cli
     links:
      - oracledb
     volumes:
      - ./app:/root/app
     ports:
      - "8000:8000"

volumes:
    www:

```
