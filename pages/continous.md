## Automatic git pulls on every push

So that we can focus on code not on configs.

The following webhook script executes on every push on GitHub:
```bash
    /*
    * Webhook script;
    * It is called by GitHub on every new push
    * This updates the server code to the latest code available on GitHub repo
    */
    Route::post('webhook', function (Request $request) {
        // get request body
        $content = $request->getContent();

        // hash it with the key stored in APP_WEBHOOKKEY
        // it's the same key configured as a secret in GitHub webhook settings
        $hash = hash_hmac('sha1', $content, env('APP_WEBHOOKKEY'));

        // compare it with the one we have in X-Hub-Signature
        if ($request->header('X-Hub-Signature') !== 'sha1='.$hash) {
            abort(403);
        }

        // execute deploy command
        SSH::run([
            'cd /root/condr',
            'git pull origin master',
            './version-update',
        ]);
    });
```
