# [\#146 Major refactoring; implements Repository Pattern and many more](https://github.com/adrianharabula/condr/pull/146)

> state: **closed** opened by: **adrianharabula** on: **5/27/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/146)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/146#issuecomment-304443060) on: **5/27/2017**

{% raw %}




Review status: 0 of 46 files reviewed at latest revision, 7 unresolved discussions.

---

*[app/app/Characterizable.php, line 0 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8Mwkivvj2bp70RbG7:-Kl8Mwkj8xjAoijt0W4Z:b-u13cp1) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Characterizable.php#L0)):*
se pare că nu ne mai trebuie, am simplificat puţin lucrurile

---

*[app/app/Product.php, line 6 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8N6eOgtVp7trVXNqN:-Kl8N6eOgtVp7trVXNqO:b93ziwx) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Product.php#L6)):*
> ```PHP
> 
> use Illuminate\Database\Eloquent\Model;
> use Laravel\Scout\Searchable;
> ```

aici trebuie să scoatem searchable pentru că folosim alt cod pentru search acum

---

*[app/app/Product.php, line 41 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8NEY46DM2kOcEstCi:-Kl8NEY46DM2kOcEstCj:bv6r64f) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Product.php#L41)):*
> ```PHP
>     public function characteristics()
>     {
>         return $this->belongsToMany(Characteristic::class, 'product_characteristic_vote', 'product_id', 'characteristic_id');
> ```

aici avem relaţie many to many cu 3 pivoţi, poduct_id, characteristic_id şi vote_id

---

*[app/app/Http/Controllers/ContactFormController.php, line 10 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8NcbkrEmfdbVetd3S:-Kl8NcbkrEmfdbVetd3T:bnsr2ib) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Http/Controllers/ContactFormController.php#L10)):*
> ```PHP
> {
>     public function getFormController() {
> ```

this needs to be completed

---

*[app/app/Http/Controllers/ProductsController.php, line 64 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8O5rC1_dCc5t9yXnb:-Kl8O5rC1_dCc5t9yXnc:b-ks2ge0) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Http/Controllers/ProductsController.php#L64)):*
> ```PHP
>     {
>         return view('product.list')
>             ->with('products',$this->_productRepository->searchProducts($data));
> ```

aici avem noul search nativ

---

*[app/app/Http/Controllers/StaticPageController.php, line 11 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8OKw8Cy9M4KxUStKV:-Kl8OKw8Cy9M4KxUStKW:b-s8u38g) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Http/Controllers/StaticPageController.php#L11)):*
> ```PHP
>     public function staticPage()
>     {
>         return view('static'.request()->route()->getName());
> ```

avem aici un controller care procesează paginili statice, nu e nevoie să ai câte un controller pentru fiecare rută statică

---

*[app/routes/web.php, line 110 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8PDV_1Q19IzUQt_ik:-Kl8PDV_1Q19IzUQt_il:b-up6mrv) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/routes/web.php#L110)):*
> ```PHP
> Route::get('{route}', function ($route) {
>     return view('static.'.$route);
> });
> ```

aici nici nu mai avem nevoie de controller pentru routes statice :))

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/146)*
<!-- Sent from Reviewable.io -->

{% endraw %}
---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/146#issuecomment-304516276) on: **5/28/2017**

{% raw %}




Reviewed 1 of 10 files at r2.
Review status: 1 of 47 files reviewed at latest revision, 7 unresolved discussions.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/146)*
<!-- Sent from Reviewable.io -->

{% endraw %}
---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/146#issuecomment-304516389) on: **5/28/2017**

{% raw %}




Reviewed 1 of 59 files at r1.
Review status: 2 of 47 files reviewed at latest revision, 7 unresolved discussions.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/146)*
<!-- Sent from Reviewable.io -->

{% endraw %}
