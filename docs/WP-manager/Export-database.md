# Export database

When you first use WP-manager it would prompt you with the **DATABASE**, **USERNAME**, **PASSWORD** and the commands the script wishes to run:

```sh
!!! ABOUT TO RUN THE FOLLOWING COMMAND: !!!
#- - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - -
# mysqldump -p[PASSWORD FOUND] -u [USER FOUND] [DB FOUND] > YBCHTMXl6qaL5SlrNhhH.sql <- export [DB FOUND] to YBCHTMXl6qaL5SlrNhhH.sql
#- - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - -
Continue? [Y/N] : 
```

If you agree to run the commands the `mysqldump` output will be sent to a file named with random characters and numbers to make it less accessible to the outside world. (As this file remains in the DocumentRoot of the website)

```sh
!!! ABOUT TO RUN THE FOLLOWING COMMAND: !!!
#- - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - -
# mysqldump -p[PASSWORD FOUND] -u [USER FOUND] [DB FOUND] > YBCHTMXl6qaL5SlrNhhH.sql <- export [DB FOUND] to YBCHTMXl6qaL5SlrNhhH.sql
#- - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - -
Continue? [Y/N] : Y
Done, sql file: YBCHTMXl6qaL5SlrNhhH.sql
```