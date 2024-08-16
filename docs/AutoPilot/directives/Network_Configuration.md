# <img src="/images/AutoPilot-Icons/Network.png" alt="Network_Configuration image" width="28" height="auto"> Network_Configuration

Basic configuration for network interfaces.

<br>

**Configuration syntax:**

:::tip
Use `%DHCP%`, to use dhcp. (If used at any of the entries dhcp would be used on the whole nic.)
:::

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

**Network_Configuration**

</td>
<td>

```yaml
Network_Configuration:
  - nic: INTERFACE
    ip: IP_ADDRESS/PREFIX
    gateway: GATEWAY_ADDRESS
    dns: DNS1,DNS2,DNS3
```

</td>
<td>

```yaml
Network_Configuration:
  - nic: tun0
    ip: 192.168.2.14/24
    gateway: 192.168.2.1
    dns: 8.8.8.8,8.4.8.4
  - nic: eth0
    ip: "%DHCP%"
    gateway: "%DHCP%"
    dns: "%DHCP%"
```

</td>
      </tr>
   </tbody>
</table>
