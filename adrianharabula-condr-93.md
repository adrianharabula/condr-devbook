# [Ads viewgroup modifications](https://github.com/adrianharabula/condr/pull/93)

> state: **closed** opened by: **elis47** on: **5/18/2017**



&lt;!-- Reviewable:start --&gt;
This change is [&lt;img src&#x3D;&quot;https://reviewable.io/review_button.svg&quot; height&#x3D;&quot;34&quot; align&#x3D;&quot;absmiddle&quot; alt&#x3D;&quot;Reviewable&quot;/&gt;](https://reviewable.io/reviews/adrianharabula/condr/93)
&lt;!-- Reviewable:end --&gt;


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/93#issuecomment-302526338) on: **5/18/2017**





Reviewed 3 of 6 files at r1, 8 of 8 files at r2.
Review status: all files reviewed at latest revision, 3 unresolved discussions.

---

*[app/app/Http/Controllers/GroupsController.php, line 25 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/93#-KkS94Yh3R6QOJPZCKF_:-KkS94Yh3R6QOJPZCKFa:bhuilt4) ([raw file](https://github.com/adrianharabula/condr/blob/5205f1fde7d24201884896e4fa3ade7f1a982ccb/app/app/Http/Controllers/GroupsController.php#L25)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;     return redirect()-&gt;route(&#x27;viewGroup&#x27;, [&#x27;id&#x27; &#x3D;&gt; $group-&gt;id]);
&gt;   }
&gt; &#x60;&#x60;&#x60;

great!!!!

---

*[app/app/Http/Controllers/ProductsController.php, line 28 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/93#-KkS9CTA_WTxKrPRL8Vn:-KkS9CTA_WTxKrPRL8Vo:b-p6royr) ([raw file](https://github.com/adrianharabula/condr/blob/98360f46d460f7dba0533b6e35a6217d2518616f/app/app/Http/Controllers/ProductsController.php#L28)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;     //   echo $product-&gt;name . &#x27; &lt;br /&gt;&#x27;;
&gt;     // }
&gt;     return view(&#x27;products&#x27;)-&gt;with(&#x27;products&#x27;,$products);
&gt; &#x60;&#x60;&#x60;

mai e nevoie de acest return?

---

*[app/resources/views/products.blade.php, line 60 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/93#-KkS9TPZEasspXpbL83I:-KkS9TPZEasspXpbL83J:b-o95l8m) ([raw file](https://github.com/adrianharabula/condr/blob/5205f1fde7d24201884896e4fa3ade7f1a982ccb/app/resources/views/products.blade.php#L60)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;             &lt;/div&gt;
&gt;             &lt;div class&#x3D;&quot;col-md-3&quot;&gt;
&gt;               &lt;a href&#x3D;{{ route(&#x27;viewproduct&#x27;) }} class&#x3D;&quot;btn btn-primary my-btn my-btn-dropdown btn-block btn-product pull-right&quot;&gt;View details&lt;/a&gt;
&gt; &#x60;&#x60;&#x60;

merge şi fără parametru ruta asta?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/93)*
&lt;!-- Sent from Reviewable.io --&gt;

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/93#issuecomment-302528823) on: **5/18/2017**

pull requestul #94 conţine şi aceste modificări, îl voi puşa pe el
