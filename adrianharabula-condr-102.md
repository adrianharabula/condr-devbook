# [Secure the git hook](https://github.com/adrianharabula/condr/issues/102)

> state: **closed** opened by: **adrianharabula** on: **5/20/2017**

1. Read the documentation https://developer.github.com/webhooks/

Implement it!!!!!!!!!!

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/102#issuecomment-302888645) on: **5/20/2017**

Ok, so this is our deploy webhook.
&#x60;&#x60;&#x60;php
/*
 * Webhook script;
 * It is called by GitHub on every new push
 * This updates the server code to the latest code available on GitHub repo
 */
Route::post(&#x27;/webhook&#x27;, function(Request $request){
  // get request body
  $content &#x3D; $request-&gt;getContent();

  // hash it with the key stored in APP_WEBHOOKKEY
  // it&#x27;s the same key configured as a secret in GitHub webhook settings
  $hash &#x3D; hash_hmac(&#x27;sha1&#x27;, $content, env(&#x27;APP_WEBHOOKKEY&#x27;));

  // compare it with the one we have in X-Hub-Signature
  if($request-&gt;header(&#x27;X-Hub-Signature&#x27;) !&#x3D;&#x3D; &#x27;sha1&#x3D;&#x27; . $hash)
    abort(403);

  // execute deploy command
  SSH::run([
      &#x27;cd /root/condr/app&#x27;,
      &#x27;/root/.config/composer/vendor/laravel/envoy/envoy run deploy&#x27;,
  ]);
});
&#x60;&#x60;&#x60;

and this is our Envoy.blade.php
&#x60;&#x60;&#x60;php
@servers([&#x27;localhost&#x27; &#x3D;&gt; &#x27;127.0.0.1&#x27;])

@task(&#x27;deploy&#x27;)
    cd /root/condr
    git pull origin master
@endtask

&#x60;&#x60;&#x60;

and the exception in VerifyCsrfToken.php
&#x60;&#x60;&#x60;php
    protected $except &#x3D; [
        &#x27;/webhook&#x27;,
    ];
&#x60;&#x60;&#x60;

This took some time... but it&#x27;s a piece of art.
