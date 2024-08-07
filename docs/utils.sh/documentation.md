# Utils.sh

A collection of functions to make scripting in bash easier.<br>
You can place **uc_** variables in the head of your script to configure utils functions for your liking.

| **uc_ variable** | **function** | **description**                       |
|------------------|--------------|---------------------------------------|
| uc_ifc_posfix    | ifcontinue   | Change default posfix (*[yes/no]*).   |
| uc_gr_len        | gen_random   | Change default length (*12*).         |
| uc_rn_err_msg    | run          | Change the structure of the error msg.|
| uc_rn_inf_msg    | run          | Change the structure of the info msg. | 

> Each function description includes its **uc_** variables with examples.

If a uc_ variable has dynamically changing parts, you'd have to use **placeholders**, placeholders are
called using {[ name ]}:

| **placeholder**  | **function** | **description**                                              |
|------------------|--------------|--------------------------------------------------------------|
| {[ rn_cmd ]}     | run          | The command executed by the run function.                    |
| {[ rn_err ]}     | run          | The error returned after executing a given command with run. |

## xecho - Extended echo

**xecho** is a utility designed to facilitate color usage in output,<br>
offering a variety of shortcodes for easy integration into your text.

### ShortCodes:
| ShortCode            | Result                          |
| -------------------- | ------------------------------- |
| **Blocks:**          |                                 |
| {{ ERROR }}          | [ERROR]  (text in red)          |
| {{ GOOD }}           | [GOOD] (text in green)          |
| {{ INFO }}           | [INFO] (text in grey)           |
| {{ WARNING }}        | [WARNING] (text in yellow)      |
| {{ ALERT }}          | [ALERT] (text in orange)        |
| {{ NOTE }}           | [NOTE] (text in blue)           |
| {{ IMPORTANT }}      | [IMPORTANT] (text in bold)      |
| {{ SUCCESS }}        | [SUCCESS] (text in light green) |
| **Faces:**           |                                 |
| {{ E-shocked }}      | ⊙▂⊙                             |
| {{ E-smile }}        | ʘ‿ʘ                             |
| {{ E-angry }}        | ಠ_ರೃ                             |
| {{ E-sad }}          | ◕︵◕                             |
| {{ E-nervous }}      | ⊙﹏⊙                             |
| **Other:**           |                                 |
| {{ E-gun }}          | ▄︻̷̿┻̿═━一                       |
| {{ E-heart }}        | ❤                               |
| {{ E-star }}         | ✮                               |
| {{ E-music }}        | ♫                               |
| {{ E-moon }}         | ☾                               |
| {{ E-cloud }}        | ☁︎                               |
| {{ E-arrowright }}   | ➜                               |
| {{ E-arrowleft }}    | ←                               |
| {{ E-redo }}         | ↺                               |
| {{ E-sleep }}        | ᶻz                              |
| {{ E-success }}      | ✔                               |
| {{ E-fail }}         | ✘                               |
| **Page breaks:**     |                                 |
| {{ BR-scissors }}    | -ˋˏ✄┈┈┈┈                         |
| {{ BR-star }}        | ────⋆⋅☆⋅⋆────                   |
| {{ BR-specialdots }} | ✦•┈๑⋅⋯ ⋯⋅๑┈•✦                   |
| {{ BR-heart }}       | ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ                 |
| {{ BR-bear }}        | ━━━━━━ʕ•㉨•ʔ━━━━━━━              |
| {{ BR-music }}       | 01:43 ━━━━●───── 03:50          |
| **Text bullets:**    |                                 |
| {{ B-dot }}          | •                               |
| {{ B-arrow }}        | ➣                               |
| {{ B-dimond }}       | ◈                               |

