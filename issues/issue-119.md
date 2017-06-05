# [\#119 added search bar functionality for products page](https://github.com/adrianharabula/condr/pull/119)

> state: **closed** opened by: **elis47** on: **5/22/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/119)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/119#issuecomment-303291527) on: **5/23/2017**

{% raw %}




Reviewed 12 of 12 files at r1.
Review status: all files reviewed at latest revision, 3 unresolved discussions.

---

*[.gitignore, line 5 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/119#-Kknfu1ei8P4YpRQNE74:-Kknfu1fsp5dpXgSHtTM:bhpwav7) ([raw file](https://github.com/adrianharabula/condr/blob/80e9356a5cc55018cdbf93771823b1cca2d3f516/.gitignore#L5)):*
> ```
> app/config/algolia\.php
> 
> app/config/scout\.php
> ```

o să vedem aici cum facem cu fişierele de configurare. Trebuie pe cât posibil să evităm punerea datelor de autentificare pe git, dar în acelaşi timp fişierele astea ar trebui să fie pe git

---

*[app/app/Http/Controllers/GroupsController.php, line 28 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/119#-KkngQC4DBHNxeAG-QYO:-KkngQC5hLbGZFTcHAI_:bo3kmwv) ([raw file](https://github.com/adrianharabula/condr/blob/80e9356a5cc55018cdbf93771823b1cca2d3f516/app/app/Http/Controllers/GroupsController.php#L28)):*
> ```PHP
>   function search(Request $request) {
>     $name = $request->group_name;
>     $groups = Group::search($name)->get();
> ```

uite ce frumos arată searchul :)

---

*[app/resources/views/addpreferences.blade.php, line 24 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/119#-KkngZiJpedYrePCWiMW:-KkngZiJpedYrePCWiMX:btump5u) ([raw file](https://github.com/adrianharabula/condr/blob/80e9356a5cc55018cdbf93771823b1cca2d3f516/app/resources/views/addpreferences.blade.php#L24)):*
> ```PHP
>                 <div class="checkbox">
>                   <label>
>                     <input name="wanted" type="checkbox" value="">I want the following characteristics
> ```

ce legătură are asta cu modificările pentru search?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/119)*
<!-- Sent from Reviewable.io -->

{% endraw %}
