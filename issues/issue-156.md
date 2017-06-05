# [\#156 restructured database](https://github.com/adrianharabula/condr/pull/156)

> state: **closed** opened by: **elis47** on: **5/30/2017**

{% raw %}


<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/156)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/156#issuecomment-304989030) on: **5/30/2017**

{% raw %}




Reviewed 17 of 18 files at r1.
Review status: 14 of 15 files reviewed at latest revision, 2 unresolved discussions, some commit checks failed.

---

*[app/database/migrations/2017_05_07_000028_create_votes_table.php, line 16 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/156#-KlPtr2D3ksKMkEbVCwe:-KlPtr2D3ksKMkEbVCwf:b-1sgxkf) ([raw file](https://github.com/adrianharabula/condr/blob/b3be0a94f79af7e9a7c4c2819b53cdd63266bd3f/app/database/migrations/2017_05_07_000028_create_votes_table.php#L16)):*
> ```PHP
>         Schema::create('votes', function (Blueprint $table) {
>             $table->increments('id');
>             $table->integer('value');
> ```

that's much better column name!

---

*[app/database/migrations/2017_05_07_000030_create_characteristics_table.php, line 21 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/156#-KlPtxa3V79rm2RzRg9n:-KlPtxa3V79rm2RzRg9o:brrqqim) ([raw file](https://github.com/adrianharabula/condr/blob/b3be0a94f79af7e9a7c4c2819b53cdd63266bd3f/app/database/migrations/2017_05_07_000030_create_characteristics_table.php#L21)):*
> ```PHP
>             $table->string('values');
>             $table->integer('category_id')->unsigned()->nullable();
>             $table->foreign('category_id')->references('id')->on('categories');
> ```

fie cum zici tu :))

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/156)*
<!-- Sent from Reviewable.io -->

{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/156#issuecomment-305105370) on: **5/31/2017**

{% raw %}
fixed conflicts!!!!!!
{% endraw %}
