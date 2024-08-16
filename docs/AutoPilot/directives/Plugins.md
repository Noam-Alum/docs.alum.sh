# <img src="/images/AutoPilot-Icons/plug-in.png" alt="Plugins image" width="28" height="auto"> Plugins

Which plugins to use.

> Feel free to create plugins ;)

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
Plugins:
  - name: AnyName
    script: path/to/plugin/run.sh
```

</td>
<td>

```yaml
Plugins:
  - name: make_backup
    script: plugins/make_backup/run.sh
```

</td>
      </tr>
   </tbody>
</table>

<br>

> Note that the `path/to/plugin/` should always end with **run.sh**. (the snippet that should be used.)
