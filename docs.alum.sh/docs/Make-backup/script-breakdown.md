# script breakdown

> This page strictly refers to the make_backup_d.sh script

<details>
    <summary>make_backup_d.sh:</summary>
    <iframe src="https://gitcodeembedder.blogspot.com/?gh=Noam-Alum/make_backup/main/opt/make_backup/make_backup_d.sh&amp;lang=bash" width="100%" height="700px" frameborder="0"></iframe>
</details>

## Functions

These are the functions used in the Make Backup Demon:
- [AddLog](#addlog)
- [HandleError](#handleerror)
- [get_binary](#get-binary)
- [read_config](#read-config)
- [keep_backups](#keep-backups)

### AddLog
The AddLog function is meant to log to the log file via `rsyslog` using the `logger` command.<br>
Here is the function itself:
```sh
function AddLog {
    # VARS
    local Tag="$1"
    shift
    local Message="$*"
    
    # get binaries
    # search for binary
    if [ ! -z "$(command -v logger)" ]; then
        # set command to full path to binary
        export logger="$(command -v logger)"

    # try running the command if so use it as is
    elif [ ! -z "$(logger --help 2>/dev/null)" ]; then
        export logger="logger"
        
    # binary dependency missing exiting
    else    
        # EXIT
        exit 1
    fi

    # LOG
    $logger -p local0.info -t "[$Tag]" "$Message"
}
```

Now because the [get_binary](#get-binary) function uses the `AddLog` function the search for binary needs to happen in the `AddLog` function manually.<br>
After locating the logger commands full path to the binary we send an **info** level log message to the **local0** facility with the Tag (first argument/$1) and the message (all other arguments/$*)

For example:
```sh
AddLog TEST this is a test for the AddLog function
```
Results:
```
noam@noam:~➤ tail -1 /var/log/make_backup.log 
Apr 18 04:40:10 noam [TEST]: this is a test for the AddLog function
```

### HandleError

The HandleError function is meant to catch and report failed bash commands using the [AddLog](#addlog) function and `trap`.<br>
HandleError:
```sh
function HandleError {
    local ExitCode=$?
    local ErrorMessage="$BASH_COMMAND exited with status $ExitCode"
    AddLog "ERROR" "$ErrorMessage"
}
trap 'HandleError' ERR
```

The `trap 'HandleError' ERR` line ensures that each error (non-zero exit status) occurs within the scope where the trap is active would trigger the HandleError function.

### get_binary
get_binary finds and sets as a variable the full path to a command to ensure operation of the script in any environment (if it even exists).<br>
For example, the `ls` command:
```sh
ls='/usr/bin/ls'
$ls -al
total 8
drwxrwxr-x 2 noam noam 4096 Apr 18 04:58 .
drwxrwxr-x 3 noam noam 4096 Apr 18 04:58 ..
```

The actual function:
```sh
function get_binary {
    trap 'HandleError' ERR

    # list all binaries
    mbn_commands=(
        "rmdir"
        "find"
        "cat"
        "date"
        "sed"
        "awk"
        "tr"
        "sort"
        "tail"
        "rm"
        "ls"
        "mkdir"
        "head"
        "rsync"
        "echo"
    )

    # get binaries
    for binary in ${mbn_commands[@]}
    do
        # search for binary
        if [ ! -z "$(command -v $binary)" ]; then
            # set command to full path to binary
            export $binary="$(command -v $binary)"

        # try running the command if so use it as is
        elif [ ! -z "$($binary --help 2>/dev/null)" ];then
            export $binary="$binary"
        
        # binary dependency missing exiting
        else
            # LOG--help
            AddLog "ERROR" "binary dependency missing \"$binary\" exiting."
            
            # EXIT
            exit 1
        fi
    done
}
```
> One thing you can notice is that it traps the [HandleError](#handleerror) function to catch errors!

The mbn_commands (**m**ake **b**ackup **n**ew) array contains the commands used in the script so they can be set as a variable with the full path to its binary.

Then the for loop passes every command and checks using the `command -v` command what is the full path to the binary and if it found it it sets it as the value of the commands variable, if command -v couldn't find the full path to the binary but the command can be used set the value of the command variable as the commands name, else log this incident (using the [AddLog](#addlog) function) and exit.

For example:
```sh
# lets say mbn_commands is equal to ("ls" "mkdir")
# ls was found by command -v, mkdir wasn't.
ls='/usr/bin/ls'
mkdir='mkdir'
echo -e "\$ls is going to be used as ls and equal to: $ls
\$mkdir is going to be used as mkdir and equal to: $mkdir"
```
Results:
```sh
$ls is going to be used as ls and equal to: /usr/bin/ls
$mkdir is going to be used as mkdir and equal to: mkdir
```

### read_config
read_config was built to read and set as variables the directives set in the `/etc/make_backup/make_backup.conf` file ([explained here](/Make-backup/usage.html)).

read_config:
```sh
function read_config {
    
    #### GET BINARY
    get_binary

    trap 'HandleError' ERR

    ## GET LIST ALL NEEDED ITEMS
    export Items="$($cat /etc/make_backup/make_backup.conf | $sed -n '/> start items to backup <$/,/> end items to backup <$/{//!p}')"
    if [ -z "$Items" ]; then
        AddLog "ERROR" error while reading items to backup, exiting.
        exit 1
    fi

    ## GET CONF VARS
    conf_vars=("count_location" "fallback_directory" "bd_count" "backup_in_c_month" "backup_in_month" "month_in_c_year" "month_in_year" "rm_old_backups" "BACKUP_dir")
    for c_var in ${conf_vars[@]}
    do
        export $c_var="$($awk -v cvar="$c_var" -F '"' '$1 ~ cvar {print $2}' /etc/make_backup/make_backup.conf)"
        if [ -z "$c_var" ]; then
            AddLog "ERROR" error while allocating \"$c_var\", exiting.
            exit 1
        fi
    done

    ## CHECK
    # COUNT FILE
    if [ ! -f "$count_location" ]; then
        AddLog "ERROR" count file "$count_location" could not be used, exiting.
        exit 1
    fi

    ## BACKUP DIR
    if [ -z "$BACKUP_dir" ] || [ ! -e "$BACKUP_dir" ]; then
        if [ ! -z "$fallback_directory" ] && [ -e "$fallback_directory" ]; then
            # SET BACKUP_dir to fallback_directory to avoid crashing
            export BACKUP_dir=$fallback_directory

            # set old backup removal to no
            export rm_old_backups="no"
        else
            AddLog "ERROR" No useable backup location, check /etc/make_backup/make_backup.conf for more information. exiting.
            exit 1
        fi
    fi
}
```
::: tip
Almost every function in the script uses the [AddLog](#addlog) and [HandleError](#handleerror) functions.
:::

After mapping the the commands to variables with the full path the their binaries using the [get_binary](#get-binary) function the function first gets all the Items that the user whats to backup (if found non exit and log), then it runs trough each directive in the conf_vars array and phrases it to the actual value (set by user), then assigns it as a variable with the name of the directive.

Regularly the BACKUP_dir is set to the main backup directory, if it couldn't be used the fallback directory would be set as BACKUP_dir and the rm_old_backups directive would be set to **no**.

For example:
```sh
# This (in the configuration file):
fallback_directory="/tmp"
> start items to backup <
/home/
/tmp/
> end items to backup <

# Would turn to this:
Items="/home/ /tmp/"
fallback_directory="/tmp"
```

### keep_backups
The keep_backups removes old backups based on the retention set in the configuration file.

```sh
function keep_backups {
    trap 'HandleError' ERR

    #### GET BINARY
    get_binary

    #### READ CONFIG ####
    read_config

    # CHECK IF THERE ARE BACKUPS IN THE Laptop_backups DIR
    if [ ! -z "$($ls $BACKUP_dir/ 2> /dev/null)" ] && [ "$rm_old_backups" == "yes" ]; then
        # GET BIGGEST YEAR
        biggest_year="$BACKUP_dir/$($ls $BACKUP_dir 2> /dev/null | $sort -n | $tail -1)"

        # GEt ALL YEARS DIRECTORIES
        for year_dir in $BACKUP_dir/*
        do
            # CHECK IF THIS IS THE BIGGEST YEAR
            if [ "$year_dir" == "$biggest_year" ]; then

                # COUNT MONTHS
                month_count=0

                # GET BIGGEST MONTH
                biggest_month="$year_dir/$($ls $year_dir 2> /dev/null| $sort -n | $tail -1)"

                # GEt ALL MONTH DIRECTORIES
                for month_dir in $year_dir/*
                do
                    month_count=$(( $month_count + 1 ))

                    # CHECK IF COUNT IS OVER month_in_year
                    if [ $month_count -gt $month_in_c_year ]; then
                        $rm -rf $year_dir/$($ls -t --time=atime -1 $year_dir 2> /dev/null | $tail -1)
                        AddLog "CLEARED SPACE" removed old month directory \"$year_dir/$($ls -t --time=atime -1 $year_dir 2> /dev/null | $tail -1)\"
                    fi
                    
                    # CHECK IF MONTH_DIR IS THE BIGGEST MONTH
                    if [ "$month_dir" == "$biggest_month" ]; then
                        # COUNT BACKUPS
                        backup_count=0

                        # GEt ALL BACKUPS DIRECTORIES
                        for backup in $month_dir/*
                        do
                            # ADD ONE TO COUNT
                            backup_count=$(( $backup_count + 1 ))

                            # CHECK IF COUNT IS OVER backup_in_c_month
                            if [ $backup_count -gt $backup_in_c_month ]; then
                                # REAMOVE OLDEST BACKUP IN MONTH DIR
                                $rm -rf $month_dir/$($ls -t --time=atime -1 $month_dir 2> /dev/null | $tail -1)
                                AddLog "CLEARED SPACE" removed old backup directory \"$month_dir/$($ls -t --time=atime -1 $month_dir 2> /dev/null | $tail -1)\"
                            fi
                        done
                    else
                        # COUNT BACKUPS
                        backup_count=0

                        # GEt ALL BACKUPS DIRECTORIES
                        for backup in $month_dir/*
                        do
                            # ADD ONE TO COUNT
                            backup_count=$(( $backup_count + 1 ))

                            # CHECK IF COUNT IS OVER backup_in_c_month
                            if [ $backup_count -gt $backup_in_month ]; then
                                # REAMOVE OLDEST BACKUP IN MONTH DIR
                                $rm -rf $month_dir/$($ls -t --time=atime -1 $month_dir 2> /dev/null | $tail -1)
                                AddLog "CLEARED SPACE" removed old backup directory \"$month_dir/$($ls -t --time=atime -1 $month_dir 2> /dev/null | $tail -1)\"
                            fi
                        done
                    fi
                done
            else
                # COUNT MONTHS
                month_count=0

                # GEt ALL MONTH DIRECTORIES
                for month_dir in $year_dir/*
                do
                    month_count=$(( $month_count + 1 ))
                    # CHECK IF COUNT IS OVER month_in_year
                    if [ $month_count -gt $month_in_year ]; then
                        $rm -rf $year_dir/$($ls -t --time=atime -1 $year_dir 2> /dev/null | $tail -1)
                        AddLog "CLEARED SPACE" removed old month directory \"$year_dir/$($ls -t --time=atime -1 $year_dir 2> /dev/null | $tail -1)\"
                    fi


                    # COUNT BACKUPS
                    backup_count=0

                    # GEt ALL BACKUPS DIRECTORIES
                    for backup in $month_dir/*
                    do
                        # ADD ONE TO COUNT
                        backup_count=$(( $backup_count + 1 ))

                        # CHECK IF COUNT IS OVER backup_in_c_month
                        if [ $backup_count -gt $backup_in_month ]; then
                            # REAMOVE OLDEST BACKUP IN MONTH DIR
                            $rm -rf $month_dir/$($ls -t --time=atime -1 $month_dir 2> /dev/null | $tail -1)
                            AddLog "CLEARED SPACE" removed old backup directory \"$month_dir/$($ls -t --time=atime -1 $month_dir 2> /dev/null | $tail -1)\"
                        fi
                    done  
                done
            fi
        done
    fi
}
```

I know this does not look the best, lets try to make it simpler to understand.

After calling read_config, get_binary and trapping HandleError the function proceeds to check if there are even any backups found in the current backup directory (main/fallback) and the rm_old_backups is set to **yes**.

It has two sections:
- [Year](#year)
    - [Month](#month)

#### year
If the statement is true, the function for each year in the backup directory:
| biggest year   | any other year|
| ---    | ---   |
| Remove Months by the **month_in_c_year** directive|Remove Months by the **month_in_year** directive|

#### month

| Current month| any other month|
| ---    | ---   |
| Remove Backups by the **backup_in_c_month** directive|Remove Backups by the **backup_in_month** directive|

## Main script
The main script listens for the accession when the count in the count file is equal to the value set in the **bd_count** directive and executes if so and listens for requests from the **UDEV** and checks if the count file is valid and if so adds 1 to the counter.

```sh
while true; do
    #### READ CONFIG ####
    read_config

    #### GET BINARY
    get_binary

    #### CATCH UDEV ####
    if [ "$1" == "UDEV" ]; then
        if [ ! -s "$count_location" ] || [ $(cat "$count_location") -gt $bd_count ]; then
            # START COUNT
            echo '0' > $count_location

            # LOG
            AddLog "STARTING-COUNT" "set count to \"0\" count file \"$count_location\" was empty or above \"$bd_count\"."

            # EXIT
            exit 0
        elif [[ "$(cat "$count_location")" =~ ^[0-9]+$ ]]; then
            # LOG
            AddLog "CHANGING-COUNT" "changing count to \"$(( $(cat $count_location) + 1 ))\"."

            # ADD COUNT
            echo $(( $(cat $count_location) + 1 )) > $count_location

            # EXIT
            exit 0
        else
            # LOG
            AddLog "ERROR" "count file $count_location is not numeric"

            # EXIT
            exit 1
        fi
    fi

    #### KEEP BACKUPS NEEDED ####
    keep_backups

    #### CHECK IF COUNT IS BIGGER THAN 10 ####
    if [ $($cat $count_location) -eq $bd_count ]; then
            sleep 10
            ### START SCRIPT

            #### READ CONFIG ####
            read_config

            ## IF NOT EXIST CREATE YEAR AND MONTH DIRS
            # YEAR
            year_dir="$($date '+%Y')"

            # MONTH
            month_dir="$($date '+%m')"

            $mkdir -p $BACKUP_dir/$year_dir/$month_dir

            # CHECK FOR BACKUPS IN fallback_directory
            if [ "$BACKUP_dir" != "$fallback_directory" ] && [ -e $fallback_directory ] && [ `ls $fallback_directory | wc -l` -ne 0 ]; then
                AddLog "MOVING BACKUPS" found old backups in fallback directory, moving them to main backup directory.
                $rsync -av --remove-source-files --prune-empty-dirs $fallback_directory/* $BACKUP_dir &> /dev/null
                $rm -rf $fallback_directory/*
            fi

            ## CREATE BACKUP DIRECTORY
            BACKUP_dir="$BACKUP_dir/$year_dir/$month_dir/$($tr -dc 'a-zA-Z0-9' < /dev/random | $head -c 6)_$($date '+%d_%H_%M')/"
            $mkdir "$BACKUP_dir"

            ## BACKUP FILES
            # LOG
            AddLog "BACKUP STARTED" backup started at $BACKUP_dir.
            AddLog "BACKUPING FILES" started backuping files to $BACKUP_dir :

            for Item in $Items
            do
                # RSYNC
                AddLog "BACKUPING ITEM" "$Item"
                $rsync -av --relative "$Item" "$BACKUP_dir" &> /dev/null
            done

            # LOG
            AddLog "FINISHED BACKUP" backup at $BACKUP_dir

            $echo "0" > $count_location
            # LOG
            AddLog "RESTORING COUNT" setting activation count to \"0\".

            exit 0
    fi

    sleep 2
done
```
After reading the configuration file using the [read_config](#read-config) function and mapping the path to binary to variables using the [get_binary](#get-binary) function the main script does the following things:

#### CATCH UDEV

the catch udev section is meant to catch calls from UDEV to add 1 to the counter.<br>
It also checks for any errors with the counter file:
1. If file is empty.
2. If the count is over the **bd_count** directive.
3. If the file has non numeric contents.

#### KEEP BACKUPS

Runs the [keep_backups](#keep-backups) function every 2 seconds (every while loop).

#### CHECK IF COUNT IS BIGGER THAN 10
If the bd_count variable is bigger than the value in the count file then:

- Sleep for 10 seconds to allow UDEV to mount the block device properly.
- Create a backup year and month directories if not exist.
- If found old backups in the fallback backup directory move then to the main backup directory.
- Create the current backup backup directory with a prefix of random characters and numbers and postfix of the current day hour and minute (as the year and the month are in the path of the directory).
- Backup all the items in the `$Items` variable to the current backup directory.
- reset the count file counter.

Thats it.

## Visual explanation
![image](/images/make_backup_visual.png)