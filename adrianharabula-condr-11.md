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
