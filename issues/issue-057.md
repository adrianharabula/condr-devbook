# [\#57 Repară naibii baza de date, să meargă live, pe local și la toată lumea odată pentru totdeauna!!!!!!](https://github.com/adrianharabula/condr/issues/57)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

{% raw %}

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-299930453) on: **5/8/2017**

{% raw %}
Fă naibii la toată lumea baza de date!!!!
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300140922) on: **5/9/2017**

{% raw %}
Scopul e ca toată lumea să ruleze aplicația pe baza de date locală.
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300141906) on: **5/9/2017**

{% raw %}
Pentru genera/regenera baza de date după migrări a se citi https://laravel.com/docs/5.4/migrations#running-migrations

Pe scurt, așa facem rollback la toate migrările existente(se execută funcția down() din fiecare) apoi se execută migrările(funcția up()):
`php artisan migrate:refresh`

Dacă vrem să facem și populare peste baza de date refreshuită facem
```bash
// Refresh the database and run all database seeds...
php artisan migrate:refresh --seed
```

Dacă sunt probleme la resetarea bazei de date, putem executa din sqldeveloper `call purgedatabase()` pentru a șterge toate tabelele, triggerele și secvențele existente, a se vedea #62 
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300456946) on: **5/10/2017**

{% raw %}
Pentru a crea baza de date pentru aplicație se rulează
```sqlplus system/oracle as sysdba @00-init.sql```

Apoi se fac migrările. Și ar trebui să meargă!!!!!!!
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300917885) on: **5/12/2017**

{% raw %}
Update inițializare cu tot cu funcția purge #62 
```
sqlplus system/oracle as sysdba @00-init.sql
sqlplus condr/condr @00-purgeProcedure.sql
```
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300923990) on: **5/12/2017**

{% raw %}
În sfârșit închidem!!! De necrezut!
{% endraw %}
