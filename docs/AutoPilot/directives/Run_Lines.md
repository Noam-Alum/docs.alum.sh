# <img src="/images/AutoPilot-Icons/command-line.png" alt="Run_Lines image" width="28" height="auto"> Run_Lines

The provided lines should be executed as part of running the script.

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

**Run_Lines**

</td>
<td>

```yaml
Run_Lines:
  - CMD 1
  - CMD 2
```

</td>
<td>

```yaml
Run_Lines:
  - echo "Hello"
  - echo "Hey"
```

</td>
      </tr>
   </tbody>
</table>

<br>

:::tip
Try to keep each line small, for big shell access consider creating a plugin.
:::
