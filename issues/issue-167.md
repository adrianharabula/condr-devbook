# [\#167 idee afişare de câţi useri a fost favorit produsul în singleview produs](https://github.com/adrianharabula/condr/issues/167)

> state: **closed** opened by: **adrianharabula** on: **6/3/2017**

{% raw %}

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/167#issuecomment-306033855) on: **6/4/2017**

{% raw %}
```php
$p = \App\Product::find(1);
$p->users()->count(); // outputs the number of users that saved for later the product.
```
{% endraw %}
---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/167#issuecomment-306034247) on: **6/4/2017**

{% raw %}
done
{% endraw %}
