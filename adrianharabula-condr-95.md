# [working characteristic relationship](https://github.com/adrianharabula/condr/pull/95)

> state: **closed** opened by: **elis47** on: **5/19/2017**



&lt;!-- Reviewable:start --&gt;
This change is [&lt;img src&#x3D;&quot;https://reviewable.io/review_button.svg&quot; height&#x3D;&quot;34&quot; align&#x3D;&quot;absmiddle&quot; alt&#x3D;&quot;Reviewable&quot;/&gt;](https://reviewable.io/reviews/adrianharabula/condr/95)
&lt;!-- Reviewable:end --&gt;


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/95#issuecomment-302641810) on: **5/19/2017**





Reviewed 3 of 5 files at r1, 11 of 11 files at r2.
Review status: all files reviewed at latest revision, 5 unresolved discussions.

---

*[app/app/Http/Controllers/ProductsController.php, line 21 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUk0RkjucoTYYnycG2:-KkUk0RkjucoTYYnycG3:b-b4nfrw) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/app/Http/Controllers/ProductsController.php#L21)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;     $group &#x3D; \App\Condrgroup::find(1);
&gt;     return view(&#x27;viewProduct&#x27;)-&gt;with(&#x27;product&#x27;, $product)
&gt;                               -&gt;with(&#x27;group&#x27;, $group);
&gt; &#x60;&#x60;&#x60;

aici o să ştergem asta

---

*[app/database/migrations/2017_05_07_000031_create_characterizables_table.php, line 16 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUk640ollxXbyxtGPX:-KkUk641o2CUm8vpbFCS:b-5ei5ni) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/database/migrations/2017_05_07_000031_create_characterizables_table.php#L16)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;     public function up()
&gt;     {
&gt;         Schema::create(&#x27;characterizables&#x27;, function (Blueprint $table) {
&gt; &#x60;&#x60;&#x60;

minunea!!!!

---

*[app/database/seeds/DatabaseSeeder.php, line 22 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUljzQmtnTIAu8Y4QH:-KkUljzQmtnTIAu8Y4QI:b-myumth) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/database/seeds/DatabaseSeeder.php#L22)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;         $this-&gt;call(ProductUserTableSeeder::class);
&gt;         $this-&gt;call(CharacteristicsTableSeeder::class);
&gt;         // $this-&gt;call(CharacterizablesTableSeeder::class);
&gt; &#x60;&#x60;&#x60;

yes, that was definitely not working

---

*[app/resources/views/viewProduct.blade.php, line 29 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUo5g_QkoRE-rrQW1X:-KkUo5g_QkoRE-rrQW1Y:bpuqcgk) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/resources/views/viewProduct.blade.php#L29)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt; 
&gt;           &lt;h5&gt;  {{ $group-&gt;characteristics[0]-&gt;name }}: {{ $group-&gt;characteristics[0]-&gt;values() }}&lt;/h5&gt;
&gt; &#x60;&#x60;&#x60;

in sfarsit, working code!!!!

---

*[app/resources/views/viewProduct.blade.php, line 30 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUo4wk4cXZVK59bOK6:-KkUo4wk4cXZVK59bOK7:b-yefn26) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/resources/views/viewProduct.blade.php#L30)):*
&gt; aracteristic-&gt;name }}: {{ $characteristic-&gt;values() }}&lt;/h5&gt;
&gt;             @endforeach
&gt;  
&gt;           &lt;h5&gt;  {{ $group-&gt;characteristics[0]-&gt;name }}: {{ $group-&gt;characteristics[0]-&gt;values() }}&lt;/h5&gt;
&gt;  

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/95)*
&lt;!-- Sent from Reviewable.io --&gt;

