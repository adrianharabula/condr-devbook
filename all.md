# [Meeting #1 - Intro aplicaţie, discuţie use-case-uri, idei generale](https://github.com/adrianharabula/condr/issues/1)

> state: **closed** opened by: **adrianharabula** on: **3/13/2017**

## Locaţie
C2 @ 6.00-8.30pm

## Rezumat
Ne-am văzut 2h, am dezbătut idei generale despre proiect. Pentru prima întâlnire a membrilor, acest task a fost atins cu succes. Toate încep de undeva iar această întâlnire a fost startul nostru.

## Realizate
Cel mai important, am vorbit despre ce a înţeles fiecare din aplicaţie şi am pus cap la cap idei începând să ne facem o idee despre ce am vrea să realizăm.

Ca un mic bonus am început şi discuţia legată de baza de date, ajungând să fim de acord cu 3 tabele strict necesare pentru aplicaţie: __users__, __products__ şi __categories__.

## De îmbunătăţit
Câteva sugestii, de luat în vedere în discuţiile viitoare:

 * să ne bucurăm de ceea ce am realizat deja, să ne facem mai puţin griji despre ceea ce urmează, nu trebuie să facem tot azi
 * după ce discutăm cu toţii şi ne punem de acord, cineva va trebui să fie responsabil pentru o decizie ce va fi luată în cadrul echipe.
 * probabil vom stabili câteva arii pentru proiect şi fiecare membru din echipa îşi va alege câteva arii de care răspunde
 * de exemplu după ce discutăm baza de date şi punem cap la cap, responsabilul cu baza de date va lua o decizie, decizia lui va fi asumată, adică trebuie să ştie foarte bine ce face şi cum afectează pe fiecare membru din echipă şi tot proiectul în ansamblu, să ştie foarte bine consecinţele deciziei, pentru că el va răspunde pentru tot ceea ce se va întâmpla cu baza de date şi cu membrii echipei care folosesc acea bază de date de acum încolo.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/1#issuecomment-286394716) on: **3/14/2017**

Resurse adiţionale:

 * relaţii în baza de date pe scurt https://www.ntu.edu.sg/home/ehchua/programming/sql/relational_database_design.html
 * soluţia cu stocare caracteristici în câmp json sugerată de @Madalina-Buza https://mattstauffer.co/blog/new-json-column-where-and-update-syntax-in-laravel-5-3
 * relaţii în baza de date şi cum arată ele în ORM https://novaframework.com/documentation/v3/database-orm
 * documentaţie oficială relaţii Eloquent https://laravel.com/docs/5.4/eloquent-relationships

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/1#issuecomment-286678830) on: **3/15/2017**

Alte resurse:

 * exemplu implementare relaţie many to many în 2 variante, cu cheie primară separată, sau cu composite keys http://www.codejava.net/frameworks/hibernate/hibernate-many-to-many-association-with-extra-columns-in-join-table-example
* oracle data types https://www.techonthenet.com/oracle/datatypes.php
# [Meeting #2 - Baza de date, discuţie, setare strategie, use-case-uri](https://github.com/adrianharabula/condr/issues/2)

> state: **closed** opened by: **adrianharabula** on: **3/15/2017**

## Locaţie
C405 @ 4.00-6.00pm, laboratow tw cu Andrei Panu

## Rezumat
Am discutat cu dl. Andrei Panu despre aplicaţie pentru a ne clarifica ideile, din păcate doar eu şi Elisa am putut rămâne la discuţie.

În scurt timp am reuşit să finalizăm baza de date, Elisa explicând mai departe şi celorlalţi membri ceea ce am discutat.

## Realizate
Designul bazei de date, complet, utilizabil. Se poate vedea aici: https://github.com/adrianharabula/condr/blob/master/database_design/modelare_bd.pdf

## De îmbunătăţit

 * sincronizarea în grup

### Comments

# [Decizie disponibilitate publică a codului pe perioada dezvoltării lui](https://github.com/adrianharabula/condr/issues/3)

> state: **closed** opened by: **adrianharabula** on: **3/15/2017**

Putem face repoul privat până la prezentare/evaluare, iar după îl putem pune înapoi public, pentru a îl putea folosi şi în alte scopuri. (interviuri, etc)

### Comments

# [Decizie sub ce licenţă să fie codul scris](https://github.com/adrianharabula/condr/issues/4)

> state: **closed** opened by: **adrianharabula** on: **3/15/2017**

Dintre mai multe opţiuni am ales licenţa MIT.

Este o licenţă liberă, permite modificarea codului deja existent, comercializarea lui, distribuirea, etc. 

Este aceeaşi licenţă sub care sunt publicate sursele frameworkului Laravel.

### Comments

# [Proiectare diagrama UML](https://github.com/adrianharabula/condr/issues/5)

> state: **closed** opened by: **adrianharabula** on: **3/15/2017**



### Comments

# [Descriere bd - specificaţii complete asupra ce trebuie să facă proiectul](https://github.com/adrianharabula/condr/issues/6)

> state: **closed** opened by: **adrianharabula** on: **3/15/2017**



### Comments

# [Script creeare tabele](https://github.com/adrianharabula/condr/issues/7)

> state: **closed** opened by: **adrianharabula** on: **3/15/2017**



### Comments

# [Script umplere tabele cu date aleatoare](https://github.com/adrianharabula/condr/issues/8)

> state: **closed** opened by: **adrianharabula** on: **3/15/2017**



### Comments

# [Script initializare baza de date](https://github.com/adrianharabula/condr/issues/9)

> state: **closed** opened by: **adrianharabula** on: **4/11/2017**

Ne-am putea inspira din scriptul create_user.sql de la lab1 psgbd
```
DROP TABLESPACE aplicatie INCLUDING CONTENTS CASCADE CONSTRAINTS; 

CREATE TABLESPACE aplicatie
  DATAFILE 'tbs_perm_0001.dat' 
    SIZE 500M
    REUSE
    AUTOEXTEND ON NEXT 50M MAXSIZE 2000M
/
    
CREATE TEMPORARY TABLESPACE aplicatie
  TEMPFILE 'tbs_temp_0001.dbf'
    SIZE 5M
    AUTOEXTEND ON
/    

CREATE UNDO TABLESPACE aplicatie
  DATAFILE 'tbs_undo_0001.dbf'
    SIZE 5M 
    AUTOEXTEND ON
  RETENTION GUARANTEE
/


drop user student cascade;
create user student identified by STUDENT;
alter user student default tablespace aplicatie quota 1990M on aplicatie;

grant connect to student;
grant all privileges to student;

```

### Comments

# [Meeting #3 - Instalare git la fiecare membru din echipă, configurare keys de conectare, testare comenzi pull/push, git add, git commit, prezentare repo](https://github.com/adrianharabula/condr/issues/10)

> state: **closed** opened by: **adrianharabula** on: **4/16/2017**

