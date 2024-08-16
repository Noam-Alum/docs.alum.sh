# <img src="/images/AutoPilot-Icons/Users.png" alt="Users image" width="28" height="auto"> Users

 Add users, set their passwords, and whether they have sudo privileges.

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
  - pass: PASSWORD/%Gen%
  - sudo: Yes/No
```

</td>
<td>

```yaml
  Users:
    - name: Noam
    - pass: 1234
    - sudo: Yes
    - name: Shay
    - pass: %Gen%
    - sudo: No
```

</td>
      </tr>
   </tbody>
</table>

<br>

:::tip
Like you could probably understand from the table above, if you use `%Gen%` in the *pas* feild, it generate a strong password for you.
:::
