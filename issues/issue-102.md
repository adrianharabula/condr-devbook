# [\#102 Secure the git hook](https://github.com/adrianharabula/condr/issues/102)

> state: **closed** opened by: **adrianharabula** on: **5/20/2017**

{% raw %}
1. Read the documentation https://developer.github.com/webhooks/

Implement it!!!!!!!!!!
{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/102#issuecomment-302888645) on: **5/20/2017**

{% raw %}
Ok, so this is our deploy webhook.
```php
/*
 * Webhook script;
 * It is called by GitHub on every new push
 * This updates the server code to the latest code available on GitHub repo
 */
Route::post('/webhook', function(Request $request){
  // get request body
  $content = $request->getContent();

  // hash it with the key stored in APP_WEBHOOKKEY
  // it's the same key configured as a secret in GitHub webhook settings
  $hash = hash_hmac('sha1', $content, env('APP_WEBHOOKKEY'));

  // compare it with the one we have in X-Hub-Signature
  if($request->header('X-Hub-Signature') !== 'sha1=' . $hash)
    abort(403);

  // execute deploy command
  SSH::run([
      'cd /root/condr/app',
      '/root/.config/composer/vendor/laravel/envoy/envoy run deploy',
  ]);
});
```

and this is our Envoy.blade.php
```php
@servers(['localhost' => '127.0.0.1'])

@task('deploy')
    cd /root/condr
    git pull origin master
@endtask

```

and the exception in VerifyCsrfToken.php
```php
    protected $except = [
        '/webhook',
    ];
```

This took some time... but it's a piece of art.
{% endraw %}
