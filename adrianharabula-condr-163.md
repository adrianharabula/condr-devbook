# [added products api + data manipulation for insert!!!!](https://github.com/adrianharabula/condr/pull/163)

> state: **closed** opened by: **elis47** on: **6/1/2017**



&lt;!-- Reviewable:start --&gt;
This change is [&lt;img src&#x3D;&quot;https://reviewable.io/review_button.svg&quot; height&#x3D;&quot;34&quot; align&#x3D;&quot;absmiddle&quot; alt&#x3D;&quot;Reviewable&quot;/&gt;](https://reviewable.io/reviews/adrianharabula/condr/163)
&lt;!-- Reviewable:end --&gt;


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/163#issuecomment-305472936) on: **6/1/2017**

In lookupcontroller sunt requesturile cu apiul de la github. Pierd eu ceva sau mi se pare?
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/163#issuecomment-305554041) on: **6/1/2017**

&lt;img class&#x3D;&quot;emoji&quot; title&#x3D;&quot;:lgtm:&quot; alt&#x3D;&quot;:lgtm:&quot; align&#x3D;&quot;absmiddle&quot; src&#x3D;&quot;https://reviewable.io/lgtm.png&quot; height&#x3D;&quot;20&quot; width&#x3D;&quot;61&quot;/&gt;

---

Reviewed 6 of 6 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved, some commit checks failed.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/163#-:-KlZZR1ZTvvH4AwHsREy:bnfp4nl)*
&lt;!-- Sent from Reviewable.io --&gt;

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/163#issuecomment-305562276) on: **6/1/2017**





Reviewed 11 of 11 files at r3.
Review status: all files reviewed at latest revision, 1 unresolved discussion, some commit checks failed.

---

*[app/app/Http/Controllers/LookupController.php, line 13 at r3](https://reviewable.io:443/reviews/adrianharabula/condr/163#-KlZfJ6_zAbS-A6z20gq:-KlZfJ6_zAbS-A6z20gr:b-aujmeo) ([raw file](https://github.com/adrianharabula/condr/blob/46ef9d186ea917d44602c5d6cecbb7a10012fa76/app/app/Http/Controllers/LookupController.php#L13)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;     public function index ()
&gt;     {
&gt;         $client &#x3D; new \GuzzleHttp\Client(array( &#x27;curl&#x27; &#x3D;&gt; array( CURLOPT_SSL_VERIFYPEER &#x3D;&gt; false, ), ));
&gt; &#x60;&#x60;&#x60;

modificarea asta e numai pentru la tine :)) pe live o sa vrem sa avem verificarea

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/163)*
&lt;!-- Sent from Reviewable.io --&gt;

