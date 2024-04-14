# introduction

Make backups of selected files and directories by count of block device insertion.

### some background

<p>Recently while being at work I unfortunately had to format my computer due to some internal file changes I've made 🫠.<br>
The fact that I didn't have any backups with all my important files and directories was so absurd to me and made me think about it all day long, not to speak of how my boss  felt about me wasting time restoring my computer 😅, me being me I have to make my own thing... so I came up with this daemon.</p>

### Main feathers:

- If set correctly, it should backup your files and directories to a given directory in your block device.
- Removes old backups. (this can be set in the configuration file)
- Follows the general Linux conventions for proper daemon development (incorporating udev, rsyslog, and systemd with correct directory structures).
- Start backuping based on block device insertion. (eg, every five times I connect my SSD it would make a backup and save it there)

<br>

>**Disclaimer:**
>
>My SSD I used for this script is using NFT as its file system, as a result of that I could not use rsync with hardlinks but I do recommend doing so as it would take much less disk space and processing power.
