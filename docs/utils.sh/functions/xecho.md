## xecho - Extended echo

**xecho** is a utility designed to facilitate color usage in output,<br>
offering a variety of shortcodes for easy integration into your text.

### ShortCodes:
| ShortCode            | Result                          |
| -------------------- | ------------------------------- |
| **Blocks:**          |                                 |
| <pre><code>{{</code></pre> ERROR <pre><code>}}</code></pre>          | [ERROR]  (text in red)          |
| <pre><code>{{</code></pre> GOOD <pre><code>}}</code></pre>           | [GOOD] (text in green)          |
| <pre><code>{{</code></pre> INFO <pre><code>}}</code></pre>           | [INFO] (text in grey)           |
| <pre><code>{{</code></pre> WARNING <pre><code>}}</code></pre>        | [WARNING] (text in yellow)      |
| <pre><code>{{</code></pre> ALERT <pre><code>}}</code></pre>          | [ALERT] (text in orange)        |
| <pre><code>{{</code></pre> NOTE <pre><code>}}</code></pre>           | [NOTE] (text in blue)           |
| <pre><code>{{</code></pre> IMPORTANT <pre><code>}}</code></pre>      | [IMPORTANT] (text in bold)      |
| <pre><code>{{</code></pre> SUCCESS <pre><code>}}</code></pre>        | [SUCCESS] (text in light green) |
| **Faces:**           |                                 |
| <pre><code>{{</code></pre> E-shocked <pre><code>}}</code></pre>      | `⊙▂⊙`                           |
| <pre><code>{{</code></pre> E-smile <pre><code>}}</code></pre>        | `ʘ‿ʘ`                           |
| <pre><code>{{</code></pre> E-angry <pre><code>}}</code></pre>        | `ಠ_ರೃ`                          |
| <pre><code>{{</code></pre> E-sad <pre><code>}}</code></pre>          | `◕︵◕`                          |
| <pre><code>{{</code></pre> E-nervous <pre><code>}}</code></pre>      | `⊙﹏⊙`                          |
| **Other:**           |                                 |
| <pre><code>{{</code></pre> E-gun <pre><code>}}</code></pre>          | ▄︻̷̿┻̿═━一                        |
| <pre><code>{{</code></pre> E-heart <pre><code>}}</code></pre>        | ❤                               |
| <pre><code>{{</code></pre> E-star <pre><code>}}</code></pre>         | ✮                               |
| <pre><code>{{</code></pre> E-music <pre><code>}}</code></pre>        | ♫                               |
| <pre><code>{{</code></pre> E-moon <pre><code>}}</code></pre>         | ☾                               |
| <pre><code>{{</code></pre> E-cloud <pre><code>}}</code></pre>        | ☁︎                               |
| <pre><code>{{</code></pre> E-arrowright <pre><code>}}</code></pre>   | ➜                               |
| <pre><code>{{</code></pre> E-arrowleft <pre><code>}}</code></pre>    | ←                               |
| <pre><code>{{</code></pre> E-redo <pre><code>}}</code></pre>         | ↺                               |
| <pre><code>{{</code></pre> E-sleep <pre><code>}}</code></pre>        | ᶻz                              |
| <pre><code>{{</code></pre> E-success <pre><code>}}</code></pre>      | ✔                               |
| <pre><code>{{</code></pre> E-fail <pre><code>}}</code></pre>         | ✘                               |
| **Page breaks:**     |                                 |
| <pre><code>{{</code></pre> BR-scissors <pre><code>}}</code></pre>    | -ˋˏ✄┈┈┈┈                         |
| <pre><code>{{</code></pre> BR-star <pre><code>}}</code></pre>        | ────⋆⋅☆⋅⋆────                   |
| <pre><code>{{</code></pre> BR-specialdots <pre><code>}}</code></pre> | ✦•┈๑⋅⋯ ⋯⋅๑┈•✦                   |
| <pre><code>{{</code></pre> BR-heart <pre><code>}}</code></pre>       | ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ                 |
| <pre><code>{{</code></pre> BR-bear <pre><code>}}</code></pre>        | ━━━━━━ʕ•㉨•ʔ━━━━━━━             |
| <pre><code>{{</code></pre> BR-music <pre><code>}}</code></pre>       | 01:43 ━━━━●───── 03:50          |
| **Text bullets:**    |                                 |
| <pre><code>{{</code></pre> B-dot <pre><code>}}</code></pre>          | •                               |
| <pre><code>{{</code></pre> B-arrow <pre><code>}}</code></pre>        | ➣                               |
| <pre><code>{{</code></pre> B-dimond <pre><code>}}</code></pre>       | ◈                               |

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
