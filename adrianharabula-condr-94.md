# [incomplete code for products](https://github.com/adrianharabula/condr/pull/94)

> state: **closed** opened by: **elis47** on: **5/18/2017**



&lt;!-- Reviewable:start --&gt;
This change is [&lt;img src&#x3D;&quot;https://reviewable.io/review_button.svg&quot; height&#x3D;&quot;34&quot; align&#x3D;&quot;absmiddle&quot; alt&#x3D;&quot;Reviewable&quot;/&gt;](https://reviewable.io/reviews/adrianharabula/condr/94)
&lt;!-- Reviewable:end --&gt;


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/94#issuecomment-302528310) on: **5/18/2017**





Reviewed 15 of 15 files at r1.
Review status: all files reviewed at latest revision, 3 unresolved discussions.

---

*[app/resources/views/products.blade.php, line 7 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/94#-KkSAwAcqADa5dYEq4Z9:-KkSAwAcqADa5dYEq4ZA:b-jexcxe) ([raw file](https://github.com/adrianharabula/condr/blob/98360f46d460f7dba0533b6e35a6217d2518616f/app/resources/views/products.blade.php#L7)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt; 
&gt; @section(&#x27;content&#x27;)
&gt; &lt;link href&#x3D;&quot;/Assets/css/products.css&quot; rel&#x3D;&quot;stylesheet&quot;&gt;
&gt; &#x60;&#x60;&#x60;

cine naiba o fi pus linia asta? :))

---

*[app/resources/views/products.blade.php, line 68 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/94#-KkSAizkASaafxvNancE:-KkSAizl-upfccQLE7ub:bwi5k2y) ([raw file](https://github.com/adrianharabula/condr/blob/cf564bf3b9981a855f3894df68f97ea2687fea79/app/resources/views/products.blade.php#L68)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt; @push(&#x27;styles&#x27;)
&gt; &lt;link rel&#x3D;&quot;stylesheet&quot; type&#x3D;&quot;text/css&quot; href&#x3D;&quot;{{ asset(&#x27;/css/products.css&#x27;) }}&quot;&gt;
&gt; @endpush
&gt; &#x60;&#x60;&#x60;

aşa da, aşa se pune un css custom pentru o pagină anume

---

*[app/resources/views/layouts/app.blade.php, line 18 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/94#-KkSAZEGgSw_mHyOkMPA:-KkSAZEGgSw_mHyOkMPB:b228hjx) ([raw file](https://github.com/adrianharabula/condr/blob/cf564bf3b9981a855f3894df68f97ea2687fea79/app/resources/views/layouts/app.blade.php#L18)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;     &lt;link rel&#x3D;&quot;stylesheet&quot; type&#x3D;&quot;text/css&quot; href&#x3D;&quot;{{ asset(&#x27;/css/custom.css&#x27;) }}&quot;&gt;
&gt;     &lt;link rel&#x3D;&quot;stylesheet&quot; type&#x3D;&quot;text/css&quot; href&#x3D;&quot;{{ asset(&#x27;/css/responsive.css&#x27;) }}&quot;&gt;
&gt;     &lt;link rel&#x3D;&quot;stylesheet&quot; type&#x3D;&quot;text/css&quot; href&#x3D;&quot;{{ asset(&#x27;/css/products.css&#x27;) }}&quot;&gt;
&gt; &#x60;&#x60;&#x60;

stylesheets adiţionale adăugăm doar cu push, ca mai sus.

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/94)*
&lt;!-- Sent from Reviewable.io --&gt;

