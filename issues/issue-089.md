# [\#89 Fix duplicated relationship generated in CondrgroupUserTableSeeder](https://github.com/adrianharabula/condr/issues/89)

> state: **closed** opened by: **elis47** on: **5/16/2017**

{% raw %}

{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/89#issuecomment-306457259) on: **6/6/2017**

{% raw %}
Nu avem constrângere în baza de date, dar nu e cazul, pentru că facem verificarea la introducerea în baza de date.

```php
    public function addFavoriteGroup($groupId, $userId = null)
    {
        if ($this->existsUserFavoriteGroup($groupId, $userId))
            return false;

        $this->attachUserFavoriteGroup($groupId, $userId);

        return true;
    }

    public function existsUserFavoriteGroup($groupId, $userId = null)
    {
        return $this->getUserFavoriteGroups($userId)->contains($groupId);
    }

    public function attachUserFavoriteGroup($groupId, $userId = null)
    {
        $this->getUser($userId)->groups()->syncWithoutDetaching($groupId);
    }
```
{% endraw %}
