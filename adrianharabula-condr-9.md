# [Script initializare baza de date](https://github.com/adrianharabula/condr/issues/9)

> state: **closed** opened by: **adrianharabula** on: **4/11/2017**

Ne-am putea inspira din scriptul create_user.sql de la lab1 psgbd
&#x60;&#x60;&#x60;
DROP TABLESPACE aplicatie INCLUDING CONTENTS CASCADE CONSTRAINTS; 

CREATE TABLESPACE aplicatie
  DATAFILE &#x27;tbs_perm_0001.dat&#x27; 
    SIZE 500M
    REUSE
    AUTOEXTEND ON NEXT 50M MAXSIZE 2000M
/
    
CREATE TEMPORARY TABLESPACE aplicatie
  TEMPFILE &#x27;tbs_temp_0001.dbf&#x27;
    SIZE 5M
    AUTOEXTEND ON
/    

CREATE UNDO TABLESPACE aplicatie
  DATAFILE &#x27;tbs_undo_0001.dbf&#x27;
    SIZE 5M 
    AUTOEXTEND ON
  RETENTION GUARANTEE
/


drop user student cascade;
create user student identified by STUDENT;
alter user student default tablespace aplicatie quota 1990M on aplicatie;

grant connect to student;
grant all privileges to student;

&#x60;&#x60;&#x60;

### Comments

