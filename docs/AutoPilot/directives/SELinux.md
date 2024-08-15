# <img src="/images/AutoPilot-Icons/SELinux.png" alt="SELinux image" width="28" height="auto"> SELinux

 The [SELinux](http://www.selinuxproject.org/page/Main_Page) directive controles whether **SELinux** is enabled or not.

<br>

**Configuration syntax:**

| Directive | Format                        | Example            |
|-----------|-------------------------------|--------------------|
| **SELinux**   | `SELinux: Enabled/Disables`   | `SELinux: Enabled` |

<br>

:::tip
When enabled, if SELinux is not installed the script would try to install it, then enable it, else it would just enable it.
:::
