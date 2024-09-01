# <img src="/images/AutoPilot-Icons/downloads.png" alt="Installed_packages image" width="28" height="auto"> Installed_packages

Which packages to install and how.

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

**Installed_packages**

</td>
<td>

```yaml
Installed_packages:
  - name: AnyName
    type: Pm/Pkg/Sh
    source: Package name/Package url/Script url
```

</td>
<td>

```yaml
Installed_packages:
  - name: FireJail
    type: Pm
    source: firejail
  - name: Discord
    type: Pkg
    source: https://discord.com/api/download?platform=linux&format=deb
  - name: NVIM
    type: Sh
    source: https://installnvim.com/install.sh
```

</td>
      </tr>
   </tbody>
</table>

<br>

:::warning
If a shell script is used it should **not** be interactive.
:::
