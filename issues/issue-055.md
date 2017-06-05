# [\#55 De creat migrările pentru toată baza de date](https://github.com/adrianharabula/condr/issues/55)

> state: **closed** opened by: **adrianharabula** on: **5/6/2017**

{% raw %}
Pe lângă scripturile plsql făcute până acum următorul pas este să creăm baza de date din migrări. Dacă codul îl versionăm, de ce să nu facem la fel și cu baza de date? Acest cod poate fi folosit și pentru a crea tabelele în altă baze de date, fără să schimbăm nimic. Practic putem trece pe MySQL în secunde, fără să modificăm nicio linie de cod. Probabil nu vom face asta, dar cine știe.

- [x] caracteristics
- [x] category
- [x] company
- [ ] groups
- [x] products
- [ ] product_caracteristics
- [x] users
- [ ] user_caracteristics
- [ ] user_groups
{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/55#issuecomment-300082970) on: **5/9/2017**

{% raw %}
Se poate considera terminat. Toate migrările sunt disponibile [aici](https://github.com/adrianharabula/condr/tree/master/app/database/migrations).
{% endraw %}
