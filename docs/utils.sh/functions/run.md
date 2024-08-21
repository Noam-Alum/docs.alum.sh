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

::: tip uc_ variables
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
:::
