## Products routes

| VERB | URI           | ACTION                             | ROUTE                 |
|------|---------------|------------------------------------|-----------------------|
| GET  | /products     | ProductsController@getProductsList | products.listproducts |
| GET  | /product/{id} | ProductsController@getProduct      | products.singleview   |

## Groups routes

| VERB | URI           | ACTION                             | ROUTE                 |
|------|---------------|------------------------------------|-----------------------|
| GET  | /groups       | GroupsController@getGroupsList     | groups.listgroups     |
| GET  | /group/{id}   | GroupsController@getGroup          | groups.singleview     |

## My account routes

| VERB | URI                         | ACTION                                       | ROUTE                      |
|------|-----------------------------|----------------------------------------------|----------------------------|
| GET  | /my/account                 | User\UserSettingsController@index            | my.account.index                |
| GET  | /my/account/change-password | User\UserSettingsController@getEditPassword  | my.account.change-password |
| POST | /my/account/change-password | User\UserSettingsController@postEditPassword | my.account.change-password |

### Favored products routes

| VERB   | URI                     | ACTION                                                | ROUTE              |
|--------|-------------------------|-------------------------------------------------------|--------------------|
| GET    | /my/products            | User\UserProductsController@getFavoriteProducts       | my.products.listproducts        |
| POST   | /my/product/{id}/add    | User\UserProductsController@addFavoriteProduct | my.product.add |
| DELETE | /my/product/{id}/delete | User\UserProductsController@deleteFavoriteProduct | my.product.delete |

### Groups routes

| VERB   | URI                     | ACTION                                                | ROUTE              |
|--------|-------------------------|-------------------------------------------------------|--------------------|
| GET    | /my/groups              | Group\GroupController@getFavoriteGroups       | my.groups.listgroups       |
| POST   | /my/group/{id}/add      | Group\GroupController@addFavoriteGroup        | my.group.add |
| DELETE | /my/group/{id}/delete   | Group\GroupController@deleteFavoriteGroup     | my.group.delete |

