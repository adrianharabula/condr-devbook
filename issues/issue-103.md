# [\#103 Write docker image for running the site in development mode without without apache](https://github.com/adrianharabula/condr/issues/103)

> state: **open** opened by: **adrianharabula** on: **5/20/2017**

{% raw %}

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/103#issuecomment-302894977) on: **5/20/2017**

{% raw %}
Done. https://github.com/adrianharabula/php7cli-with-oci8
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

Dockercompose with Oracle database here:
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
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/103#issuecomment-302916965) on: **5/21/2017**

{% raw %}
Simple instructions to run our project:
```php
docker-compose up -d devapp
```

This will create oracle database and run the app with 'php artisan serve' on port 8000. Just access [localhost:8000](http://localhost:8000) and we're done!!!!!
{% endraw %}
