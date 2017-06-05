# [\#58 Adaugă niște users dummy ca să fie acolo pentru teste](https://github.com/adrianharabula/condr/issues/58)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

{% raw %}

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/58#issuecomment-300137601) on: **5/9/2017**

{% raw %}
Progres facem și avem, așa adăugăm un user dummy, și vom putea face cu el login:
```php
        DB::table('users')->insert([
            'name' => 'Adrian Harabula',
            'email' => 'adrian.harabula@gmail.com',
            'password' => bcrypt('adrian'),
        ]);
```

Sursa: https://laravel.com/docs/5.4/seeding
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/58#issuecomment-300748906) on: **5/11/2017**

{% raw %}
Thanks! 4b705e1fc35ba51003faeae91c732f157d21515c
{% endraw %}
