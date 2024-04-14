# Usage

> **This section is reffering to the `/etc/make_backup/make_backup.conf` file.**

## count_location

Select a file to count block device entries:
```
count_location="/var/test.txt"
```
**This needs to be the full path to a file (e.g. /path/to/file.txt)**

## bd_count

Set the maximum count of block device entries that triggers a backup:
```
bd_count="5"
```
**This directive cannot be 0 and lower!**

## parent_directory

Set the main backuping directory:

```
parent_directory="/change/this/to/backups_dir"
```
**This should be without the / at the end!**

## Choose items to backup
Add the files and directories you want to backup in between this lines:
```
> start items to backup <
/backup/this/file.txt
/backup/this/direcotory/
> end items to backup <
```
make sure that directories **ends with /** and files **dont!**

## control amount of backups
To control how many backups remain in the chosen backups directory first check if its enabled.
```
## remove old backups
# yes | no
rm_old_backups="yes"
```
and make sure its set to `yes`.

## Backups retained

**We can change the following directives to control how many backups remain in the chosen backups directory.**

* **backup_in_c_month**

The amount of backups in the current month directory.

```
backup_in_c_month="14"
```

* **backup_in_month**

The amount of backups in past months.

```
backup_in_month="1"
```

* **month_in_c_year**

The amount of months to leave in past year.

```
month_in_c_year="12"
```

* **month_in_year**

The amount of months to leave in past year.

```
month_in_year="1"
```