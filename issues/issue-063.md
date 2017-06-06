# [\#63 Generare schema UML a bazei de date](https://github.com/adrianharabula/condr/issues/63)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

{% raw %}
Momentan avem [asta](https://github.com/adrianharabula/condr/blob/master/docs/00_database_sketch_v2.png) dar lasă de dorit și nu mai reflectă ultimele schimbări din baza de date. Tre refăcut tot frumos.
- [x] plus descrie noile modificări cât mai succint posibil

[Relational_vechi.pdf](https://github.com/adrianharabula/condr/files/981630/Relational_vechi.pdf)
[Relational_new_modifications.pdf](https://github.com/adrianharabula/condr/files/981631/Relational_new_modifications.pdf)

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/63#issuecomment-299730201) on: **5/7/2017**

{% raw %}
Avem așa:

- tabela category tre să fie denumită categories, numele de tabele sunt la plural întotdeauna
- la fel tabela company
- la tabele, există câmpul __id__ simplu de regulă, __numetabela_id__ nu e standard, deși e mai sugestiv; pentru laravel de exemplu înseamnă configurare adițională în care trebuie să specifici numele câmpului id cu `$primaryKey` property
- nicio tabelă nu are autoincrement pe id WTF!!!!????
- în tabela user_groups nu e legat user_id de id-ul userul cu foreign key
- tabela cu numele groups nu e denumită corect, groups e reserved keyword în oracle, a se evita pe cât posibil denumirea groups
- nu există consistență în denumiri, de exemplu tabela user_groups, corect s-ar denumi group_user, ambii termeni trebuie să fie la singular, iar ordinea lor este cea alfabetică (g e înaintea u în dex)
- multe multe alte probleme legate de structură care vor crea panică și probleme mai târziu
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/63#issuecomment-300087478) on: **5/9/2017**

{% raw %}
Avem ultima versiune aici [Relational_9mai_latest.pdf](https://github.com/adrianharabula/condr/files/985867/Relational_9mai_latest.pdf)

{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/63#issuecomment-306458045) on: **6/6/2017**

{% raw %}
Ultima versiune aici. 
[Relational_1.pdf](https://github.com/adrianharabula/condr/files/1054784/Relational_1.pdf)

{% endraw %}
