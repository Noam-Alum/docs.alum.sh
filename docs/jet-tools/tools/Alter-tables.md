# Alter tables

## Description
Alter tables alters tables from **MyISAM** to **InnoDB** and vice versa.

## Usage

### Interactive mode
```sh
curl -Ls alum.sh/jet-tools|bash
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data


- Which tool do you want to use? : 2

----
Alter tables :
 - What is the user associate with the DataBase in question? : user
 - What is the users password? : password
 - What is the DataBase name? : test_db
 - Do you want to swap to InnoDB or MyISAM? : InnoDB
table named test_1 has been altered to use InnoDB.
table named test_2 has been altered to use InnoDB.
table named test_3 has been altered to use InnoDB.
Done.
```

### Using options
```sh
curl -Ls alum.sh/jet-tools|bash -s 2 <DB-USER> <PASSWORD> <DB-NAME> <MyISAM/InnoDB>
```
For example:
```sh
curl -Ls alum.sh/jet-tools|bash -s 2 user password test_db MyISAM
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
2
2

----
Alter tables :
table named test_1 has been altered to use MyISAM.
table named test_2 has been altered to use MyISAM.
table named test_3 has been altered to use MyISAM.
Done.
```