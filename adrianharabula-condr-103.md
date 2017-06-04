# [Write docker image for running the site in development mode without without apache](https://github.com/adrianharabula/condr/issues/103)

> state: **open** opened by: **adrianharabula** on: **5/20/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/103#issuecomment-302894977) on: **5/20/2017**

Done. https://github.com/adrianharabula/php7cli-with-oci8
## Usage instructions with Laravel

Create a new image
&#x60;&#x60;&#x60;Dockerfile
FROM adrianharabula/php7cli-with-oci8
RUN mkdir /root/app
WORKDIR /root/app
EXPOSE 8000
CMD [ &quot;php&quot;, &quot;artisan&quot;, &quot;serve&quot;, &quot;--host&#x3D;0.0.0.0&quot; ]
&#x60;&#x60;&#x60;

Build it with
&#x60;&#x60;&#x60;bash
docker build -t my-laravel-app .
&#x60;&#x60;&#x60;

Run your laravel installation with:

&#x60;&#x60;&#x60;bash
docker run -p8000:8000 -v laravel/app/folder/:/root/app my-laravel-app
&#x60;&#x60;&#x60;

Dockercompose with Oracle database here:
&#x60;&#x60;&#x60;yml
version: &#x27;3&#x27;

services:
   oracledb:
     image: wnameless/oracle-xe-11g
     restart: always
     ports:
      - &quot;1521:1521&quot;

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
      - &quot;8000:8000&quot;

volumes:
    www:

&#x60;&#x60;&#x60;
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/103#issuecomment-302916965) on: **5/21/2017**

Simple instructions to run our project:
&#x60;&#x60;&#x60;php
docker-compose up -d devapp
&#x60;&#x60;&#x60;

This will create oracle database and run the app with &#x27;php artisan serve&#x27; on port 8000. Just access [localhost:8000](http://localhost:8000) and we&#x27;re done!!!!!
