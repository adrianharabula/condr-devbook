# [\#17 docker-compose.yml, include script creare bază de date la instanțiere](https://github.com/adrianharabula/condr/issues/17)

> state: **closed** opened by: **adrianharabula** on: **4/18/2017**

{% raw %}

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/17#issuecomment-295148395) on: **4/19/2017**

{% raw %}
Creăm o nouă imagine oracle-Dockerfile:
```
FROM wnameless/oracle-xe-11g

ADD database_design/psgbd-etapa2/SqlScripts/00-init.sql /docker-entrypoint-initdb.d/
ADD database_design/psgbd-etapa2/SqlScripts/01-createTables.sql /docker-entrypoint-initdb.d/
```

Și o folosim în docker-compose.yml:
```
version: '3'

services:
   oracledb:
     build:
       context: .
       dockerfile: oracle-Dockerfile
     image: condr/databse
     restart: always
     ports:
      - "1521:1521"

volumes:

```

Când se va instanția pentru prima dată baza de date, se vor executa scripturile adăugate.
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/17#issuecomment-295153911) on: **4/19/2017**

{% raw %}
1192493af6e5bfee0e4c6a9b2de307d65763fe24
{% endraw %}
