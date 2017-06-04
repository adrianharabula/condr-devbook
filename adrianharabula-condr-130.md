# [add_characteristic feature implemented](https://github.com/adrianharabula/condr/pull/130)

> state: **closed** opened by: **elis47** on: **5/24/2017**



&lt;!-- Reviewable:start --&gt;
This change is [&lt;img src&#x3D;&quot;https://reviewable.io/review_button.svg&quot; height&#x3D;&quot;34&quot; align&#x3D;&quot;absmiddle&quot; alt&#x3D;&quot;Reviewable&quot;/&gt;](https://reviewable.io/reviews/adrianharabula/condr/130)
&lt;!-- Reviewable:end --&gt;


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/130#issuecomment-303842445) on: **5/24/2017**

&lt;img class&#x3D;&quot;emoji&quot; title&#x3D;&quot;:lgtm:&quot; alt&#x3D;&quot;:lgtm:&quot; align&#x3D;&quot;absmiddle&quot; src&#x3D;&quot;https://reviewable.io/lgtm.png&quot; height&#x3D;&quot;20&quot; width&#x3D;&quot;61&quot;/&gt;

---

Reviewed 5 of 5 files at r1.
Review status: all files reviewed at latest revision, 2 unresolved discussions, some commit checks failed.

---

*[app/app/Http/Controllers/MyPreferencesController.php, line 41 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/130#-Kkw7K4fasrgjQKtKrdk:-Kkw7K4gKs5lhuSeeksf:bstbqlm) ([raw file](https://github.com/adrianharabula/condr/blob/2ee04ead01d4f38c2e08e97bb98760895107b29e/app/app/Http/Controllers/MyPreferencesController.php#L41)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt; 
&gt;   function store(\App\Characteristic $characteristic, Request $request) {
&gt;     Auth::user()-&gt;characteristics()-&gt;syncWithoutDetaching($characteristic);
&gt; &#x60;&#x60;&#x60;

fac restrictia de unicitate si din baza de date oracle; unicitate pe 3 chei

---

*[app/resources/views/viewProduct.blade.php, line 44 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/130#-Kkw8VxsXExVF_GNuj7H:-Kkw8VxsXExVF_GNuj7I:b-nn5mly) ([raw file](https://github.com/adrianharabula/condr/blob/2ee04ead01d4f38c2e08e97bb98760895107b29e/app/resources/views/viewProduct.blade.php#L44)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;                 &lt;h5&gt;
&gt;                   &lt;button class&#x3D;&quot;btn btn-danger btn-circle&quot; data-toggle&#x3D;&quot;tooltip&quot; title&#x3D;&quot;Add me to your preferences!&quot;&gt;
&gt;                     &lt;span class&#x3D;&quot;glyphicon glyphicon-heart&quot;&gt;&lt;/span&gt;{{ $characteristic-&gt;name }}: {{ $characteristic-&gt;values() }}
&gt; &#x60;&#x60;&#x60;

inimiiiioarăă!! ieee

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/130#-:-Kkw8DIMSY2NoVOQfjtw:bnfp4nl)*
&lt;!-- Sent from Reviewable.io --&gt;

