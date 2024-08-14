# download data

## Description
Download data from external sources such as DropBox or Drive.

## Usage

### Interactive mode
```sh
curl -Ls alum.sh/jet-tools|bash
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data


- Which tool do you want to use? : 6

----
download data :
 - What is the download url? : https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsm9mhJJHRzp4JRq0XgRi62WdwlfTRBurSiJ76Sz2Ww&s
 - What would you like to name your file? : MyNewPhoto.jpeg
 - File downloaded at: /home/noam/MyNewPhoto.jpeg
```

### Using options
```sh
curl -Ls alum.sh/jet-tools|bash -s 6 '<URL>' <FILE-NAME>
```
For example:
```sh
curl -Ls alum.sh/jet-tools|bash -s 6 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsm9mhJJHRzp4JRq0XgRi62WdwlfTRBurSiJ76Sz2Ww&s' MyNewPhoto.jpeg
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
6
6

----
download data :
 - File downloaded at: /home/noam/MyNewPhoto.jpeg
```

### Inspections

#### File extension

Download data checks if the extension you inputted matches the detected file extension:
```sh
noam@noam:~/Downloads➤ curl -Ls alum.sh/jet-tools|bash -s 6 https://alum.sh/media/logo.png alum.tar.gz
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
6
6

----
download data :
 - File downloaded at: /home/noam/Downloads/alum.tar.gz
 - File extension mismatch:
    + detected extension: png
    + inputed extension: tar
    + File type detected:  PNG image data
```

It also lets you know if it failed to make sure you use the right extension:
```sh
noam@noam:~/Downloads➤ curl -Ls alum.sh/jet-tools|bash -s 6 https://alum.sh alum.tar.gz
Jet-Tools:
1.imunify malicious list | 2.Alter tables | 3.WordPress related | 4.Running proc | 5.litespeed data domains | 6.download data
6
6

----
download data :
 - File downloaded at: /home/noam/Downloads/alum.tar.gz
 - File extension could not be detected:
    + detected extension: ???
    + inputed extension: tar
    + File type detected:  HTML document
```