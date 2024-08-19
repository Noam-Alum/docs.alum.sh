# Create an AutoPilot configuration file

**In this guide I'll show you how to create a propper `AutoPilot` configuration.**

### Complexity level

| ◈ | ◈ | ◈ | ◇ | ◇ | ◇ | ◇ | ◇ | ◇ | ◇ |
|---|---|---|---|---|---|---|---|---|---|

> Pretty simple 👌

<br>

<img src="/images/AutoPilot-HowTo.png" style="width: 900px;height: auto;">

## Prerequisites

- Fundamental understanding of [YAML](https://en.wikipedia.org/wiki/YAML).
- [AutoPilot](https://github.com/Noam-Alum/AutoPilot/) installed.
- (Optional for testing) Some form of VM setup.
- Any method for editing text.

## Identify your system needs

From my experience, there are two ways you can conclude your system needs.

* Firstly, if you plan to format your computer and want an easier way to return to your current setup (or close to it) or you want to prepare as a precaution an AutoPilot configuration file, you should take stock of everything you've customized, this includes any personalized settings, applications, or configurations you use daily—essentially, anything you've tailored to fit your specific needs.

* Secondly, if you're looking for a fresh start and have a clear idea of what you want on your new system, or if you need to set up computers for your team (for example, specifying required software like Slack, AnyDesk, etc.).

It's important to document all your requirements so we can apply them later.

## Aligning directives with your requirements

After you concludded your requirements, you can start to align them with directives.

:::tip 
Click [here](/AutoPilot/Introduction.html#features) for all directives, or alternatively click on the **Directives** section on the sidebar. (`AutoPilot - It's simple` --> `Directives`)
:::

#### For example:

Lets say after a after assessing my needs I wrote the following requirements:

```text
# Noams requirements for a new system

This is a list of all the requirements noam wants on a new system.

- Discord installed
- Google chrome installed
- User named noam - make him sudoer
- SELinux disabled # I dont have the power to configure it ;)
- These aliases for user noam:
   alias hosts='/usr/local/bin/scripts/./host.sh'
   alias SRWP='/usr/local/bin/scripts/./SRWP.sh' 

- This function in user noams bashrc:
    function gc {
	    Cf=$(grep -rl "$1" /home/noam/.cache/google-chrome/)
    	if [ -n "$Cf" ]; then
		    echo -e "Found google-chrome cache files:\n$Cf"
	    else
		    echo "No google-chrome cache files containing: $1"
	    fi
    }
```

We can clearly identify **four** directives that need to be used:

| Directive | Requirements |
|-----------|--------------|
| [Installed_packages](/AutoPilot/directives/Installed_packages.html) | Install Discord and Google chrome |
| [Users](/AutoPilot/directives/Users.html) | Create user noam as a sudoer |
| [SELinux](/AutoPilot/directives/SELinux.html) | Disable SELinux |
| [Environment_configuration](/AutoPilot/directives/Environment_configuration.html) | Add aliases and the gc function |

---

## Create the configuration

Now that we have the information we need, we can start writing the configuration file.

Lets to this step by step.

:::tip
You might want to add a headline to you configuration file, user `#` to comment out anything in the configuration.

```yaml
# This is noams personal computer configuration.

Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
```
:::



1. **Installed_packages:**<br>
    We know that we want to install Google chrome and Discord, I alredy know that both of them are installed using a deb file, so I need to collect the download links for both of them.
    | Discord | Google chrome |
    |---------|---------------|
    | <https://discord.com/api/download?platform=linux&format=deb>      | <https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb>            |
    Then I need to implement this in YAML:
    ```yaml
    Installed_packages:
      - name: Discord
        type: Pkg
        source: "https://discord.com/api/download?platform=linux&format=deb"
      - name: Chrome
        type: Pkg
        source: "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb"
    ```

    > You can see that because this is an external package I used the *Pkg* type and use the download link as the *source*.
2. **Users:**<br>
    I want to create a user named noam and make him a sudoer, and while we're at it lets choose to generate a strong password for him.<br> Now lets implement this in YAML:
    ```yaml
    Users:
      - name: noam
        pass: "%Gen%"
        group: noam,sudo
        shell: /bin/bash
    ```
    > You can use `%Gen%` to tell AutoPilot to generate a strong password for you!
3. **SELinux:**<br>
    This part is very simple, we just need to set SELinux to `Disabled`:
    ```yaml
    SELinux: Disabled
    ```
4. **Environment_configuration:**<br>
    For this part I need to take the aliases and the function and put them one after another like so:
    ```text
    alias hosts='/usr/local/bin/scripts/./host.sh'
    alias SRWP='/usr/local/bin/scripts/./SRWP.sh'
    function gc {
	    Cf=$(grep -rl "$1" /home/noam/.cache/google-chrome/)
    	if [ -n "$Cf" ]; then
		    echo -e "Found google-chrome cache files:\n$Cf"
	    else
		    echo "No google-chrome cache files containing: $1"
	    fi
    }
    ```
    As these lines are going to noams `.bashrc` file. (Like I wanted)<br>
    Lets  implement this in YAML:
    ```yaml
    Environment_configuration:
      - user: noam
        config: |
          alias hosts='/usr/local/bin/scripts/./host.sh'
          alias SRWP='/usr/local/bin/scripts/./SRWP.sh'
          function gc {
	          Cf=$(grep -rl "$1" /home/noam/.cache/google-chrome/)
    	      if [ -n "$Cf" ]; then
		          echo -e "Found google-chrome cache files:\n$Cf"
	          else
		          echo "No google-chrome cache files containing: $1"
	          fi
          }
    ```

<br>

**After implementing all your requirements in *YAML* you should end up with something like this:**

```yaml
# This is noams personal computer configuration.

Installed_packages:
  - name: Discord
    type: Pkg
    source: "https://discord.com/api/download?platform=linux&format=deb"
  - name: Chrome
    type: Pkg
    source: "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb"
Users:
  - name: noam
    pass: "%Gen%"
    group: noam,sudo
    shell: /bin/bash
SELinux: Disabled
Environment_configuration:
  - user: noam
    config: |
      alias hosts='/usr/local/bin/scripts/./host.sh'
      alias SRWP='/usr/local/bin/scripts/./SRWP.sh'
      function gc {
          Cf=$(grep -rl "$1" /home/noam/.cache/google-chrome/)
	      if [ -n "$Cf" ]; then
	          echo -e "Found google-chrome cache files:\n$Cf"
          else
	          echo "No google-chrome cache files containing: $1"
          fi
      }
```

<br><hr><br>

:::warning
## Testing - optional

I highly recommend testing this **AutoPilot** configuration on a blank virtual machine with the operating system you plan to use in the future.<br>
This will help you avoid any unexpected issues that might arise.
:::
