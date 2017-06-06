# [\#188 Elisa work](https://github.com/adrianharabula/condr/pull/188)

> state: **open** opened by: **adrianharabula** on: **6/6/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/188)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/188#issuecomment-306402246) on: **6/6/2017**

{% raw %}




Reviewed 9 of 9 files at r1.
Review status: all files reviewed at latest revision, 2 unresolved discussions.

---

*[app/resources/views/products/singleview.blade.php, line 55 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/188#-KlwEp7B89zv_q6L2Mi7:-KlwEp7CotweFXF5Na29:bfpsotu) ([raw file](https://github.com/adrianharabula/condr/blob/bc47827cbe024678b3c26d0524639ebd4e69f738/app/resources/views/products/singleview.blade.php#L55)):*
> ```PHP
>                         <h4>Characteristics of the product:</h4>
>                         @forelse ($product->characteristics as $characteristic)
>                             {{-- {{ Form::open(array('url'=>route('my.preferences.add', ['id' => $characteristic->id], ['value' => $characteristic->pivot->cvalue]))) }}
> ```

nu cred că sunt necesari parametrii în ruta

---

*[app/routes/web.php, line 132 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/188#-KlwF9WV2EAEulUTzm5T:-KlwF9WV2EAEulUTzm5U:bjw59ka) ([raw file](https://github.com/adrianharabula/condr/blob/bc47827cbe024678b3c26d0524639ebd4e69f738/app/routes/web.php#L132)):*
> ```PHP
>     ]);
> 
>     Route::match(['get', 'post'], 'preferences/add/{id}/{value}', [
> ```

de ce avem linia asta?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/188)*
<!-- Sent from Reviewable.io -->

{% endraw %}
