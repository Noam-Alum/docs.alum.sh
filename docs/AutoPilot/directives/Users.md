# <img src="/images/AutoPilot-Icons/Users.png" alt="Users image" width="28" height="auto"> Users

Add users, set their passwords, their groups and their shell.

<br>

**Configuration syntax:**

<table>
   <thead>
      <tr>
         <th>Directive</th>
         <th>Format</th>
         <th>Example</th>
      </tr>
   </thead>
   <tbody>
      <tr>
<td>

**Users**

</td>
<td>

```yaml
Users:
  - name: USERNAME
    pass: PASSWORD/%Gen%
    group: GROUP1,GROUP2,GROUP3
    shell: /path/to/shell
```

</td>
<td>

```yaml
  Users:
    - name: Noam
      pass: 1234
      group: Noam,sudo,admins
      shell: /bin/bash
    - name: Shay
      pass: %Gen%
      group: Shay,helpdesk
      shell: /bin/sh
```

</td>
      </tr>
   </tbody>
</table>

<br>

:::tip
Like you could probably understand from the table above, if you use `%Gen%` in the *pas* feild, it generate a strong password for you.
:::
