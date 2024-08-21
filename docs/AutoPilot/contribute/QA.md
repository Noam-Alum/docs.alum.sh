# <img src="/images/AutoPilot-Icons/QA.png" alt="Users image" width="28" height="auto"> QA - Quality Assurance

**In this page I will walk you trough how to help with quality assurance for AutoPilot.**

<img src="/images/AutoPilot-contribute.png" style="width: 900px;height: auto;">

## Prerequisites

1. AutoPilot installed. ([GitHub](https://github.com/Noam-Alum/AutoPilot/))
2. Some form of VM setup.

## Uderstand the goal

The entier mission behind **quality assurance** is to search for bugs beyond by own (Noam) inspection after commiting to GitHub, that means you as a *QA* tester would have to go that extra mile sometimes to find issues/bugs.

Try wierd values for directives, break the system, etc...

---

## Create your testing environment

While testing for issues/bugs its highly recommended to use some form of VM setup, to not harm your personal environment.

:::tip
I would suggest using [Vagrant](https://www.vagrantup.com/), as it enables the creation of lightweight, reproducible, and portable development environments.
:::

Using a VM also enables me as the developer a way to recreate the exact circomstances you had while encountering an issue/bug.

## Write an issue

After you successfuly found an issue/bug, you should collect the following information:

1. Your environment (e.g. ubuntu 22.04 LTS)<br>
    For instance, if you used Vagrant you could simply supply your configuration file.
2. AutoPilot configuration.
3. Step by step on how to recreate the issue.

> If you'r nice you could try to supply a fix to the bug/issue 😁

Then you can write an issue [here](https://github.com/Noam-Alum/AutoPilot/issues/new?assignees=Noam-Alum&labels=QA&projects=&template=qa-.md&title=QA+%7C+%5BShort+issue+description%5D).

---

<br>

**Huge thank you for anyone willing to contribute!**
