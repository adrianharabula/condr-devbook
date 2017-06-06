# [\#54 Update psgbd/etapa2 app to new Users table modifications](https://github.com/adrianharabula/condr/issues/54)

> state: **closed** opened by: **adrianharabula** on: **5/7/2017**

{% raw %}
Avem [aici](https://github.com/adrianharabula/condr/issues/48#issuecomment-299665703) modificările făcute în tabela users. Nu mai avem coloana __username__, avem coloana __name__ și asta va trebui modificat peste tot în aplicația veche.
{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/54#issuecomment-299667928) on: **5/7/2017**

{% raw %}
Merge loginul 6029d314947157c430b1aa679dd93977a825b5c4

Mai e:
 * registerul de reparat, dar chiar nu e musai
 * și de înlocuit $_SESSION['username'] cu $_SESSION['email'] peste tot în aplicație
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/54#issuecomment-300925350) on: **5/12/2017**

{% raw %}
Irelevant, not enough time to fix broken old code.
{% endraw %}
