# One Time Secret CLI

## introduction && installation

This script helps with the need to share encrypted "secrets" without opening external applications like a browser in this case and lets you use the *One Time Secret* service directly from the command line.

## Basic installation

**Download script**
```sh
wget https://alum.sh/OTS
```

**Add execute permissions**
```sh
chmod +x OTS
```

**Add an alias**
```sh
echo 'alias OTS="PATH TO OTS FILE"' > ~/.bashrc
```

:::warning
Change *PATH TO OTS FILE* to the path to the OTS file
:::

:::tip
For the alias to be used in the current session, use the following command:
```sh
source ~/.bashrc
```
:::