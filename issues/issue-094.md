# [\#94 incomplete code for products](https://github.com/adrianharabula/condr/pull/94)

> state: **closed** opened by: **elis47** on: **5/18/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/94)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/94#issuecomment-302528310) on: **5/18/2017**

{% raw %}




Reviewed 15 of 15 files at r1.
Review status: all files reviewed at latest revision, 3 unresolved discussions.

---

*[app/resources/views/products.blade.php, line 7 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/94#-KkSAwAcqADa5dYEq4Z9:-KkSAwAcqADa5dYEq4ZA:b-jexcxe) ([raw file](https://github.com/adrianharabula/condr/blob/98360f46d460f7dba0533b6e35a6217d2518616f/app/resources/views/products.blade.php#L7)):*
> ```PHP
> 
> @section('content')
> <link href="/Assets/css/products.css" rel="stylesheet">
> ```

cine naiba o fi pus linia asta? :))

---

*[app/resources/views/products.blade.php, line 68 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/94#-KkSAizkASaafxvNancE:-KkSAizl-upfccQLE7ub:bwi5k2y) ([raw file](https://github.com/adrianharabula/condr/blob/cf564bf3b9981a855f3894df68f97ea2687fea79/app/resources/views/products.blade.php#L68)):*
> ```PHP
> @push('styles')
> <link rel="stylesheet" type="text/css" href="{{ asset('/css/products.css') }}">
> @endpush
> ```

aşa da, aşa se pune un css custom pentru o pagină anume

---

*[app/resources/views/layouts/app.blade.php, line 18 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/94#-KkSAZEGgSw_mHyOkMPA:-KkSAZEGgSw_mHyOkMPB:b228hjx) ([raw file](https://github.com/adrianharabula/condr/blob/cf564bf3b9981a855f3894df68f97ea2687fea79/app/resources/views/layouts/app.blade.php#L18)):*
> ```PHP
>     <link rel="stylesheet" type="text/css" href="{{ asset('/css/custom.css') }}">
>     <link rel="stylesheet" type="text/css" href="{{ asset('/css/responsive.css') }}">
>     <link rel="stylesheet" type="text/css" href="{{ asset('/css/products.css') }}">
> ```

stylesheets adiţionale adăugăm doar cu push, ca mai sus.

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/94)*
<!-- Sent from Reviewable.io -->

{% endraw %}
