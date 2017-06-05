# [\#15 Webhook la push, pentru actualizarea codului de pe server](https://github.com/adrianharabula/condr/issues/15)

> state: **closed** opened by: **adrianharabula** on: **4/18/2017**

{% raw %}
La push să se actualizeze codul de pe server printr-un webhook. S-ar putea folosi imaginea asta https://hub.docker.com/r/almir/webhook/ Să se aibe în vedere automatizarea acestui proces și pentru alte proiecte, iar sistemul să fie cross-platform, să nu depindă de o distribuție anume.
{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/15#issuecomment-294966860) on: **4/18/2017**

{% raw %}
Imaginea https://hub.docker.com/r/almir/webhook/ nu este suficientă. Trebuie instalat gitul pe ea, poate și bashul.

Avem endpointul, putem rula un script la accesare endpoint. Dar acum să vedem cum facem exact pull prin webhook.
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/15#issuecomment-294987792) on: **4/18/2017**

{% raw %}
Avem imaginea cu git, bash și ssh instalate https://hub.docker.com/r/adrianharabula/webhook/

La accesarea endpointului se poate face pull pe un repo, mai trebuie integrat în proiect, probabil în docker-compose.yml.
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/15#issuecomment-294988870) on: **4/18/2017**

{% raw %}
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
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/15#issuecomment-295147312) on: **4/19/2017**

{% raw %}
gata, pentru instrucțiuni a se citi https://github.com/adrianharabula/webhook
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/15#issuecomment-295151303) on: **4/19/2017**

{% raw %}
6c0551bda57f18c243c18e43b3a306e78cf17894
{% endraw %}
