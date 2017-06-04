# [Add current running version somewhere in the site](https://github.com/adrianharabula/condr/issues/105)

> state: **closed** opened by: **adrianharabula** on: **5/20/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/105#issuecomment-302895834) on: **5/20/2017**

this is what we currently have:
&#x60;&#x60;&#x60;php
        \SSH::run([
            &#x27;cd /root/condr/app&#x27;,
            &#x27;/root/.config/composer/vendor/laravel/envoy/envoy run getlastcommit&#x27;,
        ], function($line)
        {
            $line &#x3D; str_replace(&quot;[127.0.0.1]:&quot;, &#x27;&#x27;, $line);
            \Debugbar::addmessage($line, &quot;Version&quot;);
        });
&#x60;&#x60;&#x60;
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/105#issuecomment-302901474) on: **5/21/2017**

Updated version using post-commit hook.
![image](https://cloud.githubusercontent.com/assets/2271038/26279619/4ad84154-3dc1-11e7-8824-1d9b79fce162.png)

