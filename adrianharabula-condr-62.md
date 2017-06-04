# [Make procedure in SQL to remove all existing tables&amp;sequences; for easier database reinitialization](https://github.com/adrianharabula/condr/issues/62)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

&#x60;&#x60;&#x60;
BEGIN

  --Bye Sequences!
  FOR i IN (SELECT us.sequence_name
              FROM USER_SEQUENCES us) LOOP
    EXECUTE IMMEDIATE &#x27;drop sequence &#x27;|| i.sequence_name ||&#x27;&#x27;;
  END LOOP;

  --Bye Tables!
  FOR i IN (SELECT ut.table_name
              FROM USER_TABLES ut) LOOP
    EXECUTE IMMEDIATE &#x27;drop table &#x27;|| i.table_name ||&#x27; CASCADE CONSTRAINTS &#x27;;
  END LOOP;

END;
&#x60;&#x60;&#x60;

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/62#issuecomment-300081685) on: **5/9/2017**

Procedura arata așa:
&#x60;&#x60;&#x60;sql
create or replace PROCEDURE purgedatabase AS
begin

  --Bye Sequences!
  FOR i IN (SELECT us.sequence_name
              FROM USER_SEQUENCES us) LOOP
    EXECUTE IMMEDIATE &#x27;drop sequence &#x27;|| i.sequence_name ||&#x27;&#x27;;
  END LOOP;

  --Bye Tables!
  FOR i IN (SELECT ut.table_name
              FROM USER_TABLES ut) LOOP
    EXECUTE IMMEDIATE &#x27;drop table &#x27;|| i.table_name ||&#x27; CASCADE CONSTRAINTS &#x27;;
  END LOOP;

END;
&#x60;&#x60;&#x60;

Se apealează așa:
&#x60;&#x60;&#x60;sql
call purgedatabase()
&#x60;&#x60;&#x60;
sau din bloc anonim
&#x60;&#x60;&#x60;sql
begin
  purgedatabase;
end;
&#x60;&#x60;&#x60;

Se folosește când vrem să curățăm baza de date, să o creem din nou. Șterge toate tabelele, toate triggerele și toate secvențele.
