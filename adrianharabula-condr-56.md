# [Creare scripturi database seeder pentru generare de date aleatoare și relevante](https://github.com/adrianharabula/condr/issues/56)

> state: **open** opened by: **adrianharabula** on: **5/7/2017**

Because generatorul curent e făcut ca la n00bi!

Pentru generare de chestii aleatoare folosim de exemplu:
&#x60;&#x60;&#x60;
        DB::table(&#x27;users&#x27;)-&gt;insert([
            &#x27;name&#x27; &#x3D;&gt; str_random(10),
            &#x27;email&#x27; &#x3D;&gt; str_random(10).&#x27;@gmail.com&#x27;,
            &#x27;password&#x27; &#x3D;&gt; bcrypt(&#x27;secret&#x27;),
        ]);
&#x60;&#x60;&#x60;
Dacă vrem să aibă și un sens, atunci folosim faker:
&#x60;&#x60;&#x60;
$factory-&gt;define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        &#x27;name&#x27; &#x3D;&gt; $faker-&gt;name,
        &#x27;email&#x27; &#x3D;&gt; $faker-&gt;unique()-&gt;safeEmail,
        &#x27;password&#x27; &#x3D;&gt; $password ?: $password &#x3D; bcrypt(&#x27;secret&#x27;),
        &#x27;remember_token&#x27; &#x3D;&gt; str_random(10),
    ];
});
&#x60;&#x60;&#x60;

Numele, emailurile generate nu numai că vor fi aleatoare dar vor avea și sens.

Documentația pentru toată chestia asta este aici https://laravel.com/docs/5.4/seeding

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/56#issuecomment-300746599) on: **5/11/2017**

Avem următoarele:

- [x] [UsersTableSeeder](https://github.com/adrianharabula/condr/blob/master/app/database/seeds/UsersTableSeeder.php)
- [x] [CondrGroupsTableSeeder](https://github.com/adrianharabula/condr/blob/master/app/database/seeds/CondrgroupUserTableSeeder.php)
- [x] [CategoriesTableSeeder](https://github.com/adrianharabula/condr/blob/master/app/database/seeds/CategoriesTableSeeder.php)
- [x] [CondrgroupUserTableSeeder](https://github.com/adrianharabula/condr/blob/master/app/database/seeds/CondrgroupUserTableSeeder.php)
- [x] CompaniesTableSeeder
- [ ] ProductsTableSeeder
- [ ] ProductUserTableSeeder
- [ ] CharacteristicsTableSeeder
- [ ] CharacterizableTableSeeder
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/56#issuecomment-300748397) on: **5/11/2017**

Adițional avem nevoie și de niște factories pentru următoarele:

- [x] [UserFactory](https://github.com/adrianharabula/condr/blob/master/app/database/factories/UserFactory.php)
- [ ] ProductFactory
- [x] CompanyFactory
- [ ] CharacteristicFactory
- [ ] CharacterizableFactory
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/56#issuecomment-300750213) on: **5/11/2017**

Studiu de caz, care e diferența între clasa seeder și clasa factory https://laracasts.com/discuss/channels/laravel/what-is-the-difference-between-model-factory-and-a-db-seeder
