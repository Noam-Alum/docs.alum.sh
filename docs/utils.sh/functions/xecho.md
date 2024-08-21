## xecho - Extended echo

**xecho** is a utility designed to facilitate color usage in output,<br>
offering a variety of shortcodes for easy integration into your text.

### ShortCodes:
| ShortCode            | Result                          |
| -------------------- | ------------------------------- |
| **Blocks:**          |                                 |
| &#123;&#123; ERROR &#125;&#125;          | [ERROR]  (text in red)          |
| &#123;&#123; GOOD &#125;&#125;           | [GOOD] (text in green)          |
| &#123;&#123; INFO &#125;&#125;           | [INFO] (text in grey)           |
| &#123;&#123; WARNING &#125;&#125;        | [WARNING] (text in yellow)      |
| &#123;&#123; ALERT &#125;&#125;          | [ALERT] (text in orange)        |
| &#123;&#123; NOTE &#125;&#125;           | [NOTE] (text in blue)           |
| &#123;&#123; IMPORTANT &#125;&#125;      | [IMPORTANT] (text in bold)      |
| &#123;&#123; SUCCESS &#125;&#125;        | [SUCCESS] (text in light green) |
| **Faces:**           |                                 |
| &#123;&#123; E-shocked &#125;&#125;      | `⊙▂⊙`                           |
| &#123;&#123; E-smile &#125;&#125;        | `ʘ‿ʘ`                           |
| &#123;&#123; E-angry &#125;&#125;        | `ಠ_ರೃ`                          |
| &#123;&#123; E-sad &#125;&#125;          | `◕︵◕`                          |
| &#123;&#123; E-nervous &#125;&#125;      | `⊙﹏⊙`                          |
| **Other:**           |                                 |
| &#123;&#123; E-gun &#125;&#125;          | ▄︻̷̿┻̿═━一                        |
| &#123;&#123; E-heart &#125;&#125;        | ❤                               |
| &#123;&#123; E-star &#125;&#125;         | ✮                               |
| &#123;&#123; E-music &#125;&#125;        | ♫                               |
| &#123;&#123; E-moon &#125;&#125;         | ☾                               |
| &#123;&#123; E-cloud &#125;&#125;        | ☁︎                               |
| &#123;&#123; E-arrowright &#125;&#125;   | ➜                               |
| &#123;&#123; E-arrowleft &#125;&#125;    | ←                               |
| &#123;&#123; E-redo &#125;&#125;         | ↺                               |
| &#123;&#123; E-sleep &#125;&#125;        | ᶻz                              |
| &#123;&#123; E-success &#125;&#125;      | ✔                               |
| &#123;&#123; E-fail &#125;&#125;         | ✘                               |
| **Page breaks:**     |                                 |
| &#123;&#123; BR-scissors &#125;&#125;    | -ˋˏ✄┈┈┈┈                         |
| &#123;&#123; BR-star &#125;&#125;        | ────⋆⋅☆⋅⋆────                   |
| &#123;&#123; BR-specialdots &#125;&#125; | ✦•┈๑⋅⋯ ⋯⋅๑┈•✦                   |
| &#123;&#123; BR-heart &#125;&#125;       | ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ                 |
| &#123;&#123; BR-bear &#125;&#125;        | ━━━━━━ʕ•㉨•ʔ━━━━━━━             |
| &#123;&#123; BR-music &#125;&#125;       | 01:43 ━━━━●───── 03:50          |
| **Text bullets:**    |                                 |
| &#123;&#123; B-dot &#125;&#125;          | •                               |
| &#123;&#123; B-arrow &#125;&#125;        | ➣                               |
| &#123;&#123; B-dimond &#125;&#125;       | ◈                               |

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
