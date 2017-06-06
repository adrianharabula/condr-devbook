# [\#56 Creare scripturi database seeder pentru generare de date aleatoare și relevante](https://github.com/adrianharabula/condr/issues/56)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

{% raw %}
Because generatorul curent e făcut ca la n00bi!

Pentru generare de chestii aleatoare folosim de exemplu:
```
        DB::table('users')->insert([
            'name' => str_random(10),
            'email' => str_random(10).'@gmail.com',
            'password' => bcrypt('secret'),
        ]);
```
Dacă vrem să aibă și un sens, atunci folosim faker:
```
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});
```

Numele, emailurile generate nu numai că vor fi aleatoare dar vor avea și sens.

Documentația pentru toată chestia asta este aici https://laravel.com/docs/5.4/seeding
{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/56#issuecomment-300746599) on: **5/11/2017**

{% raw %}
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
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/56#issuecomment-300748397) on: **5/11/2017**

{% raw %}
Adițional avem nevoie și de niște factories pentru următoarele:

- [x] [UserFactory](https://github.com/adrianharabula/condr/blob/master/app/database/factories/UserFactory.php)
- [ ] ProductFactory
- [x] CompanyFactory
- [ ] CharacteristicFactory
- [ ] CharacterizableFactory
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/56#issuecomment-300750213) on: **5/11/2017**

{% raw %}
Studiu de caz, care e diferența între clasa seeder și clasa factory https://laracasts.com/discuss/channels/laravel/what-is-the-difference-between-model-factory-and-a-db-seeder
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/56#issuecomment-306458172) on: **6/6/2017**

{% raw %}
partial abandonat, pentru ca folosim #149 
{% endraw %}
