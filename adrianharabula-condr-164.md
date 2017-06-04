# [added pagination, changes at groups page (now, works the buttons for delete a group and appear all error messages for join and delete )](https://github.com/adrianharabula/condr/pull/164)

> state: **closed** opened by: **Madalina-Buza** on: **6/1/2017**



&lt;!-- Reviewable:start --&gt;
This change is [&lt;img src&#x3D;&quot;https://reviewable.io/review_button.svg&quot; height&#x3D;&quot;34&quot; align&#x3D;&quot;absmiddle&quot; alt&#x3D;&quot;Reviewable&quot;/&gt;](https://reviewable.io/reviews/adrianharabula/condr/164)
&lt;!-- Reviewable:end --&gt;


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/164#issuecomment-305563742) on: **6/1/2017**





Reviewed 8 of 8 files at r1.
Review status: all files reviewed at latest revision, 1 unresolved discussion.

---

*[app/resources/views/user/favorited-groups.blade.php, line 37 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/164#-KlZgqld05NebPoQtLRF:-KlZgqlem3pdFbgs6DnD:beopjgg) ([raw file](https://github.com/adrianharabula/condr/blob/48c8d46c8be1a9cb82b03c498686a4a6f476afc8/app/resources/views/user/favorited-groups.blade.php#L37)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;                &lt;/div&gt;
&gt;                &lt;div class&#x3D;&quot;col-md-2&quot;&gt;
&gt;                   {!! Form::open([&#x27;method&#x27; &#x3D;&gt; &#x27;DELETE&#x27;, &#x27;url&#x27;&#x3D;&gt; route(&#x27;my.group.delete&#x27;, $group-&gt;id)]) !!}
&gt; &#x60;&#x60;&#x60;

de ce aici nu merge deschis formularul cu {{ simplu?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/164)*
&lt;!-- Sent from Reviewable.io --&gt;

