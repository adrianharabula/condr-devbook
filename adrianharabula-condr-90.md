# [sql query to get all characteristics for a product id](https://github.com/adrianharabula/condr/issues/90)

> state: **closed** opened by: **adrianharabula** on: **5/16/2017**



### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/90#issuecomment-301764316) on: **5/16/2017**

&#x60;&#x60;&#x60;sql
select cc.name, characteristic_values from characterizable c join characteristics cc on c.characteristic_id&#x3D;cc.id 
where characterizable_id&#x3D;5;
&#x60;&#x60;&#x60;
