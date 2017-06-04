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
&#x60;&#x60;&#x60;
DROP TABLESPACE aplicatie INCLUDING CONTENTS CASCADE CONSTRAINTS; 

CREATE TABLESPACE aplicatie
  DATAFILE &#x27;tbs_perm_0001.dat&#x27; 
    SIZE 500M
    REUSE
    AUTOEXTEND ON NEXT 50M MAXSIZE 2000M
/
    
CREATE TEMPORARY TABLESPACE aplicatie
  TEMPFILE &#x27;tbs_temp_0001.dbf&#x27;
    SIZE 5M
    AUTOEXTEND ON
/    

CREATE UNDO TABLESPACE aplicatie
  DATAFILE &#x27;tbs_undo_0001.dbf&#x27;
    SIZE 5M 
    AUTOEXTEND ON
  RETENTION GUARANTEE
/


drop user student cascade;
create user student identified by STUDENT;
alter user student default tablespace aplicatie quota 1990M on aplicatie;

grant connect to student;
grant all privileges to student;

&#x60;&#x60;&#x60;

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
&#x60;&#x60;&#x60;
Basic information
cpu CPU: 2x XEON E7 ram RAM: 4096 MB DDR3, 1333 - 1600 MHz
hdd SSD: 35 GB SAS SATA3 ipv4 IPv4: 1x
backupHdd HDD for backups: 0 GB
Ubuntu 16.04 x64
&#x60;&#x60;&#x60;

Linode VPS (5$ / lună)
&#x60;&#x60;&#x60;
Linode 1024
20GB Storage
1 CPU Core
1TB XFER
$5/mo or (.0075/hr)
Ubuntu 16.04 LTS x64
&#x60;&#x60;&#x60;

Digitalocean VPS (5$ / lună)
&#x60;&#x60;&#x60;
512 MB Memory / 20 GB Disk + 14 GB / FRA1 - Ubuntu 16.04.1 x64
&#x60;&#x60;&#x60;
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

- Files MUST use only &lt;?php and &lt;?&#x3D; tags.
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
&#x60;&#x60;&#x60;
docker run -d -p 9000:9000 \
-v /root/webhook/hooks.json:/etc/webhook/hooks.json \
-v /root/webhook/pull.sh:/var/scripts/pull.sh \
-v /root/webhook/.ssh:/root/.ssh \
-v /root/condr:/root/condr
--name&#x3D;webhook adrianharabula/webhook
-verbose -hooks&#x3D;/etc/webhook/hooks.json -hotreload
&#x60;&#x60;&#x60;
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
&#x60;&#x60;&#x60;
FROM wnameless/oracle-xe-11g

ADD database_design/psgbd-etapa2/SqlScripts/00-init.sql /docker-entrypoint-initdb.d/
ADD database_design/psgbd-etapa2/SqlScripts/01-createTables.sql /docker-entrypoint-initdb.d/
&#x60;&#x60;&#x60;

Și o folosim în docker-compose.yml:
&#x60;&#x60;&#x60;
version: &#x27;3&#x27;

services:
   oracledb:
     build:
       context: .
       dockerfile: oracle-Dockerfile
     image: condr/databse
     restart: always
     ports:
      - &quot;1521:1521&quot;

volumes:

&#x60;&#x60;&#x60;

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
&#x60;&#x60;&#x60;
#!/bin/sh
cd Dockerfiles/oracledb/sqlscripts
cat [0-9][0-9]*.sql &gt; sqlconcat.sql
git add sqlconcat.sql
&#x60;&#x60;&#x60;
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
&#x60;&#x60;&#x60;
INSERT INTO GROUPS VALUES (1,&#x27;FII@Iasi&#x27;,&#x27;This is where your sleepless nights begin!&#x27;);
INSERT INTO GROUPS VALUES (2,&#x27;Food Lovers&#x27;,&#x27;Life has never tasted so good! Join us for the best recipes!&#x27;);
INSERT INTO GROUPS VALUES (3,&#x27;PSGBD&#x27;,&#x27;Never ask a DBA to move furniture, they are known for dropping tables. :)&#x27;);
INSERT INTO GROUPS VALUES (4,&#x27;Web Technologies&#x27;,&#x27;I know I am going to heaven, cause I am already in hell! *web dev life*&#x27;);
INSERT INTO GROUPS VALUES (5,&#x27;Software Engeneering&#x27;,&#x27;We will teach you how to work in a company!&#x27;);
INSERT INTO GROUPS VALUES (6,&#x27;Cat Lovers&#x27;,&#x27;Meow&#x27;);
INSERT INTO GROUPS VALUES (7,&#x27;Science&#x27;,&#x27;&quot;Come on, it is not like it is rocket science, they tell me..&quot;&#x27;);
INSERT INTO GROUPS VALUES (8,&#x27;Education&#x27;,&#x27;Your future starts today!&#x27;);
INSERT INTO GROUPS VALUES (9,&#x27;Highschool&#x27;,&#x27;Well, we still got time to do stupid thing...&#x27;);
INSERT INTO GROUPS VALUES (10,&#x27;Clothes Lovers&#x27;,&#x27;&#x27;);
INSERT INTO GROUPS VALUES (11,&#x27;Fashion&#x27;,&#x27;&#x27;);
INSERT INTO GROUPS VALUES (12,&#x27;Daily Entertainment&#x27;,&#x27;&#x27;);
INSERT INTO GROUPS VALUES (13,&#x27;Story of my life&#x27;,&#x27;*Dont even need a description*&#x27;);
INSERT INTO GROUPS VALUES (14,&#x27;IFL Science&#x27;,&#x27;&#x27;);
INSERT INTO GROUPS VALUES (15,&#x27;Football Lovers&#x27;,&#x27;&#x27;);
INSERT INTO GROUPS VALUES (16,&#x27;PC Garage&#x27;,&#x27;&#x27;);
&#x60;&#x60;&#x60;

### Comments
