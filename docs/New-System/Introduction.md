# New System - Introduction

**[New System](https://github.com/Noam-Alum/new-system)** is a free to use [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) script written by [Noam Alum](https://github.com/Noam-Alum/), and [Shay Aviv](https://github.com/ShayAviv/) meant to automate the proccess of setting up a new system.<br>
It uses [YAML](https://en.wikipedia.org/wiki/YAML) for its configuration file, so it is very easy to setup, and you can create numerous configuration files for different occasions. (I like to call them *"Profiles"* 🙃)

> We used [GitHub](https://github.com/) for version controle.

![NewSystemBanner](/images/New-System-Logo.png)

<br><hr>

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

@media (max-width: 600px) {
    .scroll-container {
        flex-direction: column;
    }
}
</style>
<section class="features">

   <h2>Features:</h2>

   <div class="scroll-container">
      <ul class="grid">
         <li class="card">
            <div class="content">
               <h3>Installed Packages</h3>
               <p>Define which packages to <br>install and their sources.</p>
            </div>
            <img src="/images/New-System-Icons/downloads.png" alt="Installed Packages">
         </li>
         <li class="card">
            <div class="content">
               <h3>Run Commands</h3>
               <p>Specify commands to be<br> executed during setup.</p>
            </div>
            <img src="/images/New-System-Icons/command-line.png" alt="Run Commands">
         </li>
         <li class="card">
            <div class="content">
               <h3>Network Configuration</h3>
               <p>Configure network interfaces<br> and settings.</p>
            </div>
            <img src="/images/New-System-Icons/Network.png" alt="Network Configuration">
         </li>
         <li class="card">
            <div class="content">
               <h3>Plugins</h3>
               <p>Include additional scripts or<br> tools to run as part of the setup.</p>
            </div>
            <img src="/images/New-System-Icons/plug-in.png" alt="Plugins">
         </li>
         <li class="card">
            <div class="content">
               <h3>SELinux</h3>
               <p>Set SELinux status as required.</p>
            </div>
            <img src="/images/New-System-Icons/SELinux.png" alt="SELinux">
         </li>
         <li class="card">
            <div class="content">
               <h3>Users</h3>
               <p>Add users, set passwords, and<br> assign sudo privileges.</p>
            </div>
            <img src="/images/New-System-Icons/Users.png" alt="Users">
         </li>
         <li class="card">
            <div class="content">
               <h3>Environment Configuration</h3>
               <p>Customize environment<br> variables and configure shell<br> settings.</p>
            </div>
            <img src="/images/New-System-Icons/env-development.png" alt="Environment Configuration">
         </li>
         <li class="card">
            <div class="content">
               <h3>CronTab</h3>
               <p>Customize user crontabs for<br> scheduled tasks.</p>
            </div>
            <img src="/images/New-System-Icons/CronTab.png" alt="CronTab">
         </li>
         <li class="card">
            <div class="content">
               <h3>Profile</h3>
               <p>Set wallpaper, theme, and<br> system font. Install and<br> configure language packs for <br>multilingual support.</p>
            </div>
            <img src="/images/New-System-Icons/Profile.png" alt="Profile">
         </li>
         <li class="card">
            <div class="content">
               <h3>Manage Startup Applications</h3>
               <p>Control applications that start<br> automatically on system boot.</p>
            </div>
            <img src="/images/New-System-Icons/startup.png" alt="Manage Startup Applications">
         </li>
         <li class="card">
            <div class="content">
               <h3>Power Management</h3>
               <p>Configure power settings<br> (e.g., sleep, hibernate).</p>
            </div>
            <img src="/images/New-System-Icons/powerM.png" alt="Power Management">
         </li>
         <li class="card">
            <div class="content">
               <h3>Disk Partitioning</h3>
               <p>Partition disks and manage<br> existing partitions using tools<br> like `fdisk` or `parted`. Offer<br> encryption options for partitions.</p>
            </div>
            <img src="/images/New-System-Icons/disk.png" alt="Disk Partitioning">
         </li>
         <li class="card">
            <div class="content">
               <h3>SSH Key Management</h3>
               <p>Manage SSH keys for secure<br> authentication and remote<br> system access.</p>
            </div>
            <img src="/images/New-System-Icons/ssh-key.png" alt="SSH Key Management">
         </li>
      </ul>
   </div>
</section>
<section class="use-cases">

   <h2>Use Cases:</h2>

   <div class="scroll-container">
      <ul class="grid">
        <li class="card">
            <div class="content">
                <h3>Educational Institutions</h3>
                <p>Educational institutions can<br> leverage New System to<br> quickly deploy standardized <br>environments for students and<br> faculty.</p>
            </div>
            <img src="/images/New-System-Icons/education.png" alt="Educational Institutions">
        </li>
        <li class="card">
            <div class="content">
                <h3>Development Environments</h3>
                <p>Developers can use New<br> System to configure their<br> development machines with<br> the necessary programming<br> languages, libraries, frameworks,<br> and tools.</p>
            </div>
            <img src="/images/New-System-Icons/env-development.png" alt="Development Environments">
        </li>
        <li class="card">
            <div class="content">
                <h3>Personal Use</h3>
                <p>Individuals who frequently<br> set up new machines or<br> reinstall their operating<br> systems can benefit from<br> New System by automating<br> the setup process.</p>
            </div>
            <img src="/images/New-System-Icons/personal-use.png" alt="Personal Use">
        </li>
        <li class="card">
            <div class="content">
                <h3>Testing and QA</h3>
                <p>New System automates test<br> environment setup, providing<br> quality assurance teams<br> and testers with<br> consistent, repeatable<br> configurations and necessary<br> tools.</p>
            </div>
            <img src="/images/New-System-Icons/testing.png" alt="Testing and QA">
        </li>
        <li class="card">
            <div class="content">
                <h3>Temporary Setups</h3>
                <p>For temporary or event-based<br> setups like trade shows<br> or conferences, New System<br> quickly prepares machines with<br> the required software and<br> settings, making deployment and<br> management easier for short<br> periods.</p>
            </div>
            <img src="/images/New-System-Icons/Temporary.png" alt="Temporary Setups">
        </li>
        <li class="card">
            <div class="content">
                <h3>Rescue and Recovery</h3>
                <p>When a system needs<br> recovery or rebuilding after<br> a failure, New System<br> automates software reinstallation<br> and settings reconfiguration,<br> reducing the time to<br> restore it to its original<br> state.</p>
            </div>
            <img src="/images/New-System-Icons/disaster-recovery.png" alt="Rescue and Recovery">
        </li>
        <li class="card">
            <div class="content">
                <h3>Company Deployment</h3>
                <p>A company can use<br> New System to quickly<br> configure new machines,<br> ensuring consistent software<br> and settings. This includes<br> installing productivity tools,<br> setting up configurations,<br> and applying security policies.</p>
            </div>
            <img src="/images/New-System-Icons/Company.png" alt="Company Deployment">
        </li>
        <li class="card">
            <div class="content">
                <h3>OS Migration</h3>
                <p>When switching operating systems,<br> New System automates setup<br> of applications, configurations, and<br> settings, ensuring a smooth<br> transition and minimizing<br> manual reinstallation and<br> reconfiguration.</p>
            </div>
            <img src="/images/New-System-Icons/Migration.png" alt="OS Migration">
        </li>
        <li class="card">
            <div class="content">
                <h3>System Formatting</h3>
                <p>If you need to format<br> and reinstall your operating<br> system, New System handles<br> post-installation setup. It<br> automates software installation,<br> configuration, and personalization,<br> helping you get back<br> to work faster.</p>
            </div>
            <img src="/images/New-System-Icons/Formatting.png" alt="System Formatting">
        </li>
      </ul>
   </div>
</section>
<script>
   document.querySelectorAll('.card').forEach(card=>{
      card.addEventListener('click',()=>{
         card.classList.toggle('active');
      });
   });
</script>

---

**If you want to request a new feature, please create an issue [here](https://github.com/Noam-Alum/new-system/issues).**