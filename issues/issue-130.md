# [\#130 add_characteristic feature implemented](https://github.com/adrianharabula/condr/pull/130)

> state: **closed** opened by: **elis47** on: **5/24/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/130)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/130#issuecomment-303842445) on: **5/24/2017**

{% raw %}
<img class="emoji" title=":lgtm:" alt=":lgtm:" align="absmiddle" src="https://reviewable.io/lgtm.png" height="20" width="61"/>

---

Reviewed 5 of 5 files at r1.
Review status: all files reviewed at latest revision, 2 unresolved discussions, some commit checks failed.

---

*[app/app/Http/Controllers/MyPreferencesController.php, line 41 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/130#-Kkw7K4fasrgjQKtKrdk:-Kkw7K4gKs5lhuSeeksf:bstbqlm) ([raw file](https://github.com/adrianharabula/condr/blob/2ee04ead01d4f38c2e08e97bb98760895107b29e/app/app/Http/Controllers/MyPreferencesController.php#L41)):*
> ```PHP
> 
>   function store(\App\Characteristic $characteristic, Request $request) {
>     Auth::user()->characteristics()->syncWithoutDetaching($characteristic);
> ```

fac restrictia de unicitate si din baza de date oracle; unicitate pe 3 chei

---

*[app/resources/views/viewProduct.blade.php, line 44 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/130#-Kkw8VxsXExVF_GNuj7H:-Kkw8VxsXExVF_GNuj7I:b-nn5mly) ([raw file](https://github.com/adrianharabula/condr/blob/2ee04ead01d4f38c2e08e97bb98760895107b29e/app/resources/views/viewProduct.blade.php#L44)):*
> ```PHP
>                 <h5>
>                   <button class="btn btn-danger btn-circle" data-toggle="tooltip" title="Add me to your preferences!">
>                     <span class="glyphicon glyphicon-heart"></span>{{ $characteristic->name }}: {{ $characteristic->values() }}
> ```

inimiiiioarăă!! ieee

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/130#-:-Kkw8DIMSY2NoVOQfjtw:bnfp4nl)*
<!-- Sent from Reviewable.io -->

{% endraw %}
