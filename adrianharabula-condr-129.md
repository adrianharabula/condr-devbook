# [added major style changes to many pages](https://github.com/adrianharabula/condr/pull/129)

> state: **closed** opened by: **elis47** on: **5/24/2017**



&lt;!-- Reviewable:start --&gt;
This change is [&lt;img src&#x3D;&quot;https://reviewable.io/review_button.svg&quot; height&#x3D;&quot;34&quot; align&#x3D;&quot;absmiddle&quot; alt&#x3D;&quot;Reviewable&quot;/&gt;](https://reviewable.io/reviews/adrianharabula/condr/129)
&lt;!-- Reviewable:end --&gt;


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/129#issuecomment-303840618) on: **5/24/2017**





Reviewed 13 of 13 files at r1.
Review status: all files reviewed at latest revision, 5 unresolved discussions.

---

*[app/public/css/style.css, line 174 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw4kMl6X475hIOSwp2:-Kkw4kMmyeXBADzch8H5:b-8fx2u7) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/public/css/style.css#L174)):*
&gt; &#x60;&#x60;&#x60;CSS
&gt; button.btn.btn-primary.my-btn:hover,
&gt; a.btn.btn-primary.my-btn:hover{
&gt; 	background: #85144B;
&gt; &#x60;&#x60;&#x60;

:+1: 

---

*[app/resources/views/addpreferences.blade.php, line 10 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw4pFs1ffTx-96qV84:-Kkw4pFs1ffTx-96qV85:bppdmud) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/addpreferences.blade.php#L10)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;       &lt;div class&#x3D;&quot;panel panel-default&quot;&gt;
&gt;         &lt;div class&#x3D;&quot;panel-heading text-center&quot;&gt;
&gt;           &lt;h4&gt;&lt;b&gt;Enter your preferences here and let&#x27;s get started!&lt;/b&gt;&lt;/h4&gt;
&gt; &#x60;&#x60;&#x60;

ori h4 ori îngroşat, nu poţi să le ai pe ambele

---

*[app/resources/views/addpreferences.blade.php, line 124 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw5UeFLxzWasHUKjW4:-Kkw5UeFLxzWasHUKjW5:bn9bgc2) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/addpreferences.blade.php#L124)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;     font-family: inherit;
&gt;     font-size: inherit;
&gt;     line-height: 1.9;
&gt; &#x60;&#x60;&#x60;

1.9 ce? pixel, %, em, etc?

---

*[app/resources/views/viewProduct.blade.php, line 38 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw6DP75ZvxAaOy5Zq4:-Kkw6DP75ZvxAaOy5Zq5:b-kdayy9) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/viewProduct.blade.php#L38)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;             @forelse ($product-&gt;characteristics as $characteristic)
&gt;                 &lt;h5&gt;
&gt;                   &lt;button type&#x3D;&quot;button&quot; class&#x3D;&quot;btn btn-danger btn-circle&quot; data-toggle&#x3D;&quot;tooltip&quot; title&#x3D;&quot;Add me to your preferences!&quot;&gt;
&gt; &#x60;&#x60;&#x60;

ffffffff bine!!!!! &lt;3

---

*[app/resources/views/layouts/app.blade.php, line 22 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw6qUb3-VVP16roPpY:-Kkw6qUb3-VVP16roPpZ:bhcup9) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/layouts/app.blade.php#L22)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt; 
&gt;     &lt;link rel&#x3D;&quot;stylesheet&quot; href&#x3D;&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css&quot;&gt;
&gt; &#x60;&#x60;&#x60;

avem inclus de 2 ori bootstrapul, să decidem pe care să îl lăsăm

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/129)*
&lt;!-- Sent from Reviewable.io --&gt;

