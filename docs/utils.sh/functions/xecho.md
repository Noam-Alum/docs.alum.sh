## xecho - Extended echo

**xecho** is a utility designed to facilitate color usage in output,<br>
offering a variety of shortcodes for easy integration into your text.

### ShortCodes:
| ShortCode            | Result                          |
| -------------------- | ------------------------------- |
| **Blocks:**          |                                 |
| <pre>{{</pre> ERROR <pre>}}</pre>          | [ERROR]  (text in red)          |
| <pre>{{</pre> GOOD <pre>}}</pre>           | [GOOD] (text in green)          |
| <pre>{{</pre> INFO <pre>}}</pre>           | [INFO] (text in grey)           |
| <pre>{{</pre> WARNING <pre>}}</pre>        | [WARNING] (text in yellow)      |
| <pre>{{</pre> ALERT <pre>}}</pre>          | [ALERT] (text in orange)        |
| <pre>{{</pre> NOTE <pre>}}</pre>           | [NOTE] (text in blue)           |
| <pre>{{</pre> IMPORTANT <pre>}}</pre>      | [IMPORTANT] (text in bold)      |
| <pre>{{</pre> SUCCESS <pre>}}</pre>        | [SUCCESS] (text in light green) |
| **Faces:**           |                                 |
| <pre>{{</pre> E-shocked <pre>}}</pre>      | `⊙▂⊙`                           |
| <pre>{{</pre> E-smile <pre>}}</pre>        | `ʘ‿ʘ`                           |
| <pre>{{</pre> E-angry <pre>}}</pre>        | `ಠ_ರೃ`                          |
| <pre>{{</pre> E-sad <pre>}}</pre>          | `◕︵◕`                          |
| <pre>{{</pre> E-nervous <pre>}}</pre>      | `⊙﹏⊙`                          |
| **Other:**           |                                 |
| <pre>{{</pre> E-gun <pre>}}</pre>          | ▄︻̷̿┻̿═━一                        |
| <pre>{{</pre> E-heart <pre>}}</pre>        | ❤                               |
| <pre>{{</pre> E-star <pre>}}</pre>         | ✮                               |
| <pre>{{</pre> E-music <pre>}}</pre>        | ♫                               |
| <pre>{{</pre> E-moon <pre>}}</pre>         | ☾                               |
| <pre>{{</pre> E-cloud <pre>}}</pre>        | ☁︎                               |
| <pre>{{</pre> E-arrowright <pre>}}</pre>   | ➜                               |
| <pre>{{</pre> E-arrowleft <pre>}}</pre>    | ←                               |
| <pre>{{</pre> E-redo <pre>}}</pre>         | ↺                               |
| <pre>{{</pre> E-sleep <pre>}}</pre>        | ᶻz                              |
| <pre>{{</pre> E-success <pre>}}</pre>      | ✔                               |
| <pre>{{</pre> E-fail <pre>}}</pre>         | ✘                               |
| **Page breaks:**     |                                 |
| <pre>{{</pre> BR-scissors <pre>}}</pre>    | -ˋˏ✄┈┈┈┈                         |
| <pre>{{</pre> BR-star <pre>}}</pre>        | ────⋆⋅☆⋅⋆────                   |
| <pre>{{</pre> BR-specialdots <pre>}}</pre> | ✦•┈๑⋅⋯ ⋯⋅๑┈•✦                   |
| <pre>{{</pre> BR-heart <pre>}}</pre>       | ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ                 |
| <pre>{{</pre> BR-bear <pre>}}</pre>        | ━━━━━━ʕ•㉨•ʔ━━━━━━━             |
| <pre>{{</pre> BR-music <pre>}}</pre>       | 01:43 ━━━━●───── 03:50          |
| **Text bullets:**    |                                 |
| <pre>{{</pre> B-dot <pre>}}</pre>          | •                               |
| <pre>{{</pre> B-arrow <pre>}}</pre>        | ➣                               |
| <pre>{{</pre> B-dimond <pre>}}</pre>       | ◈                               |

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
