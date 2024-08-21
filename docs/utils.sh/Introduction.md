# Utils.sh

`utils.sh` is a collection of functions to make scripting in bash easier.

![utils logo](/images/utils-sh-logo.jpeg)

You can place **uc_** variables in the head of your script to configure utils functions for your liking.

| **uc_ variable** | **function** | **description**                       |
|------------------|--------------|---------------------------------------|
| uc_ifc_posfix    | ifcontinue   | Change default posfix (*[yes/no]*).   |
| uc_gr_len        | gen_random   | Change default length (*12*).         |
| uc_rn_err_msg    | run          | Change the structure of the error msg.|
| uc_rn_inf_msg    | run          | Change the structure of the info msg. | 

> Each function description includes its **uc_** variables with examples.

If a uc_ variable has dynamically changing parts, you'd have to use **placeholders**, placeholders are
called using {[ name ]}:

| **placeholder**  | **function** | **description**                                              |
|------------------|--------------|--------------------------------------------------------------|
| {[ rn_cmd ]}     | run          | The command executed by the run function.                    |
| {[ rn_err ]}     | run          | The error returned after executing a given command with run. |

<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

h2 {
    font-size: 1.5em;
    margin: 20px 0;
    text-align: left;
    padding-left: 20px;
}

.features, .use-cases {
    position: relative;
    padding: 20px;
    overflow: hidden;
}

.scroll-container {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 20px;
    scroll-behavior: smooth;
}

.scroll-container::-webkit-scrollbar {
    height: 6px; /* 75% of the original 8px height */
}

.scroll-container::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.grid {
    display: flex;
    gap: 20px;
    padding: 0;
    align-items: flex-start;
    margin: 0;
}

.card {
    position: relative;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    text-align: center;
    width: 250px; /* Fixed width for cards */
    flex-shrink: 0;
    display: flex;
    flex-direction: column; /* Stack text and image vertically */
    height: 250px; /* Fixed height for cards */
}

.card img {
    width: 100%;
    height: 100%;
    display: block;
    transition: opacity 0.3s;
    opacity: 0; /* Hide image by default */
}

.card .content {
    padding: 20px;
    background: rgba(255, 255, 255, 0.9); /* Slightly transparent white */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s, visibility 0.3s;
    z-index: 1; /* Ensure content is above the image */
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word; /* Ensure long words break onto the next line */
    overflow-wrap: break-word; /* Support for more modern browsers */
}

.card.active .content {
    opacity: 0; /* Hide content when active */
    visibility: hidden;
}

.card.active img {
    opacity: 1; /* Show image when content is hidden */
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.card h3 {
    margin: 10px 0;
    font-size: 1.2em;
}

.card p {
    margin: 0;
    font-size: 1em;
}

.card a {
    color: #2c3e50;
}

@media (max-width: 600px) {
    .scroll-container {
        flex-direction: column;
    }
}
</style>

<section class="features">

## Available functions:

   <div class="scroll-container">
      <ul class="grid">
         <li class="card">
         <a href="functions/xecho.md">
            <div class="content">
               <h3>xecho</h3>
               <p>Extended echo</p>
            </div>
         </a>
         </li>
         <li class="card">
         <a href="functions/ifcontinue.md">
            <div class="content">
               <h3>ifcontinue</h3>
               <p>Return binary response<br> to a yes-or-no<br> question.</p>
            </div>
         </a>
         </li>
         <li class="card">
         <a href="functions/user_input.md">
            <div class="content">
               <h3>user_input</h3>
               <p>Take user input in<br> and save it as a<br> variable in the best<br> way posable.</p>
            </div>
         </a>
         </li>
         <li class="card">
         <a href="functions/gen_random.md">
            <div class="content">
               <h3>gen_random</h3>
               <p>Generate random data.</p>
            </div>
         </a>
         </li>
         <li class="card">
         <a href="functions/run.md">
            <div class="content">
               <h3>run</h3>
               <p>run commands in<br> an informative way</p>
            </div>
         </a>
         </li>
      </ul>
   </div>
</section>
