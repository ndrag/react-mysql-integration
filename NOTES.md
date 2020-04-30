# React -> ndragunow.nz MySQL Server

A basic react + typescript application that connects to a MySQL server hosted on ndragunow.nz

https://www.youtube.com/watch?v=kHmbg4Z7Ihw&list=PLp8YCP6EV3eIjLybC4NyiwA8EtdMJgoES&index=3

## Process

* Added mysql & the typings for mysql.
* Installed the node modules ^
* Added a config file & ignored it so our passwords aren't checked in.
* Within our config we've set our passwords.
* We a new db folder and created a connection that all tables could use.
* It's hooked up to start when the app starts.
* Now any table can use that connectino.
* MySQL uses callbacks - we're handling their callback structure by using async and promises.
* We make a query, we resolve the resulting error or reslt, and we do stuff with it.

* In our routes we pull in our database from our index file (which has Skills in it), using async await which is really nice to read (no .then chaining!). We return those skills.

* On our client we go to a specific API and then use the results.