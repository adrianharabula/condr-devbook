# [Fix register page on laravel installation](https://github.com/adrianharabula/condr/issues/49)

> state: **closed** opened by: **adrianharabula** on: **5/3/2017**

Pagina [register](http://condr.me/register) nu vrea sa mearga.

Primim
&#x60;&#x60;&#x60;
Oci8Exception in Statement.php line 177:
Error Code : 904
Error Message : ORA-00904: &quot;ID&quot;: invalid identifier
Position : 121
Statement : insert into &quot;USERS&quot; (&quot;NAME&quot;, &quot;EMAIL&quot;, &quot;password&quot;, &quot;UPDATED_AT&quot;, &quot;CREATED_AT&quot;) values (:p0, :p1, :p2, :p3, :p4) returning &quot;ID&quot; into :p5
Bindings : [Adrian Harabula,adrian.harabula@gmail.com,$2y$10$8UXsjNro4nPIZzSTvzKQm.w3M0Zn73mnqe3q5OwdOtVzwU2Q0bLwi,2017-05-02 23:25:45,2017-05-02 23:25:45,0]
&#x60;&#x60;&#x60;

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/49#issuecomment-298795004) on: **5/3/2017**

password is reserved word in oracle; password column name needs to be changed
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/49#issuecomment-298851557) on: **5/3/2017**

we don&#x27;t have timestamp columns yet, they must be deactivated
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/49#issuecomment-299662473) on: **5/6/2017**

we now use default laravel users table schema, but needs some modifications to match our previously used schema.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/49#issuecomment-299728062) on: **5/7/2017**

can be considered closed. We use exactly the laravel default users schema.
