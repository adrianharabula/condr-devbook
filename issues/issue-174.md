# [\#174 Fix group page things](https://github.com/adrianharabula/condr/pull/174)

> state: **closed** opened by: **adrianharabula** on: **6/3/2017**

{% raw %}
add group, remove group, style modifications

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/174)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/174#issuecomment-306028144) on: **6/4/2017**

{% raw %}




Reviewed 1 of 15 files at r1.
Review status: 1 of 13 files reviewed at latest revision, 1 unresolved discussion, some commit checks failed.

---

*[app/app/User.php, line 42 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/174#-KlmMH9bzcy_IlGqIXIo:-KlmMH9bzcy_IlGqIXIp:bpec9qz) ([raw file](https://github.com/adrianharabula/condr/blob/12116cae09697f59fcd68eb09728e4c233886a06/app/app/User.php#L42)):*
> ```PHP
>     public function groups()
>     {
>         return $this->belongsToMany('\App\Condrgroup');
> ```

cine naiba a făcut relaţia asta?????????? unde era cu minţile?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/174)*
<!-- Sent from Reviewable.io -->

{% endraw %}
---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/174#issuecomment-306031714) on: **6/4/2017**

{% raw %}




Reviewed 15 of 15 files at r1.
Review status: all files reviewed at latest revision, 3 unresolved discussions, some commit checks failed.

---

*[app/app/Repositories/UserRepository.php, line 109 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/174#-KlmdKOGqJqidmNlH_sN:-KlmdKOGqJqidmNlH_sO:b-7l8avo) ([raw file](https://github.com/adrianharabula/condr/blob/12116cae09697f59fcd68eb09728e4c233886a06/app/app/Repositories/UserRepository.php#L109)):*
> ```PHP
>         
>         return true;
>     }
> ```

niiiiiceeeee !!!!!!

---

*[app/resources/views/groups/listgroups.blade.php, line 61 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/174#-KlmdT2DdkCroYtD300T:-KlmdT2DdkCroYtD300U:b-8fx2u7) ([raw file](https://github.com/adrianharabula/condr/blob/12116cae09697f59fcd68eb09728e4c233886a06/app/resources/views/groups/listgroups.blade.php#L61)):*
> ```PHP
>   background: -moz-linear-gradient(bottom right, #85144b, #FF4136); /* For Firefox 3.6 to 15 */
>   background: linear-gradient(to bottom right, #85144b, #FF4136); /* Standard syntax */
> }
> ```

:+1: 

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/174)*
<!-- Sent from Reviewable.io -->

{% endraw %}
