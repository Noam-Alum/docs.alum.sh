# SELinux

The [SELinux](http://www.selinuxproject.org/page/Main_Page) directive controles whether **SELinux** is enabled or not.

<br>

**Configuration syntax:**

| Directive | Format                        | Example            |
|-----------|-------------------------------|--------------------|
| SELinux   | `SELinux: Enabled/Disables`   | `SELinux: Enabled` |

> When enabled, if SELinux is not installed the script would try to install it, then enable it, else it would just enable it.

<br>

**SELinux function:**

```bash
function rn_SELinux {
  parse_yaml 0 SELinux
  if [ "$SELinux" == "Enabled" ]; then
    xecho "$info_prefix <biw>Trying to enable {{ E-arrowright }} SELinux {{ E-arrowleft }} {{ E-nervous }}</biw>"
    check_dependencies "SELinux" "$notgood_prefix <biw>SELinux not found, tring to install, be patient. {{ E-angry }}</biw>" "apt -y install selinux-basics selinux-policy-default" "dpkg -L selinux-basics"
    sed -i 's/^SELINUX=.*$/SELINUX=enforcing/' /etc/selinux/config
    grep "SELINUX=enforcing" /etc/selinux/config &> /dev/null && xecho "$good_prefix <biw>SELinux enabled successfully. {{ E-smile }}</biw>"
  elif [ "$SELinux" == "Disabled" ]; then
    xecho "$info_prefix <biw>Trying to disable {{ E-arrowright }} SELinux {{ E-arrowleft }} {{ E-nervous }}</biw>"
    if [ "$(dpkg -L selinux-basics &> /dev/null; echo $?)" -ne 0 ]; then
      xecho "$good_prefix <biw>SELinux is not installed, no need to disable {{ E-smile }}</biw>"
    else
      sed -i 's/^SELINUX=.*$/SELINUX=disabled/' /etc/selinux/config
      grep "SELINUX=disabled" /etc/selinux/config &> /dev/null && xecho "$good_prefix <biw>SELinux disabled successfully. {{ E-smile }}</biw>"
    fi
  fi
}
```
