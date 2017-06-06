## Many To Many Polymorphic Relationship

A product/user/group can have one or more characteristics. Same characteristic can be attached to any of the 3 types above. Values can be different but the characteristic is the same.

### Example:

A product has characteristic _color_ with value __red__. A user can have the same _color_ characteristic linked to his account meaning that he has a preferences for color _green_. The characteristic _color_ is the same for both entities, but they have different values. 


```
products
    id - integer
    name - string

users
    id - integer
    name - string

groups
    id - integer
    name - string

characteristics
    id - integer
    name - string

characterizable
    characteristic_id - integer
    characterizable_id - integer
    characterizable_type - string
    cvalue - string
    cvotes - integer
```

### More examples

This will get us all characteristics for a product
```bash
>>> $p = \App\Product::find(1)
>>> $p->characteristics
=> Illuminate\Database\Eloquent\Collection {#775
     all: [
       App\Characteristic {#781
         id: "1",
         name: "color",
         created_at: "2017-06-03 14:55:39",
         updated_at: "2017-06-03 14:55:39",
         pivot: Illuminate\Database\Eloquent\Relations\MorphPivot {#776
           characterizable_id: "1",
           characteristic_id: "1",
           cvalue: "Peanut Butter",
           cvotes: "3",
         },
       },
       App\Characteristic {#785
         id: "2",
         name: "size",
         created_at: "2017-06-03 14:55:39",
         updated_at: "2017-06-03 14:55:39",
         pivot: Illuminate\Database\Eloquent\Relations\MorphPivot {#782
           characterizable_id: "1",
           characteristic_id: "2",
           cvalue: "16-oz box",
           cvotes: "7",
         },
       },
       App\Characteristic {#786
         id: "3",
         name: "dimension",
         created_at: "2017-06-03 14:55:39",
         updated_at: "2017-06-03 14:55:39",
         pivot: Illuminate\Database\Eloquent\Relations\MorphPivot {#774
           characterizable_id: "1",
           characteristic_id: "3",
           cvalue: "2 X 6.5 X 9 inches",
           cvotes: "0",
         },
       },
       App\Characteristic {#787
         id: "4",
         name: "weight",
         created_at: "2017-06-03 14:55:39",
         updated_at: "2017-06-03 14:55:39",
         pivot: Illuminate\Database\Eloquent\Relations\MorphPivot {#777
           characterizable_id: "1",
           characteristic_id: "4",
           cvalue: "1 Pounds",
           cvotes: "4",
         },
       },
     ],
   }
```

To get just one

```bash
>>> $p->characteristics[0]
=> App\Characteristic {#781
     id: "1",
     name: "color",
     created_at: "2017-06-03 14:55:39",
     updated_at: "2017-06-03 14:55:39",
     pivot: Illuminate\Database\Eloquent\Relations\MorphPivot {#776
       characterizable_id: "1",
       characteristic_id: "1",
       cvalue: "Peanut Butter",
       cvotes: "3",
     },
   }
```

To get characteristic name, value and votes

```bash
>>> 'Characteristic `' . $p->characteristics[0]->name . '` with value `' . $p->characteristics[0]->pivot->cvalue . '` has ' . $p->characteristics[0]->pivot->cvotes . ' votes.'
=> "Characteristic `color` with value `Peanut Butter` has 3 votes."

```

To attach a characteristic to a entity

```bash
>>> $u = \App\User::find(1)
=> App\User {#770
     id: "1",
     name: "Adrian Harabulă",
     email: "adrian.harabula@gmail.com",
     created_at: null,
     updated_at: null,
   }
>>> $p=\App\Product::find(1);
=> App\Product {#771
     id: "1",
     ean_code: "0693804125002",
     name: "Cloud Star Buddy Biscuits Dog Treats, Peanut Butter Madness, 16-Ounce Boxes (Pack of 6)",
     brand: "Cloud Star",
     description: "Cloud Star (R) Original Buddy Biscuits Cloud Star (R) Original Buddy Biscuits are as wholesome as they are delicious and are guaranteed to have your best friend begging for more. Made with all natural ingredients, these delectable crunchy dog biscuits are perfect for dogs with food allergies and sensitivities. Original Buddy Biscuits contain no artificial colors, flavors, or preservatives and are free of corn, yeast sugar, salt, and soy. Packed with pure simple wholesome ingredients, Original Buddy Biscuit...",
     image_url: "http://pics2.ds-static.com/prodimg/73062/300.JPG",
     views: "0",
     lowest_recorded_price: "2.25",
     category_id: "9",
     created_at: "2017-06-03 14:55:39",
     updated_at: "2017-06-03 14:55:39",
   }
>>> $p->characteristics[0]
=> App\Characteristic {#776
     id: "1",
     name: "color",
     created_at: "2017-06-03 14:55:39",
     updated_at: "2017-06-03 14:55:39",
     pivot: Illuminate\Database\Eloquent\Relations\MorphPivot {#775
       characterizable_id: "1",
       characteristic_id: "1",
       cvalue: "Peanut Butter",
       cvotes: "3",
     },
   }
```
To attach previously characteristic color to user

```bash
>>> $u->characteristics()->attach($p->characteristics[0], ['cvalue' => 'red'])
=> null
>>> $u->characteristics
=> Illuminate\Database\Eloquent\Collection {#764
     all: [
       App\Characteristic {#791
         id: "1",
         name: "color",
         created_at: "2017-06-03 14:55:39",
         updated_at: "2017-06-03 14:55:39",
         pivot: Illuminate\Database\Eloquent\Relations\MorphPivot {#778
           characterizable_id: "1",
           characteristic_id: "1",
           cvalue: "red",
           cvotes: "0",
         },
       },
     ],
   }
```
