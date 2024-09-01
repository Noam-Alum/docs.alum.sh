## user_input

**user_input** is a function meant to take user input in and save it as a variable
in the best way possible.

## Types

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
     ``` bash➣ What protocol do you want to use? [tcp/udp] : udpoth integers and charecters.
     ``` bash
     user_input username "txt" "What is your username?"
     ```

**For example:**
```bash
user_input protocol "opt tcp udp" "<g>{{ B-arrow }}</g> What protocol do you want to use? [<bl>tcp</bl>/<r>udp</r>] : "
```

**Result:**
➣ What protocol do you want to use? [tcp/udp] : udp
(Now a variable named "protocol" was created with the value of "udp")