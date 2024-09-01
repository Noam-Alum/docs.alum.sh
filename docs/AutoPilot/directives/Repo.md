# <img src="/images/AutoPilot-Icons/Repo.png" alt="Repo image" width="28" height="auto"> Repo

Add new repositories to sources list.

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

**Repo**

</td>
<td>

```yaml
Repo:
  - name: AnyName
    configuration: "Configuration entry"
    key: "GPG key/%NoKey%"
```

</td>
<td>

```yaml
Repo:
  - name: spotify
    configuration: "deb http://repository.spotify.com  stable  non-free"
    key: "https://download.spotify.com/debian/pubkey_6224F9941A8AA6D1.gpg"
  - name: Google
    configuration: "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main"
    key: "%NoKey%"
```

</td>
      </tr>
   </tbody>
</table>

<br>

:::tip
Use `%NoKey%` if you dont want to use a GPG key.
:::
