# [\#62 Make procedure in SQL to remove all existing tables&sequences; for easier database reinitialization](https://github.com/adrianharabula/condr/issues/62)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

{% raw %}
```
BEGIN

  --Bye Sequences!
  FOR i IN (SELECT us.sequence_name
              FROM USER_SEQUENCES us) LOOP
    EXECUTE IMMEDIATE 'drop sequence '|| i.sequence_name ||'';
  END LOOP;

  --Bye Tables!
  FOR i IN (SELECT ut.table_name
              FROM USER_TABLES ut) LOOP
    EXECUTE IMMEDIATE 'drop table '|| i.table_name ||' CASCADE CONSTRAINTS ';
  END LOOP;

END;
```
{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/62#issuecomment-300081685) on: **5/9/2017**

{% raw %}
Procedura arata așa:
```sql
create or replace PROCEDURE purgedatabase AS
begin

  --Bye Sequences!
  FOR i IN (SELECT us.sequence_name
              FROM USER_SEQUENCES us) LOOP
    EXECUTE IMMEDIATE 'drop sequence '|| i.sequence_name ||'';
  END LOOP;

  --Bye Tables!
  FOR i IN (SELECT ut.table_name
              FROM USER_TABLES ut) LOOP
    EXECUTE IMMEDIATE 'drop table '|| i.table_name ||' CASCADE CONSTRAINTS ';
  END LOOP;

END;
```

Se apealează așa:
```sql
call purgedatabase()
```
sau din bloc anonim
```sql
begin
  purgedatabase;
end;
```

Se folosește când vrem să curățăm baza de date, să o creem din nou. Șterge toate tabelele, toate triggerele și toate secvențele.
{% endraw %}