### Tags:
| Color                                 | Tag        | Example                 |
|---------------------------------------|------------|-------------------------|
| Black                                 | `<b>`      | `<b>word</b>`           |
| Red                                   | `<r>`      | `<r>word</r>`           |
| Green                                 | `<g>`      | `<g>word</g>`           |
| Yellow                                | `<y>`      | `<y>word</y>`           |
| Blue                                  | `<bl>`     | `<bl>word</bl>`         |
| Purple                                | `<p>`      | `<p>word</p>`           |
| Cyan                                  | `<c>`      | `<c>word</c>`           |
| White                                 | `<w>`      | `<w>word</w>`           |
| **Bold Colors:**                      |            |                         |
| Bold Black                            | `<bb>`     | `<bb>word</bb>`         |
| Bold Red                              | `<br>`     | `<br>word</br>`         |
| Bold Green                            | `<bg>`     | `<bg>word</bg>`         |
| Bold Yellow                           | `<by>`     | `<by>word</by>`         |
| Bold Blue                             | `<bbl>`    | `<bbl>word</bbl>`       |
| Bold Purple                           | `<bp>`     | `<bp>word</bp>`         |
| Bold Cyan                             | `<bc>`     | `<bc>word</bc>`         |
| Bold White                            | `<bw>`     | `<bw>word</bw>`         |
| **Background Colors:**                |            |                         |
| Black background                      | `<on_b>`   | `<on_b>word</on_b>`     |
| Red background                        | `<on_r>`   | `<on_r>word</on_r>`     |
| Green background                      | `<on_g>`   | `<on_g>word</on_g>`     |
| Yellow background                     | `<on_y>`   | `<on_y>word</on_y>`     |
| Blue background                       | `<on_bl>`  | `<on_bl>word</on_bl>`   |
| Purple background                     | `<on_p>`   | `<on_p>word</on_p>`     |
| Cyan background                       | `<on_c>`   | `<on_c>word</on_c>`     |
| White background                      | `<on_w>`   | `<on_w>word</on_w>`     |
| **Bold High Intensity Colors:**       |            |                         |
| Bold High Intensity Black             | `<bib>`    | `<bib>word</bib>`       |
| Bold High Intensity Red               | `<bir>`    | `<bir>word</bir>`       |
| Bold High Intensity Green             | `<big>`    | `<big>word</big>`       |
| Bold High Intensity Yellow            | `<biy>`    | `<biy>word</biy>`       |
| Bold High Intensity Blue              | `<bibl>`   | `<bibl>word</bibl>`     |
| Bold High Intensity Purple            | `<bip>`    | `<bip>word</bip>`       |
| Bold High Intensity Cyan              | `<bic>`    | `<bic>word</bic>`       |
| Bold High Intensity White             | `<biw>`    | `<biw>word</biw>`       |
| **High Intensity Background Colors:** |            |                         |
| High Intensity Black background       | `<on_ib>`  | `<on_ib>word</on_ib>`   |
| High Intensity Red background         | `<on_ir>`  | `<on_ir>word</on_ir>`   |
| High Intensity Green background       | `<on_ig>`  | `<on_ig>word</on_ig>`   |
| High Intensity Yellow background      | `<on_iy>`  | `<on_iy>word</on_iy>`   |
| High Intensity Blue background        | `<on_ibl>` | `<on_ibl>word</on_ibl>` |
| High Intensity Purple background      | `<on_ip>`  | `<on_ip>word</on_ip>`   |
| High Intensity Cyan background        | `<on_ic>`  | `<on_ic>word</on_ic>`   |
| High Intensity White background       | `<on_iw>`  | `<on_iw>word</on_iw>`   |

**For example:**
```bash
xecho "<on_ic><bir>I love bash </bir></on_ic><on_ir><bic> {{ E-heart }} </bic></on_ir>"
```
**Results:**<br>
<span style="color: red; background-color: cyan;">I love bash </span><span style="color: cyan; background-color: red;"> ❤ </span>

## ifcontinue

**ifcontinue** is a function meant to return binary response to a yes-or-no question.

**For example:**
```bash
if [ $(ifcontinue "{{ B-dot }} Do <on_bl>you</on_bl> want to go <bb>do something</bb>?") -eq 0 ]; then
  xecho "Good - <g>{{ E-smile }}</g>"
else
  xecho "Bad - <g>{{ E-sad }}</g>"
fi
```

**Results**<br>
• Do <span style="color: white; background-color: blue;">you</span> want to go <strong>do something</strong>? [<span style="color: green;">yes</span>/<span style="color: red;">no</span>] : yes<br>
Good - <span style="color: green;">ʘ‿ʘ</span>

### uc variables:

`uc_ifc_posfix` - Change default posfix (*[yes/no]*).
For example:
```bash
uc_ifc_posfix="<bl>yes</bl>|<bir>no</bir> - "
```
Would change "[<span style="color: green;">yes</span>/<span style="color: red;">no</span>]" to "<span style="color: blue;">yes</span>|<span style="color: red;">no</span> -".

## user_input

**user_input** is a function meant to take user input in and save it as a variable<br>
in the best way posable.

### Types

- **mail:** validates a mail address.
     ```bash
     user_input mail "mail" "What is your mail address?"
     ```
- **int:** only accepts integers, you can choose a range, if you dont want just use plane `int`.
     ```bash
     user_input age "int 1 100" "What is your age?"
     # OR
     user_input age "int" "What is your age?"
     ```
- **str:** accepts only charecters.
     ```bash
     user_input string "str" "What is your name?"
     ```
- **opt:** accepts only selection of inputs given after opt.
     ``` bash
     user_input num "opt one two three four" "What number?"
     ```
- **txt:** accepts both integers and charecters.
     ``` bash
     user_input username "txt" "What is your username?"
     ```

