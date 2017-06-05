# [\#9 Script initializare baza de date](https://github.com/adrianharabula/condr/issues/9)

> state: **closed** opened by: **adrianharabula** on: **4/10/2017**

{% raw %}
Ne-am putea inspira din scriptul create_user.sql de la lab1 psgbd
```
DROP TABLESPACE aplicatie INCLUDING CONTENTS CASCADE CONSTRAINTS; 

CREATE TABLESPACE aplicatie
  DATAFILE 'tbs_perm_0001.dat' 
    SIZE 500M
    REUSE
    AUTOEXTEND ON NEXT 50M MAXSIZE 2000M
/
    
CREATE TEMPORARY TABLESPACE aplicatie
  TEMPFILE 'tbs_temp_0001.dbf'
    SIZE 5M
    AUTOEXTEND ON
/    

CREATE UNDO TABLESPACE aplicatie
  DATAFILE 'tbs_undo_0001.dbf'
    SIZE 5M 
    AUTOEXTEND ON
  RETENTION GUARANTEE
/


drop user student cascade;
create user student identified by STUDENT;
alter user student default tablespace aplicatie quota 1990M on aplicatie;

grant connect to student;
grant all privileges to student;

```
{% endraw %}



