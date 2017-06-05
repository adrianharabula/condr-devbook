# [\#95 working characteristic relationship](https://github.com/adrianharabula/condr/pull/95)

> state: **closed** opened by: **elis47** on: **5/19/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/95)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/95#issuecomment-302641810) on: **5/19/2017**

{% raw %}




Reviewed 3 of 5 files at r1, 11 of 11 files at r2.
Review status: all files reviewed at latest revision, 5 unresolved discussions.

---

*[app/app/Http/Controllers/ProductsController.php, line 21 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUk0RkjucoTYYnycG2:-KkUk0RkjucoTYYnycG3:b-b4nfrw) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/app/Http/Controllers/ProductsController.php#L21)):*
> ```PHP
>     $group = \App\Condrgroup::find(1);
>     return view('viewProduct')->with('product', $product)
>                               ->with('group', $group);
> ```

aici o să ştergem asta

---

*[app/database/migrations/2017_05_07_000031_create_characterizables_table.php, line 16 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUk640ollxXbyxtGPX:-KkUk641o2CUm8vpbFCS:b-5ei5ni) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/database/migrations/2017_05_07_000031_create_characterizables_table.php#L16)):*
> ```PHP
>     public function up()
>     {
>         Schema::create('characterizables', function (Blueprint $table) {
> ```

minunea!!!!

---

*[app/database/seeds/DatabaseSeeder.php, line 22 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUljzQmtnTIAu8Y4QH:-KkUljzQmtnTIAu8Y4QI:b-myumth) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/database/seeds/DatabaseSeeder.php#L22)):*
> ```PHP
>         $this->call(ProductUserTableSeeder::class);
>         $this->call(CharacteristicsTableSeeder::class);
>         // $this->call(CharacterizablesTableSeeder::class);
> ```

yes, that was definitely not working

---

*[app/resources/views/viewProduct.blade.php, line 29 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUo5g_QkoRE-rrQW1X:-KkUo5g_QkoRE-rrQW1Y:bpuqcgk) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/resources/views/viewProduct.blade.php#L29)):*
> ```PHP
> 
>           <h5>  {{ $group->characteristics[0]->name }}: {{ $group->characteristics[0]->values() }}</h5>
> ```

in sfarsit, working code!!!!

---

*[app/resources/views/viewProduct.blade.php, line 30 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUo4wk4cXZVK59bOK6:-KkUo4wk4cXZVK59bOK7:b-yefn26) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/resources/views/viewProduct.blade.php#L30)):*
> aracteristic->name }}: {{ $characteristic->values() }}</h5>
>             @endforeach
>  
>           <h5>  {{ $group->characteristics[0]->name }}: {{ $group->characteristics[0]->values() }}</h5>
>  

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/95)*
<!-- Sent from Reviewable.io -->

{% endraw %}
