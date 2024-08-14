# litespeed data domains

## Description
Find DocumentRoot of website based on domain name on a lsws servers.

## Usage

### Interactive mode
```sh
curl -Ls alum.sh/jet-tools|bash
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data

- Which tool do you want to use? : 5

----
litespeed data domains :
 - What domain would you like to search for? : example.com
1. User: example
   Root directory: /home/example/public_html/
   Domains: 
     1	example.com,
     2	www.example.com
```

### Using options
```sh
curl -Ls alum.sh/jet-tools|bash -s 5 <DOMAIN>
```
For example:
```sh
curl -Ls alum.sh/jet-tools|bash -s 5 example.com
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
5
5

----
litespeed data domains :
1. User: example
   Root directory: /home/example/public_html/
   Domains: 
     1	example.com,
     2	www.example.com
```