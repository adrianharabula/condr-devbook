# [restructured database](https://github.com/adrianharabula/condr/pull/156)

> state: **closed** opened by: **elis47** on: **5/30/2017**



&lt;!-- Reviewable:start --&gt;
This change is [&lt;img src&#x3D;&quot;https://reviewable.io/review_button.svg&quot; height&#x3D;&quot;34&quot; align&#x3D;&quot;absmiddle&quot; alt&#x3D;&quot;Reviewable&quot;/&gt;](https://reviewable.io/reviews/adrianharabula/condr/156)
&lt;!-- Reviewable:end --&gt;


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/156#issuecomment-304989030) on: **5/30/2017**





Reviewed 17 of 18 files at r1.
Review status: 14 of 15 files reviewed at latest revision, 2 unresolved discussions, some commit checks failed.

---

*[app/database/migrations/2017_05_07_000028_create_votes_table.php, line 16 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/156#-KlPtr2D3ksKMkEbVCwe:-KlPtr2D3ksKMkEbVCwf:b-1sgxkf) ([raw file](https://github.com/adrianharabula/condr/blob/b3be0a94f79af7e9a7c4c2819b53cdd63266bd3f/app/database/migrations/2017_05_07_000028_create_votes_table.php#L16)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;         Schema::create(&#x27;votes&#x27;, function (Blueprint $table) {
&gt;             $table-&gt;increments(&#x27;id&#x27;);
&gt;             $table-&gt;integer(&#x27;value&#x27;);
&gt; &#x60;&#x60;&#x60;

that&#x27;s much better column name!

---

*[app/database/migrations/2017_05_07_000030_create_characteristics_table.php, line 21 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/156#-KlPtxa3V79rm2RzRg9n:-KlPtxa3V79rm2RzRg9o:brrqqim) ([raw file](https://github.com/adrianharabula/condr/blob/b3be0a94f79af7e9a7c4c2819b53cdd63266bd3f/app/database/migrations/2017_05_07_000030_create_characteristics_table.php#L21)):*
&gt; &#x60;&#x60;&#x60;PHP
&gt;             $table-&gt;string(&#x27;values&#x27;);
&gt;             $table-&gt;integer(&#x27;category_id&#x27;)-&gt;unsigned()-&gt;nullable();
&gt;             $table-&gt;foreign(&#x27;category_id&#x27;)-&gt;references(&#x27;id&#x27;)-&gt;on(&#x27;categories&#x27;);
&gt; &#x60;&#x60;&#x60;

fie cum zici tu :))

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/156)*
&lt;!-- Sent from Reviewable.io --&gt;

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/156#issuecomment-305105370) on: **5/31/2017**

fixed conflicts!!!!!!
