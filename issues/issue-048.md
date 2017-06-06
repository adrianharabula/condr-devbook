# [\#48 Update users schema to be compatible with laravel](https://github.com/adrianharabula/condr/issues/48)

> state: **closed** opened by: **adrianharabula** on: **5/2/2017**

{% raw %}
Some modifications:

- make sure the password column is at least 60 characters in length
- table contains a nullable, string  __remember_token__ column of 100 characters. 

Verify the login/signup functionality.
{% endraw %}


### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/48#issuecomment-299665703) on: **5/7/2017**

{% raw %}
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
{% endraw %}
---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/48#issuecomment-299688369) on: **5/7/2017**

{% raw %}
Nu am zis ca username-ul va fi unic? 
{% endraw %}
