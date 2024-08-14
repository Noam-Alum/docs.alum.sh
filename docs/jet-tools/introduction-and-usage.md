# introduction && usage

## usage

To use jet-tools you can simply copy and paste the following line:

```sh
curl -Ls alum.sh/jet-tools|bash
```

If you already know the tool you want to use and the inputs location you can even put your inputs in the right order like so:

```sh
curl -Ls alum.sh/jet-tools|bash -s <Tools number> <Tools input/s>
```

## introduction
jet-tools is a script meant for bundling commonly used commands and scripts all in one place.

**For example, this command:**
```sh
imunify360-agent malware malicious list --user <USERNAME> --limit <FILES-FOUND> | awk '{print$8}'
```
Outputs the malicious files found by imunify360/av in a users most recent scan, jet-tools takes this to another level and saves the files found in a file one directory down from the DocumentRoot of the site for easy access. 

```sh
Jet-Tools:
1.imunify malicious list | 2.wpcli while plugin error | 3.Alter tables | 4.Naknik function | 5.WordPress manager  | 6.wpcli commands | 7.Running proc

- Which tool do you want to use? : 1

----
imunify malicious list :
 - Which user where you scanning? : user
 - How manny infected files found? : 2022
 - infected files list was created in /home/user/infected_files_user.txt
```