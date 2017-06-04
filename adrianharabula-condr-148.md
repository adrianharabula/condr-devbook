# [Cuprins documentaţie](https://github.com/adrianharabula/condr/issues/148)

> state: **open** opened by: **adrianharabula** on: **5/28/2017**

Un exemplu complet a ceea ce trebuie noi să avem la sfârşit este un proiect din anii trecuţi ce se află [aici](http://students.info.uaic.ro/~dordorut.calcai/), de pe vremea când corecta buraga priectele.

Documentaţia noastră va avea de asemenea 2 părţi (2 documente diferite):
## Manualul utilizatorului
exemplu live [aici](http://students.info.uaic.ro/~dordorut.calcai/BooM_user_manual.pdf), documentul nostru [aici](https://docs.google.com/document/d/1-VdK5yVuo_foDSJQWXrnwwmNm3sMfgaGezPBLMx7D2Q/edit?usp&#x3D;sharing)
- luăm fiecare pagină în parte şi o povestim
- povestim userului normal aplicaţia

## Manualul programatorului / dezvoltatorului
exemplu live [aici](http://students.info.uaic.ro/~dordorut.calcai/Bookmark_manager.pdf), documentul nostru [aici](https://docs.google.com/document/d/1o9AnTvko5NSNbTVo24E3Fbt7IS2qEWFbfUTndgktVdU/edit)

### 1. Explicarea bazei de date
Acestea subliniate vor rămâne neschimbate 100% pe perioada dezvoltării proiectului.
![image](https://cloud.githubusercontent.com/assets/2271038/26527472/61e73f4e-439d-11e7-9e43-639b9bcafbd6.png)

### Tabela categories
![image](https://cloud.githubusercontent.com/assets/2271038/26527484/87ec63cc-439d-11e7-89bd-4aead50a0ba4.png)

### Tabela companies
![image](https://cloud.githubusercontent.com/assets/2271038/26527493/a8188d60-439d-11e7-8c40-35caabf7a4bb.png)

### Tabelele condrgroup şi condrgroup_user (relaţie many to many între ele)
![image](https://cloud.githubusercontent.com/assets/2271038/26527499/c10a10d2-439d-11e7-9b3d-7dc5ef4edf38.png)
Detalii aici https://laravel.com/docs/5.4/eloquent-relationships#many-to-many

### Tabelele products şi product_user (relaţie many to many între ele)
![image](https://cloud.githubusercontent.com/assets/2271038/26527503/dd110d8a-439d-11e7-8f57-4e653f540ba0.png)
Detalii aici https://laravel.com/docs/5.4/eloquent-relationships#many-to-many

### Tabela users
![image](https://cloud.githubusercontent.com/assets/2271038/26527506/f3065e9c-439d-11e7-9b2f-64c2b6dbdb43.png)
 
### Tabela search analitics
![image](https://cloud.githubusercontent.com/assets/2271038/26527509/0b41c0aa-439e-11e7-8958-b375710514f9.png)

Aici înregistrăm toate keywords căutate şi facem statistici după ele
![image](https://cloud.githubusercontent.com/assets/2271038/26527512/1a1fc8ce-439e-11e7-89c8-578a77b889da.png)

### 2. Detalii de implementare

### 3. Server related stuff

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/148#issuecomment-304503299) on: **5/28/2017**

Aici aveţi bibliografie pentru cum să faceţi documentaţie bine:
* nişte slideuri succinte şi foarte bune http://www.writethedocs.org/_downloads/docs_talk.pdf
* documentaţie, ce este ea şi la ce foloseşte explicată pe îndelete http://www.writethedocs.org/guide/writing/beginners-guide-to-docs/
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/148#issuecomment-304504503) on: **5/28/2017**

Plus [Readme driven development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html)
