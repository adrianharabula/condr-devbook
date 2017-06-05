# [\#90 sql query to get all characteristics for a product id](https://github.com/adrianharabula/condr/issues/90)

> state: **closed** opened by: **adrianharabula** on: **5/16/2017**

{% raw %}

{% endraw %}


### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/90#issuecomment-301764316) on: **5/16/2017**

{% raw %}
```sql
select cc.name, characteristic_values from characterizable c join characteristics cc on c.characteristic_id=cc.id 
where characterizable_id=5;
```
{% endraw %}