**For example:**
```bash
user_input protocol "opt tcp udp" "<g>{{ B-arrow }}</g> What protocol do you want to use? [<bl>tcp</bl>/<r>udp</r>] : "
```
**Result:**<br>
<span style="color: green">➣</span> What protocol do you want to use? [<span style="color: blue">tcp</span>/<span style="color: red">udp</span>] : udp<br>
(Now a variable named "protocol" was created with the value of "udp")

## gen_random

Generate random data.

Options:
- int | Only use numbers.
- str | Only use alphabetic characters.
- all | Use anything.

**For example:**
```bash
gen_random int 14
```
**Would return:**<br>
36261766974132
 
### uc variables:
 
`uc_gr_len` - Change default length (*12*).<br>
For example:
```bash
uc_gr_len=8
```

## run - run commands in an informative way

The **run** function is intended to execute commands with both informative clarity
and stylish presentation.

**Usage:**
```bash
run <wanted-exit-code> "<info/notinfo>" "<cmd>"
```
- `<wanted-exit-code>`: An integer, usually 0.
- `<info/notinfo>`: Wheter or not to inform if a commmand has been executed.
  ```bash
  run 0 "info" "cat exists.txt"
  ```
  Would return:<br>
  [INFO] Executed  cat exists.txt  successfully ✔.<br>
  If I used *noinfo* nothig would have been returned.
- `<cmd>`: The command you want to execute.

**For example:**
```
run 0 "info" cat does-not-exists.txt 
```
Would return:

```txt
[ERROR] Error while executing  cat does-not-exists.txt  ಠ_ರೃ
✦•┈๑⋅⋯ ⋯⋅๑┈•✦
   Error:
✦•┈๑⋅⋯ ⋯⋅๑┈•✦
cat: does-not-exists.txt: No such file or directory
✦•┈๑⋅⋯ ⋯⋅๑┈•✦
```

### uc_ variables

#### Placeholders

| Placeholder    | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| `{[ rn_cmd ]}` | The command executed by the run function.                              |
| `{[ rn_err ]}` | The error returned after executing a given command with run            |

- **uc_rn_inf_msg:** Change the info message stracture.<br>
  ```bash
  uc_rn_inf_msg="{{ B-arrow }} Smootly executed {[ rn_cmd ]} {{ E-smile }}"
  ```
  Now when info messages are used they would look like so:
  ```txt
  ➣ Smoothly executed {[ rn_cmd ]} ʘ‿ʘ
  ```
  {[ rn_cmd ]} being the command you've executed.
  
- **uc_rn_err_msg:** Change the error message stracture.<br>
  ```bash
  uc_rn_err_msg="{{ B-arrow }} Ops! error while executing {[ rn_cmd ]} {{ E-sad }}\n{[ rn_err ]}"
  ```
  Now when error messages are used they would look like so:
  ```txt
  ➣ Ops! error while executing {[ rn_cmd ]} ◕︵◕
  {[ rn_err ]}
  ```
  {[ rn_cmd ]} being the command you've executed, and {[ rn_err ]} being the error returned.

## parser

The `parser` function processes text using different modes and options specified by the user.

**Usage:**
```bash
parser <mode> <submode> [options...]
```

### Modes and Submodes:

1. **Mode `l` (Line-based operations):**
   - **Submode `c` (Column extraction):**
     ```bash
     parser l c <column_number>
     ```
    Extracts the specified column from each line of input. (**NF** for final column)

   - **Submode `b` (Block extraction):**
    ```bash
    parser l b <start_pattern> <end_pattern>
    ```
    Extracts lines between the `start_pattern` and `end_pattern`.

2. **Mode `b` (Block-based operations):**
   - **Submode `w` (Within block extraction):**
     ```bash
     parser b w <start_pattern> <end_pattern>
     ```
     Extracts lines within blocks defined by `start_pattern` and `end_pattern`.

   - **Submode `n` (Line number extraction):**
    ```bash
    parser b n <line_number>
    ```
    Extracts the line specified by `line_number`.

### Examples:

1. **Extracting a specific column (`l c` mode):**
   ```bash
   parser l c 2
   ```
   This will extract the second column from each line of input.

## easy_curl

The easy_curl function provides simplified functionality to retrieve specific information from a URL using curl.

**Usage:**
```bash
easy_curl <option> <sub-option> <URL>
```

### Options

- **p**: Perform a curl operation with the specified sub-option.
  - **type**: Retrieve the content type of the resource at the specified URL.
  - **errmsg**: Retrieve the error message from the attempted operation.
  - **ec**: Retrieve the exit code from the curl operation.
  - **hc**: Retrieve the http code from the response from the server.

### Examples

1. Retrieve content type:
   ```bash
   easy_curl p type http://example.com
   ```

2. Retrieve error message:
   ```bash
   easy_curl p errmsg http://example.com
   ```

3. Retrieve exit code:
   ```bash
   easy_curl p ec http://example.com
   ```
4. Retrieve http code:
   ```bash
   easy_curl p hc http://example.com
   ```