# [Adaugă niște users dummy ca să fie acolo pentru teste](https://github.com/adrianharabula/condr/issues/58)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/58#issuecomment-300137601) on: **5/9/2017**

Progres facem și avem, așa adăugăm un user dummy, și vom putea face cu el login:
&#x60;&#x60;&#x60;php
        DB::table(&#x27;users&#x27;)-&gt;insert([
            &#x27;name&#x27; &#x3D;&gt; &#x27;Adrian Harabula&#x27;,
            &#x27;email&#x27; &#x3D;&gt; &#x27;adrian.harabula@gmail.com&#x27;,
            &#x27;password&#x27; &#x3D;&gt; bcrypt(&#x27;adrian&#x27;),
        ]);
&#x60;&#x60;&#x60;

Sursa: https://laravel.com/docs/5.4/seeding
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/58#issuecomment-300748906) on: **5/11/2017**

Thanks! 4b705e1fc35ba51003faeae91c732f157d21515c