Pentru operaţiunile de bază, cum ar fi clone, pull, commituri simple am folosit git din terminal, însă după scurtă vreme ne-am dat seama că mai practic ar fi pentru toată lumea să folosim un client gui pentru git, preferabil cross platform, care să meargă la toţi la fel. Am ales [gitkraken](https://www.gitkraken.com/).

Permite:

- vizualizarea grafică a schimbărilor din repo
- selectarea fişierelor de pus pe stage
- disponibil pentru win/linux/mac


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/10#issuecomment-295164549) on: **4/19/2017**

@elis47 pune-ți și tu [ăsta](https://www.gitkraken.com/), o să fie nevoie.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/10#issuecomment-295732801) on: **4/20/2017**

Mulțam @elis47, se poate închide acum.
# [Instanţiere servere, versiuni instalate, configuri](https://github.com/adrianharabula/condr/issues/11)

> state: **closed** opened by: **adrianharabula** on: **4/16/2017**

Avem până acum serverul setat, cu următoarele versiuni:

- docker 17.04.0-ce
- Oracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production
- php 7.1.3 with [daopstack](https://github.com/adrianharabula/daopstack)

Următoarele linkuri sunt disponibile:

- [condr.me](http://condr.me) - link aplicaţia principală
- [api.condr.me](http://api.condr.me) - link api
- [ii.condr.me](http://ii.condr.me) - cod pentru etapa2 psgbd

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/11#issuecomment-295148932) on: **4/19/2017**

Problema #14 legată de instanța curentă a serverului.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/11#issuecomment-295162536) on: **4/19/2017**

Vom muta aplicația pe un server separat. Avem la dispoziție următoarele mașini:

Hicoria VPS (8$ / lună, plata săptămânal)
```
Basic information
cpu CPU: 2x XEON E7 ram RAM: 4096 MB DDR3, 1333 - 1600 MHz
hdd SSD: 35 GB SAS SATA3 ipv4 IPv4: 1x
backupHdd HDD for backups: 0 GB
Ubuntu 16.04 x64
```

Linode VPS (5$ / lună)
```
Linode 1024
20GB Storage
1 CPU Core
1TB XFER
$5/mo or (.0075/hr)
Ubuntu 16.04 LTS x64
```

Digitalocean VPS (5$ / lună)
```
512 MB Memory / 20 GB Disk + 14 GB / FRA1 - Ubuntu 16.04.1 x64
```
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/11#issuecomment-295866423) on: **4/20/2017**

Rulează pe toate cele 3 servere aplicația, mai rămâne să aleg un server dintre hicoria și linode. Hicoria are 4gb de ram șl 2 coreuri, linode are timp de răspuns mai mic cu vreo 20 ms.

Cred că va rămâne hicoria. Momentan condr.me e servit de pe hicoria.
# [Scris script webhook pentru sincronizat codul de pe server cu cel de pe repo](https://github.com/adrianharabula/condr/issues/12)

> state: **closed** opened by: **adrianharabula** on: **4/16/2017**

## Ce vrem?
Când se face push pe git, codul de pe server (condr.me, api.condr.me) se actualizează şi el şi se poate accesa online ultima versiune.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/12#issuecomment-294474792) on: **4/17/2017**

it works!
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/12#issuecomment-294899808) on: **4/18/2017**

merge dar nu poate fi scalat. la mutarea serverului, trebuie regândită soluția, lucrăm la #15 pentru asta 
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/12#issuecomment-295146934) on: **4/19/2017**

closed, conversation continues to #15 
# [Practici recomandate pentru cod bun în php http://www.php-fig.org/psr/psr-1/](https://github.com/adrianharabula/condr/issues/13)

> state: **closed** opened by: **adrianharabula** on: **4/17/2017**

Ca să scriem cod frumos, putem urmări recomandări legate de scrierea codului PHP

This section of the standard comprises what should be considered the standard coding elements that are required to ensure a high level of technical interoperability between shared PHP code.

Overview

- Files MUST use only <?php and <?= tags.
- Files MUST use only UTF-8 without BOM for PHP code.
- Files SHOULD either declare symbols (classes, functions, constants, etc.) or cause side-effects (e.g. generate output, change .ini settings, etc.) but SHOULD NOT do both.
- Namespaces and classes MUST follow an “autoloading” PSR: [PSR-0, PSR-4].
- Class names MUST be declared in StudlyCaps.
- Class constants MUST be declared in all upper case with underscore separators.
- Method names MUST be declared in camelCase.

Full page [here](http://www.php-fig.org/psr/psr-1/).

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/13#issuecomment-295883239) on: **4/20/2017**

altădată!
# [Problemă cu baza de date, query-uri foarte încete (peste 1s) la conexiunea remote](https://github.com/adrianharabula/condr/issues/14)

> state: **closed** opened by: **adrianharabula** on: **4/18/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/14#issuecomment-295149469) on: **4/19/2017**

Posibil de la server, am recreat alte instanțe cu RAM 1024MB respectiv 4096MB, problema nu mai persistă dacă e suficient RAM pe mașină.
# [Webhook la push, pentru actualizarea codului de pe server](https://github.com/adrianharabula/condr/issues/15)

> state: **closed** opened by: **adrianharabula** on: **4/18/2017**

La push să se actualizeze codul de pe server printr-un webhook. S-ar putea folosi imaginea asta https://hub.docker.com/r/almir/webhook/ Să se aibe în vedere automatizarea acestui proces și pentru alte proiecte, iar sistemul să fie cross-platform, să nu depindă de o distribuție anume.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/15#issuecomment-294966860) on: **4/18/2017**

Imaginea https://hub.docker.com/r/almir/webhook/ nu este suficientă. Trebuie instalat gitul pe ea, poate și bashul.

Avem endpointul, putem rula un script la accesare endpoint. Dar acum să vedem cum facem exact pull prin webhook.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/15#issuecomment-294987792) on: **4/19/2017**

Avem imaginea cu git, bash și ssh instalate https://hub.docker.com/r/adrianharabula/webhook/

La accesarea endpointului se poate face pull pe un repo, mai trebuie integrat în proiect, probabil în docker-compose.yml.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/15#issuecomment-294988870) on: **4/19/2017**

Comanda cu care se rulează webhookul:
```
docker run -d -p 9000:9000 \
-v /root/webhook/hooks.json:/etc/webhook/hooks.json \
-v /root/webhook/pull.sh:/var/scripts/pull.sh \
-v /root/webhook/.ssh:/root/.ssh \
-v /root/condr:/root/condr
--name=webhook adrianharabula/webhook
-verbose -hooks=/etc/webhook/hooks.json -hotreload
```
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/15#issuecomment-295147312) on: **4/19/2017**

gata, pentru instrucțiuni a se citi https://github.com/adrianharabula/webhook
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/15#issuecomment-295151303) on: **4/19/2017**

6c0551bda57f18c243c18e43b3a306e78cf17894
# [Creare tabele, coloane și indecși din baza de date folosind database migrations](https://github.com/adrianharabula/condr/issues/16)

> state: **closed** opened by: **adrianharabula** on: **4/18/2017**

Ceea ce am făcut acum [din script plsql](https://github.com/adrianharabula/condr/blob/21c2abc0d5357fd03805ce627d422d078e12a3d2/database_design/psgbd-etapa1/createTables.sql), vom face folosind migrări. Pagina de interes: https://laravel.com/docs/5.4/migrations

Toate tipurile de date disponibile:
https://laravel.com/docs/5.4/migrations#creating-columns

Pentru indecși:
https://laravel.com/docs/5.4/migrations#creating-indexes





### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/16#issuecomment-295866719) on: **4/20/2017**

Nu e momentul potrivit acum, vom redeschide mai târziu.
# [docker-compose.yml, include script creare bază de date la instanțiere](https://github.com/adrianharabula/condr/issues/17)

> state: **closed** opened by: **adrianharabula** on: **4/18/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/17#issuecomment-295148395) on: **4/19/2017**

Creăm o nouă imagine oracle-Dockerfile:
```
FROM wnameless/oracle-xe-11g

ADD database_design/psgbd-etapa2/SqlScripts/00-init.sql /docker-entrypoint-initdb.d/
ADD database_design/psgbd-etapa2/SqlScripts/01-createTables.sql /docker-entrypoint-initdb.d/
```

Și o folosim în docker-compose.yml:
```
version: '3'

services:
   oracledb:
     build:
       context: .
       dockerfile: oracle-Dockerfile
     image: condr/databse
     restart: always
     ports:
      - "1521:1521"

volumes:

```

Când se va instanția pentru prima dată baza de date, se vor executa scripturile adăugate.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/17#issuecomment-295153911) on: **4/19/2017**

1192493af6e5bfee0e4c6a9b2de307d65763fe24
# [Meeting #4 - Instalare mediu de dezvoltare, conectare la baza de date, scripturi php](https://github.com/adrianharabula/condr/issues/18)

> state: **closed** opened by: **adrianharabula** on: **4/19/2017**

## Perioada
10 aprilie - 16 aprilie, săptămâna 8

## Locaţie
various places, facultate

## Rezumat
Ne-am adunat de-a lungul săptămânii și am lucrat pentru [etapa 2](https://docs.google.com/document/d/12uy4ZYR75ozhd5qxfTq1Zsbx1PtZzHyTk_o4gUQ6pEE/pub) a proiectului.

## Realizate

- instalare mediu de lucru, php oci
- conectarea la baza de date din php
- proceduri, funcții
- apelarea lor din php
- tratarea erorilor

## De îmbunătăţit

 * codul să fie scris modular, ce face unul, să fie integrat ușor în aplicație

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/18#issuecomment-295168859) on: **4/19/2017**

A se vedea #13 Practici recomandate pentru cod bun în php.
# [Meeting #5 - Interfața web](https://github.com/adrianharabula/condr/issues/19)

> state: **closed** opened by: **adrianharabula** on: **4/19/2017**

## Perioada
17 aprilie - 23 aprilie, vacanța de paște

## Locaţie
various places

## Rezumat
19-aprilie; ne-am văzut la el barin, 3h, am configurat virtualhosts, fiecare membru poate lucra direct de pe repo acum. Am stabilit foarte sumar cum sketchuim interfața.
20-aprilie; instalat la toată lumea virtualhosts 

## Realizate
Ne-am descurcat mult mai bine cu organizarea, am reușit să lucrăm remote săptămâna aceasta, fiecare începe să știe ce are de făcut.

## De îmbunătăţit
Mobilizare să lucrăm constant la proiect. Nu e posibil să facem tot în ultima zi. Și nici să lucrăm din an în paște.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/19#issuecomment-297281126) on: **4/26/2017**

Congrats! A fost o săptămână foarte bună :) 👍 Voi face planul săptămâna aceasta pentru următoarea întâlnire, urmând să ne vedem săptămâna viitoare la lucru.
# [Nu se poate recrea baza de date](https://github.com/adrianharabula/condr/issues/20)

> state: **closed** opened by: **adrianharabula** on: **4/19/2017**

Avem [aici](https://github.com/adrianharabula/condr/tree/master/database_design/psgbd-etapa2/SqlScripts) toate scripturile folosite, problema e că nu se pot executa.

Momentan funcționează:
[00-init.sql](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/SqlScripts/00-init.sql)  
[01-createTables.sql](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/SqlScripts/01-createTables.sql)

Nu funcționează:
[plsqlSampleFunctions.sql](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/SqlScripts/plsqlSampleFunctions.sql) - @Madalina-Buza @Elena-Anghelina 
[user_managerPackage.sql](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/SqlScripts/user_managerPackage.sql) - @elis47 


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/20#issuecomment-295732304) on: **4/20/2017**

Rezolvat, avem toate scripturile sql aici https://github.com/adrianharabula/condr/tree/master/Dockerfiles/oracledb/sqlscripts

Cel din urmă, __concat.sql__ reprezintă toate scripturile sql laolaltă pentru a putea fi executate cu ușurință în sql developer. Ele sunt actualizate automat cu pre-commit hook, a se vedea #22 

Dacă mai aveți modificări la baza de date ele se adaugă astfel:

- __08-__...__.sql__
- __09-__...__.sql__
- ...
- __99-__...__.sql__
# [Pagina Update Profile](https://github.com/adrianharabula/condr/issues/21)

> state: **closed** opened by: **adrianharabula** on: **4/19/2017**

- punct de start [pagina register](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/register.php)
- cod pentru completare formular cu datele din baza de date, punct de start [pagina update user fără template](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/App/update_user.php)

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/21#issuecomment-295882779) on: **4/20/2017**

@Elena-Anghelina când ai timp, vrei să te ajut să faci pagina myprofile? Lucrăm cu teamviewer, doar să îl ai instalat, îmi zici când ai timp, nu ar trebui să dureze mult și nici obositor n-ar trebui să fie.
# [Concatenare fișiere sqlscripts la commit într-un singur fișier pentru a putea fi rulat din Sql Developer](https://github.com/adrianharabula/condr/issues/22)

> state: **closed** opened by: **adrianharabula** on: **4/20/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/22#issuecomment-295730368) on: **4/20/2017**

avem __pre-commit__ hook:
```
#!/bin/sh
cd Dockerfiles/oracledb/sqlscripts
cat [0-9][0-9]*.sql > sqlconcat.sql
git add sqlconcat.sql
```
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/22#issuecomment-295736886) on: **4/20/2017**

- [x] Adaugă pre-commit hook în repo pentru concatenare sql
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/22#issuecomment-295802245) on: **4/20/2017**

d860785ee00af733dddce4f7c392d58be60c6dce
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/22#issuecomment-295824567) on: **4/20/2017**

Am găsit o metodă mai bună, folosind webhooks, fac direct __cat__ la toate fișierele sql de pe server și le servesc în browser în plain text. Scripturile sql de pe server sunt actualizate permanent. Link demonstrativ: https://webhooks.condr.me/sqlconcat
# [Opțiune configurare virtualhosts la proiect](https://github.com/adrianharabula/condr/issues/23)

> state: **closed** opened by: **adrianharabula** on: **4/20/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/23#issuecomment-295733603) on: **4/20/2017**

94d0bb28fc27b683739c6f5e1c3eed3092a76c6a
# [Adaugă readme for sql scripts](https://github.com/adrianharabula/condr/issues/24)

> state: **closed** opened by: **adrianharabula** on: **4/20/2017**

Pentru a se folosi baza de date local, se execută __concat.sql__ în sql developer. Să se adauge totuși instrucțiuni pentru asta în readme. https://github.com/adrianharabula/condr/tree/master/Dockerfiles/oracledb/sqlscripts

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/24#issuecomment-295863469) on: **4/20/2017**

sql autogenerat, permanent actualizat este acum disponibil la adresa [webhooks.condr.me/sqlconcat](https://webhooks.condr.me/sqlconcat) Se poate rula în SQL Developer.
# [Tabela groups nu conține rows în consecință pagina groups.php nu merge](https://github.com/adrianharabula/condr/issues/25)

> state: **closed** opened by: **adrianharabula** on: **4/20/2017**

De populat baza de date cu date test:
```
INSERT INTO GROUPS VALUES (1,'FII@Iasi','This is where your sleepless nights begin!');
INSERT INTO GROUPS VALUES (2,'Food Lovers','Life has never tasted so good! Join us for the best recipes!');
INSERT INTO GROUPS VALUES (3,'PSGBD','Never ask a DBA to move furniture, they are known for dropping tables. :)');
INSERT INTO GROUPS VALUES (4,'Web Technologies','I know I am going to heaven, cause I am already in hell! *web dev life*');
INSERT INTO GROUPS VALUES (5,'Software Engeneering','We will teach you how to work in a company!');
INSERT INTO GROUPS VALUES (6,'Cat Lovers','Meow');
INSERT INTO GROUPS VALUES (7,'Science','"Come on, it is not like it is rocket science, they tell me.."');
INSERT INTO GROUPS VALUES (8,'Education','Your future starts today!');
INSERT INTO GROUPS VALUES (9,'Highschool','Well, we still got time to do stupid thing...');
INSERT INTO GROUPS VALUES (10,'Clothes Lovers','');
INSERT INTO GROUPS VALUES (11,'Fashion','');
INSERT INTO GROUPS VALUES (12,'Daily Entertainment','');
INSERT INTO GROUPS VALUES (13,'Story of my life','*Dont even need a description*');
INSERT INTO GROUPS VALUES (14,'IFL Science','');
INSERT INTO GROUPS VALUES (15,'Football Lovers','');
INSERT INTO GROUPS VALUES (16,'PC Garage','');
```

### Comments

# [Adăugare pași instalare](https://github.com/adrianharabula/condr/issues/26)

> state: **closed** opened by: **adrianharabula** on: **4/20/2017**

- [x] copy _database_design/psgbd-etapa2/Config/Config.php.example_ to __Config.php__ and complete with valid database credentials
- [x] copy _Dockerfiles/apache-virtualhosts/100-condr.conf.example_ to __100-condr.conf__ and complete with valid detailș files __100-condr.conf must exist__.
- [x] add git deploy key for webhook; `cp ~/.ssh/id_rsa ~/.ssh/known_hosts Dockerfiles/git-webhook/webhook/.ssh/`


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/26#issuecomment-295870494) on: **4/20/2017**

3a0cbf777ce14495352e87b4f06e04e16a32943e
# [Menu brokes on Contact page when logged in](https://github.com/adrianharabula/condr/issues/27)

> state: **closed** opened by: **elis47** on: **4/20/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/27#issuecomment-296428652) on: **4/23/2017**

E de la [contact.css](https://github.com/adrianharabula/condr/blob/master/database_design/psgbd-etapa2/Assets/css/contact.css#L1-L7). Nu au ce căuta proprietăți pentru __body__ acolo. Pur și simplu ștergi secțiunea dacă vrei să îți meargă.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/27#issuecomment-296519416) on: **4/24/2017**

Fixed!
# [Hook recreare automată a bazei de date la schimbări în sqlscripts](https://github.com/adrianharabula/condr/issues/28)

> state: **closed** opened by: **adrianharabula** on: **4/21/2017**



### Comments

# [Formular dinamic adăugare caracteristici](https://github.com/adrianharabula/condr/issues/29)

> state: **closed** opened by: **adrianharabula** on: **4/21/2017**



### Comments

# ["Let's get started" button from home page goes nowhere when logged](https://github.com/adrianharabula/condr/issues/30)

> state: **closed** opened by: **elis47** on: **4/22/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/30#issuecomment-296348356) on: **4/22/2017**

Dacă ești logat, ce am putea afișa pe prima pagină?
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/30#issuecomment-296426448) on: **4/23/2017**

@elis47  îl putem duce la pagina cu produse, să caute produse, dacă e logat. Ce zici?
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/30#issuecomment-296519539) on: **4/24/2017**

Butonul let's get started duce pe pagina produse. Dacă nu este în regulă se poate redeschide issueul.
# [Contact form doesn't submit unless you fill in phone&email; must have a sending confirmation page](https://github.com/adrianharabula/condr/issues/31)

> state: **closed** opened by: **elis47** on: **4/22/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/31#issuecomment-296520230) on: **4/24/2017**

Facem ca la login :P panel dinacela.
![screen shot 2017-04-24 at 04 31 22-fullpage](https://cloud.githubusercontent.com/assets/2271038/25322072/3f72cc7c-28bc-11e7-8107-9de69b0d26a2.png)

Dar închid totuși issue-ul nu e o prioritate, se poate ana la infinit. Dacă vrei să te ocupi, redeschide-l.

# ["Let's get started" button from About page goes nowhere when logged](https://github.com/adrianharabula/condr/issues/32)

> state: **open** opened by: **elis47** on: **4/22/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/32#issuecomment-296520304) on: **4/24/2017**

Deocamdată about page e pagină statică, nu știu unde am putea trimite utilizatorul, probabil către pagina products.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/32#issuecomment-297283753) on: **4/26/2017**

@Elena-Anghelina @Madalina-Buza @elis47

Am o nelămurire, legată de unde ar trebui să linkuiască aceste 2 butoane.

Butonul de aici duce pe pagina preferences
![image](https://cloud.githubusercontent.com/assets/2271038/25424437/056f0548-2a71-11e7-8973-4390e79e9139.png)

Iar cel de aici duce pe pagina contact.
![image](https://cloud.githubusercontent.com/assets/2271038/25424456/0e5cc50a-2a71-11e7-9e55-f90d240f8fb8.png)

Mă puteți ajuta?

---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/32#issuecomment-300203910) on: **5/9/2017**

amandoua duc la preferences
# [Second + button from Preferences (not wanted section) adds new field at wanted preferences section](https://github.com/adrianharabula/condr/issues/33)

> state: **closed** opened by: **elis47** on: **4/22/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/33#issuecomment-296520372) on: **4/24/2017**

Suntem cam în față cu acest issue :))
# [Template listarea produselor](https://github.com/adrianharabula/condr/issues/34)

> state: **closed** opened by: **adrianharabula** on: **4/22/2017**

Pagina Products nu arată suficient de bine. Când vezi lista nici măcar nu zici că te uiți la produse.
![image](https://cloud.githubusercontent.com/assets/2271038/25301806/ec614dd0-2738-11e7-9b74-6b53246dc54e.png)


Să ne uităm pe buycott de exemplu cum arată listarea de produse.
![image](https://cloud.githubusercontent.com/assets/2271038/25301773/347783f6-2738-11e7-8cc7-d6c99c83b08e.png)
[link listare produse buycott](https://www.buycott.com/brand/170281/cola-cola-upc)

Nu e chiar grozavă, dar măcar așa ceva ne trebuie și nouă.

Trebuie să se vadă clar produsele:
![image](https://cloud.githubusercontent.com/assets/2271038/25301803/c1ac3924-2738-11e7-89f0-632a5669ebc0.png)
[Link demo din imagine](https://v4-alpha.getbootstrap.com/examples/album/). Puteți folosi ce template vreți voi, singura condiție e să arate a listare produse.

Alternativă este și asta:
![image](https://cloud.githubusercontent.com/assets/2271038/25302441/b5ab04bc-2746-11e7-9e50-3bc989313d51.png)
[https://blackrockdigital.github.io/startbootstrap-heroic-features/](https://blackrockdigital.github.io/startbootstrap-heroic-features/)


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/34#issuecomment-296426508) on: **4/23/2017**

Acum avem asta, e un pic mai bine!
![image](https://cloud.githubusercontent.com/assets/2271038/25311864/1ac9f880-2814-11e7-8e5b-5be58b34f67a.png)

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/34#issuecomment-296518976) on: **4/24/2017**

Și mai bine!
![screen shot 2017-04-24 at 06 51 16-fullpage](https://cloud.githubusercontent.com/assets/2271038/25321867/9d4c8664-28ba-11e7-908c-3fa3c54e3d58.png)

Plus varianta pe mobil.
![screen shot 2017-04-24 at 06 26 36-fullpage](https://cloud.githubusercontent.com/assets/2271038/25321855/840ea95c-28ba-11e7-96f3-c2c0dcb6ded9.png)


# [Add clrs.cc color pallete; add more LIFE to template!](https://github.com/adrianharabula/condr/issues/35)

> state: **closed** opened by: **adrianharabula** on: **4/23/2017**

![image](https://cloud.githubusercontent.com/assets/2271038/25311834/8e362a92-2813-11e7-9c6a-1ace291ce767.png)

Colors examples [here](http://clrs.cc/a11y/).

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/35#issuecomment-296436409) on: **4/23/2017**

Updated my profile button. Now is pixel perfect aligned.
![image](https://cloud.githubusercontent.com/assets/2271038/25313094/4eedf686-2830-11e7-83c2-db93302c482f.png)

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/35#issuecomment-296437801) on: **4/23/2017**

navbar menu uses now .navbar-inverse color palette; much better integration

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/35#issuecomment-296449118) on: **4/23/2017**

Acum putem pune culori deocheate :) 
![screen shot 2017-04-23 at 17 42 16-fullpage](https://cloud.githubusercontent.com/assets/2271038/25314522/68a4f764-284e-11e7-9f76-0945920ed3b4.png)

# [Broken scroll on first page](https://github.com/adrianharabula/condr/issues/36)

> state: **closed** opened by: **adrianharabula** on: **4/23/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/36#issuecomment-296448419) on: **4/23/2017**

Fixed by adding more content on first page. 
![screen shot 2017-04-23 at 17 42 16-fullpage](https://cloud.githubusercontent.com/assets/2271038/25314463/f9703576-284c-11e7-84ec-286e9828ccf7.png)

# [Adaugă link sursă template original pe undeva, de văzut unde](https://github.com/adrianharabula/condr/issues/37)

> state: **closed** opened by: **adrianharabula** on: **4/23/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/37#issuecomment-296518817) on: **4/24/2017**

![image](https://cloud.githubusercontent.com/assets/2271038/25321813/47819260-28ba-11e7-8f97-ccb8f9c5ba27.png)

# [Ce limbă să folosim pentru aplicație?](https://github.com/adrianharabula/condr/issues/38)

> state: **closed** opened by: **adrianharabula** on: **4/23/2017**

În ce să scriem textele, în ce limbă să avem în vedere aplicația?

De exemplu ne ajută cu ceva dacă o facem și în engleză?

Puncte forte în română:
- e pe înțelesul tuturor, nu ne e mare lucru să scriem
- pentru ce se face la facultate e mai mult decât suficient

Puncte forte în engleză:
- se poate arăta codul și la interviuri în engleză
- se poate arăta și la oameni care nu sunt din țară :))

### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/38#issuecomment-300204107) on: **5/9/2017**

folosim engleza 
# [Add valid css html icons in footer](https://github.com/adrianharabula/condr/issues/39)

> state: **closed** opened by: **adrianharabula** on: **4/23/2017**



### Comments

# [Operatiune merge, imbinare cod scris de toti membri](https://github.com/adrianharabula/condr/issues/40)

> state: **closed** opened by: **adrianharabula** on: **4/23/2017**

Aici vor fi info legate de operatiune, posibile conflicte vor apărea așa că va trebui sa le evitam dinainte sa apara iar daca apar sa fim pregatiti sa le rezolvam.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/40#issuecomment-296518668) on: **4/24/2017**

Succes!
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/40#issuecomment-296518730) on: **4/24/2017**

7625882bf99701232e42f6307c346cf8b4c5aa14
# [Adaugă cod analitics pe site](https://github.com/adrianharabula/condr/issues/41)

> state: **closed** opened by: **adrianharabula** on: **4/23/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/41#issuecomment-296783155) on: **4/24/2017**

aff878835775d78493196a0451aad8b5fa3dfb55
# [Modifică culoare butoane paginare](https://github.com/adrianharabula/condr/issues/42)

> state: **closed** opened by: **adrianharabula** on: **4/24/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/42#issuecomment-297284645) on: **4/26/2017**

Elena închid issueul cu culoarea la butoanele de paginare, dar dacă vrei îl putem redeschide.
# [Clean messy repo](https://github.com/adrianharabula/condr/issues/43)

> state: **closed** opened by: **adrianharabula** on: **4/26/2017**

Remove and organize files in the repo.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/43#issuecomment-298919029) on: **5/3/2017**

Some cleaning had been done.

- removed api folder, as it's no longer needed, we will use the main app to code the api
- removed frontend parts
- removed jekyll from docs
- many many many other messy stuff
# [Animația de la meniu, să o scoatem, să nu o scoatem?](https://github.com/adrianharabula/condr/issues/44)

> state: **closed** opened by: **adrianharabula** on: **4/26/2017**

Deși e frumos, creează unele buguri. Câteodată dă rateu dacă pagina nu are înălțime suficientă. Pe Edge este și un bug la scroll. (scrollul din bara browserului merge, dar la scroolul din rotița de la mouse nu revine meniul la înălțimea inițială)

Îl putem scoate lejer, pentru a ne putea face viața mai ușoară.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/44#issuecomment-297286399) on: **4/26/2017**

@elis47 @Madalina-Buza @Elena-Anghelina Ce ziceți, scoatem animația?
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/44#issuecomment-299662165) on: **5/6/2017**

rămâne animația, soarta :(
# [Moving out to appear.in for daily conversations and screensharing](https://github.com/adrianharabula/condr/issues/45)

> state: **closed** opened by: **adrianharabula** on: **4/26/2017**

For [IP](https://profs.info.uaic.ro/~adiftene/Scoala/2017/IP/index.htm) we have used [appear.in](http://appear.in) and it seems it worked pretty well for the team. We can use it for our project too.

[Link](https://appear.in/condr) for our room.

Main points are:
- works cross platform pretty well
- it works out of the box, for the screensharing to work you need an easily instalable browser extension
- supports group screensharing
- audio and video communication for team communication
- can be used for pair programming, we can work collaboratively on the same piece of code
- overall a pretty good tool

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/45#issuecomment-297294751) on: **4/26/2017**

@elis47 @Madalina-Buza @Elena-Anghelina 
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/45#issuecomment-300925190) on: **5/12/2017**

We used this lately, worked pretty well as a pair programming tool, the issue can be closed.
# [Remove analytics code from repo; keep analytics code on server](https://github.com/adrianharabula/condr/issues/46)

> state: **closed** opened by: **adrianharabula** on: **4/26/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/46#issuecomment-300915692) on: **5/12/2017**

aa9b968b90d4d436725d4502314535b9d97070a4 File analytics.blade.php is versioned but on the server we use assume-unchanged to update UA Code.

Also for assume-unchanged we used this great alias http://blog.bfitz.us/?p=1811#comment-77785
# [Meeting #6 - Status proiect](https://github.com/adrianharabula/condr/issues/47)

> state: **closed** opened by: **adrianharabula** on: **5/1/2017**

Ne putem vedea marți, după cursul la TW. Cei care au și cursul de pav pot veni de la 16.00. Eu voi fi până la 20.00. Locația: voila cafe.

Mai sunt cam 4 săptămâni de acum înainte:

- 10. 01-07 mai - liber
- 11. 08-14 mai - liber
- 12. 15-12 mai - liber
- 13. 22-28 mai - ocupată cu etapa 3 psgbd
- 14. __29-04 iunie__ probabil aici o să prezentăm.

Săptămâna aceasta vom plănui și vom discuta despre proiect, pașii care urmează.



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/47#issuecomment-298361217) on: **5/1/2017**

Săptămâna 13 vom fi ocupați cu etapa 3 la psgbd. Iar apoi imediat în săptămâna 14 vom prezenta proiectul. Nu mai e mult timp, așa că va trebui să ne descurcăm foarte bine cu puținul timp pe care îl mai avem.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/47#issuecomment-299171478) on: **5/4/2017**

Nu ne putem vedea marți, e joi și poate ne vedem sâmbătă.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/47#issuecomment-299662305) on: **5/6/2017**

E sâmbătă, și ne-am văzut 3h să lucrăm după ce 2 săptămâni n-am făcut nik!!! Suntem o echipă grozavă! Keep going! Succesul ne așteaptă!
![image](https://cloud.githubusercontent.com/assets/2271038/25775496/aa88cdbc-32ae-11e7-99bc-6da9ed462c82.png)

# [Update users schema to be compatible with laravel](https://github.com/adrianharabula/condr/issues/48)

> state: **closed** opened by: **adrianharabula** on: **5/2/2017**

Some modifications:

- make sure the password column is at least 60 characters in length
- table contains a nullable, string  __remember_token__ column of 100 characters. 

Verify the login/signup functionality.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/48#issuecomment-299665703) on: **5/7/2017**

Tabela users este creată acum după:
```
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
```

Față de ceea ce aveam:
```
CREATE TABLE USERS
(
  USER_ID NUMBER(10) PRIMARY KEY,
  USERNAME VARCHAR(30) NOT NULL,
  PASSWORD VARCHAR(40) NOT NULL,
  EMAIL VARCHAR(40) NOT NULL
);
/
```

Diferențele sunt că acum avem înloc de __user_id__ coloana __id__. Iar în loc de __username__ avem __name__. Plus avem următoare câmpuri:

- remember_token
- created_at
- updated_at
---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/48#issuecomment-299688369) on: **5/7/2017**

Nu am zis ca username-ul va fi unic? 
# [Fix register page on laravel installation](https://github.com/adrianharabula/condr/issues/49)

> state: **closed** opened by: **adrianharabula** on: **5/3/2017**

Pagina [register](http://condr.me/register) nu vrea sa mearga.

Primim
```
Oci8Exception in Statement.php line 177:
Error Code : 904
Error Message : ORA-00904: "ID": invalid identifier
Position : 121
Statement : insert into "USERS" ("NAME", "EMAIL", "password", "UPDATED_AT", "CREATED_AT") values (:p0, :p1, :p2, :p3, :p4) returning "ID" into :p5
Bindings : [Adrian Harabula,adrian.harabula@gmail.com,$2y$10$8UXsjNro4nPIZzSTvzKQm.w3M0Zn73mnqe3q5OwdOtVzwU2Q0bLwi,2017-05-02 23:25:45,2017-05-02 23:25:45,0]
```

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/49#issuecomment-298795004) on: **5/3/2017**

password is reserved word in oracle; password column name needs to be changed
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/49#issuecomment-298851557) on: **5/3/2017**

we don't have timestamp columns yet, they must be deactivated
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/49#issuecomment-299662473) on: **5/6/2017**

we now use default laravel users table schema, but needs some modifications to match our previously used schema.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/49#issuecomment-299728062) on: **5/7/2017**

can be considered closed. We use exactly the laravel default users schema.
# [Ajax Samples](https://github.com/adrianharabula/condr/issues/50)

> state: **open** opened by: **adrianharabula** on: **5/6/2017**

**Demo live Ajax**
http://demo.itsolutionstuff.com/manage-item-ajax

**Demo code:**
http://itsolutionstuff.com/post/laravel-5-ajax-crud-with-pagination-example-and-demo-from-scratchexample.html

### Comments

# [Update readme.md, neeeeds lots of improvments](https://github.com/adrianharabula/condr/issues/51)

> state: **open** opened by: **adrianharabula** on: **5/6/2017**

- [ ] remove everything not needed from readme.md file, it's too bloated
- [x] start working on documentations (database, api, app, app story)
- [ ] put links to documentation on readme.md


### Comments

# [De transformat pdf-ul cu responsabilități în markdown pentru a putea fi modificate la nevoie](https://github.com/adrianharabula/condr/issues/52)

> state: **open** opened by: **adrianharabula** on: **5/6/2017**



### Comments

# [Bug pagina mydetails atunci când ai mai mulți useri cu același username](https://github.com/adrianharabula/condr/issues/53)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

Nu vom face username unic așa cum am discutat azi pentru că nu așa se face. Vom modifica codul după structura existentă, nu vom modifica structura după codul nostru.

Ca să fixăm aplicația veche, loginul se va face după email, care este unic și nu după username, care nu e unic și strică chestiuni prin cod când ai 2 useri cu numele Alina să zicem.

Oricum e buggy loginul, pentru că fiecare poate să își seteze sesiunea cu ce email/username vrea și așa se loghează fiecare fără să fie necesară parola. Pentru a evita aceste probleme, folosim modulul de autentificare de la laravel care ne scapă de astfel de probleme fără ca nici măcar să ne batem capul.

Nu mă voi ocupa de asta pentru că nu e o prioritate.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/53#issuecomment-300925274) on: **5/12/2017**

Irelevant, not enough time to fix broken old code.
# [Update psgbd/etapa2 app to new Users table modifications](https://github.com/adrianharabula/condr/issues/54)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

Avem [aici](https://github.com/adrianharabula/condr/issues/48#issuecomment-299665703) modificările făcute în tabela users. Nu mai avem coloana __username__, avem coloana __name__ și asta va trebui modificat peste tot în aplicația veche.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/54#issuecomment-299667928) on: **5/7/2017**

Merge loginul 6029d314947157c430b1aa679dd93977a825b5c4

Mai e:
 * registerul de reparat, dar chiar nu e musai
 * și de înlocuit $_SESSION['username'] cu $_SESSION['email'] peste tot în aplicație
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/54#issuecomment-300925350) on: **5/12/2017**

Irelevant, not enough time to fix broken old code.
# [De creat migrările pentru toată baza de date](https://github.com/adrianharabula/condr/issues/55)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

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

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/55#issuecomment-300082970) on: **5/9/2017**

Se poate considera terminat. Toate migrările sunt disponibile [aici](https://github.com/adrianharabula/condr/tree/master/app/database/migrations).
# [Creare scripturi database seeder pentru generare de date aleatoare și relevante](https://github.com/adrianharabula/condr/issues/56)

> state: **open** opened by: **adrianharabula** on: **5/7/2017**

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
# [Repară naibii baza de date, să meargă live, pe local și la toată lumea odată pentru totdeauna!!!!!!](https://github.com/adrianharabula/condr/issues/57)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-299930453) on: **5/8/2017**

Fă naibii la toată lumea baza de date!!!!
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300140922) on: **5/9/2017**

Scopul e ca toată lumea să ruleze aplicația pe baza de date locală.
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300141906) on: **5/9/2017**

Pentru genera/regenera baza de date după migrări a se citi https://laravel.com/docs/5.4/migrations#running-migrations

Pe scurt, așa facem rollback la toate migrările existente(se execută funcția down() din fiecare) apoi se execută migrările(funcția up()):
`php artisan migrate:refresh`

Dacă vrem să facem și populare peste baza de date refreshuită facem
```bash
// Refresh the database and run all database seeds...
php artisan migrate:refresh --seed
```

Dacă sunt probleme la resetarea bazei de date, putem executa din sqldeveloper `call purgedatabase()` pentru a șterge toate tabelele, triggerele și secvențele existente, a se vedea #62 
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300456946) on: **5/10/2017**

Pentru a crea baza de date pentru aplicație se rulează
```sqlplus system/oracle as sysdba @00-init.sql```

Apoi se fac migrările. Și ar trebui să meargă!!!!!!!
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300917885) on: **5/12/2017**

Update inițializare cu tot cu funcția purge #62 
```
sqlplus system/oracle as sysdba @00-init.sql
sqlplus condr/condr @00-purgeProcedure.sql
```
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/57#issuecomment-300923990) on: **5/12/2017**

În sfârșit închidem!!! De necrezut!
# [Adaugă niște users dummy ca să fie acolo pentru teste](https://github.com/adrianharabula/condr/issues/58)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/58#issuecomment-300137601) on: **5/9/2017**

Progres facem și avem, așa adăugăm un user dummy, și vom putea face cu el login:
```php
        DB::table('users')->insert([
            'name' => 'Adrian Harabula',
            'email' => 'adrian.harabula@gmail.com',
            'password' => bcrypt('adrian'),
        ]);
```

Sursa: https://laravel.com/docs/5.4/seeding
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/58#issuecomment-300748906) on: **5/11/2017**

Thanks! 4b705e1fc35ba51003faeae91c732f157d21515c
# [[Duplicate #63] Regenerează Desen baza de date](https://github.com/adrianharabula/condr/issues/59)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**



### Comments

# [Add Laravel DebugBar for database query debugging/optimizations](https://github.com/adrianharabula/condr/issues/60)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

Add this https://github.com/barryvdh/laravel-debugbar to out project.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/60#issuecomment-300751693) on: **5/11/2017**

Done. 71e709588612f639cd53bc28b879d0c2730dbc41

This is how we'll debug sql queries.
![image](https://cloud.githubusercontent.com/assets/2271038/25945306/197f670a-364f-11e7-827e-3300c9e260e4.png)

# [App acts erraticaly because groups is a reserverd word in oracle; Can we rename table groups?](https://github.com/adrianharabula/condr/issues/61)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

appgroups for example? or condrgroups?

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/61#issuecomment-299727953) on: **5/7/2017**

Done, renamed groups table to condrgroups.
# [Make procedure in SQL to remove all existing tables&sequences; for easier database reinitialization](https://github.com/adrianharabula/condr/issues/62)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

```
BEGIN

  --Bye Sequences!
  FOR i IN (SELECT us.sequence_name
              FROM USER_SEQUENCES us) LOOP
    EXECUTE IMMEDIATE 'drop sequence '|| i.sequence_name ||'';
  END LOOP;

  --Bye Tables!
  FOR i IN (SELECT ut.table_name
              FROM USER_TABLES ut) LOOP
    EXECUTE IMMEDIATE 'drop table '|| i.table_name ||' CASCADE CONSTRAINTS ';
  END LOOP;

END;
```

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/62#issuecomment-300081685) on: **5/9/2017**

Procedura arata așa:
```sql
create or replace PROCEDURE purgedatabase AS
begin

  --Bye Sequences!
  FOR i IN (SELECT us.sequence_name
              FROM USER_SEQUENCES us) LOOP
    EXECUTE IMMEDIATE 'drop sequence '|| i.sequence_name ||'';
  END LOOP;

  --Bye Tables!
  FOR i IN (SELECT ut.table_name
              FROM USER_TABLES ut) LOOP
    EXECUTE IMMEDIATE 'drop table '|| i.table_name ||' CASCADE CONSTRAINTS ';
  END LOOP;

END;
```

Se apealează așa:
```sql
call purgedatabase()
```
sau din bloc anonim
```sql
begin
  purgedatabase;
end;
```

Se folosește când vrem să curățăm baza de date, să o creem din nou. Șterge toate tabelele, toate triggerele și toate secvențele.
# [Generare schema UML a bazei de date](https://github.com/adrianharabula/condr/issues/63)

> state: **open** opened by: **adrianharabula** on: **5/7/2017**

Momentan avem [asta](https://github.com/adrianharabula/condr/blob/master/docs/00_database_sketch_v2.png) dar lasă de dorit și nu mai reflectă ultimele schimbări din baza de date. Tre refăcut tot frumos.
- [x] plus descrie noile modificări cât mai succint posibil

[Relational_vechi.pdf](https://github.com/adrianharabula/condr/files/981630/Relational_vechi.pdf)
[Relational_new_modifications.pdf](https://github.com/adrianharabula/condr/files/981631/Relational_new_modifications.pdf)


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/63#issuecomment-299730201) on: **5/7/2017**

Avem așa:

- tabela category tre să fie denumită categories, numele de tabele sunt la plural întotdeauna
- la fel tabela company
- la tabele, există câmpul __id__ simplu de regulă, __numetabela_id__ nu e standard, deși e mai sugestiv; pentru laravel de exemplu înseamnă configurare adițională în care trebuie să specifici numele câmpului id cu `$primaryKey` property
- nicio tabelă nu are autoincrement pe id WTF!!!!????
- în tabela user_groups nu e legat user_id de id-ul userul cu foreign key
- tabela cu numele groups nu e denumită corect, groups e reserved keyword în oracle, a se evita pe cât posibil denumirea groups
- nu există consistență în denumiri, de exemplu tabela user_groups, corect s-ar denumi group_user, ambii termeni trebuie să fie la singular, iar ordinea lor este cea alfabetică (g e înaintea u în dex)
- multe multe alte probleme legate de structură care vor crea panică și probleme mai târziu
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/63#issuecomment-300087478) on: **5/9/2017**

Avem ultima versiune aici [Relational_9mai_latest.pdf](https://github.com/adrianharabula/condr/files/985867/Relational_9mai_latest.pdf)

# [Add reprezentative pictures to products and companies](https://github.com/adrianharabula/condr/issues/64)

> state: **open** opened by: **adrianharabula** on: **5/7/2017**



### Comments

# [Add UPC code in products table](https://github.com/adrianharabula/condr/issues/65)

> state: **closed** opened by: **adrianharabula** on: **5/8/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/65#issuecomment-300082737) on: **5/9/2017**

fad327c66e7d1709be40aeaa7be2de5f63069bdc
# [Add 'views' column in products table](https://github.com/adrianharabula/condr/issues/66)

> state: **closed** opened by: **adrianharabula** on: **5/8/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/66#issuecomment-300082711) on: **5/9/2017**

fad327c66e7d1709be40aeaa7be2de5f63069bdc
# [Ce face Auth:routes() ?](https://github.com/adrianharabula/condr/issues/67)

> state: **closed** opened by: **adrianharabula** on: **5/9/2017**

```php
    public function auth()
    {
        // Authentication Routes...
        $this->get('login', 'Auth\LoginController@showLoginForm')->name('login');
        $this->post('login', 'Auth\LoginController@login');
        $this->post('logout', 'Auth\LoginController@logout')->name('logout');

        // Registration Routes...
        $this->get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
        $this->post('register', 'Auth\RegisterController@register');

        // Password Reset Routes...
        $this->get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
        $this->post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
        $this->get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
        $this->post('password/reset', 'Auth\ResetPasswordController@reset');
    }
```

Sursa:  https://github.com/laravel/framework/blob/5.4/src/Illuminate/Routing/Router.php#L994-L1010

### Comments

# [Pentru routes accesibile doar userilor autentificați](https://github.com/adrianharabula/condr/issues/68)

> state: **closed** opened by: **adrianharabula** on: **5/9/2017**

A se citi https://laravel.com/docs/5.4/authentication#protecting-routes și a se adapta la aplicația noastră.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/68#issuecomment-300924629) on: **5/12/2017**

Done.
# [Toată lumea să-și adauge user dummy în seeder](https://github.com/adrianharabula/condr/issues/69)

> state: **closed** opened by: **adrianharabula** on: **5/9/2017**

Urmărind 5064c3c5eb86d62d6418b6e43304bc6f06b037cd

Adăugați-vă și voi un user pe care îl veți folosi pentru voi de acum încolo!

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/69#issuecomment-300739365) on: **5/11/2017**

Thanks! 4b705e1fc35ba51003faeae91c732f157d21515c
# [Fix dropdown menu](https://github.com/adrianharabula/condr/issues/70)

> state: **closed** opened by: **adrianharabula** on: **5/10/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/70#issuecomment-300902479) on: **5/11/2017**

af887c9e13e90655c5f69269c504ad18bff8e265
# [Curăță scripturile de inițializare sql, având în vedere că acum folosim migrations](https://github.com/adrianharabula/condr/issues/71)

> state: **open** opened by: **adrianharabula** on: **5/11/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/71#issuecomment-302962579) on: **5/21/2017**

Cam aşa arată baza noastră de date generată cu migrările din laravel
```sql
-- Generated by Oracle SQL Developer Data Modeler 4.2.0.932
--   at:        2017-05-21 23:52:58 EEST
--   site:      Oracle Database 11g
--   type:      Oracle Database 11g



CREATE TABLESPACE aplicatie_condr 
--  WARNING: Tablespace has no data files defined 
 LOGGING ONLINE EXTENT MANAGEMENT LOCAL AUTOALLOCATE FLASHBACK ON;

CREATE USER CONDR 
    IDENTIFIED BY  
    ACCOUNT UNLOCK 
;

CREATE TABLE condr.categories (
    id            NUMBER(10) NOT NULL,
    name          VARCHAR2(255 BYTE) NOT NULL,
    description   VARCHAR2(255 BYTE) NOT NULL,
    created_at    TIMESTAMP,
    updated_at    TIMESTAMP
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE UNIQUE INDEX condr.categories_id_pk ON
    condr.categories ( id ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

CREATE UNIQUE INDEX condr.categories_name_uk ON
    condr.categories ( name ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

ALTER TABLE condr.categories ADD CONSTRAINT categories_id_pk PRIMARY KEY ( id )
    USING INDEX condr.categories_id_pk;

ALTER TABLE condr.categories ADD CONSTRAINT categories_name_uk UNIQUE ( name )
    USING INDEX condr.categories_name_uk;

CREATE TABLE condr.characteristics (
    id           NUMBER(10) NOT NULL,
    name         VARCHAR2(255 BYTE) NOT NULL,
    created_at   TIMESTAMP,
    updated_at   TIMESTAMP
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE UNIQUE INDEX condr.characteristics_id_pk ON
    condr.characteristics ( id ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

CREATE UNIQUE INDEX condr.characteristics_name_uk ON
    condr.characteristics ( name ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

ALTER TABLE condr.characteristics ADD CONSTRAINT characteristics_id_pk PRIMARY KEY ( id )
    USING INDEX condr.characteristics_id_pk;

ALTER TABLE condr.characteristics ADD CONSTRAINT characteristics_name_uk UNIQUE ( name )
    USING INDEX condr.characteristics_name_uk;

CREATE TABLE condr.characterizable (
    characteristic_id       NUMBER(10) NOT NULL,
    characteristic_values   VARCHAR2(4000 BYTE) NOT NULL,
    characterizable_id      NUMBER(10) NOT NULL,
    characterizable_type    VARCHAR2(255 BYTE) NOT NULL,
    created_at              TIMESTAMP,
    updated_at              TIMESTAMP
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE INDEX condr.characterizable_characterizabl ON
    condr.characterizable (
        characterizable_id
    ASC,
        characterizable_type
    ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

CREATE TABLE condr.companies (
    id            NUMBER(10) NOT NULL,
    name          VARCHAR2(255 BYTE) NOT NULL,
    description   VARCHAR2(255 BYTE) NOT NULL,
    views         NUMBER(10),
    created_at    TIMESTAMP,
    updated_at    TIMESTAMP
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE UNIQUE INDEX condr.companies_id_pk ON
    condr.companies ( id ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

CREATE UNIQUE INDEX condr.companies_name_uk ON
    condr.companies ( name ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

ALTER TABLE condr.companies ADD CONSTRAINT companies_id_pk PRIMARY KEY ( id )
    USING INDEX condr.companies_id_pk;

ALTER TABLE condr.companies ADD CONSTRAINT companies_name_uk UNIQUE ( name )
    USING INDEX condr.companies_name_uk;

CREATE TABLE condr.condrgroup_user (
    id              NUMBER(10) NOT NULL,
    user_id         NUMBER(10) NOT NULL,
    condrgroup_id   NUMBER(10) NOT NULL
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE UNIQUE INDEX condr.condrgroup_user_id_pk ON
    condr.condrgroup_user ( id ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

ALTER TABLE condr.condrgroup_user ADD CONSTRAINT condrgroup_user_id_pk PRIMARY KEY ( id )
    USING INDEX condr.condrgroup_user_id_pk;

CREATE TABLE condr.condrgroups (
    id            NUMBER(10) NOT NULL,
    name          VARCHAR2(255 BYTE) NOT NULL,
    description   VARCHAR2(255 BYTE)
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE UNIQUE INDEX condr.condrgroups_id_pk ON
    condr.condrgroups ( id ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

CREATE UNIQUE INDEX condr.condrgroups_name_uk ON
    condr.condrgroups ( name ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

ALTER TABLE condr.condrgroups ADD CONSTRAINT condrgroups_id_pk PRIMARY KEY ( id )
    USING INDEX condr.condrgroups_id_pk;

ALTER TABLE condr.condrgroups ADD CONSTRAINT condrgroups_name_uk UNIQUE ( name )
    USING INDEX condr.condrgroups_name_uk;

CREATE TABLE condr.migrations (
    id          NUMBER(10) NOT NULL,
    migration   VARCHAR2(255 BYTE) NOT NULL,
    batch       NUMBER(10) NOT NULL
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE UNIQUE INDEX condr.migrations_id_pk ON
    condr.migrations ( id ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

ALTER TABLE condr.migrations ADD CONSTRAINT migrations_id_pk PRIMARY KEY ( id )
    USING INDEX condr.migrations_id_pk;

CREATE TABLE condr.password_resets (
    email        VARCHAR2(255 BYTE) NOT NULL,
    token        VARCHAR2(255 BYTE) NOT NULL,
    created_at   TIMESTAMP
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE INDEX condr.password_resets_email_index ON
    condr.password_resets ( email ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

CREATE TABLE condr.product_user (
    id           NUMBER(10) NOT NULL,
    user_id      NUMBER(10) NOT NULL,
    product_id   NUMBER(10) NOT NULL
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE UNIQUE INDEX condr.product_user_id_pk ON
    condr.product_user ( id ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

ALTER TABLE condr.product_user ADD CONSTRAINT product_user_id_pk PRIMARY KEY ( id )
    USING INDEX condr.product_user_id_pk;

CREATE TABLE condr.products (
    id            NUMBER(10) NOT NULL,
    upc_code      VARCHAR2(255 BYTE),
    name          VARCHAR2(255 BYTE) NOT NULL,
    description   VARCHAR2(255 BYTE),
    image_url     VARCHAR2(255 BYTE),
    views         NUMBER(10),
    category_id   NUMBER(10),
    company_id    NUMBER(10),
    created_at    TIMESTAMP,
    updated_at    TIMESTAMP,
    deleted_at    TIMESTAMP
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE UNIQUE INDEX condr.products_id_pk ON
    condr.products ( id ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

ALTER TABLE condr.products ADD CONSTRAINT products_id_pk PRIMARY KEY ( id )
    USING INDEX condr.products_id_pk;

CREATE TABLE condr.users (
    id               NUMBER(10) NOT NULL,
    name             VARCHAR2(255 BYTE) NOT NULL,
    email            VARCHAR2(255 BYTE) NOT NULL,
    "password"       VARCHAR2(255 BYTE) NOT NULL,
    remember_token   VARCHAR2(100 BYTE),
    created_at       TIMESTAMP,
    updated_at       TIMESTAMP
)
    PCTFREE 10 PCTUSED 40 TABLESPACE aplicatie_condr LOGGING
        STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT );

CREATE UNIQUE INDEX condr.users_email_uk ON
    condr.users ( email ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

CREATE UNIQUE INDEX condr.users_id_pk ON
    condr.users ( id ASC )
        TABLESPACE aplicatie_condr PCTFREE 10
            STORAGE ( INITIAL 65536 NEXT 1048576 PCTINCREASE 0 MINEXTENTS 1 MAXEXTENTS 2147483645 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT )
        LOGGING;

ALTER TABLE condr.users ADD CONSTRAINT users_id_pk PRIMARY KEY ( id )
    USING INDEX condr.users_id_pk;

ALTER TABLE condr.users ADD CONSTRAINT users_email_uk UNIQUE ( email )
    USING INDEX condr.users_email_uk;

ALTER TABLE condr.characterizable ADD CONSTRAINT characterizable_characteristic FOREIGN KEY ( characteristic_id )
    REFERENCES condr.characteristics ( id )
NOT DEFERRABLE;

ALTER TABLE condr.condrgroup_user ADD CONSTRAINT condrgroup_user_condrgroup_id_ FOREIGN KEY ( condrgroup_id )
    REFERENCES condr.condrgroups ( id )
        ON DELETE CASCADE
NOT DEFERRABLE;

ALTER TABLE condr.condrgroup_user ADD CONSTRAINT condrgroup_user_user_id_fk FOREIGN KEY ( user_id )
    REFERENCES condr.users ( id )
        ON DELETE CASCADE
NOT DEFERRABLE;

ALTER TABLE condr.product_user ADD CONSTRAINT product_user_product_id_fk FOREIGN KEY ( product_id )
    REFERENCES condr.products ( id )
        ON DELETE CASCADE
NOT DEFERRABLE;

ALTER TABLE condr.product_user ADD CONSTRAINT product_user_user_id_fk FOREIGN KEY ( user_id )
    REFERENCES condr.users ( id )
        ON DELETE CASCADE
NOT DEFERRABLE;

ALTER TABLE condr.products ADD CONSTRAINT products_category_id_fk FOREIGN KEY ( category_id )
    REFERENCES condr.categories ( id )
NOT DEFERRABLE;

ALTER TABLE condr.products ADD CONSTRAINT products_company_id_fk FOREIGN KEY ( company_id )
    REFERENCES condr.companies ( id )
NOT DEFERRABLE;

CREATE SEQUENCE condr.categories_id_seq START WITH 1 NOCACHE ORDER;

CREATE OR REPLACE TRIGGER condr.categories_id_trg BEFORE
    INSERT ON condr.categories
    FOR EACH ROW
    WHEN (
        new.id IS NULL
    )
BEGIN
    :new.id := condr.categories_id_seq.nextval;
END;
/

CREATE SEQUENCE condr.characteristics_id_seq START WITH 1 NOCACHE ORDER;

CREATE OR REPLACE TRIGGER condr.characteristics_id_trg BEFORE
    INSERT ON condr.characteristics
    FOR EACH ROW
    WHEN (
        new.id IS NULL
    )
BEGIN
    :new.id := condr.characteristics_id_seq.nextval;
END;
/

CREATE SEQUENCE condr.companies_id_seq START WITH 1 NOCACHE ORDER;

CREATE OR REPLACE TRIGGER condr.companies_id_trg BEFORE
    INSERT ON condr.companies
    FOR EACH ROW
    WHEN (
        new.id IS NULL
    )
BEGIN
    :new.id := condr.companies_id_seq.nextval;
END;
/

CREATE SEQUENCE condr.condrgroup_user_id_seq START WITH 1 NOCACHE ORDER;

CREATE OR REPLACE TRIGGER condr.condrgroup_user_id_trg BEFORE
    INSERT ON condr.condrgroup_user
    FOR EACH ROW
    WHEN (
        new.id IS NULL
    )
BEGIN
    :new.id := condr.condrgroup_user_id_seq.nextval;
END;
/

CREATE SEQUENCE condr.condrgroups_id_seq START WITH 1 NOCACHE ORDER;

CREATE OR REPLACE TRIGGER condr.condrgroups_id_trg BEFORE
    INSERT ON condr.condrgroups
    FOR EACH ROW
    WHEN (
        new.id IS NULL
    )
BEGIN
    :new.id := condr.condrgroups_id_seq.nextval;
END;
/

CREATE SEQUENCE condr.migrations_id_seq START WITH 1 NOCACHE ORDER;

CREATE OR REPLACE TRIGGER condr.migrations_id_trg BEFORE
    INSERT ON condr.migrations
    FOR EACH ROW
    WHEN (
        new.id IS NULL
    )
BEGIN
    :new.id := condr.migrations_id_seq.nextval;
END;
/

CREATE SEQUENCE condr.product_user_id_seq START WITH 1 NOCACHE ORDER;

CREATE OR REPLACE TRIGGER condr.product_user_id_trg BEFORE
    INSERT ON condr.product_user
    FOR EACH ROW
    WHEN (
        new.id IS NULL
    )
BEGIN
    :new.id := condr.product_user_id_seq.nextval;
END;
/

CREATE SEQUENCE condr.products_id_seq START WITH 1 NOCACHE ORDER;

CREATE OR REPLACE TRIGGER condr.products_id_trg BEFORE
    INSERT ON condr.products
    FOR EACH ROW
    WHEN (
        new.id IS NULL
    )
BEGIN
    :new.id := condr.products_id_seq.nextval;
END;
/

CREATE SEQUENCE condr.users_id_seq START WITH 1 NOCACHE ORDER;

CREATE OR REPLACE TRIGGER condr.users_id_trg BEFORE
    INSERT ON condr.users
    FOR EACH ROW
    WHEN (
        new.id IS NULL
    )
BEGIN
    :new.id := condr.users_id_seq.nextval;
END;
/



-- Oracle SQL Developer Data Modeler Summary Report: 
-- 
-- CREATE TABLE                            11
-- CREATE INDEX                            16
-- ALTER TABLE                             21
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           9
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          9
-- CREATE MATERIALIZED VIEW                 0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        1
-- CREATE USER                              1
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 1

```
# [Add posibility to add custom css/js for specific pages](https://github.com/adrianharabula/condr/issues/72)

> state: **closed** opened by: **adrianharabula** on: **5/11/2017**

Follow this guide http://stackoverflow.com/questions/30716599/laravel-5-add-a-stylesheet-only-if-on-a-certain-page-controller-page-specific

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/72#issuecomment-300902028) on: **5/11/2017**

We use stacks, see this following examples:
## For CSS
app.blade.php
![image](https://cloud.githubusercontent.com/assets/2271038/25969524/df1ff8c8-369d-11e7-8bfd-d4a800c5274f.png)

contact.blade.php
![image](https://cloud.githubusercontent.com/assets/2271038/25969538/ee6d0d0c-369d-11e7-8a61-3d39e7ca9ac7.png)

## For JS
app.blade.php
![image](https://cloud.githubusercontent.com/assets/2271038/25969620/400983de-369e-11e7-8dac-21b5e935686c.png)

mypreferences.blade.php
![image](https://cloud.githubusercontent.com/assets/2271038/25969583/1f00a8f2-369e-11e7-9ebf-7469a0b9bf9f.png)


# [Remake blade template](https://github.com/adrianharabula/condr/issues/73)

> state: **closed** opened by: **adrianharabula** on: **5/11/2017**

Useful link that shows a blade template file structure https://scotch.io/tutorials/simple-laravel-layouts-using-blade

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/73#issuecomment-300902416) on: **5/11/2017**

af887c9e13e90655c5f69269c504ad18bff8e265
# [Fix link generation cross site](https://github.com/adrianharabula/condr/issues/74)

> state: **closed** opened by: **adrianharabula** on: **5/11/2017**

to be continued...

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/74#issuecomment-300905243) on: **5/11/2017**

32e705030ee0f657d945be1d2fd929baf0d06c1f
# [Add CompaniesTableSeeder](https://github.com/adrianharabula/condr/issues/75)

> state: **closed** opened by: **adrianharabula** on: **5/11/2017**

Generate random companies using this https://github.com/fzaninotto/Faker#fakerprovideren_uscompany




### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/75#issuecomment-300922202) on: **5/12/2017**

done
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/75#issuecomment-300924468) on: **5/12/2017**

Relevant commit here f7c4659e3d1fe3c1d81c97b74f4dfb8d98c8c812

Thanks!!!
# [Add ProductsTableSeeder](https://github.com/adrianharabula/condr/issues/76)

> state: **open** opened by: **adrianharabula** on: **5/11/2017**

Generate random products using
random image generator here https://github.com/fzaninotto/Faker#fakerproviderimage
and
random barcode generator here https://github.com/fzaninotto/Faker#fakerproviderbarcode (folosim ean13)

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/76#issuecomment-300907973) on: **5/11/2017**

A se vedea și #64 pentru logica cum stocăm imaginile, atât în baza de date, cât și pe hdd.
# [Document and implement a way to generate characteristics programatically](https://github.com/adrianharabula/condr/issues/77)

> state: **open** opened by: **adrianharabula** on: **5/12/2017**

Vrem să generăm foarte aleator caracteristici. Este prea hardcodat generatorul. Maximul de hardcodare este permită să customizăm caracteristici generate pentru:

- electronice
- cărți
- călătorii

Ar trebui să găsim niște reguli de definiție pentru caracteristică.

Exemplu de definiție:

- o caracteristică e un adjectiv

Pe baza acestei definiții putem genera foarte aleator caracteristici.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/77#issuecomment-300997372) on: **5/12/2017**

Idei & articole:

- http://www.redotheweb.com/2014/03/04/faker-generates-real-text.html
- https://laravel-news.com/learn-to-use-model-factories-in-laravel-5-1
- https://github.com/stympy/faker
# [Generate and add favicon for site](https://github.com/adrianharabula/condr/issues/78)

> state: **closed** opened by: **adrianharabula** on: **5/12/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/78#issuecomment-302790753) on: **5/19/2017**

Avem următoarele iconiţe momentan.
![favicon-elena](https://cloud.githubusercontent.com/assets/2271038/26263575/098d3248-3ce2-11e7-95b7-edc6e8d55e2e.png)
![favicon-elisa](https://cloud.githubusercontent.com/assets/2271038/26263576/09936456-3ce2-11e7-95e0-6af354217d42.png)

Mie nu-mi place niciuna :)) 

Mă aşteptam să fie ceva mai serios, să fie ceva mult mai aproape de logoul nostru:
![image](https://cloud.githubusercontent.com/assets/2271038/26263639/3f7d4bfe-3ce2-11e7-8793-bd2e80e0a6e3.png)


---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/78#issuecomment-304504802) on: **5/28/2017**

Avem https://paulferrett.com/fontawesome-favicon/

Am pus asta ![favicon](https://cloud.githubusercontent.com/assets/2271038/26527943/81115a58-43a7-11e7-8e89-ed6e4350fcf4.png) ca favicon şi arată aşa
![image](https://cloud.githubusercontent.com/assets/2271038/26527945/90bdf5ec-43a7-11e7-93f2-27702dfff2eb.png)


# [Add latest db sketch link to readme](https://github.com/adrianharabula/condr/issues/79)

> state: **open** opened by: **adrianharabula** on: **5/12/2017**



### Comments

# [Get groups for authenticated user using laravel eloquent](https://github.com/adrianharabula/condr/issues/80)

> state: **closed** opened by: **adrianharabula** on: **5/12/2017**

Make this thing work!
```php
$groups = Auth::user()->groups();
print_r($groups);
```

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/80#issuecomment-301026652) on: **5/12/2017**

Documentation here https://laravel.com/docs/5.4/eloquent-relationships
# [Add residual products that were created during the development of the app](https://github.com/adrianharabula/condr/issues/81)

> state: **open** opened by: **adrianharabula** on: **5/12/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/81#issuecomment-301339940) on: **5/15/2017**

Like these:
- Database migration tool
- php-oci8 image
- super-simple-oci-orm
# [Add atom feeds for things in out site (like products)](https://github.com/adrianharabula/condr/issues/82)

> state: **open** opened by: **adrianharabula** on: **5/14/2017**



### Comments

# [Implement a roadmap for our project](https://github.com/adrianharabula/condr/issues/83)

> state: **open** opened by: **adrianharabula** on: **5/14/2017**

Exactly like this! https://github.com/aspnet/EntityFramework/wiki/Roadmap

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/83#issuecomment-301347389) on: **5/15/2017**

Got this https://github.com/adrianharabula/condr/wiki/Roadmap. Needs to be completed.
# [somehow prepare database for first time run](https://github.com/adrianharabula/condr/issues/84)

> state: **closed** opened by: **adrianharabula** on: **5/14/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/84#issuecomment-301339830) on: **5/15/2017**

We've got [these](https://github.com/adrianharabula/condr/tree/dd9bd093983f4465338372bb60e1b3018807bd4b/Dockerfiles/oracledb/sqlscripts) scripts working on first time initialization.

What we need to do is to find a way to make migration run automatically on first run. Not important, but it would be nice to find a way.

That would automate just everything!!!!
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/84#issuecomment-301344707) on: **5/15/2017**

Avem install instructions aici https://github.com/adrianharabula/condr/wiki/Install-instructions. Nu cred că voi mai continua cu automatizarea pentru că nu îi mai văd rostul. Dacă va fi cazul voi redeschide issueul.
# [Remove etapa2 code as it is no longer needed](https://github.com/adrianharabula/condr/issues/85)

> state: **closed** opened by: **adrianharabula** on: **5/14/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/85#issuecomment-301339649) on: **5/15/2017**

Done. 21f83f5e038ab8d91dbfd9470d74174206905a08
# [think a file permissions schema; write documentation for it](https://github.com/adrianharabula/condr/issues/86)

> state: **open** opened by: **adrianharabula** on: **5/15/2017**



### Comments

# [Etapa 3 psgbd - discuţii](https://github.com/adrianharabula/condr/issues/87)

> state: **open** opened by: **adrianharabula** on: **5/15/2017**

Etapa III (max 30 puncte - prezentabil in saptamana 23-28 mai de catre cei care au laboratorul joi pe 1 iunie, prezentabil in saptamana 29 mai-02 iunie de catre restul; restul au posibilitatea sa prezinte si in 23-28 daca doresc acest lucru).

1. La curs ati invatat sa faceti indecsi ce va pot ajuta in diverse situatii (pentru selecturi simple, pentru JOIN, pentru group by, pentru order by, in cautari pe diverse tipuri de date, cu functii etc.) Alegeti 3 dintre categoriile de mai sus si construiti indecsi care sa va ajute in acele situatii. Trebuie sa demonstrati profesorului de laborator ca intr-adevar executia fara indecsi este mult mai greoaie decat cea in care adaugati indecsii.

2. Crearea de triggere care sa permita satisfacerea constrangerilor existente in proiect. De exemplu daca se sterge o data de care depind si alte date si utilizatorul este sigur de asta sa fie sterse si datele aditionale. Alternativ, puteti implementa o strategie de soft delete (tot prin triggere sa marcheze doar datele "sterse" si sa nu le stearga de tot).

3. Utilizarea unui view materializat (+ operatii pe el).

4. Posibilitatea de a exporta toate tabelele din proiect in fisiere SQL care prin rulare ar trebui sa creeze toate entitatile utilizate (tabele, functii, proceduri, pachete, tipuri de date, triggere, viewuri etc.). Se va folosi dictionarul de date pentru a gasi acele informatii.

### Comments

---
> from: [**Elena-Anghelina**](https://github.com/adrianharabula/condr/issues/87#issuecomment-301488149) on: **5/15/2017**

avem trigger la delete 2dbe25ddc5a5827b6c5af51a834da0cc32a341ed
# [limit api requests for security purposes](https://github.com/adrianharabula/condr/issues/88)

> state: **open** opened by: **adrianharabula** on: **5/16/2017**



### Comments

# [Fix duplicated relationship generated in CondrgroupUserTableSeeder](https://github.com/adrianharabula/condr/issues/89)

> state: **open** opened by: **elis47** on: **5/16/2017**



### Comments

# [sql query to get all characteristics for a product id](https://github.com/adrianharabula/condr/issues/90)

> state: **closed** opened by: **adrianharabula** on: **5/16/2017**



### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/90#issuecomment-301764316) on: **5/16/2017**

```sql
select cc.name, characteristic_values from characterizable c join characteristics cc on c.characteristic_id=cc.id 
where characterizable_id=5;
```
# [Use Reviewable and pull requests from now on. Code uploaded is too ugly and buggy.](https://github.com/adrianharabula/condr/issues/91)

> state: **closed** opened by: **adrianharabula** on: **5/18/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/91#issuecomment-302643771) on: **5/19/2017**

yeee first pull request #95 and is looking good
# [testing reviewable](https://github.com/adrianharabula/condr/pull/92)

> state: **closed** opened by: **adrianharabula** on: **5/18/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/92)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/92#issuecomment-302362431) on: **5/18/2017**









*[testing_reviewable, line 1 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/92#-KkQ2ExPMe_mgbJjMYOY:-KkQ2ExPMe_mgbJjMYOZ:buagjxt) ([raw file](https://github.com/adrianharabula/condr/blob/af68f0ad2c35507a6ae1de58e8b8817cfec78bc0/testing_reviewable#L1)):*
> ```
> Hello world from reviewable;
> ```

this works pretty well.

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/92)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/92#issuecomment-302362751) on: **5/18/2017**





Reviewed 1 of 1 files at r1.
Review status: all files reviewed at latest revision, 1 unresolved discussion.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/92)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/92#issuecomment-302363076) on: **5/18/2017**









*[testing_reviewable, line 1 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/92#-KkQ2ExPMe_mgbJjMYOY:-KkQ2wsGeotlslxlLAQs:b-896fix) ([raw file](https://github.com/adrianharabula/condr/blob/af68f0ad2c35507a6ae1de58e8b8817cfec78bc0/testing_reviewable#L1)):*
<details><summary><i>Previously, adrianharabula (Adrian Harabula) wrote…</i></summary><blockquote>

this works pretty well.
</blockquote></details>

Done.

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/92)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/92#issuecomment-302363444) on: **5/18/2017**









*[testing_reviewable, line 1 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/92#-KkQ2ExPMe_mgbJjMYOY:-KkQ3JotSFqy3Qg7Hms9:b-896fix) ([raw file](https://github.com/adrianharabula/condr/blob/af68f0ad2c35507a6ae1de58e8b8817cfec78bc0/testing_reviewable#L1)):*
<details><summary><i>Previously, adrianharabula (Adrian Harabula) wrote…</i></summary><blockquote>

Done.
</blockquote></details>

Done.

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/92)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/92#issuecomment-302363525) on: **5/18/2017**





Reviewed 1 of 1 files at r1.
Review status: all files reviewed at latest revision, 1 unresolved discussion.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/92)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/92#issuecomment-302529146) on: **5/18/2017**

enough testing, let's start doing.
# [Ads viewgroup modifications](https://github.com/adrianharabula/condr/pull/93)

> state: **closed** opened by: **elis47** on: **5/18/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/93)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/93#issuecomment-302526338) on: **5/18/2017**





Reviewed 3 of 6 files at r1, 8 of 8 files at r2.
Review status: all files reviewed at latest revision, 3 unresolved discussions.

---

*[app/app/Http/Controllers/GroupsController.php, line 25 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/93#-KkS94Yh3R6QOJPZCKF_:-KkS94Yh3R6QOJPZCKFa:bhuilt4) ([raw file](https://github.com/adrianharabula/condr/blob/5205f1fde7d24201884896e4fa3ade7f1a982ccb/app/app/Http/Controllers/GroupsController.php#L25)):*
> ```PHP
>     return redirect()->route('viewGroup', ['id' => $group->id]);
>   }
> ```

great!!!!

---

*[app/app/Http/Controllers/ProductsController.php, line 28 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/93#-KkS9CTA_WTxKrPRL8Vn:-KkS9CTA_WTxKrPRL8Vo:b-p6royr) ([raw file](https://github.com/adrianharabula/condr/blob/98360f46d460f7dba0533b6e35a6217d2518616f/app/app/Http/Controllers/ProductsController.php#L28)):*
> ```PHP
>     //   echo $product->name . ' <br />';
>     // }
>     return view('products')->with('products',$products);
> ```

mai e nevoie de acest return?

---

*[app/resources/views/products.blade.php, line 60 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/93#-KkS9TPZEasspXpbL83I:-KkS9TPZEasspXpbL83J:b-o95l8m) ([raw file](https://github.com/adrianharabula/condr/blob/5205f1fde7d24201884896e4fa3ade7f1a982ccb/app/resources/views/products.blade.php#L60)):*
> ```PHP
>             </div>
>             <div class="col-md-3">
>               <a href={{ route('viewproduct') }} class="btn btn-primary my-btn my-btn-dropdown btn-block btn-product pull-right">View details</a>
> ```

merge şi fără parametru ruta asta?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/93)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/93#issuecomment-302528823) on: **5/18/2017**

pull requestul #94 conţine şi aceste modificări, îl voi puşa pe el
# [incomplete code for products](https://github.com/adrianharabula/condr/pull/94)

> state: **closed** opened by: **elis47** on: **5/18/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/94)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/94#issuecomment-302528310) on: **5/18/2017**





Reviewed 15 of 15 files at r1.
Review status: all files reviewed at latest revision, 3 unresolved discussions.

---

*[app/resources/views/products.blade.php, line 7 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/94#-KkSAwAcqADa5dYEq4Z9:-KkSAwAcqADa5dYEq4ZA:b-jexcxe) ([raw file](https://github.com/adrianharabula/condr/blob/98360f46d460f7dba0533b6e35a6217d2518616f/app/resources/views/products.blade.php#L7)):*
> ```PHP
> 
> @section('content')
> <link href="/Assets/css/products.css" rel="stylesheet">
> ```

cine naiba o fi pus linia asta? :))

---

*[app/resources/views/products.blade.php, line 68 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/94#-KkSAizkASaafxvNancE:-KkSAizl-upfccQLE7ub:bwi5k2y) ([raw file](https://github.com/adrianharabula/condr/blob/cf564bf3b9981a855f3894df68f97ea2687fea79/app/resources/views/products.blade.php#L68)):*
> ```PHP
> @push('styles')
> <link rel="stylesheet" type="text/css" href="{{ asset('/css/products.css') }}">
> @endpush
> ```

aşa da, aşa se pune un css custom pentru o pagină anume

---

*[app/resources/views/layouts/app.blade.php, line 18 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/94#-KkSAZEGgSw_mHyOkMPA:-KkSAZEGgSw_mHyOkMPB:b228hjx) ([raw file](https://github.com/adrianharabula/condr/blob/cf564bf3b9981a855f3894df68f97ea2687fea79/app/resources/views/layouts/app.blade.php#L18)):*
> ```PHP
>     <link rel="stylesheet" type="text/css" href="{{ asset('/css/custom.css') }}">
>     <link rel="stylesheet" type="text/css" href="{{ asset('/css/responsive.css') }}">
>     <link rel="stylesheet" type="text/css" href="{{ asset('/css/products.css') }}">
> ```

stylesheets adiţionale adăugăm doar cu push, ca mai sus.

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/94)*
<!-- Sent from Reviewable.io -->

# [working characteristic relationship](https://github.com/adrianharabula/condr/pull/95)

> state: **closed** opened by: **elis47** on: **5/19/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/95)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/95#issuecomment-302641810) on: **5/19/2017**





Reviewed 3 of 5 files at r1, 11 of 11 files at r2.
Review status: all files reviewed at latest revision, 5 unresolved discussions.

---

*[app/app/Http/Controllers/ProductsController.php, line 21 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUk0RkjucoTYYnycG2:-KkUk0RkjucoTYYnycG3:b-b4nfrw) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/app/Http/Controllers/ProductsController.php#L21)):*
> ```PHP
>     $group = \App\Condrgroup::find(1);
>     return view('viewProduct')->with('product', $product)
>                               ->with('group', $group);
> ```

aici o să ştergem asta

---

*[app/database/migrations/2017_05_07_000031_create_characterizables_table.php, line 16 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUk640ollxXbyxtGPX:-KkUk641o2CUm8vpbFCS:b-5ei5ni) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/database/migrations/2017_05_07_000031_create_characterizables_table.php#L16)):*
> ```PHP
>     public function up()
>     {
>         Schema::create('characterizables', function (Blueprint $table) {
> ```

minunea!!!!

---

*[app/database/seeds/DatabaseSeeder.php, line 22 at r2](https://reviewable.io:443/reviews/adrianharabula/condr/95#-KkUljzQmtnTIAu8Y4QH:-KkUljzQmtnTIAu8Y4QI:b-myumth) ([raw file](https://github.com/adrianharabula/condr/blob/2b8b9d1809aa97df3e23955c03bb14baf842af22/app/database/seeds/DatabaseSeeder.php#L22)):*
> ```PHP
>         $this->call(ProductUserTableSeeder::class);
>         $this->call(CharacteristicsTableSeeder::class);
>         // $this->call(CharacterizablesTableSeeder::class);
> ```

yes, that was definitely not working

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/95)*
<!-- Sent from Reviewable.io -->

# [Major backend changes!!!](https://github.com/adrianharabula/condr/pull/96)

> state: **closed** opened by: **elis47** on: **5/19/2017**

We've got awesome pages working:

- my products
- products
- my preferences
- groups
- viewgroups

And other booring stuff.

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/96)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/96#issuecomment-302678493) on: **5/19/2017**

Totul foarte bine!!! Dacă e să zic şi ceva naşpa ar fi că taburile din unele views sunt făcute cu taburi, noi pentru taburi folosim spaţii ca standard(2 spaţii parcă per tab), dar e ok!!! nu mă băga în seamă

---

Reviewed 14 of 14 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/96#-:-KkVPhSS0dk1bkxXinKO:ba0n61p)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/96#issuecomment-302890356) on: **5/20/2017**

Pentru indentare standardul este de 4 spaţii http://www.php-fig.org/psr/psr-2
![image](https://cloud.githubusercontent.com/assets/2271038/26278432/245316d0-3da3-11e7-8033-b04479099c00.png)

# [Make change password work](https://github.com/adrianharabula/condr/issues/97)

> state: **closed** opened by: **elis47** on: **5/19/2017**

Found this http://teamnik.org/how-to-update-user-password-in-laravel5/

### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/97#issuecomment-302687418) on: **5/19/2017**

Got this working b592ed54282a1e41161e12f5a8fa7d934cee34b6
---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/97#issuecomment-302687496) on: **5/19/2017**

TODO: needs flash message for success message
---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/97#issuecomment-302865903) on: **5/20/2017**

Doesn't verify if the current password matches the given one!!!
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/97#issuecomment-302879938) on: **5/20/2017**

vezi aici @elis47 https://laravel.com/docs/5.4/validation#rule-different
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/97#issuecomment-303969404) on: **5/25/2017**

done, avem şi validate la old password 4610b74fe45ca02e37e4edcc1718c88184eb09d5
# [Colecţionare coduri de bare de la diverse](https://github.com/adrianharabula/condr/issues/98)

> state: **open** opened by: **adrianharabula** on: **5/19/2017**



### Comments

# [Use requestb.in for testing http requests](https://github.com/adrianharabula/condr/issues/99)

> state: **open** opened by: **adrianharabula** on: **5/20/2017**

https://requestb.in

### Comments

# [Should we put laravel debugbar on production or not?](https://github.com/adrianharabula/condr/issues/100)

> state: **open** opened by: **adrianharabula** on: **5/20/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/100#issuecomment-302917109) on: **5/21/2017**

Cel mai probabil o să scoatem de pe live debugbarul, dar acum îl lăsăm, cel puţin cât lucrăm la site.
# [Parte de administrare, vom avea oare? Ce administrăm dacă vom avea?](https://github.com/adrianharabula/condr/issues/101)

> state: **open** opened by: **adrianharabula** on: **5/20/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/101#issuecomment-302916895) on: **5/21/2017**

Mă gândesc că ar trebui fi aprobate unele chestii, pentru asta vom avea o secţiune administrare:

- pentru grupuri de exemplu, cele proaspăt adăugate ar trebui să fie moderate cumva
# [Secure the git hook](https://github.com/adrianharabula/condr/issues/102)

> state: **closed** opened by: **adrianharabula** on: **5/20/2017**

1. Read the documentation https://developer.github.com/webhooks/

Implement it!!!!!!!!!!

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/102#issuecomment-302888645) on: **5/20/2017**

Ok, so this is our deploy webhook.
```php
/*
 * Webhook script;
 * It is called by GitHub on every new push
 * This updates the server code to the latest code available on GitHub repo
 */
Route::post('/webhook', function(Request $request){
  // get request body
  $content = $request->getContent();

  // hash it with the key stored in APP_WEBHOOKKEY
  // it's the same key configured as a secret in GitHub webhook settings
  $hash = hash_hmac('sha1', $content, env('APP_WEBHOOKKEY'));

  // compare it with the one we have in X-Hub-Signature
  if($request->header('X-Hub-Signature') !== 'sha1=' . $hash)
    abort(403);

  // execute deploy command
  SSH::run([
      'cd /root/condr/app',
      '/root/.config/composer/vendor/laravel/envoy/envoy run deploy',
  ]);
});
```

and this is our Envoy.blade.php
```php
@servers(['localhost' => '127.0.0.1'])

@task('deploy')
    cd /root/condr
    git pull origin master
@endtask

```

and the exception in VerifyCsrfToken.php
```php
    protected $except = [
        '/webhook',
    ];
```

This took some time... but it's a piece of art.
# [Write docker image for running the site in development mode without without apache](https://github.com/adrianharabula/condr/issues/103)

> state: **open** opened by: **adrianharabula** on: **5/20/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/103#issuecomment-302894977) on: **5/20/2017**

Done. https://github.com/adrianharabula/php7cli-with-oci8
## Usage instructions with Laravel

Create a new image
```Dockerfile
FROM adrianharabula/php7cli-with-oci8
RUN mkdir /root/app
WORKDIR /root/app
EXPOSE 8000
CMD [ "php", "artisan", "serve", "--host=0.0.0.0" ]
```

Build it with
```bash
docker build -t my-laravel-app .
```

Run your laravel installation with:

```bash
docker run -p8000:8000 -v laravel/app/folder/:/root/app my-laravel-app
```

Dockercompose with Oracle database here:
```yml
version: '3'

services:
   oracledb:
     image: wnameless/oracle-xe-11g
     restart: always
     ports:
      - "1521:1521"

   devapp:
     depends_on:
       - oracledb
     build:
       context: ./Dockerfiles/php7cli/
       dockerfile: Dockerfile
     image: condr/php7cli
     links:
      - oracledb
     volumes:
      - ./app:/root/app
     ports:
      - "8000:8000"

volumes:
    www:

```
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/103#issuecomment-302916965) on: **5/21/2017**

Simple instructions to run our project:
```php
docker-compose up -d devapp
```

This will create oracle database and run the app with 'php artisan serve' on port 8000. Just access [localhost:8000](http://localhost:8000) and we're done!!!!!
# [GuzzleHttp requests examples](https://github.com/adrianharabula/condr/issues/104)

> state: **open** opened by: **adrianharabula** on: **5/20/2017**

The sync version
```php
        $client = new \GuzzleHttp\Client();
        $request =  $client->get('https://webhooks.condr.me/version');
        $message = $request->getBody();
```

The Async version
```php
        $client = new \GuzzleHttp\Client();
        $promise =  $client->getAsync('https://webhooks.condr.me/version');

        $promise->then(
            function (ResponseInterface $res) {
                $msg = (string) $res->getBody();
                \Debugbar::notice(msg);
            },
            function (RequestException $e) {
                echo $e->getMessage() . "\n";
                echo $e->getRequest()->getMethod();
            }
        );
```

### Comments

# [Add current running version somewhere in the site](https://github.com/adrianharabula/condr/issues/105)

> state: **closed** opened by: **adrianharabula** on: **5/20/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/105#issuecomment-302895834) on: **5/20/2017**

this is what we currently have:
```php
        \SSH::run([
            'cd /root/condr/app',
            '/root/.config/composer/vendor/laravel/envoy/envoy run getlastcommit',
        ], function($line)
        {
            $line = str_replace("[127.0.0.1]:", '', $line);
            \Debugbar::addmessage($line, "Version");
        });
```
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/105#issuecomment-302901474) on: **5/21/2017**

Updated version using post-commit hook.
![image](https://cloud.githubusercontent.com/assets/2271038/26279619/4ad84154-3dc1-11e7-8824-1d9b79fce162.png)

# [Updates webhook code and other server related changes](https://github.com/adrianharabula/condr/pull/106)

> state: **closed** opened by: **adrianharabula** on: **5/21/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/106)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/106#issuecomment-302898732) on: **5/21/2017**





Reviewed 10 of 10 files at r1.
Review status: all files reviewed at latest revision, 1 unresolved discussion.

---

*[app/.gitignore, line 11 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/106#-Kkbey03M6qkmXpJeKry:-Kkbey04fWNFv5sIfc65:b-z2dscf) ([raw file](https://github.com/adrianharabula/condr/blob/0f5de9af03d74b22727d8ac79484ac0df12fc8fe/app/.gitignore#L11)):*
> ```
> .env
> composer.phar
> hicoria_rsa
> ```

this needs to be deleted

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/106)*
<!-- Sent from Reviewable.io -->

# [Legat de structură; unele pagini vor fi scoase; care vor fi acelea?](https://github.com/adrianharabula/condr/issues/107)

> state: **open** opened by: **adrianharabula** on: **5/21/2017**

Unele pagini nu ştiu ce caută... pur şi simplu încarcă siteul inutil:

- home
- about
- contact

Come on, care e funcţionalitatea acestor pagini? Tinde spre zero aproape.

Ne interesează ca userul să aibă acces la pagini gen

- groups
- products
- my profile

Şi asta fără să se gândească prea mult.

Singura cale prin care putem face asta e să îi eliminăm orice distracţie, adică orice altă pagină nerelevantă din cale.

### Comments

# [Add envoy task to migrate and seed the database](https://github.com/adrianharabula/condr/issues/108)

> state: **closed** opened by: **adrianharabula** on: **5/21/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/108#issuecomment-302920889) on: **5/21/2017**

Asta vom folosi!! https://laravel.com/docs/5.4/artisan#programmatically-executing-commands
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/108#issuecomment-302965104) on: **5/22/2017**

Done. 64abcd274dc9cbde97016c2d57c1c63d8fd0824d
# [Add envoy task to execute sql init scripts](https://github.com/adrianharabula/condr/issues/109)

> state: **closed** opened by: **adrianharabula** on: **5/21/2017**

Cum pot fi rulate astea într-un mod cât mai smooth.

Şi cum pot fi făcute să meargă şi pe windows. Envoy de exemplu merge numai pe linux.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/109#issuecomment-302920881) on: **5/21/2017**

Putem folosi direct asta!!!!! https://laravel.com/docs/5.4/artisan#programmatically-executing-commands

That's much better.
# [Restore login form back to original width](https://github.com/adrianharabula/condr/issues/110)

> state: **closed** opened by: **adrianharabula** on: **5/21/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/110#issuecomment-303892456) on: **5/25/2017**

https://github.com/adrianharabula/condr/pull/135/commits/0f0b2e51250ec4abf1958971a2b7fa93eccf0025
# [Add git hook version scripts to repo](https://github.com/adrianharabula/condr/issues/111)

> state: **closed** opened by: **adrianharabula** on: **5/21/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/111#issuecomment-303892406) on: **5/25/2017**

https://github.com/adrianharabula/condr/pull/135/commits/5a246fe46fb3a0c7b4b4b500a0ea24433133b361
# [Key points for presentation on 22 may](https://github.com/adrianharabula/condr/issues/112)

> state: **open** opened by: **adrianharabula** on: **5/21/2017**

Câteva puncte despre care putem vorbi:
- strong database structure
- eloquent relationships usecases
- how we implemented one to many, many to many, and polimorphic many to many

În mare suntem bine cu proiectul, dar mai e puţin timp şi nu le putem face pe toate. Va trebui să vorbim cu proful ce am mai putea face. Ne va ajuta enorm dacă ne va da hinturi.

Mai adăugaţi şi voi. Ideea e să selectăm câteva idei bune pe care să le prezentăm mâine.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/112#issuecomment-303061467) on: **5/22/2017**

preferences legate de user sau grup, sa se faca disttinctia
# [Ce plan au fetele?](https://github.com/adrianharabula/condr/issues/113)

> state: **open** opened by: **adrianharabula** on: **5/21/2017**

Deseară ne întâlnim pe [appear.in](http://appear.in/condr). Vom discuta statusul proiectului şi ce facem săptămâna următoare, încât este ultima săptămână de lucru.

În sfârşit ne apropiem de final.
:)

@elis47 @Madalina-Buza @Elena-Anghelina 



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/113#issuecomment-302958234) on: **5/21/2017**

Mâine la 10am poate ne vedem la facultate, măcar să discutăm ce vom prezenta la laborator.
# [Inspire our readme from official laravel package readme](https://github.com/adrianharabula/condr/issues/114)

> state: **closed** opened by: **adrianharabula** on: **5/21/2017**

This is the original https://github.com/laravel/laravel/blob/master/readme.md

### Comments

# [System notificări, de concretizat](https://github.com/adrianharabula/condr/issues/115)

> state: **closed** opened by: **adrianharabula** on: **5/21/2017**

Momentan nu avem un standard pentru notificări, dacă vrei să afişezi o eroare, nu ştii exact cum să faci.

Trebuie făcut ceva simplu.

Gen, dacă ai o eroare, scrii asta şi va apărea asta aici.

Bările acelea colorate ar putea fi cu buton X în dreapta pentru a putea fi închise.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/115#issuecomment-303892357) on: **5/25/2017**

https://github.com/adrianharabula/condr/pull/135/commits/168b14ed1a11631e50058e0efed30b214e54e095
# [Redesign pagina products](https://github.com/adrianharabula/condr/issues/116)

> state: **open** opened by: **adrianharabula** on: **5/21/2017**

Pagina cu produse arată zici că sunt grupuri:
![image](https://cloud.githubusercontent.com/assets/2271038/26284692/11dc1fc2-3e4a-11e7-9ce4-8ce32e6f4231.png)

Ar trebui regândită. Surse de inspiraţie http://demo.simplcommerce.com/basic-phones

Aşa ceva arată muuuuult mai bine, chiar zici că sunt produse
![image](https://cloud.githubusercontent.com/assets/2271038/26284699/31c39e64-3e4a-11e7-80f9-cbf2839bf971.png)


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/116#issuecomment-303321803) on: **5/23/2017**

Pentru a separa caracteristicile putem folosi asta https://stackoverflow.com/a/1125740
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/116#issuecomment-303325272) on: **5/23/2017**

pentru a selecta anumite caracteristici
![image](https://cloud.githubusercontent.com/assets/2271038/26344745/5d2dfa8a-3fa9-11e7-9e6d-0f03af0141ca.png)

# [Semi automated characteristicstable seeder](https://github.com/adrianharabula/condr/pull/117)

> state: **closed** opened by: **adrianharabula** on: **5/22/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/117)
<!-- Reviewable:end -->


### Comments

# [test pull request](https://github.com/adrianharabula/condr/pull/118)

> state: **closed** opened by: **elis47** on: **5/22/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/118)
<!-- Reviewable:end -->


### Comments

# [added search bar functionality for products page](https://github.com/adrianharabula/condr/pull/119)

> state: **closed** opened by: **elis47** on: **5/23/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/119)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/119#issuecomment-303291527) on: **5/23/2017**





Reviewed 12 of 12 files at r1.
Review status: all files reviewed at latest revision, 3 unresolved discussions.

---

*[.gitignore, line 5 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/119#-Kknfu1ei8P4YpRQNE74:-Kknfu1fsp5dpXgSHtTM:bhpwav7) ([raw file](https://github.com/adrianharabula/condr/blob/80e9356a5cc55018cdbf93771823b1cca2d3f516/.gitignore#L5)):*
> ```
> app/config/algolia\.php
> 
> app/config/scout\.php
> ```

o să vedem aici cum facem cu fişierele de configurare. Trebuie pe cât posibil să evităm punerea datelor de autentificare pe git, dar în acelaşi timp fişierele astea ar trebui să fie pe git

---

*[app/app/Http/Controllers/GroupsController.php, line 28 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/119#-KkngQC4DBHNxeAG-QYO:-KkngQC5hLbGZFTcHAI_:bo3kmwv) ([raw file](https://github.com/adrianharabula/condr/blob/80e9356a5cc55018cdbf93771823b1cca2d3f516/app/app/Http/Controllers/GroupsController.php#L28)):*
> ```PHP
>   function search(Request $request) {
>     $name = $request->group_name;
>     $groups = Group::search($name)->get();
> ```

uite ce frumos arată searchul :)

---

*[app/resources/views/addpreferences.blade.php, line 24 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/119#-KkngZiJpedYrePCWiMW:-KkngZiJpedYrePCWiMX:btump5u) ([raw file](https://github.com/adrianharabula/condr/blob/80e9356a5cc55018cdbf93771823b1cca2d3f516/app/resources/views/addpreferences.blade.php#L24)):*
> ```PHP
>                 <div class="checkbox">
>                   <label>
>                     <input name="wanted" type="checkbox" value="">I want the following characteristics
> ```

ce legătură are asta cu modificările pentru search?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/119)*
<!-- Sent from Reviewable.io -->

# [Add scout credentials to .env](https://github.com/adrianharabula/condr/pull/120)

> state: **closed** opened by: **adrianharabula** on: **5/23/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/120)
<!-- Reviewable:end -->


### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/120#issuecomment-303365869) on: **5/23/2017**





Reviewed 3 of 3 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/120)*
<!-- Sent from Reviewable.io -->

# [Arată mesaj no products founds la sărci când nu găseşte rezultate](https://github.com/adrianharabula/condr/issues/121)

> state: **closed** opened by: **adrianharabula** on: **5/23/2017**



### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/121#issuecomment-303392676) on: **5/23/2017**

Solved here #123 
# [fix unique constraint for group_user many to many relationship](https://github.com/adrianharabula/condr/pull/122)

> state: **closed** opened by: **adrianharabula** on: **5/23/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/122)
<!-- Reviewable:end -->


### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/122#issuecomment-303383583) on: **5/23/2017**





Reviewed 2 of 2 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/122)*
<!-- Sent from Reviewable.io -->

# [added #style to products,preferences&viewGroup pages](https://github.com/adrianharabula/condr/pull/123)

> state: **closed** opened by: **elis47** on: **5/23/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/123)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/123#issuecomment-303383929) on: **5/23/2017**





Reviewed 4 of 4 files at r1.
Review status: all files reviewed at latest revision, 2 unresolved discussions.

---

*[app/resources/views/products.blade.php, line 67 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/123#-KkpIUh9-eSk0f9XSaNE:-KkpIUhAPTBmJSPEXyY3:b7zs8e6) ([raw file](https://github.com/adrianharabula/condr/blob/4644ea7a46f8ea6dab3cfa9e57c014777a12fc30/app/resources/views/products.blade.php#L67)):*
> ```PHP
>                 <ul>
>                   <li> Oups! We haven't found any product in our database...</li>
>                 </ul>
> ```

suuuuupperr!!

---

*[app/resources/views/viewGroup.blade.php, line 29 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/123#-KkpIXhTdFWCMNiNijPp:-KkpIXhTdFWCMNiNijPq:btlyovk) ([raw file](https://github.com/adrianharabula/condr/blob/4644ea7a46f8ea6dab3cfa9e57c014777a12fc30/app/resources/views/viewGroup.blade.php#L29)):*
> ```PHP
>           <div class="col-md-3">
>             <a class="thumbnail pull-left" href="#"> <img class="media-object" src="http://lorempixel.com/300/400/abstract/" style="width:100%;"> </a>
>           </div>
> ```

avem şi imagini! :)

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/123)*
<!-- Sent from Reviewable.io -->

# [fix image size in seeder](https://github.com/adrianharabula/condr/pull/124)

> state: **closed** opened by: **adrianharabula** on: **5/23/2017**

Fix product page styles

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/124)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/124#issuecomment-303391052) on: **5/23/2017**





Reviewed 1 of 1 files at r1, 1 of 1 files at r2.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/124)*
<!-- Sent from Reviewable.io -->

# [added #style to addpreferences,groups,preferences&viewGroup pages](https://github.com/adrianharabula/condr/pull/125)

> state: **closed** opened by: **elis47** on: **5/23/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/125)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/125#issuecomment-303406037) on: **5/23/2017**





Reviewed 4 of 4 files at r1.
Review status: all files reviewed at latest revision, 1 unresolved discussion.

---

*[app/resources/views/mygroups.blade.php, line 30 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/125#-Kkp_y-dcEgI2v9GFZw-:-Kkp_y-exypWY2Tl69RA:bmlr55b) ([raw file](https://github.com/adrianharabula/condr/blob/6fc57ab71a8981092c2b16bd368da9261745fd54/app/resources/views/mygroups.blade.php#L30)):*
> ```PHP
>    				                                </div>
>    				                            </td>
>                                        <td class="col-md-0">
> ```

col-md-0??? wtf is this?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/125)*
<!-- Sent from Reviewable.io -->

# [added delete functionality to myproduct&mygroups pages](https://github.com/adrianharabula/condr/pull/126)

> state: **closed** opened by: **elis47** on: **5/23/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/126)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/126#issuecomment-303416425) on: **5/23/2017**





Reviewed 7 of 7 files at r1.
Review status: all files reviewed at latest revision, 1 unresolved discussion.


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/126)*
<!-- Sent from Reviewable.io -->

# ["add product" functionality added](https://github.com/adrianharabula/condr/pull/127)

> state: **closed** opened by: **elis47** on: **5/23/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/127)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/127#issuecomment-303745964) on: **5/24/2017**





Reviewed 4 of 4 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved, some commit checks failed.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/127)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/127#issuecomment-303746664) on: **5/24/2017**

<img class="emoji" title=":lgtm:" alt=":lgtm:" align="absmiddle" src="https://reviewable.io/lgtm.png" height="20" width="61"/>

---

Reviewed 3 of 3 files at r2.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/127#-:-KkuuytbO22M55OtcrqB:bnfp4nl)*
<!-- Sent from Reviewable.io -->

# [stylized mygroups,mypreferences pages](https://github.com/adrianharabula/condr/pull/128)

> state: **closed** opened by: **elis47** on: **5/24/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/128)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/128#issuecomment-303747974) on: **5/24/2017**





Reviewed 3 of 3 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/128)*
<!-- Sent from Reviewable.io -->

# [added major style changes to many pages](https://github.com/adrianharabula/condr/pull/129)

> state: **closed** opened by: **elis47** on: **5/24/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/129)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/129#issuecomment-303840618) on: **5/24/2017**





Reviewed 13 of 13 files at r1.
Review status: all files reviewed at latest revision, 5 unresolved discussions.

---

*[app/public/css/style.css, line 174 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw4kMl6X475hIOSwp2:-Kkw4kMmyeXBADzch8H5:b-8fx2u7) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/public/css/style.css#L174)):*
> ```CSS
> button.btn.btn-primary.my-btn:hover,
> a.btn.btn-primary.my-btn:hover{
> 	background: #85144B;
> ```

:+1: 

---

*[app/resources/views/addpreferences.blade.php, line 10 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw4pFs1ffTx-96qV84:-Kkw4pFs1ffTx-96qV85:bppdmud) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/addpreferences.blade.php#L10)):*
> ```PHP
>       <div class="panel panel-default">
>         <div class="panel-heading text-center">
>           <h4><b>Enter your preferences here and let's get started!</b></h4>
> ```

ori h4 ori îngroşat, nu poţi să le ai pe ambele

---

*[app/resources/views/addpreferences.blade.php, line 124 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw5UeFLxzWasHUKjW4:-Kkw5UeFLxzWasHUKjW5:bn9bgc2) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/addpreferences.blade.php#L124)):*
> ```PHP
>     font-family: inherit;
>     font-size: inherit;
>     line-height: 1.9;
> ```

1.9 ce? pixel, %, em, etc?

---

*[app/resources/views/viewProduct.blade.php, line 38 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw6DP75ZvxAaOy5Zq4:-Kkw6DP75ZvxAaOy5Zq5:b-kdayy9) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/viewProduct.blade.php#L38)):*
> ```PHP
>             @forelse ($product->characteristics as $characteristic)
>                 <h5>
>                   <button type="button" class="btn btn-danger btn-circle" data-toggle="tooltip" title="Add me to your preferences!">
> ```

ffffffff bine!!!!! <3

---

*[app/resources/views/layouts/app.blade.php, line 22 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/129#-Kkw6qUb3-VVP16roPpY:-Kkw6qUb3-VVP16roPpZ:bhcup9) ([raw file](https://github.com/adrianharabula/condr/blob/d35c3b23ace202bf8e36e721e47aaf32ca0bfece/app/resources/views/layouts/app.blade.php#L22)):*
> ```PHP
> 
>     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
> ```

avem inclus de 2 ori bootstrapul, să decidem pe care să îl lăsăm

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/129)*
<!-- Sent from Reviewable.io -->

# [add_characteristic feature implemented](https://github.com/adrianharabula/condr/pull/130)

> state: **closed** opened by: **elis47** on: **5/24/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/130)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/130#issuecomment-303842445) on: **5/24/2017**

<img class="emoji" title=":lgtm:" alt=":lgtm:" align="absmiddle" src="https://reviewable.io/lgtm.png" height="20" width="61"/>

---

Reviewed 5 of 5 files at r1.
Review status: all files reviewed at latest revision, 2 unresolved discussions, some commit checks failed.

---

*[app/app/Http/Controllers/MyPreferencesController.php, line 41 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/130#-Kkw7K4fasrgjQKtKrdk:-Kkw7K4gKs5lhuSeeksf:bstbqlm) ([raw file](https://github.com/adrianharabula/condr/blob/2ee04ead01d4f38c2e08e97bb98760895107b29e/app/app/Http/Controllers/MyPreferencesController.php#L41)):*
> ```PHP
> 
>   function store(\App\Characteristic $characteristic, Request $request) {
>     Auth::user()->characteristics()->syncWithoutDetaching($characteristic);
> ```

fac restrictia de unicitate si din baza de date oracle; unicitate pe 3 chei


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/130#-:-Kkw8DIMSY2NoVOQfjtw:bnfp4nl)*
<!-- Sent from Reviewable.io -->

# [cleaned up code](https://github.com/adrianharabula/condr/pull/131)

> state: **closed** opened by: **elis47** on: **5/24/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/131)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/131#issuecomment-303850387) on: **5/25/2017**





Reviewed 1 of 1 files at r1, 1 of 1 files at r2.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/131)*
<!-- Sent from Reviewable.io -->

# [fix](https://github.com/adrianharabula/condr/pull/132)

> state: **closed** opened by: **adrianharabula** on: **5/25/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/132)
<!-- Reviewable:end -->


### Comments

# [problem when adding characteristic to my preferences](https://github.com/adrianharabula/condr/issues/133)

> state: **open** opened by: **adrianharabula** on: **5/25/2017**

Pur şi simplu merge aleator, uneori adaugă, alteori nu.

### Comments

# [no message showing up when no groups available](https://github.com/adrianharabula/condr/issues/134)

> state: **open** opened by: **adrianharabula** on: **5/25/2017**

![image](https://cloud.githubusercontent.com/assets/2271038/26427527/bf727936-40e5-11e7-9fed-c7ccb25282b9.png)


### Comments

# [Some work](https://github.com/adrianharabula/condr/pull/135)

> state: **closed** opened by: **adrianharabula** on: **5/25/2017**

Cleaning up code, small bug fixes.

Added error logic. See backend code
```php
        if ($exists = Auth::user()->groups->contains($group->id)) {
            $request->session()->flash('message', 'You are already in the group!');
            $request->session()->flash('alert-class', 'alert-danger');
        } else {
            Auth::user()->groups()->syncWithoutDetaching($group);
            $request->session()->flash('message', 'You have joined the group succesfully!');
        }
```
and frontend code:
```php
      @if(Session::has('message'))
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="alert {{ Session::get('alert-class', 'alert-success') }} alert-dismissable">
              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
              @if(Session::get('alert-class') === 'alert-danger')
                <strong>Error: </strong>
              @else
                <strong>Success: </strong>
              @endif
              {{ Session::get('message') }}
            </div>
          </div>
        </div>
      @endif
```

Can be used anywhere.

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/135)
<!-- Reviewable:end -->


### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/135#issuecomment-303967382) on: **5/25/2017**





Reviewed 24 of 25 files at r1.
Review status: 24 of 25 files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/135)*
<!-- Sent from Reviewable.io -->

# [get values and votes for a specific characteristic related to a product](https://github.com/adrianharabula/condr/issues/136)

> state: **closed** opened by: **adrianharabula** on: **5/25/2017**

Probably there will be a special function in model.

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/136#issuecomment-304476070) on: **5/27/2017**

not relevant anymore
# [myproducts unequal column in row](https://github.com/adrianharabula/condr/issues/137)

> state: **open** opened by: **adrianharabula** on: **5/25/2017**



### Comments

# [Implement scholarly in github pages](https://github.com/adrianharabula/condr/issues/138)

> state: **open** opened by: **adrianharabula** on: **5/25/2017**

http://scholarlyhtml.org/2011/05/03/scholarly-html-core-3/

tema asta o folosim https://pages-themes.github.io/architect/

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/138#issuecomment-303976011) on: **5/25/2017**

avem!!! scholarly!!!! https://docs.condr.me
# [add link to documentation in site](https://github.com/adrianharabula/condr/issues/139)

> state: **open** opened by: **adrianharabula** on: **5/25/2017**



### Comments

# [Fix broken join group after login](https://github.com/adrianharabula/condr/pull/140)

> state: **closed** opened by: **adrianharabula** on: **5/25/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/140)
<!-- Reviewable:end -->


### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/140#issuecomment-304109851) on: **5/25/2017**





Reviewed 2 of 2 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/140)*
<!-- Sent from Reviewable.io -->

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/140#issuecomment-304109986) on: **5/25/2017**

in sfarsiiiiit!!!! 
# [Add public/private/protected before class function declarations](https://github.com/adrianharabula/condr/issues/141)

> state: **closed** opened by: **adrianharabula** on: **5/26/2017**



### Comments

# [Use Has Many Though relationship for votes](https://github.com/adrianharabula/condr/issues/142)

> state: **open** opened by: **adrianharabula** on: **5/26/2017**



### Comments

# [Add staticpages controller](https://github.com/adrianharabula/condr/issues/143)

> state: **open** opened by: **adrianharabula** on: **5/26/2017**



### Comments

# [Weekend Sprint](https://github.com/adrianharabula/condr/issues/144)

> state: **open** opened by: **adrianharabula** on: **5/26/2017**

Nu prea mai avem timp, practic mai sunt 3 zile până la prezentare:
- [x] vineri
- [x] sâmbătă
- [ ] duminică

Ce mai putem face acum pe ultima sută de metri e finalizăm ceea ce am început. Vom renunţa în totalitate să mai adăugam funcţionalităţi iar ceea ce nu e funcţional/complet vom renunţa de asemenea.

Scopul în aceste zile este să livrăm ceva cu minim de funcţionalităţi, dar funcţional.

Acel minim demo va putea face următoarele:
Intri pe site, cauţi un produs, îi vezi caracteristicile, votezi caracteristica.

Şi atât.

Să vedem cum aducem siteul în această stare, pentru că şi doar pentru atât sunt multe lucruri de făcut.

Pe lângă asta va trebui să adunăm tot ce avem prin issues, projects, pe wiki şi multe altele şi să le punem în documentaţie. Documentaţia va fi [aici](https://docs.condr.me)

- articole cu bucăţi de cod din proiectul nostru (marea majoritate le avem deja scrise în issues)
- manualul utilizatorului
- manualul programatorului

Luni vom avea şi o variantă printată care va cuprinde bucăţi din documentaţia online.

Pe scurt, acesta e planul pe zilele ce urmează.

Cine nu are chef de lucru, am rugămintea să stea deoparte. E liber să facă ce vrea dar să nu strice cheful de lucru şi la cei din jur.


### Comments

# [Implementing Repository Pattern](https://github.com/adrianharabula/condr/issues/145)

> state: **open** opened by: **adrianharabula** on: **5/26/2017**

app/Repositories/Products.php
```php
namespace App\Repositories;

use App\Product;

class Products
{
    private $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function getProduct()
    {
        return $this->product;
    }
}
```

Iar din controller facem asta:
```php
use App\Repositories\Products;
class ProductsController extends Controller
{
    function index(Products $products)
    {
        return view('products')->with('products', $products->getProduct()->all());
    }
}
```

### Comments

---
> from: [**pomirleanu**](https://github.com/adrianharabula/condr/issues/145#issuecomment-304280246) on: **5/26/2017**

Interface:
```php
interface EloquentRepositoryInterface
{

    /**
     * Get all
     *
     * @return mixed
     */
    public function getAll();


    /**
     * Get one
     *
     * @param  int $id
     *
     * @param  array $columns
     *
     * @return mixed
     */
    public function find($id, $columns = ['*']);


    /**
     * Get one by
     *
     * @param  string $field
     *
     * @param  string $value
     *
     * @param  array  $columns
     *
     * @return mixed
     */
    public function findBy($field, $value, $columns = ['*']);


    /**
     * Create
     *
     * @param array $attributes
     *
     * @return mixed
     */
    public function create(array $attributes);


    /**
     * Update
     *
     * @param       $id
     * @param array $attributes
     *
     * @return mixed
     */
    public function update($id, array $attributes);


    /**
     * Delete
     *
     * @param $id
     *
     * @return mixed
     */
    public function delete($id);
}
```

Abstract repository:
```php
abstract class EloquentRepository implements EloquentRepositoryInterface
{

    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $_model;


    /**
     * EloquentRepository constructor.
     */
    public function __construct()
    {
        $this->_model = $this->setModel();
    }


    /**
     * get model
     * @return string
     */
    abstract public function getModel();


    /**
     * Set model
     */
    public function setModel()
    {
        $this->_model = app()->make($this->getModel());
    }


    /**
     * Get All
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll()
    {
        return $this->_model->all();
    }


    /**
     * Get one
     *
     * @param       $id
     *
     * @param array $columns
     *
     * @return mixed
     */
    public function find($id, $columns = ['*'])
    {
        $result = $this->_model->find($id, $columns);

        return $result;
    }


    /**
     * Get one by
     *
     * @param string $attribute
     *
     * @param string $value
     *
     * @param array  $columns
     *
     * @return mixed
     */
    public function findBy($attribute, $value, $columns = ['*'])
    {
        $result = $this->_model->where($attribute, '=', $value)->first($columns);

        return $result;
    }


    /**
     * Create
     *
     * @param array $attributes
     *
     * @return mixed
     */
    public function create(array $attributes)
    {
        return $this->_model->create($attributes);
    }


    /**
     * Update
     *
     * @param       $id
     * @param array $attributes
     *
     * @return bool|mixed
     */
    public function update($id, array $attributes)
    {
        $result = $this->find($id);
        if ($result) {
            $result->update($attributes);

            return $result;
        }

        return false;
    }


    /**
     * Update entity
     *
     * @param       $_model
     * @param array $attributes
     *
     * @return bool|mixed
     */
    public function updateEntity($_model, array $attributes)
    {
        if ($_model) {
            $_model->update(array_except($attributes, 'email'));

            return $_model;
        }

        return false;
    }


    /**
     * Delete
     *
     * @param $id
     *
     * @return bool
     */
    public function delete($id)
    {
        $result = $this->find($id);
        if ($result) {
            $result->delete();

            return true;
        }

        return false;
    }
}
```
Product repository:
```php
class ProductRepository extends EloquentRepository
{

    public function getModel()
    {
        return ProductModel::class;
    }
}
```

Product Controller:
```php
class ProductController extends Controller
{

    /**
     * @var \App\Repositories\Product\ProductRepository
     */
    private $_productRepository;


    /**
     * ProductController constructor.
     *
     * @param \App\Repositories\Product\ProductRepository $_productRepository
     */
    public function __construct(ProductRepository $_productRepository)
    {
        $this->_productRepository = $_productRepository;
    }

   public function getProducts()
    {
        return view('products')->with('products',$this->_productRepository->all());
    }
```
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/145#issuecomment-304497067) on: **5/28/2017**

thanks!!! https://github.com/adrianharabula/condr/blob/953620aad8b08178940ab7934af6a798b1189c16/app/app/Repositories/ProductRepository.php
# [Major refactoring; implements Repository Pattern and many more](https://github.com/adrianharabula/condr/pull/146)

> state: **closed** opened by: **adrianharabula** on: **5/27/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/146)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/146#issuecomment-304443060) on: **5/27/2017**





Review status: 0 of 46 files reviewed at latest revision, 7 unresolved discussions.

---

*[app/app/Characterizable.php, line 0 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8Mwkivvj2bp70RbG7:-Kl8Mwkj8xjAoijt0W4Z:b-u13cp1) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Characterizable.php#L0)):*
se pare că nu ne mai trebuie, am simplificat puţin lucrurile

---

*[app/app/Product.php, line 6 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8N6eOgtVp7trVXNqN:-Kl8N6eOgtVp7trVXNqO:b93ziwx) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Product.php#L6)):*
> ```PHP
> 
> use Illuminate\Database\Eloquent\Model;
> use Laravel\Scout\Searchable;
> ```

aici trebuie să scoatem searchable pentru că folosim alt cod pentru search acum

---

*[app/app/Product.php, line 41 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8NEY46DM2kOcEstCi:-Kl8NEY46DM2kOcEstCj:bv6r64f) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Product.php#L41)):*
> ```PHP
>     public function characteristics()
>     {
>         return $this->belongsToMany(Characteristic::class, 'product_characteristic_vote', 'product_id', 'characteristic_id');
> ```

aici avem relaţie many to many cu 3 pivoţi, poduct_id, characteristic_id şi vote_id

---

*[app/app/Http/Controllers/ContactFormController.php, line 10 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8NcbkrEmfdbVetd3S:-Kl8NcbkrEmfdbVetd3T:bnsr2ib) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Http/Controllers/ContactFormController.php#L10)):*
> ```PHP
> {
>     public function getFormController() {
> ```

this needs to be completed

---

*[app/app/Http/Controllers/ProductsController.php, line 64 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8O5rC1_dCc5t9yXnb:-Kl8O5rC1_dCc5t9yXnc:b-ks2ge0) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Http/Controllers/ProductsController.php#L64)):*
> ```PHP
>     {
>         return view('product.list')
>             ->with('products',$this->_productRepository->searchProducts($data));
> ```

aici avem noul search nativ

---

*[app/app/Http/Controllers/StaticPageController.php, line 11 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8OKw8Cy9M4KxUStKV:-Kl8OKw8Cy9M4KxUStKW:b-s8u38g) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/app/Http/Controllers/StaticPageController.php#L11)):*
> ```PHP
>     public function staticPage()
>     {
>         return view('static'.request()->route()->getName());
> ```

avem aici un controller care procesează paginili statice, nu e nevoie să ai câte un controller pentru fiecare rută statică

---

*[app/routes/web.php, line 110 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/146#-Kl8PDV_1Q19IzUQt_ik:-Kl8PDV_1Q19IzUQt_il:b-up6mrv) ([raw file](https://github.com/adrianharabula/condr/blob/31aacc7d798578fdd68c6892aa6ec598963a358d/app/routes/web.php#L110)):*
> ```PHP
> Route::get('{route}', function ($route) {
>     return view('static.'.$route);
> });
> ```

aici nici nu mai avem nevoie de controller pentru routes statice :))

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/146)*
<!-- Sent from Reviewable.io -->

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/146#issuecomment-304516276) on: **5/28/2017**





Reviewed 1 of 10 files at r2.
Review status: 1 of 47 files reviewed at latest revision, 7 unresolved discussions.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/146)*
<!-- Sent from Reviewable.io -->

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/146#issuecomment-304516389) on: **5/28/2017**





Reviewed 1 of 59 files at r1.
Review status: 2 of 47 files reviewed at latest revision, 7 unresolved discussions.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/146)*
<!-- Sent from Reviewable.io -->

# [ads documentation draft](https://github.com/adrianharabula/condr/pull/147)

> state: **closed** opened by: **adrianharabula** on: **5/27/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/147)
<!-- Reviewable:end -->


### Comments

# [Cuprins documentaţie](https://github.com/adrianharabula/condr/issues/148)

> state: **open** opened by: **adrianharabula** on: **5/28/2017**

Un exemplu complet a ceea ce trebuie noi să avem la sfârşit este un proiect din anii trecuţi ce se află [aici](http://students.info.uaic.ro/~dordorut.calcai/), de pe vremea când corecta buraga priectele.

Documentaţia noastră va avea de asemenea 2 părţi (2 documente diferite):
## Manualul utilizatorului
exemplu live [aici](http://students.info.uaic.ro/~dordorut.calcai/BooM_user_manual.pdf), documentul nostru [aici](https://docs.google.com/document/d/1-VdK5yVuo_foDSJQWXrnwwmNm3sMfgaGezPBLMx7D2Q/edit?usp=sharing)
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
# [Is there a way to automatically import new products with characteristics?](https://github.com/adrianharabula/condr/issues/149)

> state: **open** opened by: **adrianharabula** on: **5/28/2017**

When a product is not found, can we search it and import it automatically?

API-uri disponibile am avea:

- http://www.upcitemdb.com
- https://upcdatabase.org

Exemplu răspuns upcitemdb:
Request url: https://api.upcitemdb.com/prod/trial/lookup?upc=885909918188
Response body:
```json
{
  "code": "OK",
  "total": 1,
  "offset": 0,
  "items": [
    {
      "ean": "0885909918188",
      "title": "Apple MacBook Pro 13.3&quot; Retina Display Notebook Computer 2.7GHz Dual-core Intel Core i5 (Broadwell) 8GB DDR3 RAM 256GB PCIe Flash Storage (Early 2015)",
      "description": "A Spectacular display is just the beginning   A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performanc",
      "upc": "885909918188",
      "brand": "Apple",
      "model": "MF840LL/A",
      "color": "Silver",
      "size": "13.3in. Retin A Display",
      "dimension": "",
      "weight": "",
      "currency": "",
      "lowest_recorded_price": 250,
      "images": [
        "http://images.highspeedbackbone.net/SKUimages/large/40300998_vmain01_at_mn_4719591.jpg",
        "https://i5.walmartimages.com/asr/19d6cafd-e520-4a6f-b6c3-3ddcbc2cbfe5_1.b191d88d51a33125c7334c23ccafd17c.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
        "http://img.bbystatic.com/BestBuy_US/images/products/8532/8532029_sc.jpg",
        "http://img1.r10.io/PIC/100026633/0/1/250/100026633.jpg",
        "http://images.frys.com/art/product/300x300/8408658.01.prod.jpg",
        "http://image1.cc-inc.com/prod/13446000/13446712_xlg.jpg",
        "http://images.qvc.com/is/image/e/03/e282303.001?$uslarge$",
        "http://images10.newegg.com/ProductImageCompressAll200/A5E6_1_20150416344022063.jpg",
        "http://www.adorama.com/images/large/ACMF840LLA.JPG",
        "http://images.prosperentcdn.com/images/250x250/content.abt.com/media/images/products/l_MF841LLA.jpg"
      ],
      "offers": [
        {
          "merchant": "Abt",
          "domain": "abt.com",
          "title": "Apple MacBook Pro 13.3\"\" With Retina Display 2.7GHz Intel Core i5 Laptop Computer",
          "currency": "",
          "list_price": "",
          "price": 1463.7,
          "shipping": "",
          "condition": "New",
          "availability": "",
          "link": "http://www.upcitemdb.com/norob/alink/?id=u2s233230363b4d4y2&tid=1&seq=1495966973&plt=a91fdcbd73c8bd4e60a9714aeee31a9d",
          "updated_t": 1465780889
        },
        {
          "merchant": "Adorama",
          "domain": "adorama.com",
          "title": "Apple MacBook Pro 13.3&quot; Retina Display Notebook Computer 2.7GHz Dual-core Intel Core i5 (Broadwell) 8GB DDR3 RAM 256GB PCIe Flash Storage (Early 2015)",
          "currency": "",
          "list_price": "",
          "price": 1399,
          "shipping": "Free Shipping",
          "condition": "New",
          "availability": "",
          "link": "http://www.upcitemdb.com/norob/alink/?id=u2q2y2t20333f4d4v2&tid=1&seq=1495966973&plt=3a991c30da14501f7312723dad5d133c",
          "updated_t": 1474863552
        },
        {
          "merchant": "Newegg.com",
          "domain": "newegg.com",
          "title": "Apple MacBook Pro Core i5 2.7GHz (Broadwell) 256GB SSD 8GB 13.3\" Retina (2560x1600) BT Mac OS X 10.10 Yosemite FaceTime Camera (Early 2015)",
          "currency": "",
          "list_price": "",
          "price": 1400,
          "shipping": "19.99",
          "condition": "New",
          "availability": "",
          "link": "http://www.upcitemdb.com/norob/alink/?id=v2p213x2z213e4d4v2&tid=1&seq=1495966973&plt=deb4f6650100517f14a271418d220b45",
          "updated_t": 1479210487
        },
        {
          "merchant": "QVC.com",
          "domain": "qvc.com",
          "title": "Apple 13\" MacBook Pro - Core i5, 8GB RAM, 256GB SSD & Software",
          "currency": "",
          "list_price": 2449.96,
          "price": 2229.96,
          "shipping": "26.22",
          "condition": "New",
          "availability": "",
          "link": "http://www.upcitemdb.com/norob/alink/?id=u2q213u2w21394c4z2&tid=1&seq=1495966973&plt=40ad7a815d023aff6248c1274a3e0047",
          "updated_t": 1495194894
        },
        {
          "merchant": "MacMall",
          "domain": "macmall.com",
          "title": "Apple MF840LL/A 13.3 MacBook Pro with Retina display  Dual-core Intel Core i5 2.7GHz (5th generation processor)  8GB RAM  256GB PCIe-based flash storage  Intel",
          "currency": "",
          "list_price": 1499,
          "price": 1449,
          "shipping": "0",
          "condition": "New",
          "availability": "",
          "link": "http://www.upcitemdb.com/norob/alink/?id=u2q2y2u203y2a484s2&tid=1&seq=1495966973&plt=05ee68a4c8840f1d1d98683c2b4fd5ea",
          "updated_t": 1493828651
        },
        {
          "merchant": "Frys Electronics",
          "domain": "frys.com",
          "title": "NEW! Apple 13.3\" MacBook Pro with Retina display, Dual-core Intel Core i5 2.7GHz (5th generation processor), 8GB RAM, 256GB PCIe-based flash storage, Intel Iris Graphics 6100, Two Thunderbolt 2 ports, 802.11ac Wi-Fi, 10 hours of battery life, OS X Yosemit",
          "currency": "",
          "list_price": "",
          "price": 826.2,
          "shipping": "",
          "condition": "New",
          "availability": "",
          "link": "http://www.upcitemdb.com/norob/alink/?id=u2r2y2u2w2z29454u2&tid=1&seq=1495966973&plt=71b0016c76923334976e1e1276fcb654",
          "updated_t": 1488643982
        },
        {
          "merchant": "Rakuten(Buy.com)",
          "domain": "rakuten.com",
          "title": "Apple MacBook Pro 13-inch - Retina 2.7Ghz 8GB 256GB - Mar 2015 / MF840LL/A Apple MacBook Pro MF840LL/A 13.3-Inch Laptop with Retina Display (256 GB) NEWEST VERSION",
          "currency": "",
          "list_price": "",
          "price": 1456.39,
          "shipping": "Free Shipping",
          "condition": "New",
          "availability": "Out of Stock",
          "link": "http://www.upcitemdb.com/norob/alink/?id=u2q2z2x233z2d454r2&tid=1&seq=1495966973&plt=99f13618f01e1dff11e4be71651ba804",
          "updated_t": 1495830797
        },
        {
          "merchant": "Best Buy",
          "domain": "bestbuy.com",
          "title": "Apple - Macbook Pro With Retina Display (latest Model) - 13.3\" Display - 8gb Memory - 256gb Flash Storage - Silver",
          "currency": "",
          "list_price": "",
          "price": 1499.99,
          "shipping": "",
          "condition": "New",
          "availability": "",
          "link": "http://www.upcitemdb.com/norob/alink/?id=u2q2y2y243z2a494t2&tid=1&seq=1495966973&plt=675f0e0e62217e008130da95bf5559c4",
          "updated_t": 1486163626
        },
        {
          "merchant": "Wal-Mart.com",
          "domain": "walmart.com",
          "title": "Apple MacBook Pro 13\" Retina Display MF840LLA Intel Core i5 2.7GHz 8GB 256GB SSD",
          "currency": "",
          "list_price": "",
          "price": 2499.99,
          "shipping": "Free Shipping",
          "condition": "New",
          "availability": "Out of Stock",
          "link": "http://www.upcitemdb.com/norob/alink/?id=u2r2x2v223z264d4u2&tid=1&seq=1495966973&plt=68d38043ead4b8c58b21e94c52f8bf48",
          "updated_t": 1495839438
        },
        {
          "merchant": "TigerDirect",
          "domain": "tigerdirect.com",
          "title": "Apple MacBook Pro - MF840LL/A",
          "currency": "",
          "list_price": "",
          "price": 1494,
          "shipping": "",
          "condition": "New",
          "availability": "",
          "link": "http://www.upcitemdb.com/norob/alink/?id=v2p24323y2637464s2&tid=1&seq=1495966973&plt=66b097fc123d469aeb62b2848a4808f0",
          "updated_t": 1495919811
        },
        {
          "merchant": "Blinq.com",
          "domain": "blinq.com",
          "title": "Apple MacBook Pro 13.3in Laptop i5 3.1GHz 8GB 512GB Mac OS X (MF843LL/A)",
          "currency": "",
          "list_price": "",
          "price": 1510.39,
          "shipping": "",
          "condition": "New",
          "availability": "",
          "link": "http://www.upcitemdb.com/norob/alink/?id=u2x2531323y2c464x2&tid=1&seq=1495966973&plt=0124fecae18fb0c7ba7597c53ba0280c",
          "updated_t": 1478056130
        },
        {
          "merchant": "Newegg Business",
          "domain": "neweggbusiness.com",
          "title": "Apple MacBook Pro Core i5 2.7GHz (Broadwell) 256GB SSD 8GB 13.3\" Retina (2560x1600) BT Mac OS X 10.10 Yosemite FaceTime Camera (Early 2015)",
          "currency": "",
          "list_price": "",
          "price": 1527.69,
          "shipping": "Free Shipping",
          "condition": "New",
          "availability": "Out of Stock",
          "link": "http://www.upcitemdb.com/norob/alink/?id=v2o263v2y2337464z2&tid=1&seq=1495966973&plt=4a640983f6c43696ba10ec5c19027b3b",
          "updated_t": 1495894981
        }
      ],
      "elid": "152538538811"
    }
  ]
}
```

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/149#issuecomment-304505810) on: **5/28/2017**

Pentru a căuta upc code pentru un produs putem folosi

- https://www.barcodelookup.com doar că preţurile încep de la 99$ pe lună :))
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/149#issuecomment-304551614) on: **5/29/2017**

Am găsit şi documentaţia pentru apiul de mai sus. http://www.upcitemdb.com/wp/docs/main/development/responses/
---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/149#issuecomment-305310984) on: **5/31/2017**

Api pentru scanarea codului de bare
https://www.microsoft.com/en-us/store/p/scandit-barcode-scanner/9nblggh4sskh
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/149#issuecomment-305402786) on: **6/1/2017**

hmm... interesant... eu n-am windows şi nu îmi merge, dar nu m-am gândit să caut librărie de scanat barcode pe pc.

Am găsit [zbar-tools](http://zbar.sourceforge.net/) utilitar cross platform care scanează codul de bare. Nu ştiu cum să îl implementăm la noi pe site, dar am reuşit să scanez cu el coduri de bare cu pc-ul :))

![image](https://cloud.githubusercontent.com/assets/2271038/26667442/f186625c-46ad-11e7-810c-01b24d2249aa.png)

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/149#issuecomment-305405426) on: **6/1/2017**

Paşii ca să scanăm cod de bare ar fi

1. să găsim un cititor de carduri pe telefon/pc(pe telefon avem [ionic](https://ionicframework.com/docs/native/barcode-scanner/)) (de partea asta mă pot ocupa eu)
3. trimitem codul de bare într-un request la aplicaţia noastră laravel: ex: [condr.me/lookup/885909918188](condr.me/lookup/885909918188)
4. din laravel facem un request către unul sau mai multe apiuri care pot procesa acest cod, de exemplu [https://api.upcitemdb.com/prod/trial/lookup?upc=885909918188](https://api.upcitemdb.com/prod/trial/lookup?upc=885909918188) Folosim guzzle http pentru asta. Mai multe info [aici](http://wern-ancheta.com/blog/2016/01/20/making-http-requests-with-guzzle/)
3. datele obţinute de aici, sunt în format json, le putem folosi cum vrem noi
4. end of story
---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/149#issuecomment-305640695) on: **6/2/2017**

3,4,5 done; 1,2 to go 👍 
# [Generate upc for product](https://github.com/adrianharabula/condr/issues/150)

> state: **open** opened by: **adrianharabula** on: **5/28/2017**

Am putea folosi extensia asta https://github.com/milon/barcode

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/150#issuecomment-305960794) on: **6/3/2017**

![image](https://cloud.githubusercontent.com/assets/2271038/26752062/28074938-4850-11e7-95f0-9cea964c1602.png)

https://www.barcoderobot.com/ean-13/0123456789012/
# [Revert "Major refactoring; implements Repository Pattern and many more"](https://github.com/adrianharabula/condr/pull/151)

> state: **closed** opened by: **elis47** on: **5/28/2017**

Reverts adrianharabula/condr#146 cause i can't review all files

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/151)
<!-- Reviewable:end -->


### Comments

# [Got minimal working routes](https://github.com/adrianharabula/condr/pull/152)

> state: **closed** opened by: **adrianharabula** on: **5/28/2017**

Now these are tested and working 
/products, /product/{id}
/my/account, /my/account/change-password (get and post)
/my/products, /my/product/{id}/add (POST), /my/product{id}/delete (DELETE)

https://github.com/adrianharabula/condr/wiki/Routes-list/caca4f7a5ae1d330c33fb43503397399abbfcc23

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/152)
<!-- Reviewable:end -->


### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/152#issuecomment-304523781) on: **5/28/2017**





Reviewed 18 of 18 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/152)*
<!-- Sent from Reviewable.io -->

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/152#issuecomment-304523802) on: **5/28/2017**

GOOOOD JOOOB!!!!!
# [Cleaning unused routes](https://github.com/adrianharabula/condr/pull/153)

> state: **closed** opened by: **adrianharabula** on: **5/28/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/153)
<!-- Reviewable:end -->


### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/153#issuecomment-304539807) on: **5/28/2017**





Reviewed 3 of 3 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/153)*
<!-- Sent from Reviewable.io -->

# [Display no favorited products for my/products page](https://github.com/adrianharabula/condr/issues/154)

> state: **open** opened by: **adrianharabula** on: **5/29/2017**

Currently nothing is dispalyed.
![image](https://cloud.githubusercontent.com/assets/2271038/26532583/dffed5d0-440c-11e7-9c91-3d4959a2644c.png)


### Comments

# [How to make http request from ionic?](https://github.com/adrianharabula/condr/issues/155)

> state: **open** opened by: **adrianharabula** on: **5/29/2017**

I know it's possible, and simple... but... how!?

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/155#issuecomment-304552392) on: **5/29/2017**

În mod ideal, scanăm codul de bare (asta avem), apoi facem un request către api public. Datele obţinute le trimitem printr-un request către aplicaţia noastră care adaugă produsul în baza noastră de date. Şi aşa facem şi noi o treabă calumea cu adăugarea de produse, ea fiind foarte automată.
# [restructured database](https://github.com/adrianharabula/condr/pull/156)

> state: **closed** opened by: **elis47** on: **5/30/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/156)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/156#issuecomment-304989030) on: **5/30/2017**





Reviewed 17 of 18 files at r1.
Review status: 14 of 15 files reviewed at latest revision, 2 unresolved discussions, some commit checks failed.

---

*[app/database/migrations/2017_05_07_000028_create_votes_table.php, line 16 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/156#-KlPtr2D3ksKMkEbVCwe:-KlPtr2D3ksKMkEbVCwf:b-1sgxkf) ([raw file](https://github.com/adrianharabula/condr/blob/b3be0a94f79af7e9a7c4c2819b53cdd63266bd3f/app/database/migrations/2017_05_07_000028_create_votes_table.php#L16)):*
> ```PHP
>         Schema::create('votes', function (Blueprint $table) {
>             $table->increments('id');
>             $table->integer('value');
> ```

that's much better column name!

---

*[app/database/migrations/2017_05_07_000030_create_characteristics_table.php, line 21 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/156#-KlPtxa3V79rm2RzRg9n:-KlPtxa3V79rm2RzRg9o:brrqqim) ([raw file](https://github.com/adrianharabula/condr/blob/b3be0a94f79af7e9a7c4c2819b53cdd63266bd3f/app/database/migrations/2017_05_07_000030_create_characteristics_table.php#L21)):*
> ```PHP
>             $table->string('values');
>             $table->integer('category_id')->unsigned()->nullable();
>             $table->foreign('category_id')->references('id')->on('categories');
> ```

fie cum zici tu :))

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/156)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/156#issuecomment-305105370) on: **5/31/2017**

fixed conflicts!!!!!!
# [more fixes](https://github.com/adrianharabula/condr/pull/157)

> state: **closed** opened by: **elis47** on: **5/31/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/157)
<!-- Reviewable:end -->


### Comments

# [fix routes, controllers, repositories and views!!!!! @Madalina](https://github.com/adrianharabula/condr/pull/158)

> state: **closed** opened by: **elis47** on: **5/31/2017**

few bugs on delete buttons & 2 routes not working; work in progress

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/158)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/158#issuecomment-305298624) on: **5/31/2017**





Reviewed 25 of 25 files at r1.
Review status: all files reviewed at latest revision, 1 unresolved discussion.

---

*[app/resources/views/includes/navbar.blade.php, line 42 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/158#-KlV2_dGMfTnpgC1O-Yj:-KlV2_dGMfTnpgC1O-Yk:b-8fx2u7) ([raw file](https://github.com/adrianharabula/condr/blob/ef411b397747e402d0e292b93009dffbb6143de6/app/resources/views/includes/navbar.blade.php#L42)):*
> ```PHP
>                       <ul class="dropdown-menu my-profile">
>                         <li><a href="{{ route('my.account.index') }}">My Account</a></li>
>                         <li><a href="{{ route('my.preferences.listpreferences') }}">My Preferences</a></li>
> ```

:+1: 

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/158)*
<!-- Sent from Reviewable.io -->

# [Eroare la rularea migrării](https://github.com/adrianharabula/condr/issues/159)

> state: **closed** opened by: **adrianharabula** on: **6/1/2017**

Am încercat să fac migrarea dar mi-a dat cu fail.
![image](https://cloud.githubusercontent.com/assets/2271038/26666466/b6a826ca-46a8-11e7-9106-532ae6a390b7.png)

Nu ştiu exact de la ce. Versiunea pe care se întâmplă e 61a56fef443c5ebf392c319fab2f5e0e7cdb44d6


### Comments

# [Nu se afişează mesajul de success/eroare după ce adaugi grup la mygroup](https://github.com/adrianharabula/condr/issues/160)

> state: **open** opened by: **adrianharabula** on: **6/1/2017**

Paşi reproducere:

1. adaugă un grup la my products apăsând butonul join
2. produsul se adaugă la favorite dar nu apare mesaj verde/roşu

### Comments

# [Fix delete for my/group](https://github.com/adrianharabula/condr/issues/161)

> state: **open** opened by: **adrianharabula** on: **6/1/2017**

Formularul pentru butonul delete trebuie făcut ca aici https://github.com/adrianharabula/condr/blob/master/app/resources/views/user/favorited-products.blade.php#L67-L76

that's it :))

### Comments

# [add document user](https://github.com/adrianharabula/condr/pull/162)

> state: **closed** opened by: **adrianharabula** on: **6/1/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/162)
<!-- Reviewable:end -->


### Comments

# [added products api + data manipulation for insert!!!!](https://github.com/adrianharabula/condr/pull/163)

> state: **closed** opened by: **elis47** on: **6/1/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/163)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/163#issuecomment-305472936) on: **6/1/2017**

In lookupcontroller sunt requesturile cu apiul de la github. Pierd eu ceva sau mi se pare?
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/163#issuecomment-305554041) on: **6/1/2017**

<img class="emoji" title=":lgtm:" alt=":lgtm:" align="absmiddle" src="https://reviewable.io/lgtm.png" height="20" width="61"/>

---

Reviewed 6 of 6 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved, some commit checks failed.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/163#-:-KlZZR1ZTvvH4AwHsREy:bnfp4nl)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/163#issuecomment-305562276) on: **6/1/2017**





Reviewed 11 of 11 files at r3.
Review status: all files reviewed at latest revision, 1 unresolved discussion, some commit checks failed.

---

*[app/app/Http/Controllers/LookupController.php, line 13 at r3](https://reviewable.io:443/reviews/adrianharabula/condr/163#-KlZfJ6_zAbS-A6z20gq:-KlZfJ6_zAbS-A6z20gr:b-aujmeo) ([raw file](https://github.com/adrianharabula/condr/blob/46ef9d186ea917d44602c5d6cecbb7a10012fa76/app/app/Http/Controllers/LookupController.php#L13)):*
> ```PHP
>     public function index ()
>     {
>         $client = new \GuzzleHttp\Client(array( 'curl' => array( CURLOPT_SSL_VERIFYPEER => false, ), ));
> ```

modificarea asta e numai pentru la tine :)) pe live o sa vrem sa avem verificarea

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/163)*
<!-- Sent from Reviewable.io -->

# [added pagination, changes at groups page (now, works the buttons for delete a group and appear all error messages for join and delete )](https://github.com/adrianharabula/condr/pull/164)

> state: **closed** opened by: **Madalina-Buza** on: **6/1/2017**



<!-- Reviewable:start -->
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/adrianharabula/condr/164)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/164#issuecomment-305563742) on: **6/1/2017**





Reviewed 8 of 8 files at r1.
Review status: all files reviewed at latest revision, 1 unresolved discussion.

---

*[app/resources/views/user/favorited-groups.blade.php, line 37 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/164#-KlZgqld05NebPoQtLRF:-KlZgqlem3pdFbgs6DnD:beopjgg) ([raw file](https://github.com/adrianharabula/condr/blob/48c8d46c8be1a9cb82b03c498686a4a6f476afc8/app/resources/views/user/favorited-groups.blade.php#L37)):*
> ```PHP
>                </div>
>                <div class="col-md-2">
>                   {!! Form::open(['method' => 'DELETE', 'url'=> route('my.group.delete', $group->id)]) !!}
> ```

de ce aici nu merge deschis formularul cu "{{" simplu?

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/164)*
<!-- Sent from Reviewable.io -->

# [instrucţiuni pentru noul seeder](https://github.com/adrianharabula/condr/issues/165)

> state: **open** opened by: **adrianharabula** on: **6/2/2017**

e cineva pe aici ?
aveti ultima versiune pe git
instructiuni de folosire :
call purgedatabase(); din sql dev
pull de pe git, evident
php artisan migrate:refresh --seed should work
iar la adresa localhost:8000/lookup avem api-ul
codul de bare e pus by default in api si va va insera macbook air in baza de date cand intrati pe adresa aia 🙂
daca vrei sa inserati si alte produse, cautati codul de bare si schinbati-l din lookupcontroller ca sa populam baza de date cu produse relevante
for any further questions, i'll be on the phone :))

Instrucţiunile aparţin @elis47 

### Comments

# [Finalizare documentaţie](https://github.com/adrianharabula/condr/issues/166)

> state: **open** opened by: **adrianharabula** on: **6/3/2017**

1. Documentaţia să fie în format pdf pentru a putea fi deschisă instant.
2. Care este scopul folderului Documents_Condr de pe root? Se poate şterge?
3. Scopul principal a ceea ce face aplicaţia noastră lipseşte cu desăvârşire din documentaţie, va trebui updatat.

Ştiu că aici puteţi zice că staţi după noi să terminăm... dar nu e chiar aşa, nu aveţi nevoie să ne aşteptaţi, însă e total alegerea vostră cum lucraţi.


### Comments

# [idee afişare de câţi useri a fost favorit produsul în singleview produs](https://github.com/adrianharabula/condr/issues/167)

> state: **open** opened by: **adrianharabula** on: **6/3/2017**



### Comments

# [added ajax call](https://github.com/adrianharabula/condr/pull/168)

> state: **closed** opened by: **elis47** on: **6/3/2017**



<!-- Reviewable:start -->
This change is [Reviewable](https://reviewable.io/reviews/adrianharabula/condr/168)
<!-- Reviewable:end -->


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/168#issuecomment-305968779) on: **6/3/2017**





Reviewed 2 of 2 files at r1.
Review status: all files reviewed at latest revision, 1 unresolved discussion.

---

*[app/resources/views/layouts/app.blade.php, line 36 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/168#-Klhfl25rGbBTvx_FU9F:-Klhfl25rGbBTvx_FU9G:b-crr5kk) ([raw file](https://github.com/adrianharabula/condr/blob/15e17050a7d835a0a571ba6276b22e04b78f8ba4/app/resources/views/layouts/app.blade.php#L36)):*

o sa vedem cum facem cu jquery, tre pusa versiune compatibila cu bootstrap.

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/168)*
<!-- Sent from Reviewable.io -->

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/pull/168#issuecomment-305968804) on: **6/3/2017**





Review status: all files reviewed at latest revision, 1 unresolved discussion.

---

*[app/resources/views/layouts/app.blade.php, line 36 at r1](https://reviewable.io:443/reviews/adrianharabula/condr/168#-Klhfl25rGbBTvx_FU9F:-Klhg0RRjMyTk4AhYnfL:b-rquaz7) ([raw file](https://github.com/adrianharabula/condr/blob/15e17050a7d835a0a571ba6276b22e04b78f8ba4/app/resources/views/layouts/app.blade.php#L36)):*
> …app/resources/views/products/listproducts.blade.phpapp/resources/views/
3.2.1 e prea mare, cred cĂ maxim suportat e 3.0.0

---


*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/168)*
<!-- Sent from Reviewable.io -->

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/168#issuecomment-305971570) on: **6/3/2017**





Reviewed 1 of 3 files at r2.
Review status: 1 of 3 files reviewed at latest revision, 1 unresolved discussion.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/168)*
<!-- Sent from Reviewable.io -->

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/168#issuecomment-305976434) on: **6/3/2017**





Reviewed 2 of 3 files at r2.
Review status: all files reviewed at latest revision, 1 unresolved discussion.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/168)*
<!-- Sent from Reviewable.io -->

# [Undefined offset when introducing product with ean 0762309500581](https://github.com/adrianharabula/condr/issues/169)

> state: **closed** opened by: **adrianharabula** on: **6/3/2017**

Click this https://condr.me/lookup/0762309500581 and get invalid offset o

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/169#issuecomment-305969922) on: **6/3/2017**

Era problemă atunci când produsul nu avea poză. Fixul a fost să verificăm dacă arrayul cu imagini există înainte să îl folosim.
# [Finally we have a working database](https://github.com/adrianharabula/condr/pull/170)

> state: **closed** opened by: **adrianharabula** on: **6/3/2017**



<!-- Reviewable:start -->
This change is [Reviewable](https://reviewable.io/reviews/adrianharabula/condr/170)
<!-- Reviewable:end -->


### Comments

---
> from: [**elis47**](https://github.com/adrianharabula/condr/pull/170#issuecomment-305976380) on: **6/3/2017**





Reviewed 16 of 16 files at r1.
Review status: all files reviewed at latest revision, all discussions resolved.

---



*Comments from [Reviewable](https://reviewable.io:443/reviews/adrianharabula/condr/170)*
<!-- Sent from Reviewable.io -->

# [Fixed duplicated entries for offers and characterizables](https://github.com/adrianharabula/condr/pull/171)

> state: **open** opened by: **adrianharabula** on: **6/3/2017**



<!-- Reviewable:start -->
This change is [Reviewable](https://reviewable.io/reviews/adrianharabula/condr/171)
<!-- Reviewable:end -->


### Comments

