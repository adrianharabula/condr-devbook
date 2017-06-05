# [\#163 added products api + data manipulation for insert!!!!](https://github.com/adrianharabula/condr/pull/163)

> state: **closed** opened by: **elis47** on: **6/1/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/163)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/163#issuecomment-305472936) on: **6/1/2017**

{% raw %}
In lookupcontroller sunt requesturile cu apiul de la github. Pierd eu ceva sau mi se pare?
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/163#issuecomment-305554041) on: **6/1/2017**

{% raw %}
<img class="emoji" title=":lgtm:" alt=":lgtm:" align="absmiddle" src="https://reviewable.io/lgtm.png" height="20" width="61"/>

---

Reviewed 6 of 6 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved, some commit checks failed.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/163#-:-KlZZR1ZTvvH4AwHsREy:bnfp4nl)*
<!-- Sent from Reviewable.io -->

{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/163#issuecomment-305562276) on: **6/1/2017**

{% raw %}




Reviewed 11 of 11 files at r3.
Review status: all files reviewed at latest revision, 1 unresolved discussion, some commit checks failed.

---

*[app/app/Http/Controllers/LookupController.php, line 13 at r3](https://reviewable.io:443/reviews/adrianharabula/condr/163#-KlZfJ6_zAbS-A6z20gq:-KlZfJ6_zAbS-A6z20gr:b-aujmeo) ([raw file](https://github.com/adrianharabula/condr/blob/46ef9d186ea917d44602c5d6cecbb7a10012fa76/app/app/Http/Controllers/LookupController.php#L13)):*
> ```PHP
>     public function index ()
>     {
>         $client = new \GuzzleHttp\Client(array( 'curl' => array( CURLOPT_SSL_VERIFYPEER => false, ), ));
> ```

modificarea asta e numai pentru la tine :)) pe live o sa vrem sa avem verificarea

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/163)*
<!-- Sent from Reviewable.io -->

{% endraw %}
