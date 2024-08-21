## xecho - Extended echo

**xecho** is a utility designed to facilitate color usage in output,<br>
offering a variety of shortcodes for easy integration into your text.

### ShortCodes:
| ShortCode            | Result                          |
| -------------------- | ------------------------------- |
| **Blocks:**          |                                 |
| <code>{{ ERROR }}</code>          | [ERROR]  (text in red)          |
| <code>{{ GOOD }}</code>           | [GOOD] (text in green)          |
| <code>{{ INFO }}</code>           | [INFO] (text in grey)           |
| <code>{{ WARNING }}</code>        | [WARNING] (text in yellow)      |
| <code>{{ ALERT }}</code>          | [ALERT] (text in orange)        |
| <code>{{ NOTE }}</code>           | [NOTE] (text in blue)           |
| <code>{{ IMPORTANT }}</code>      | [IMPORTANT] (text in bold)      |
| <code>{{ SUCCESS }}</code>        | [SUCCESS] (text in light green) |
| **Faces:**           |                                 |
| <code>{{ E-shocked }}</code>      | `⊙▂⊙`                           |
| <code>{{ E-smile }}</code>        | `ʘ‿ʘ`                           |
| <code>{{ E-angry }}</code>        | `ಠ_ರೃ`                          |
| <code>{{ E-sad }}</code>          | `◕︵◕`                          |
| <code>{{ E-nervous }}</code>      | `⊙﹏⊙`                          |
| **Other:**           |                                 |
| <code>{{ E-gun }}</code>          | ▄︻̷̿┻̿═━一                        |
| <code>{{ E-heart }}</code>        | ❤                               |
| <code>{{ E-star }}</code>         | ✮                               |
| <code>{{ E-music }}</code>        | ♫                               |
| <code>{{ E-moon }}</code>         | ☾                               |
| <code>{{ E-cloud }}</code>        | ☁︎                               |
| <code>{{ E-arrowright }}</code>   | ➜                               |
| <code>{{ E-arrowleft }}</code>    | ←                               |
| <code>{{ E-redo }}</code>         | ↺                               |
| <code>{{ E-sleep }}</code>        | ᶻz                              |
| <code>{{ E-success }}</code>      | ✔                               |
| <code>{{ E-fail }}</code>         | ✘                               |
| **Page breaks:**     |                                 |
| <code>{{ BR-scissors }}</code>    | -ˋˏ✄┈┈┈┈                         |
| <code>{{ BR-star }}</code>        | ────⋆⋅☆⋅⋆────                   |
| <code>{{ BR-specialdots }}</code> | ✦•┈๑⋅⋯ ⋯⋅๑┈•✦                   |
| <code>{{ BR-heart }}</code>       | ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ                 |
| <code>{{ BR-bear }}</code>        | ━━━━━━ʕ•㉨•ʔ━━━━━━━             |
| <code>{{ BR-music }}</code>       | 01:43 ━━━━●───── 03:50          |
| **Text bullets:**    |                                 |
| <code>{{ B-dot }}</code>          | •                               |
| <code>{{ B-arrow }}</code>        | ➣                               |
| <code>{{ B-dimond }}</code>       | ◈                               |

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
