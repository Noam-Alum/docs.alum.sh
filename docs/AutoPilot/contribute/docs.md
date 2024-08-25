# <img src="/images/AutoPilot-Icons/docs.png" alt="docs image" width="28" height="auto"> Contribute to AutoPilots docs

**In this page I will walk you trough how to contribute to AutoPilots documentation.**

<img src="/images/AutoPilot-contribute.png" style="width: 900px;height: auto;">

## Prerequisites

1. docs.alum.sh [forked](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) on your GitHub account.
2. Text editor.
3. NodeJS [version v20.5.0](https://nodejs.org/en/blog/release/v20.5.0).

## Preper setup

Go to the cloned repo (From your fork), and run the following line:

```bash
sudo npm install
```

> This will install all the dependencies needed to run the website localy.

Then start vuepress development mode by using:
```bash
npm run docs:dev
```

You should get something like this:
```text
success [21:51:02] Build 462a65 finished in 10944 ms! 
> VuePress dev server listening at http://localhost:8080/
```

---

## Create/Edit page/s

> This website uses [markdown](https://www.markdownguide.org/) to store pages.

#### If you want to edit a page:

First locate the page, all pages are stored in the `docs/` directory.<br>
Then open the `.md` file in your choosen file editor and start editing :grin:.

:::tip
After starting vuepress in development mode, you can view **live** all changes by entering `http://localhost:8080/`.
:::

#### If you want to create a page:

VuePress uses a configuration file to build the website, it is located at `docs/.vuepress/config.js`.

> After you've created a new page.

You would have to insert your new page to the given section on the side bar, for example if I created a new `.md` file in the `docs/AutoPilot/HowTo` named `create-new-plugin.md` I would change this part of the config:

```js
     {
          title: 'AutoPilot - It\'s simple',
          children: [
            '/AutoPilot/Introduction',
            {
              title: 'Directives',
              children: [
                '/AutoPilot/directives/SELinux',
                '/AutoPilot/directives/Users',
                '/AutoPilot/directives/Run_Lines',
                '/AutoPilot/directives/Installed_packages',
                '/AutoPilot/directives/Plugins',
                '/AutoPilot/directives/Network_Configuration',
                '/AutoPilot/directives/Environment_configuration',
                '/AutoPilot/directives/Cronjobs'
              ]
            },
            {
              title: 'HowTo',
              children: [
                '/AutoPilot/HowTo/Create-a-configuration-file'
              ]
            },
            {
              title: 'Contribute',
              children: [
                '/AutoPilot/contribute/QA'
              ]
            }
          ]
     },
```

To:
```js
     {
          title: 'AutoPilot - It\'s simple',
          children: [
            '/AutoPilot/Introduction',
            {
              title: 'Directives',
              children: [
                '/AutoPilot/directives/SELinux',
                '/AutoPilot/directives/Users',
                '/AutoPilot/directives/Run_Lines',
                '/AutoPilot/directives/Installed_packages',
                '/AutoPilot/directives/Plugins',
                '/AutoPilot/directives/Network_Configuration',
                '/AutoPilot/directives/Environment_configuration',
                '/AutoPilot/directives/Cronjobs'
              ]
            },
            {
              title: 'HowTo',
              children: [
                '/AutoPilot/HowTo/Create-a-configuration-file',
                '/AutoPilot/HowTo/create-new-plugin'
              ]
            },
            {
              title: 'Contribute',
              children: [
                '/AutoPilot/contribute/QA'
              ]
            }
          ]
     },
```

:::warning
In the configuration file when you specify an `.md` file you do not include the extention.
:::

## Send a PR

After you successfuly made your changes and verified that everything works using vuepress development mode, push your changes to your fork, then send a PR.

:::tip
If you want to ask for changes refer [here](https://github.com/Noam-Alum/AutoPilot/issues/new?assignees=Noam-Alum&labels=DOCS&projects=&template=docs.md&title=DOCS+%7C+%5BShort+issue+description%5D).
:::

---

<br>

**Huge thank you to anyone willing to contribute! 🙏**
