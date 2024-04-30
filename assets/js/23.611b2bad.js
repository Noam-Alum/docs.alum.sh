(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{320:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("blockquote",[s("p",[a._v("This backuping solution is for Linux users only.")])]),a._v(" "),s("h2",{attrs:{id:"install-zipped-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-zipped-project"}},[a._v("#")]),a._v(" Install zipped project")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" make_backup.zip https://codeload.github.com/Noam-Alum/make_backup/zip/refs/heads/main\n")])])]),s("h2",{attrs:{id:"unzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unzip"}},[a._v("#")]),a._v(" unzip")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" make_backup.zip\n")])])]),s("h2",{attrs:{id:"rsync-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rsync-files"}},[a._v("#")]),a._v(" rsync files")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-av")]),a._v(" make_backup-main/etc/ /etc/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-av")]),a._v(" make_backup-main/var/ /var/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-av")]),a._v(" make_backup-main/opt/ /opt/\n")])])]),s("h2",{attrs:{id:"remove-traces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-traces"}},[a._v("#")]),a._v(" remove traces")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" make_backup-main make_backup.zip\n")])])]),s("h2",{attrs:{id:"handle-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handle-services"}},[a._v("#")]),a._v(" handle services")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart udev rsyslog\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl daemon-reload\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" make_backup.service\nsystemctl start make_backup.service\n")])])]),s("br"),a._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[a._v("DANGER")]),a._v(" "),s("p",[s("strong",[a._v("Make sure to change /etc/systemd/system/make_backup.service user and group to your likings:")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("changeme\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Group")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("changeme\n")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);