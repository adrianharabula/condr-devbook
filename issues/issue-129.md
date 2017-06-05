# [\#129 added major style changes to many pages](https://github.com/adrianharabula/condr/pull/129)

> state: **closed** opened by: **elis47** on: **5/24/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/129)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/129#issuecomment-303840618) on: **5/24/2017**

{% raw %}




Reviewed 13 of 13 files at r1.
Review status: all files reviewed at latest revision, 5 unresolved discussions.

---

*[app/public/css/style.css, line 174 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw4kMl6X475hIOSwp2:-Kkw4kMmyeXBADzch8H5:b-8fx2u7) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/public/css/style.css#L174)):*
> ```CSS
> button.btn.btn-primary.my-btn:hover,
> a.btn.btn-primary.my-btn:hover{
> 	background: #85144B;
> ```

:+1: 

---

*[app/resources/views/addpreferences.blade.php, line 10 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw4pFs1ffTx-96qV84:-Kkw4pFs1ffTx-96qV85:bppdmud) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/addpreferences.blade.php#L10)):*
> ```PHP
>       <div class="panel panel-default">
>         <div class="panel-heading text-center">
>           <h4><b>Enter your preferences here and let's get started!</b></h4>
> ```

ori h4 ori îngroşat, nu poţi să le ai pe ambele

---

*[app/resources/views/addpreferences.blade.php, line 124 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw5UeFLxzWasHUKjW4:-Kkw5UeFLxzWasHUKjW5:bn9bgc2) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/addpreferences.blade.php#L124)):*
> ```PHP
>     font-family: inherit;
>     font-size: inherit;
>     line-height: 1.9;
> ```

1.9 ce? pixel, %, em, etc?

---

*[app/resources/views/viewProduct.blade.php, line 38 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw6DP75ZvxAaOy5Zq4:-Kkw6DP75ZvxAaOy5Zq5:b-kdayy9) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/viewProduct.blade.php#L38)):*
> ```PHP
>             @forelse ($product->characteristics as $characteristic)
>                 <h5>
>                   <button type="button" class="btn btn-danger btn-circle" data-toggle="tooltip" title="Add me to your preferences!">
> ```

ffffffff bine!!!!! <3

---

*[app/resources/views/layouts/app.blade.php, line 22 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw6qUb3-VVP16roPpY:-Kkw6qUb3-VVP16roPpZ:bhcup9) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/layouts/app.blade.php#L22)):*
> ```PHP
> 
>     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
> ```

avem inclus de 2 ori bootstrapul, să decidem pe care să îl lăsăm

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/129)*
<!-- Sent from Reviewable.io -->

{% endraw %}
