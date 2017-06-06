## Database query relationships

### Query a product

```bash
>>> $p=\App\Product::find(1)                                                                                         
=> App\Product {#777                                                                                                 
     id: "1",                                                                                                        
     ean_code: "0693804125002",                                                                                      
     name: "Cloud Star Buddy Biscuits Dog Treats, Peanut Butter Madness, 16-Ounce Boxes (Pack of 6)",                
     brand: "Cloud Star",                                                                                            
     description: "Cloud Star (R) Original Buddy Biscuits Cloud Star (R) Original Buddy Biscuits are as wholesome as 
they are delicious and are guaranteed to have your best friend begging for more. Made with all natural ingredients, t
hese delectable crunchy dog biscuits are perfect for dogs with food allergies and sensitivities. Original Buddy Biscu
its contain no artificial colors, flavors, or preservatives and are free of corn, yeast sugar, salt, and soy. Packed 
with pure simple wholesome ingredients, Original Buddy Biscuit...",                                                  
     image_url: "http://pics2.ds-static.com/prodimg/73062/300.JPG",                                                  
     views: "0",                                                                                                     
     lowest_recorded_price: "2.25",                                                                                  
     category_id: "9",                                                                                               
     created_at: "2017-06-03 14:55:39",                                                                              
     updated_at: "2017-06-03 14:55:39",                                                                              
   }
```

# Query product characteristics

```bash
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

# Query saved for later products

```bash
>>> $u = \App\User::find(1)
=> App\User {#770
     id: "1",
     name: "Adrian Harabulă",
     email: "adrian.harabula@gmail.com",
     created_at: null,
     updated_at: null,
   }
>>> $u->products
=> Illuminate\Database\Eloquent\Collection {#798
     all: [
       App\Product {#796
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
         pivot: Illuminate\Database\Eloquent\Relations\Pivot {#792
           user_id: "1",
           product_id: "1",
         },
       },
     ],
   }

```
