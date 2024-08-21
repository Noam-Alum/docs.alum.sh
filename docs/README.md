# ALUM.SH - docs

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

Documents on scripts and codes made by Noam (myself 😁)

<section class="features">

## Other links:

   <div class="scroll-container">
      <ul class="grid">
         <li class="card">
         <a href="https://thelazyadmin.blog">
            <div class="content">
               <h3>The Lazy Admin Blog</h3>
               <p>Linux automation, scripts<br> and howto's</p>
            </div>
         </a>
         </li>
         <li class="card">
         <a href="https://www.linkedin.com/in/noam-alum">
            <div class="content">
               <h3>LinkedIn</h3>
               <p>System Administrator/Head<br> of automation team at<br> JetServer | Member of<br> the AlmaLinux foundations</p>
            </div>
         </a>
         </li>
         <li class="card">
         <a href="https://github.com/Noam-Alum/">
            <div class="content">
               <h3>GitHub</h3>
               <p>"Where there is a shell, There is a way"</p>
            </div>
         </a>
         </li>
      </ul>
   </div>
</section>
