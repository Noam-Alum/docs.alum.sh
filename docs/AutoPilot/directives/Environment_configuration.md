# <img src="/images/AutoPilot-Icons/environment.png" alt="Environment_configuration image" width="28" height="auto"> Environment_configuration

Set the environment configuration for a user.

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

**Environment_configuration**

</td>
<td>

```yaml
Environment_configuration:
  - user: username
    config: |
      line 1
      line 2
      line 3
```

</td>
<td>

```yaml
Environment_configuration:
  - user: noam
    config: |
      Name="Noam"
      function say_name {
        echo "This is the name: $Name"
      }
      say_name
  - user: shay
    config: |
      echo "Hello shay!"
```

</td>
      </tr>
   </tbody>
</table>

<br>

:::warning
This directive is only meant for bash. (`.bashrc`)
:::
