# [Some work](https://github.com/adrianharabula/condr/pull/135)

> state: **closed** opened by: **adrianharabula** on: **5/25/2017**

Cleaning up code, small bug fixes.

Added error logic. See backend code
&#x60;&#x60;&#x60;php
        if ($exists &#x3D; Auth::user()-&gt;groups-&gt;contains($group-&gt;id)) {
            $request-&gt;session()-&gt;flash(&#x27;message&#x27;, &#x27;You are already in the group!&#x27;);
            $request-&gt;session()-&gt;flash(&#x27;alert-class&#x27;, &#x27;alert-danger&#x27;);
        } else {
            Auth::user()-&gt;groups()-&gt;syncWithoutDetaching($group);
            $request-&gt;session()-&gt;flash(&#x27;message&#x27;, &#x27;You have joined the group succesfully!&#x27;);
        }
&#x60;&#x60;&#x60;
and frontend code:
&#x60;&#x60;&#x60;php
      @if(Session::has(&#x27;message&#x27;))
        &lt;div class&#x3D;&quot;row&quot;&gt;
          &lt;div class&#x3D;&quot;col-md-6 col-md-offset-3&quot;&gt;
            &lt;div class&#x3D;&quot;alert {{ Session::get(&#x27;alert-class&#x27;, &#x27;alert-success&#x27;) }} alert-dismissable&quot;&gt;
              &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;close&quot; data-dismiss&#x3D;&quot;alert&quot; aria-label&#x3D;&quot;close&quot;&gt;&amp;times;&lt;/a&gt;
              @if(Session::get(&#x27;alert-class&#x27;) &#x3D;&#x3D;&#x3D; &#x27;alert-danger&#x27;)
                &lt;strong&gt;Error: &lt;/strong&gt;
              @else
                &lt;strong&gt;Success: &lt;/strong&gt;
              @endif
              {{ Session::get(&#x27;message&#x27;) }}
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      @endif
&#x60;&#x60;&#x60;

Can be used anywhere.

&lt;!-- Reviewable:start --&gt;
---
This change is [&lt;img src&#x3D;&quot;https://reviewable.io/review_button.svg&quot; height&#x3D;&quot;34&quot; align&#x3D;&quot;absmiddle&quot; alt&#x3D;&quot;Reviewable&quot;/&gt;](https://reviewable.io/reviews/adrianharabula/condr/135)
&lt;!-- Reviewable:end --&gt;


### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/135#issuecomment-303967382) on: **5/25/2017**





Reviewed 24 of 25 files at r1.
Review status: 24 of 25 files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/135)*
&lt;!-- Sent from Reviewable.io --&gt;

