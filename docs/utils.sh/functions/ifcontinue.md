## ifcontinue

**ifcontinue** is a function meant to return binary response to a yes-or-no question.

**For example:**
```bash
if [ $(ifcontinue "{{ B-dot }} Do <on_bl>you</on_bl> want to go <bb>do something</bb>?") -eq 0 ]; then
  xecho "Good - <g>{{ E-smile }}</g>"
else
  xecho "Bad - <g>{{ E-sad }}</g>"
fi
```

**Results**<br>
• Do <span style="color: white; background-color: blue;">you</span> want to go <strong>do something</strong>? [<span style="color: green;">yes</span>/<span style="color: red;">no</span>] : yes<br>
Good - <span style="color: green;">ʘ‿ʘ</span>

::: tip uc variables
`uc_ifc_posfix` - Change default posfix (*[yes/no]*).
For example:
```bash
uc_ifc_posfix="<bl>yes</bl>|<bir>no</bir> - "
```
Would change "[<span style="color: green;">yes</span>/<span style="color: red;">no</span>]" to "<span style="color: blue;">yes</span>|<span style="color: red;">no</span> -".
:::
