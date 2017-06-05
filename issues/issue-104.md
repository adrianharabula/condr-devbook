# [\#104 GuzzleHttp requests examples](https://github.com/adrianharabula/condr/issues/104)

> state: **open** opened by: **adrianharabula** on: **5/20/2017**

{% raw %}
The sync version
```php
        $client = new \GuzzleHttp\Client();
        $request =  $client->get('https://webhooks.condr.me/version');
        $message = $request->getBody();
```

The Async version
```php
        $client = new \GuzzleHttp\Client();
        $promise =  $client->getAsync('https://webhooks.condr.me/version');

        $promise->then(
            function (ResponseInterface $res) {
                $msg = (string) $res->getBody();
                \Debugbar::notice(msg);
            },
            function (RequestException $e) {
                echo $e->getMessage() . "\n";
                echo $e->getRequest()->getMethod();
            }
        );
```
{% endraw %}



