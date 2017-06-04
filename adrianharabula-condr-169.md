# [Undefined offset when introducing product with ean 0762309500581](https://github.com/adrianharabula/condr/issues/169)

> state: **closed** opened by: **adrianharabula** on: **6/3/2017**

Click this https://condr.me/lookup/0762309500581 and get invalid offset o

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/169#issuecomment-305969922) on: **6/3/2017**

Era problemă atunci când produsul nu avea poză. Fixul a fost să verificăm dacă arrayul cu imagini există înainte să îl folosim.
