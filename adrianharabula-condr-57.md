# [Repară naibii baza de date, să meargă live, pe local și la toată lumea odată pentru totdeauna!!!!!!](https://github.com/adrianharabula/condr/issues/57)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-299930453) on: **5/8/2017**

Fă naibii la toată lumea baza de date!!!!
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300140922) on: **5/9/2017**

Scopul e ca toată lumea să ruleze aplicația pe baza de date locală.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300141906) on: **5/9/2017**

Pentru genera/regenera baza de date după migrări a se citi https://laravel.com/docs/5.4/migrations#running-migrations

Pe scurt, așa facem rollback la toate migrările existente(se execută funcția down() din fiecare) apoi se execută migrările(funcția up()):
&#x60;php artisan migrate:refresh&#x60;

Dacă vrem să facem și populare peste baza de date refreshuită facem
&#x60;&#x60;&#x60;bash
// Refresh the database and run all database seeds...
php artisan migrate:refresh --seed
&#x60;&#x60;&#x60;

Dacă sunt probleme la resetarea bazei de date, putem executa din sqldeveloper &#x60;call purgedatabase()&#x60; pentru a șterge toate tabelele, triggerele și secvențele existente, a se vedea #62 
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300456946) on: **5/10/2017**

Pentru a crea baza de date pentru aplicație se rulează
&#x60;&#x60;&#x60;sqlplus system/oracle as sysdba @00-init.sql&#x60;&#x60;&#x60;

Apoi se fac migrările. Și ar trebui să meargă!!!!!!!
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300917885) on: **5/12/2017**

Update inițializare cu tot cu funcția purge #62 
&#x60;&#x60;&#x60;
sqlplus system/oracle as sysdba @00-init.sql
sqlplus condr/condr @00-purgeProcedure.sql
&#x60;&#x60;&#x60;
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300923990) on: **5/12/2017**

În sfârșit închidem!!! De necrezut!
