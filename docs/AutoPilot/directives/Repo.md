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
    configuration: |
            Repo configuration
    key: "https://download.spotify.com/debian/pubkey_6224F9941A8AA6D1.gp"
```

</td>
<td>

```yaml
Repo:
  - name: spotify
    configuration: |
            "deb http://repository.spotify.com  stable  non-free"
    key: "https://download.spotify.com/debian/pubkey_6224F9941A8AA6D1.gp"
  - name: Google
    configuration: |
            "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main"
    key: "%NoKey%"
```

</td>
      </tr>
   </tbody>
</table>

<br>

:::warning
The **GPG key** would be installed into `/etc/apt/trusted.gpg.d/` or `/etc/pki/rpm-gpg/` based on the related operating system with the name [name].gpg (`[name]` being the name you specified in the configuration file (.e.g `spotify`)), make sure that if your *repo configuration* species a path to the GPG key it matches this. (`/etc/[per-distro-path]/[name].gpg`)

**For example:**
```text
[mariadb-server]
name = MariaDB Server
baseurl = ${url_mariadb_repo}/%s/yum/sles/%s/x86_64
gpgkey = file:///etc/pki/trust/MariaDB-Server-GPG-KEY
gpgcheck = 1
type=rpm-md
enabled = 1
autorefresh=1
priority=10"
```
Uses `file:///etc/pki/trust/MariaDB-Server-GPG-KEY`, if you wish to install the GPG key with **AutoPilot**, you have to change it to `file:///etc/[per-distro-path]/[name].gpg`.
:::

:::tip
Use `%NoKey%` if you dont want to use a GPG key.
:::
