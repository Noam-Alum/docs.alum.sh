(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{320:function(t,a,e){"use strict";e.r(a);var s=e(14),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("This section is reffering to the "),a("code",[t._v("/etc/make_backup/make_backup.conf")]),t._v(" file.")])])]),t._v(" "),a("h2",{attrs:{id:"count-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#count-location"}},[t._v("#")]),t._v(" count_location")]),t._v(" "),a("p",[t._v("Select a file to count block device entries:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('count_location="/var/test.txt"\n')])])]),a("p",[a("strong",[t._v("This needs to be the full path to a file (e.g. /path/to/file.txt)")])]),t._v(" "),a("h2",{attrs:{id:"bd-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bd-count"}},[t._v("#")]),t._v(" bd_count")]),t._v(" "),a("p",[t._v("Set the maximum count of block device entries that triggers a backup:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('bd_count="5"\n')])])]),a("p",[a("strong",[t._v("This directive cannot be 0 and lower!")])]),t._v(" "),a("h2",{attrs:{id:"parent-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parent-directory"}},[t._v("#")]),t._v(" parent_directory")]),t._v(" "),a("p",[t._v("Set the main backuping directory:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('parent_directory="/change/this/to/backups_dir"\n')])])]),a("p",[a("strong",[t._v("This should be without the / at the end!")])]),t._v(" "),a("h2",{attrs:{id:"choose-items-to-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choose-items-to-backup"}},[t._v("#")]),t._v(" Choose items to backup")]),t._v(" "),a("p",[t._v("Add the files and directories you want to backup in between this lines:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> start items to backup <\n/backup/this/file.txt\n/backup/this/direcotory/\n> end items to backup <\n")])])]),a("p",[t._v("make sure that directories "),a("strong",[t._v("ends with /")]),t._v(" and files "),a("strong",[t._v("dont!")])]),t._v(" "),a("h2",{attrs:{id:"control-amount-of-backups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#control-amount-of-backups"}},[t._v("#")]),t._v(" control amount of backups")]),t._v(" "),a("p",[t._v("To control how many backups remain in the chosen backups directory first check if its enabled.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('## remove old backups\n# yes | no\nrm_old_backups="yes"\n')])])]),a("p",[t._v("and make sure its set to "),a("code",[t._v("yes")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"backups-retained"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backups-retained"}},[t._v("#")]),t._v(" Backups retained")]),t._v(" "),a("p",[a("strong",[t._v("We can change the following directives to control how many backups remain in the chosen backups directory.")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("backup_in_c_month")])])]),t._v(" "),a("p",[t._v("The amount of backups in the current month directory.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('backup_in_c_month="14"\n')])])]),a("ul",[a("li",[a("strong",[t._v("backup_in_month")])])]),t._v(" "),a("p",[t._v("The amount of backups in past months.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('backup_in_month="1"\n')])])]),a("ul",[a("li",[a("strong",[t._v("month_in_c_year")])])]),t._v(" "),a("p",[t._v("The amount of months to leave in past year.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('month_in_c_year="12"\n')])])]),a("ul",[a("li",[a("strong",[t._v("month_in_year")])])]),t._v(" "),a("p",[t._v("The amount of months to leave in past year.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('month_in_year="1"\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);