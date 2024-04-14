# Installation

> This backuping solution is for Linux users only.

## Install zipped project

```sh
wget -O make_backup.zip https://codeload.github.com/Noam-Alum/make_backup/zip/refs/heads/main
```

## unzip
```sh
unzip make_backup.zip
```

## rsync files
```sh
rsync -av make_backup-main/etc/ /etc/
rsync -av make_backup-main/var/ /var/
rsync -av make_backup-main/opt/ /opt/
```

## remove traces
```sh
rm -rf make_backup-main make_backup.zip
```

## handle services
```sh
sudo systemctl restart udev rsyslog
sudo systemctl daemon-reload
systemctl enable make_backup.service
systemctl start make_backup.service
```

<br>

> **Make sure to change /etc/systemd/system/make_backup.service user and group to youe likings**
> ```sh
> User=changeme
> Group=changeme
> ```