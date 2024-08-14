(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{315:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"selinux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#selinux"}},[s._v("#")]),s._v(" SELinux")]),s._v(" "),t("p",[s._v("The "),t("a",{attrs:{href:"http://www.selinuxproject.org/page/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[s._v("SELinux"),t("OutboundLink")],1),s._v(" directive controles whether "),t("strong",[s._v("SELinux")]),s._v(" is enabled or not.")]),s._v(" "),t("br"),s._v(" "),t("p",[t("strong",[s._v("Configuration syntax:")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Directive")]),s._v(" "),t("th",[s._v("Format")]),s._v(" "),t("th",[s._v("Example")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("SELinux")]),s._v(" "),t("td",[t("code",[s._v("SELinux: Enabled/Disables")])]),s._v(" "),t("td",[t("code",[s._v("SELinux: Enabled")])])])])]),s._v(" "),t("blockquote",[t("p",[s._v("When enabled, if SELinux is not installed the script would try to install it, then enable it, else it would just enable it.")])]),s._v(" "),t("br"),s._v(" "),t("p",[t("strong",[s._v("SELinux function:")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("rn_SELinux")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  parse_yaml "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" SELinux\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SELinux")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Enabled"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    xecho "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$info_prefix")]),s._v(' <biw>Trying to enable {{ E-arrowright }} SELinux {{ E-arrowleft }} {{ E-nervous }}</biw>"')]),s._v("\n    check_dependencies "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELinux"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$notgood_prefix")]),s._v(' <biw>SELinux not found, tring to install, be patient. {{ E-angry }}</biw>"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apt -y install selinux-basics selinux-policy-default"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dpkg -L selinux-basics"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^SELINUX=.*$/SELINUX=enforcing/'")]),s._v(" /etc/selinux/config\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELINUX=enforcing"')]),s._v(" /etc/selinux/config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" xecho "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$good_prefix")]),s._v(' <biw>SELinux enabled successfully. {{ E-smile }}</biw>"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SELinux")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Disabled"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    xecho "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$info_prefix")]),s._v(' <biw>Trying to disable {{ E-arrowright }} SELinux {{ E-arrowleft }} {{ E-nervous }}</biw>"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("dpkg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" selinux-basics "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $?"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ne")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      xecho "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$good_prefix")]),s._v(' <biw>SELinux is not installed, no need to disable {{ E-smile }}</biw>"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^SELINUX=.*$/SELINUX=disabled/'")]),s._v(" /etc/selinux/config\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELINUX=disabled"')]),s._v(" /etc/selinux/config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" xecho "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$good_prefix")]),s._v(' <biw>SELinux disabled successfully. {{ E-smile }}</biw>"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);