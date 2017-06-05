# [\#93 Ads viewgroup modifications](https://github.com/adrianharabula/condr/pull/93)

> state: **closed** opened by: **elis47** on: **5/18/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/93)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/93#issuecomment-302526338) on: **5/18/2017**

{% raw %}




Reviewed 3 of 6 files at r1, 8 of 8 files at r2.
Review status: all files reviewed at latest revision, 3 unresolved discussions.

---

*[app/app/Http/Controllers/GroupsController.php, line 25 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/93#-KkS94Yh3R6QOJPZCKF_:-KkS94Yh3R6QOJPZCKFa:bhuilt4) ([raw file](https://github.com/adrianharabula/condr/blob/5205f1fde7d24201884896e4fa3ade7f1a982ccb/app/app/Http/Controllers/GroupsController.php#L25)):*
> ```PHP
>     return redirect()->route('viewGroup', ['id' => $group->id]);
>   }
> ```

great!!!!

---

*[app/app/Http/Controllers/ProductsController.php, line 28 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/93#-KkS9CTA_WTxKrPRL8Vn:-KkS9CTA_WTxKrPRL8Vo:b-p6royr) ([raw file](https://github.com/adrianharabula/condr/blob/98360f46d460f7dba0533b6e35a6217d2518616f/app/app/Http/Controllers/ProductsController.php#L28)):*
> ```PHP
>     //   echo $product->name . ' <br />';
>     // }
>     return view('products')->with('products',$products);
> ```

mai e nevoie de acest return?

---

*[app/resources/views/products.blade.php, line 60 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/93#-KkS9TPZEasspXpbL83I:-KkS9TPZEasspXpbL83J:b-o95l8m) ([raw file](https://github.com/adrianharabula/condr/blob/5205f1fde7d24201884896e4fa3ade7f1a982ccb/app/resources/views/products.blade.php#L60)):*
> ```PHP
>             </div>
>             <div class="col-md-3">
>               <a href={{ route('viewproduct') }} class="btn btn-primary my-btn my-btn-dropdown btn-block btn-product pull-right">View details</a>
> ```

merge şi fără parametru ruta asta?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/93)*
<!-- Sent from Reviewable.io -->

{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/93#issuecomment-302528823) on: **5/18/2017**

{% raw %}
pull requestul #94 conţine şi aceste modificări, îl voi puşa pe el
{% endraw %}
