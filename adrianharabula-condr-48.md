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
&#x60;&#x60;&#x60;
        Schema::create(&#x27;users&#x27;, function (Blueprint $table) {
            $table-&gt;increments(&#x27;id&#x27;);
            $table-&gt;string(&#x27;name&#x27;);
            $table-&gt;string(&#x27;email&#x27;)-&gt;unique();
            $table-&gt;string(&#x27;password&#x27;);
            $table-&gt;rememberToken();
            $table-&gt;timestamps();
        });
&#x60;&#x60;&#x60;

Față de ceea ce aveam:
&#x60;&#x60;&#x60;
CREATE TABLE USERS
(
  USER_ID NUMBER(10) PRIMARY KEY,
  USERNAME VARCHAR(30) NOT NULL,
  PASSWORD VARCHAR(40) NOT NULL,
  EMAIL VARCHAR(40) NOT NULL
);
/
&#x60;&#x60;&#x60;

Diferențele sunt că acum avem înloc de __user_id__ coloana __id__. Iar în loc de __username__ avem __name__. Plus avem următoare câmpuri:

- remember_token
- created_at
- updated_at
---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/48#issuecomment-299688369) on: **5/7/2017**

Nu am zis ca username-ul va fi unic? 
