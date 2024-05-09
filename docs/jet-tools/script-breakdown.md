# script breakdown

<details>
    <summary>Full script:</summary>
    <p><iframe src="https://gitcodeembedder.blogspot.com/?gh=Noam-Alum/jet-tools/main/jet-tools&amp;lang=bash" width="100%" height="700px" frameborder="0"></iframe></p>
</details>

## Structure

The general structure of the jet-tools script is:

- [**Functions**](/jet-tools/script-breakdown.html#functions)
- [**Define tools**](/jet-tools/script-breakdown.html#define-tools)
- [**Call tool**](/jet-tools/script-breakdown.html#call-tool)

All of the tools functions in the script are carefully named in the `Tools` array:
```sh
Tools=("1.imunify malicious list" "| 2.Alter tables" "| 3.WordPress related" "| 4.Running proc" "| 5.litespeed data domains" "| 6.download data")
```
Basically the items in the array are the [functions](/jet-tools/script-breakdown.html#functions) names but with spaces instead of hyphens (the item `imunify malicious list` is equal to a function named `imunify_malicious_list`), this lets be call the function with ease and makes adding/removing functions (tools) convenient.

POC:
```sh
function say_hello {
    echo "hello"
}

ThisIsSayHello="say_hello"
$ThisIsSayHello
hello
```

### Define tools:
The Define tools section is meant to map user input to the tool (function) needed to be called
```sh
echo "Jet-Tools:"
Tools=("imunify malicious list" "Alter tables" "WordPress related" "Running proc" "litespeed data domains" "download data")
get_input $1
```

the Define tools section uses the [get_input](/jet-tools/script-breakdown.html#get-input) function to allow users to select what tool they want to use.
This function would output the full array of tools and a prompt asking the user which tool he whats to use, if you take a look of the third line you would see how I implemented the use of options all trough this script. (if `$1` is empty then get the info else the variable is equal to `$1`)

Finally the `$tool_id` is subtracted by one:
```sh
tool_id=$(( $tool_id - 1 ))
```

:::warning
The `$tool_id` variable is the index of the item in the `Tools` array that represents the tool.
:::

### Call tool:
The call tool section formats the item in the `Tools` array in the index of `$tool_id` and saves it as `$tool_function` for later use.
```sh
tool_function=$(echo "${Tools[$tool_id]}" | tr -s " " "_"})
```
Then it echos it (The item in the array with only its name):
```sh
echo -e "\n----\n$tool_function :"
```

Finally it calls the function with the same name as the value of `$tool_function` with possible options:
```sh
shift 1
$tool_function "$1" "$2" "$3" "$4"
```
We have to `shift 1` because we've used `$1` in the [Define tools](/jet-tools/script-breakdown.html#define-tools) section.
### Functions:

The Functions zone holds all the functions used in the script, it includes the following functions:

- [get_user_input](/jet-tools/script-breakdown.html#get-user-input)
- [get_input](/jet-tools/script-breakdown.html#get-input)
- [imunify_malicious_list](/jet-tools/tools/imunify-malicious-list.html)
- [Alter_tables](/jet-tools/tools/Alter-tables.html)
- [WordPress_related](/jet-tools/tools/WordPress-related.html)
- [Running_proc](/jet-tools/tools/Running_proc.html)
- [litespeed_data_domains](/jet-tools/tools/litespeed_data_domains.html)
- [download_data](/jet-tools/tools/download_data.html)

#### get_user_input:
Function:
```sh
function get_user_input {
	var_name=$1
	var_type=$2
	shift 2  # Shift the arguments to access the remaining ones

	# Join the remaining arguments to form the complete prompt
	prompt="$*"

	read -p " - $prompt" $var_name < /dev/tty

	while [ -z "${!var_name}" ]; do
		read -p " - $prompt" $var_name < /dev/tty
	done

	if [ "$var_type" == "INT" ]; then
		while ! [[ ${!var_name} =~ ^[0-9]+$ ]]; do
			echo " - Insert an integer!"
			read -p " - $prompt" $var_name < /dev/tty
		done
	elif [ "$var_type" == "STR" ]; then
		while [[ -n "${!var_name}" && "${!var_name}" =~ ^[0-9]+$ ]]; do
			echo " - Insert a string!"
			read -p " - $prompt" $var_name < /dev/tty
		done
	fi

	export $var_name
}
```

The get_user_input function takes two inputs, **variable name**, **type** and **prompt**:
```sh
get_user_input <VAR-NAME> <INT/STR> <PROMPT>
```

And uses read to allocate the input from users, then it checks if the input is empty and if so asks for the input again.
If the variable is an int the function verifies that the input is an integer, if not it asks for the input again, the same for strings.

Finally it exports the users input as a variable named based on what you provided the function.

#### get_input:
Function:
```sh
function get_input {
	echo -e "$(for ((i = 0; i < ${#Tools[@]}; i++)); do echo "$(( $i + 1)).${Tools[$i]}" | tr -s " " "_" && [ $(( $i + 1 )) != ${#Tools[@]} ] && echo "|"; done | xargs)\n$1\n$1"
	[ -z $1 ] && read -p "- Which tool do you want to use? : " tool_id < /dev/tty || tool_id="$1"

	while [ -z "$tool_id" ]; do
		get_input
	done

	while [ $tool_id -gt ${#Tools[@]} ] || [ $tool_id -lt 0 ] || ! [[ $tool_id =~ ^[0-9]+$ ]]; do
		echo -e "\033[0;31mYou can't use $tool_id, it does not exist or is not a valid integer!\033[0m"
			get_input
	done
}
```

This function is responsible for getting the users tool choice.
If the input equals zero, not an integer, greater than the arrays length or equals to nothing the function would run again. (asking again for the input)

## Visual explanation

![image](/images/jet-tools-example.png)