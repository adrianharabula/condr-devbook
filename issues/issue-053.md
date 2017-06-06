# [\#53 Bug pagina mydetails atunci când ai mai mulți useri cu același username](https://github.com/adrianharabula/condr/issues/53)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

{% raw %}
Nu vom face username unic așa cum am discutat azi pentru că nu așa se face. Vom modifica codul după structura existentă, nu vom modifica structura după codul nostru.

Ca să fixăm aplicația veche, loginul se va face după email, care este unic și nu după username, care nu e unic și strică chestiuni prin cod când ai 2 useri cu numele Alina să zicem.

Oricum e buggy loginul, pentru că fiecare poate să își seteze sesiunea cu ce email/username vrea și așa se loghează fiecare fără să fie necesară parola. Pentru a evita aceste probleme, folosim modulul de autentificare de la laravel care ne scapă de astfel de probleme fără ca nici măcar să ne batem capul.

Nu mă voi ocupa de asta pentru că nu e o prioritate.
{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/53#issuecomment-300925274) on: **5/12/2017**

{% raw %}
Irelevant, not enough time to fix broken old code.
{% endraw %}
