# Migration

After compression of the current website directory, you can choose whether or not to continue and migrate the site.

## Local migration
For a local migration, you are required to provide **new path**, **old domain** and **new domain**.

After providing that you would be prompted with the commands the script wants to run:

![image](/images/WP-manager-MIGRATE1.png)

This would **transfer** the files. for a full migration the script informs you it has requirements:

```sh
To search and replace to new.alum.sh we need new database & database user.
Continue? [Y/N] : Y
Would you like to create them? 
Continue? [Y/N] :
```

#### Y - YES
If you choose Y, you need to provide the following list:

- Mysql root password
- New database name
- New database user name
- New database user password

This should look like so:

```sh
Would you like to create them? 
Continue? [Y/N] : Y
Mysql root password : [MYSQL_ROOT_PASSWORD]
New database name : [new_db_name]
Are you sure that [new_db_name] is the name you want?
Continue? [Y/N] : Y
OK.
New database user name : [new_db_user]
Are you sure that [new_db_user] is the name you want?
Continue? [Y/N] : Y
OK.
New database user password : [new_password]
Are you sure that [new_password] is the password you want?
Continue? [Y/N] : Y
OK.
```

Then you are prompted with the commands the script wants to run:
```sh
!!! ABOUT TO RUN THE FOLLOWING COMMANDS: !!!
- - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - -
# mysql -u root -p"[MYSQL_ROOT_PASSWORD]" -e "CREATE DATABASE [new_db_name] ;" <- create the new database.
#
# mysql -u root -p"[MYSQL_ROOT_PASSWORD]" -e "CREATE USER [new_db_user]@localhost IDENTIFIED BY '[new_password]';" <- create the new user.
#
# mysql -u root -p"[MYSQL_ROOT_PASSWORD]" -e "GRANT ALL PRIVILEGES ON [new_db_name] .* TO [new_db_user]@localhost IDENTIFIED BY '[new_password]';" <- give the new user all privileges.
#
# mysql -u root -p"[MYSQL_ROOT_PASSWORD]" -e "FLUSH PRIVILEGES;" <- flushing the newly assigned privileges.
#
- - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - -
```

Done for this part, skip to [Search and replace](#search-and-replace)

#### N - NO

If you choose Y, you need to provide the following list:

- database name
- database user name
- database user password

This should look like so:

```sh
Would you like to create them? 
Continue? [Y/N] : N
database name : [db_name]
Are you sure that [db_name] is the name you want?
Continue? [Y/N] : Y
OK.
database user name : [db_user]
Are you sure that [db_user] is the name you want?
Continue? [Y/N] : Y
OK.
database user password : [password]
Are you sure that [password] is the password you want?
Continue? [Y/N] : Y
OK.
```

### Search and replace:

After acquiring database, database user and database users password the script asks for permission to run the commands to perform a search and replace for the new domain:

```sh
!!! ABOUT TO RUN THE FOLLOWING COMMANDS: !!!
- - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - -
# sed -i "s/[old_db]/[new_db]/g" wp-config.php <- change database name from [old_db] to [new_db]
#
# sed -i "s/[old_user]/[new_user]/g" wp-config.php <- change user name from [old_user] to [new_user]
#
# sed -i "s/[old_password]/[new_password]/g" wp-config.php <- change password from [old_password] to [new_password]
#
# mysql -p[new_password] -u [new_user] [new_db] < pLEu9hxWJp97YHMrSy8.sql <- import pLEu9hxWJp97YHMrSy8.sql to [new_db].
#
# rm -rf pLEu9hxWJp97YHMrSy8.sql <- REMOVE pLEu9hxWJp97YHMrSy8.sql
#
# wp search-replace '//[old_domain]' '//[new_domain]' --allow-root --all-tables --recurse-objects <- search and replace from [old_domain] to [new_domain]
- - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - -
Continue? [Y/N] :
```

If you choose to press Y the migration is complete and you should get:

```sh
SUCCESS, [old_domain] has been changed to [new_domain]
```

---

## Full preview
<div style="width: 100%; height: 100vh; display: flex; justify-content: center; align-items: flex-start; overflow: hidden;">
    <video controls style="max-width: 100%; max-height: 100%; width: auto; height: auto;">
        <source src="/videos/WP-manage-ALL.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>