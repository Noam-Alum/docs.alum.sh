# imunify malicious list

## Description
imunify malicious list scans and saves to a file recent scans made by imunify360/av on a user based on files found.

## Usage

### Interactive mode
```sh
curl -Ls alum.sh/jet-tools|bash
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data

- Which tool do you want to use? : 1

----
imunify malicious list :
 - Which user where you scanning? : user
 - How manny infected files found? : 2022
 - infected files list was created in /home/user/infected_files_user.txt
```

### Using options
```sh
curl -Ls alum.sh/jet-tools|bash -s 1 <USER> <NUMBERS-OF-FILES-FOUND>
```
For example:
```sh
curl -Ls alum.sh/jet-tools|bash -s 1 user 2022
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
1
1

----
imunify malicious list :
 - infected files list was created in /home/user/infected_files_user.txt
```