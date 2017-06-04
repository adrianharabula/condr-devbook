# [docker-compose.yml, include script creare bază de date la instanțiere](https://github.com/adrianharabula/condr/issues/17)

> state: **closed** opened by: **adrianharabula** on: **4/18/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/17#issuecomment-295148395) on: **4/19/2017**

Creăm o nouă imagine oracle-Dockerfile:
&#x60;&#x60;&#x60;
FROM wnameless/oracle-xe-11g

ADD database_design/psgbd-etapa2/SqlScripts/00-init.sql /docker-entrypoint-initdb.d/
ADD database_design/psgbd-etapa2/SqlScripts/01-createTables.sql /docker-entrypoint-initdb.d/
&#x60;&#x60;&#x60;

Și o folosim în docker-compose.yml:
&#x60;&#x60;&#x60;
version: &#x27;3&#x27;

services:
   oracledb:
     build:
       context: .
       dockerfile: oracle-Dockerfile
     image: condr/databse
     restart: always
     ports:
      - &quot;1521:1521&quot;

volumes:

&#x60;&#x60;&#x60;

Când se va instanția pentru prima dată baza de date, se vor executa scripturile adăugate.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/17#issuecomment-295153911) on: **4/19/2017**

1192493af6e5bfee0e4c6a9b2de307d65763fe24
