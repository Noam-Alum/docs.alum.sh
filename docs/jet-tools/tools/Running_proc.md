# Running proc

## Description
Shows live preview of running processes of a user.

## Usage

### Interactive mode
```sh
curl -Ls alum.sh/jet-tools|bash
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data

- Which tool do you want to use? : 4

----
Running proc :
 - What is the user you want to check? : user
```

### Using options
```sh
curl -Ls alum.sh/jet-tools|bash -s 4 <USER>
```
For example:
```sh
curl -Ls alum.sh/jet-tools|bash -s 4 user
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
1
1

----
imunify malicious list :
 - infected files list was created in /home/user/infected_files_user.txt
```