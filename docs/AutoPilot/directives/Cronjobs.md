# <img src="/images/AutoPilot-Icons/CronTab.png" alt="Cron image" width="28" height="auto"> Cronjobs

Set cronjobs for a user.

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

**Cronjobs**

</td>
<td>

```yaml
Cron:
  - user: username
    rules: |
      * * * * * cmd1
      * * * * * cmd2
      * * * * * cmd1
```

</td>
<td>

```yaml
Cron:
  - user: noam
    rules: |
      * * * * * echo "$(date)" >> /home/noam-cron.txt
      * * * * * echo "sent date" >> /home/noam-cron.txt
  - user: shay
    rules: |
      * * * * * echo "$(date)" >> /home/shay-cron.txt
```

</td>
      </tr>
   </tbody>
</table>

<br>

:::warning NOTE
This directive would append the new rules to the users crontab.
:::
