# [\#20 Nu se poate recrea baza de date](https://github.com/adrianharabula/condr/issues/20)

> state: **closed** opened by: **adrianharabula** on: **4/19/2017**

{% raw %}
Avem [aici](https://github.com/adrianharabula/condr/tree/master/database_design/psgbd-etapa2/SqlScripts) toate scripturile folosite, problema e că nu se pot executa.

Momentan funcționează:
[00-init.sql](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/SqlScripts/00-init.sql)  
[01-createTables.sql](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/SqlScripts/01-createTables.sql)

Nu funcționează:
[plsqlSampleFunctions.sql](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/SqlScripts/plsqlSampleFunctions.sql) - @Madalina-Buza @Elena-Anghelina 
[user_managerPackage.sql](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/SqlScripts/user_managerPackage.sql) - @elis47 

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/20#issuecomment-295732304) on: **4/20/2017**

{% raw %}
Rezolvat, avem toate scripturile sql aici https://github.com/adrianharabula/condr/tree/master/Dockerfiles/oracledb/sqlscripts

Cel din urmă, __concat.sql__ reprezintă toate scripturile sql laolaltă pentru a putea fi executate cu ușurință în sql developer. Ele sunt actualizate automat cu pre-commit hook, a se vedea #22 

Dacă mai aveți modificări la baza de date ele se adaugă astfel:

- __08-__...__.sql__
- __09-__...__.sql__
- ...
- __99-__...__.sql__
{% endraw %}
