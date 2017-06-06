## Install instructions

Imediat după ce se face clone la repo:
 - Copiați `Dockerfiles/apache/100-condr.conf.example` în __100-condr.conf__ și completați cu date valide

```sh
<VirtualHost *:80>
   ServerName condr.lan
   ProxyPass / http://app/public/
</VirtualHost>
```

 - La fel copiaţi şi `app/.env.example` în __.env__ și completați cu date valide

```sh
APP_ENV=local
# random app_key to be used by default; should be changed
APP_KEY=AfotPtr/kdTWeosS03T3Ghtja6llz7fqBBRzxxwFY64=
APP_WEBHOOKKEY=
APP_DEBUG=true
APP_LOG_LEVEL=debug
# this also should be changed accordingly
APP_URL=http://localhost:8000

// verify ssl for curl requests
// you may disable this in dev environment
CURLOPT_SSL_VERIFYPEER=true

DB_CONNECTION=oracle
# oracledb for docker compose
# localhost or anything if else
DB_HOST=oracledb
DB_PORT=1521
DB_USERNAME=condr
DB_PASSWORD=condr
```
 
### Pentru pornire server:
 - `docker-compose up -d`
 - Prima pornire pregăteşte baza de date cu scripturile din [sqlscripts](https://github.com/adrianharabula/condr/tree/master/Dockerfiles/oracledb/sqlscripts).
 - Pentru reinițializare baza de date rulați `docker-compose stop && docker-compose rm -v && docker-compose build && docker-compose up -d`.

### Pentru a instala laravel (se face numai la prima rulare!)

Ne conectăm la containerul aplicaţiei cu
```sh
docker exec -it condr_app_1 bash
```
Instalăm composer cu [get-composer.sh](https://github.com/adrianharabula/condr/blob/master/app/get-composer.sh)
```sh
./get-composer.sh
```
Instalăm laravel cu
```sh
php composer.phar install
```

### Instrucţiuni adiţionale baza de date

 - mai trebuie create tabele în baza de date şi populate, facem asta cu migrations pentru creeare şi seeding pentru populare

Odată pornit docker-compose înseamnă că baza de date s-a şi iniţializat, ce mai urmează este să rulăm peste ea migrările din laravel şi să facem seeding, populând baza de date.

Pentru a rula migrările, ne conectăm la containerul aplicaţiei:
```sh
docker exec -it condr_app_1 bash
```
Şi din container rulăm
```sh
php artisan migrate:refresh --seed
```
Tabelele sunt acum create şi populate.
