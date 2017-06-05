# [\#22 Concatenare fișiere sqlscripts la commit într-un singur fișier pentru a putea fi rulat din Sql Developer](https://github.com/adrianharabula/condr/issues/22)

> state: **closed** opened by: **adrianharabula** on: **4/20/2017**

{% raw %}

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/22#issuecomment-295730368) on: **4/20/2017**

{% raw %}
avem __pre-commit__ hook:
```
#!/bin/sh
cd Dockerfiles/oracledb/sqlscripts
cat [0-9][0-9]*.sql > sqlconcat.sql
git add sqlconcat.sql
```
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/22#issuecomment-295736886) on: **4/20/2017**

{% raw %}
- [x] Adaugă pre-commit hook în repo pentru concatenare sql
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/22#issuecomment-295802245) on: **4/20/2017**

{% raw %}
d860785ee00af733dddce4f7c392d58be60c6dce
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/22#issuecomment-295824567) on: **4/20/2017**

{% raw %}
Am găsit o metodă mai bună, folosind webhooks, fac direct __cat__ la toate fișierele sql de pe server și le servesc în browser în plain text. Scripturile sql de pe server sunt actualizate permanent. Link demonstrativ: https://webhooks.condr.me/sqlconcat
{% endraw %}
