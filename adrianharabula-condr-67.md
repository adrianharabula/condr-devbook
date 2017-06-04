# [Ce face Auth:routes() ?](https://github.com/adrianharabula/condr/issues/67)

> state: **closed** opened by: **adrianharabula** on: **5/9/2017**

&#x60;&#x60;&#x60;php
    public function auth()
    {
        // Authentication Routes...
        $this-&gt;get(&#x27;login&#x27;, &#x27;Auth\LoginController@showLoginForm&#x27;)-&gt;name(&#x27;login&#x27;);
        $this-&gt;post(&#x27;login&#x27;, &#x27;Auth\LoginController@login&#x27;);
        $this-&gt;post(&#x27;logout&#x27;, &#x27;Auth\LoginController@logout&#x27;)-&gt;name(&#x27;logout&#x27;);

        // Registration Routes...
        $this-&gt;get(&#x27;register&#x27;, &#x27;Auth\RegisterController@showRegistrationForm&#x27;)-&gt;name(&#x27;register&#x27;);
        $this-&gt;post(&#x27;register&#x27;, &#x27;Auth\RegisterController@register&#x27;);

        // Password Reset Routes...
        $this-&gt;get(&#x27;password/reset&#x27;, &#x27;Auth\ForgotPasswordController@showLinkRequestForm&#x27;)-&gt;name(&#x27;password.request&#x27;);
        $this-&gt;post(&#x27;password/email&#x27;, &#x27;Auth\ForgotPasswordController@sendResetLinkEmail&#x27;)-&gt;name(&#x27;password.email&#x27;);
        $this-&gt;get(&#x27;password/reset/{token}&#x27;, &#x27;Auth\ResetPasswordController@showResetForm&#x27;)-&gt;name(&#x27;password.reset&#x27;);
        $this-&gt;post(&#x27;password/reset&#x27;, &#x27;Auth\ResetPasswordController@reset&#x27;);
    }
&#x60;&#x60;&#x60;

Sursa:  https://github.com/laravel/framework/blob/5.4/src/Illuminate/Routing/Router.php#L994-L1010

### Comments

