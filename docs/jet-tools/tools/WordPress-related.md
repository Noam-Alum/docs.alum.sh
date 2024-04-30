# WordPress related

WordPress related is a bundle of all scripts or commands related to WordPress in jet-tools.

```sh
noam@noam:~➤ curl -Ls alum.sh/jet-tools|bash
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data


- Which tool do you want to use? : 3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- Which tool do you want to use? : 
```

## Add user

### Description:
Add WordPress user.

### Usage:

#### Interactive mode
```sh
curl -Ls alum.sh/jet-tools|bash
```
```sh
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data


- Which tool do you want to use? : 3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- Which tool do you want to use? : 1
- Add user
	What is the new users username? : user
	What is the new users mail? : user@gmail.com
Success: Created user 3.
Password: k9**&amp;I4vNH(&amp;
```

#### Using options
```sh
curl -Ls alum.sh/jet-tools|bash -s 3 1 <NEW-USERNAME> <MAIL>
```

For example:
```sh
curl -Ls alum.sh/jet-tools|bash -s 3 1 NewWpUser test@example.com
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
3
3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- Add user
Success: Created user 3.
Password: k9**&amp;I4vNH(&amp;
```

## Change password

### Description:
Change WordPress users password.

### Usage:

#### Interactive mode
```sh
curl -Ls alum.sh/jet-tools|bash
```
```sh
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data


- Which tool do you want to use? : 3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- Which tool do you want to use? : 2
- Change password
 - 	What is the users username? : user
 - 	What is the new password? : newpassword
Success: Updated user user.
```

#### Using options
```sh
curl -Ls alum.sh/jet-tools|bash -s 3 2 <USERNAME> <NEW-PASSWORD>
```

For example:
```sh
curl -Ls alum.sh/jet-tools|bash -s 3 2 User NewPassword
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
3
3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- Change password
Success: Updated user user.
```

## Set root priv

### Description:
Give a WordPress user root privileges.

### Usage:

#### Interactive mode
```sh
curl -Ls alum.sh/jet-tools|bash
```
```sh
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data


- Which tool do you want to use? : 3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- Which tool do you want to use? : 3
- Change password
 - 	What is the users username? : user
Success: Updated user user.
```

#### Using options
```sh
curl -Ls alum.sh/jet-tools|bash -s 3 3 <USERNAME>
```

For example:
```sh
curl -Ls alum.sh/jet-tools|bash -s 3 3 User NewPassword
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
3
3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- Set root priv
Success: Updated user user.
```

## WordPress migration

### Description:
Locally Migrate a WordPress website (using WP-manager script).

#### Interactive mode
```sh
curl -Ls alum.sh/jet-tools|bash
```
```sh
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data


- Which tool do you want to use? : 3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- Which tool do you want to use? : 4
- WordPress migration
# The WP-manager script.
```

#### Using options
```sh
curl -Ls alum.sh/jet-tools|bash -s 3 4
```

For example:
```sh
curl -Ls alum.sh/jet-tools|bash -s 3 4
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
3
3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- WordPress migration
# The WP-manager script.
```

<br>

:::tip
For deeper documentation on the WordPress migration process (WP-manager) click [here](/WP-manager/introduction-and-usage.html).
:::

## wp_recovery

### Description:
Recover infected WordPress websites.

#### Interactive mode
```sh
curl -Ls alum.sh/jet-tools|bash
```
```sh
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data


- Which tool do you want to use? : 3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- Which tool do you want to use? : 5
- wp recovery
# The wp_recovery script.
```

#### Using options
```sh
curl -Ls alum.sh/jet-tools|bash -s 3 5
```

For example:
```sh
curl -Ls alum.sh/jet-tools|bash -s 3 5
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
3
3

----
WordPress related :
1.Add user | 2.Change password | 3.Set root priv | 4.WordPress migration | 5.wp_recovery

- wp recovery
# The wp_recovery script.
```

<br>

:::tip
For deeper documentation on the wp recovery script click [here](/wp_recovery/introduction-and-usage.html).
:::