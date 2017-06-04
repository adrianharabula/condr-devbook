# [GuzzleHttp requests examples](https://github.com/adrianharabula/condr/issues/104)

> state: **open** opened by: **adrianharabula** on: **5/20/2017**

The sync version
&#x60;&#x60;&#x60;php
        $client &#x3D; new \GuzzleHttp\Client();
        $request &#x3D;  $client-&gt;get(&#x27;https://webhooks.condr.me/version&#x27;);
        $message &#x3D; $request-&gt;getBody();
&#x60;&#x60;&#x60;

The Async version
&#x60;&#x60;&#x60;php
        $client &#x3D; new \GuzzleHttp\Client();
        $promise &#x3D;  $client-&gt;getAsync(&#x27;https://webhooks.condr.me/version&#x27;);

        $promise-&gt;then(
            function (ResponseInterface $res) {
                $msg &#x3D; (string) $res-&gt;getBody();
                \Debugbar::notice(msg);
            },
            function (RequestException $e) {
                echo $e-&gt;getMessage() . &quot;\n&quot;;
                echo $e-&gt;getRequest()-&gt;getMethod();
            }
        );
&#x60;&#x60;&#x60;

### Comments

