# [\#105 Add current running version somewhere in the site](https://github.com/adrianharabula/condr/issues/105)

> state: **closed** opened by: **adrianharabula** on: **5/20/2017**

{% raw %}

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/105#issuecomment-302895834) on: **5/20/2017**

{% raw %}
this is what we currently have:
```php
        \SSH::run([
            'cd /root/condr/app',
            '/root/.config/composer/vendor/laravel/envoy/envoy run getlastcommit',
        ], function($line)
        {
            $line = str_replace("[127.0.0.1]:", '', $line);
            \Debugbar::addmessage($line, "Version");
        });
```
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/105#issuecomment-302901474) on: **5/21/2017**

{% raw %}
Updated version using post-commit hook.
![image](https://cloud.githubusercontent.com/assets/2271038/26279619/4ad84154-3dc1-11e7-8824-1d9b79fce162.png)

{% endraw %}
