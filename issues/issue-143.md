# [\#143 Add staticpages controller](https://github.com/adrianharabula/condr/issues/143)

> state: **closed** opened by: **adrianharabula** on: **5/26/2017**

{% raw %}

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/143#issuecomment-306454971) on: **6/6/2017**

{% raw %}
we don't even need a controller :))

it's all fixed directly from route:
```php
Route::get('{route}', function ($route) {
    return view('static.'.$route);
});
```
{% endraw %}
