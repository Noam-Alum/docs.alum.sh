# <img src="/images/AutoPilot-Icons/script.png" alt="script image" width="28" height="auto"> Contribute to AutoPilot script

**In this page I will walk you trough how to contribute to AutoPilot script.**

<img src="/images/AutoPilot-contribute.png" style="width: 900px;height: auto;">

## Prerequisites

1. AutoPilot [forked](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) on your GitHub account.
2. Text editor.
3. Some sort of VM setup (optional).

## Make changes

There are several functions you need to know before making any changes:

* **xecho:**<br>
    Every time you want to `echo` something you **need** to use the following format:
    ```bash
    xecho "$[Choosen prefix] <biw>[Text data]<biw>"
    ```
    Here are all the prefixes variables available:
    * `$info_prefix` - Anything that doesnt indicate something.
    * `$good_prefix` - Something good happend.
    * `$notgood_prefix` - Something not good happend but nothing crucial happend.
    * `$bad_prefix` - Something bad happend. (e.g. an error)
    **For example**:<br>
    If I wanted to notify the user that what ever I wanted to happend succeeded, I would use something like this:
    ```bash
    xecho "$good_prefix <biw>What ever I wanted to happen happend.</biw>"
    ```
    :::tip
    For extended explenation on the `xecho` function, refer [here](https://docs.alum.sh/utils.sh/functions/xecho.html)
    > You still have to format all text to be bold intense white.
    :::
* **fail:**<br>
    When you want to exit the script, you would have to cal the `fail` function.
    Here's the syntax:
    ```bash
    fail [EXIT CODE] "[TEXT DATA]"
    ```
    For example:
    ```bash
    fail 1 "File not found."
    ```
* **check_dependencies:**<br>
    When you want to install a new dependencie for what ever reason, you would use `check_dependencies`:
    ```bash
    check_dependencies "[Dependency name]" "$notgood_prefix <biw>[TEXT DATA]</biw>" "[CMD TO INSTALL]" "[TEST AFTER INSTALL]"
    ```
    For example:
    ```bash
    check_dependencies "network-manager" "$notgood_prefix <biw>Dependency missing, trying to install network-manager.</biw>" "apt install -yq network-manager &> /dev/null" "which nmcli"
    ```
    :::warning
    I **do not** recommend adding dependencies to AutoPilot.
    :::
* **parse_yaml:**<br>
    Like you probably know, AutoPilot uses *YAML* for its configuration files, this fuction is meant for you to parse new YAML easly.
	1. Extract Keys from a List or Dictionary:
		```bash
		parse_yaml keys "yaml_path" "sub_key"
		```
		- **`yaml_path`**: Path to the YAML list or dictionary.
		- **`sub_key`**: Sub-key within the items to extract (optional).

		**Example**:
		```bash
		parse_yaml keys "items" "name"
		```
		This command will list all names in the `items` list to STDOUT.
	2. Extract a Single Value:
		```bash
		parse_yaml 0 "yaml_path"
		```
		- **`yaml_path`**: Path to the YAML value.

		**Example**:
		```bash
		parse_yaml 0 "SELinux"
		```
		This command retrieves the value at `SELinux` and assigns it to a variable named like the `yaml_path`.
	3. Extract a List of Values to an Array:
		```bash
		parse_yaml 1 "yaml_path"
		```
		- **`yaml_path`**: Path to the YAML list.

		**Example**:
		```bash
		parse_yaml 1 "names"
		```
		This command extracts all items from `names` and stores them in an array named like the `yaml_path`.
	4. Extract Key-Value Pairs to an Associative Array:
		```bash
		parse_yaml 2 "yaml_path" "key_path" "value_path"
		```
		- **`yaml_path`**: Path to the YAML list.
		- **`key_path`**: Path to the key within the items.
		- **`value_path`**: Path to the value associated with each key.

		**Example**:
		```bash
		parse_yaml 2 "items" "name" "value"
		```
		This command extracts key-value pairs where the keys are from `name` and the values are from `value`, storing them in an associative array named like the `yaml_path`.

	5. Extract Key-Value Pairs with Two Values per Key:
		```bash
		parse_yaml 3 "yaml_path" "key_path" "value1_path" "value2_path"
		```
		- **`yaml_path`**: Path to the YAML list.
		- **`key_path`**: Path to the key within the items.
		- **`value1_path`**: Path to the first value associated with each key.
		- **`value2_path`**: Path to the second value associated with each key.

		**Example**:
		```bash
		parse_yaml 3 "config.items" "name" "value1" "value2"
		```
		This command extracts key-value pairs where each key from `name` has two associated values from `value1` and `value2`.<br>
        To access the data use something like this:
        ```bash
		parse_yaml 3 Installed_packages name type source
		if [ "${#Installed_packages[@]}" -ne 0 ]; then
			IP_keys=($(tr ' ' '\n' <<< "${!Installed_packages[@]}" | grep -Ev '\[(0|1)\]' | sort -u))
			for pkg in "${IP_keys[@]}"
			do
			pkg_type="${Installed_packages["$pkg [0]"]}"
			pkg_source="${Installed_packages["$pkg [1]"]}"
		fi
        ```
		> This was the YAML:
		> ```yaml
		> Installed_packages:
		> Installed_packages:
		>   - name: AnyName
		>     type: Deb/Pkg/Sh
		>     source: Deb name/Package url/Script url
		> ```

	6. Extract Key-Value Pairs with Three Values per Key:
		```bash
		parse_yaml 4 "yaml_path" "key_path" "value1_path" "value2_path" "value3_path"
		```
		- **`yaml_path`**: Path to the YAML list.
		- **`key_path`**: Path to the key within the items.
		- **`value1_path`**: Path to the first value associated with each key.
		- **`value2_path`**: Path to the second value associated with each key.
		- **`value3_path`**: Path to the third value associated with each key.

		**Example**:
		```bash
		parse_yaml 4 "config.items" "name" "value1" "value2" "value3"
		```
		This command extracts key-value pairs where each key from `name` has three associated values from `value1`, `value2`, and `value3`.<br>
        To access the data use something like this:
        ```bash
		parse_yaml 4 Users name pass group shell
		if [ "${#Users[@]}" -ne 0 ]; then
			U_keys=($(tr ' ' '\n' <<< "${!Users[@]}" | grep -Ev '\[(0|1|2)\]' | sort -u))
			for user in "${U_keys[@]}"; do
			userpass="${Users["$user [0]"]}"
			usergrp="${Users["$user [1]"]}"
			usershell="${Users["$user [2]"]}"
		fi
        ```
		> This was the YAML:
		> ```yaml
		> Users:
		>   - name: USERNAME
		>     pass: PASSWORD/%Gen%
		>     group: GROUP1,GROUP2,GROUP3
		>     shell: /path/to/shell
		> ```

:::tip
In general AutoPilot uses [utils.sh](https://github.com/Noam-Alum/utils.sh) heavily, it is recommend that you learn how to use its functions before adding something to AutoPilot. ([Link to docs](https://docs.alum.sh/utils.sh/Introduction.html))
:::

Now that you know the basic functions needed to add/change something in AutoPilot, you need to understand the stracture of AutoPilot.

Since AutoPilot revolves around directives each directive has its own function with the same name, but with a prefix of `rn_`, for example:
```yaml
SomeDirective: Yes
```
```bash
function rn_SomeDirective {
    parse_yaml 0 SomeDirective
    xecho "$info_prefix <biw>Called SomeDirective, $SomeDirective. {{ E-smile }}</biw>"
}
```
That is so it can be called when it is mentioned in the configuration file via this part of the script:
```bash
## Execute functions
for key in "${keys[@]}"
do
  rn_$key
done
```
:::tip
Naming a function like a directive in the configuration file (With the `rn_` prefix) only calls the function, to also retrieve any data from the directive use the `parse_yaml` function.
:::

## Test changes

Test the newly added changes by running the script either on your personal computer (if applicable) or a virtual machine.

It's highly recommended to use some form of VM setup, to not harm your personal environment.

:::tip
I would suggest using [Vagrant](https://www.vagrantup.com/), as it enables the creation of lightweight, reproducible, and portable development environments.
:::

Using a VM also enables me as the developer a way to recreate the exact circomstances you had while encountering an issue/bug, so you could ask for a helping hand :grin:.

## Send a PR

After making changes to the AutoPilot script, push to your AutoPilot fork then send a PR with detailed explenation of the changes you've made or any other valuable information, for example:

```markdown
# Added Users directive

I've added the Users directive, It's responsable for adding users.

Here's the syntax for the configuration file:
Users:
  - name: USERNAME
    pass: PASSWORD/%Gen%
    group: GROUP1,GROUP2,GROUP3
    shell: /path/to/shell

For example:
 Users:
    - name: Noam
      pass: 1234
      group: Noam,sudo,admins
      shell: /bin/bash

### Notes
- one
- two
- three
```

---

<br>

**Huge thank you to anyone willing to contribute! 🙏**
