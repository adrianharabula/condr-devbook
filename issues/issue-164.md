# [\#164 added pagination, changes at groups page (now, works the buttons for delete a group and appear all error messages for join and delete )](https://github.com/adrianharabula/condr/pull/164)

> state: **closed** opened by: **Madalina-Buza** on: **6/1/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/164)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/164#issuecomment-305563742) on: **6/1/2017**

{% raw %}




Reviewed 8 of 8 files at r1.
Review status: all files reviewed at latest revision, 1 unresolved discussion.

---

*[app/resources/views/user/favorited-groups.blade.php, line 37 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/164#-KlZgqld05NebPoQtLRF:-KlZgqlem3pdFbgs6DnD:beopjgg) ([raw file](https://github.com/adrianharabula/condr/blob/48c8d46c8be1a9cb82b03c498686a4a6f476afc8/app/resources/views/user/favorited-groups.blade.php#L37)):*
> ```PHP
>                </div>
>                <div class="col-md-2">
>                   {!! Form::open(['method' => 'DELETE', 'url'=> route('my.group.delete', $group->id)]) !!}
> ```

de ce aici nu merge deschis formularul cu {{ simplu?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/164)*
<!-- Sent from Reviewable.io -->

{% endraw %}
