# [\#135 Some work](https://github.com/adrianharabula/condr/pull/135)

> state: **closed** opened by: **adrianharabula** on: **5/25/2017**

{% raw %}
Cleaning up code, small bug fixes.

Added error logic. See backend code
```php
        if ($exists = Auth::user()->groups->contains($group->id)) {
            $request->session()->flash('message', 'You are already in the group!');
            $request->session()->flash('alert-class', 'alert-danger');
        } else {
            Auth::user()->groups()->syncWithoutDetaching($group);
            $request->session()->flash('message', 'You have joined the group succesfully!');
        }
```
and frontend code:
```php
      @if(Session::has('message'))
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="alert {{ Session::get('alert-class', 'alert-success') }} alert-dismissable">
              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
              @if(Session::get('alert-class') === 'alert-danger')
                <strong>Error: </strong>
              @else
                <strong>Success: </strong>
              @endif
              {{ Session::get('message') }}
            </div>
          </div>
        </div>
      @endif
```

Can be used anywhere.

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/135)
<!-- Reviewable:end -->

{% endraw %}


### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/135#issuecomment-303967382) on: **5/25/2017**

{% raw %}




Reviewed 24 of 25 files at r1.
Review status: 24 of 25 files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/135)*
<!-- Sent from Reviewable.io -->

{% endraw %}
