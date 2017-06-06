## How we make AJAX calls

### CSRF Token for AJAX queries
```js
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
```

### The controller
We use a separate AjaxController for AJAX operations:
```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;
use \App\Characteristic as Characteristic;
use \App\Product as Product;

class AjaxController extends Controller
{
    public function voteCharacteristic(Request $request)
    {
      $characteristic_id = $request->characteristic_id;
      $characterizable_id = $request->characterizable_id;
      $characterizable_type = $request->characterizable_type;

      $characterizable = new $characterizable_type();
      $characterizable = $characterizable::find($characterizable_id);

      $votes = $characterizable->characteristics()->where('characteristic_id', '=', $characteristic_id)->first()->pivot;
      $votes->cvotes = $votes->cvotes + 1;
      $votes->save();
    }
}

```

### The frontend
The AJAX call button
```html
<button id="vote_characteristic" class="btn btn-danger btn-circle" data-toggle="tooltip"
        title="Add me to your preferences!"><span class="fa fa-heart"></span></button> {{ $characteristic->name }} :
    {{ $characteristic->pivot->cvalue }} (<span id="vote_characteristic_value_{{$characteristic->id}}">{{ $characteristic->pivot->cvotes }}</span> votes)<br>
```

The javascript code for button
```js
    $(document).ready(function(){
      $("#vote_characteristic").click(function(){
          $.post("/ajax/vote_characteristic",
           {
            characteristic_id: "{{$characteristic->id}}",
            characterizable_id: "{{$product->id}}",
            characterizable_type: "{{addslashes(get_class($product))}}"
           },
           function(){
              // alert("You have just voted this preference!");
              document.getElementById('vote_characteristic_value_{{$characteristic->id}}').innerHTML = {{$characteristic->pivot->cvotes}} + 1;
          });
      });
    });
```
