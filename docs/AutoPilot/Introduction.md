# AutoPilot <img src="/images/AutoPilot-Icons/AutoPilot-icon-black.png" alt="AutoPilot icon" width="30" height="auto">  Introduction

**[AutoPilot](https://github.com/Noam-Alum/AutoPilot)** is a free to use [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) script (for both **Debian** and **RHEL** related operating systems) written by [Noam Alum](https://www.linkedin.com/in/noam-alum/) meant to automate the process of setting up a new system.<br>
It uses [YAML](https://en.wikipedia.org/wiki/YAML) for its configuration file, so it is very easy to set up, and you can create numerous configuration files for different occasions. (I like to call them *"Profiles"* 🙃)

> I used [GitHub](https://github.com/) for version controle.

![AutoPilotBanner](/images/AutoPilot-Logo.png)

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

.card a {
    color: #2c3e50;
}

/* Container for the whole use-cases section */
.use-cases {
    background-color: #f1f7f7; /* Light cyan background */
    padding: 20px;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

/* Styling the section header */
.use-cases h2 {
    color: #007a7a; /* Dark cyan text */
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

/* Anchor link styling */
.use-cases .header-anchor {
    color: #00ced1; /* Cyan color for anchor */
    text-decoration: none;
    margin-right: 5px;
}

.use-cases .header-anchor:hover {
    color: #007a7a; /* Darker cyan on hover */
}

/* Scroll container for the use cases cards */
.use-cases .scroll-container {
    overflow-x: auto;
    white-space: nowrap;
}

/* Grid styling for the use cases cards */
.use-cases .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.use-cases .card {
    background-color: white;
    border: 1px solid #00ced1;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 250px;
    text-align: center;
    transition: transform 0.2s ease-in-out;
}

.use-cases .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Card content */
.use-cases .content h3 {
    color: #007a7a; /* Dark cyan text */
    font-size: 20px;
    margin-bottom: 10px;
}

.use-cases .content p {
    color: #004d4d; /* Slightly darker cyan for paragraphs */
    font-size: 16px;
    line-height: 1.6;
}

@media (max-width: 600px) {
    .scroll-container {
        flex-direction: column;
    }
}
</style>

<section class="features">

## Features:

   <div class="scroll-container">
      <ul class="grid">
         <li class="card">
         <a href="/AutoPilot/directives/Installed_packages.html">
            <div class="content">
               <h3>Installed Packages</h3>
               <p>Define which packages to <br>install and their sources.</p>
            </div>
         </a>
         </li>
         <li class="card">
          <a href="/AutoPilot/directives/Run_Lines.html">
            <div class="content">
               <h3>Run Lines</h3>
               <p>Specify commands to be<br> executed during setup.</p>
            </div>
          </a>
         </li>
         <li class="card">
            <a href="/AutoPilot/directives/Network_Configuration.html">
            <div class="content">
               <h3>Network Configuration</h3>
               <p>Configure network interfaces<br> and settings.</p>
            </div>
            </a>
         </li>
         <li class="card">
            <a href="/AutoPilot/directives/Plugins.html">
            <div class="content">
               <h3>Plugins</h3>
               <p>Include additional scripts or<br> tools to run as part of the setup.</p>
            </div>
            </a>
         </li>
         <li class="card">
            <a href="/AutoPilot/directives/SELinux.html">
                <div class="content">
                    <h3>SELinux</h3>
                    <p>Set SELinux status as required.</p>
                </div>
            </a>
         </li>
         <li class="card">
         <a href="/AutoPilot/directives/Users.html">
            <div class="content">
               <h3>Users</h3>
               <p>Add users, set their<br> passwords, their groups<br> and their shell.</p>
            </div>
         </a>
         </li>
         <li class="card">
            <a href="/AutoPilot/directives/Environment_configuration.html">
            <div class="content">
               <h3>Environment Configuration</h3>
               <p>Customize environment<br> variables and configure shell<br> settings.</p>
            </div>
            </a>
         </li>
         <li class="card">
            <a href="/AutoPilot/directives/Cronjobs.html">
            <div class="content">
               <h3>Cronjobs</h3>
               <p>Customize user crontabs for<br> scheduled tasks.</p>
            </div>
            </a>
         </li>
         <li class="card">
            <a href="/AutoPilot/directives/Repo.html">
            <div class="content">
               <h3>Repo</h3>
               <p>Add new repositories to<br> sources list.</p>
            </div>
            </a>
         </li>
         <li class="card">
            <a href="/AutoPilot/directives/Time.html">
            <div class="content">
               <h3>Time</h3>
               <p>Change system time.</p>
            </div>
            </a>
         </li> 
         <li class="card">
            <div class="content">
               <h3>Profile</h3>
               <p>Set wallpaper, theme, and<br> system font. Install and<br> configure language packs for <br>multilingual support.</p>
            </div>
         </li>
         <li class="card">
            <div class="content">
               <h3>Power Management</h3>
               <p>Configure power settings<br> (e.g., sleep, hibernate).</p>
            </div>
         </li>
         <li class="card">
            <div class="content">
               <h3>Disk Partitioning</h3>
               <p>Partition disks and manage<br> existing partitions using tools<br> like `fdisk` or `parted`. Offer<br> encryption options for partitions.</p>
            </div>
         </li>
         <li class="card">
            <div class="content">
               <h3>SSH Key Management</h3>
               <p>Manage SSH keys for secure<br> authentication and remote<br> system access.</p>
            </div>
         </li>
      </ul>
   </div>
</section>
<section class="use-cases">

:::tip
**If you want to request a new feature, you can do that [here](https://github.com/Noam-Alum/AutoPilot/issues/new?assignees=Noam-Alum&labels=feature+request&projects=&template=feature-request.md&title=Feature+request+%7C+%5Bfeature+request+short+description%5D).**
:::

<br>

## Use Cases: 

   <div class="scroll-container">
      <ul class="grid">
        <li class="card">
            <div class="content">
                <h3>Educational Institutions</h3>
                <p>Educational institutions can<br> leverage AutoPilot to<br> quickly deploy standardized <br>environments for students and<br> faculty.</p>
            </div>
        </li>
        <li class="card">
            <div class="content">
                <h3>Development Environments</h3>
                <p>Developers can use New<br> System to configure their<br> development machines with<br> the necessary programming<br> languages, libraries, frameworks,<br> and tools.</p>
            </div>
        </li>
        <li class="card">
            <div class="content">
                <h3>Personal Use</h3>
                <p>Individuals who frequently<br> set up new machines or<br> reinstall their operating<br> systems can benefit from<br> AutoPilot by automating<br> the setup process.</p>
            </div>
        </li>
        <li class="card">
            <div class="content">
                <h3>Testing and QA</h3>
                <p>AutoPilot automates test<br> environment setup, providing<br> quality assurance teams<br> and testers with<br> consistent, repeatable<br> configurations and necessary<br> tools.</p>
            </div>
        </li>
        <li class="card">
            <div class="content">
                <h3>Temporary Setups</h3>
                <p>For temporary or event-based<br> setups like trade shows<br> or conferences, AutoPilot<br> quickly prepares machines with<br> the required software and<br> settings, making deployment and<br> management easier for short<br> periods.</p>
            </div>
        </li>
        <li class="card">
            <div class="content">
                <h3>Rescue and Recovery</h3>
                <p>When a system needs<br> recovery or rebuilding after<br> a failure, AutoPilot<br> automates software reinstallation<br> and settings reconfiguration,<br> reducing the time to<br> restore it to its original<br> state.</p>
            </div>
        </li>
        <li class="card">
            <div class="content">
                <h3>Company Deployment</h3>
                <p>A company can use<br> AutoPilot to quickly<br> configure new machines,<br> ensuring consistent software<br> and settings. This includes<br> installing productivity tools,<br> setting up configurations,<br> and applying security policies.</p>
            </div>
        </li>
        <li class="card">
            <div class="content">
                <h3>OS Migration</h3>
                <p>When switching operating systems,<br> AutoPilot automates setup<br> of applications, configurations, and<br> settings, ensuring a smooth<br> transition and minimizing<br> manual reinstallation and<br> reconfiguration.</p>
            </div>
        </li>
        <li class="card">
            <div class="content">
                <h3>System Formatting</h3>
                <p>If you need to format<br> and reinstall your operating<br> system, AutoPilot handles<br> post-installation setup. It<br> automates software installation,<br> configuration, and personalization,<br> helping you get back<br> to work faster.</p>
            </div>
        </li>
      </ul>
   </div>
</section>

---

<br>

I've used [utils.sh](https://github.com/Noam-Alum/utils.sh) to ensure the quality of the script and YAML to make it easyer creating a configuration file, for refrence, heres an example configuration file:
```yaml
# AutoPilot - Example configuration file

# SELinux status
SELinux: Disabled

# List of packages to be installed
Installed_packages:
  - name: FireJail
    type: Deb
    source: firejail
  - name: Discord
    type: Pkg
    source: "https://discord.com/api/download?platform=linux&format=deb"
  - name: NVIM
    type: Sh
    source: "https://docs.alum.sh/files/NVIM-install.sh"
  - name: Chrome
    type: Pkg
    source: "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb"
  - name: git
    type: Deb
    source: git

Network_Configuration:
  - nic: tun0
    ip: 192.168.2.14/24
    gateway: 192.168.2.1
    dns: 8.8.8.8,8.4.8.4
  - nic: eth0
    ip: "%DHCP%"
    gateway: "%DHCP%"
    dns: "%DHCP%"

# Shell commands to run
Run_Lines:
  - echo "Hello"
  - echo "Hello world"

# List of plugins
Plugins:
  - name: FireJail
    script: plugins/firejail
  - name: make_backup
    script: plugins/make_backup

# User management
Users:
  - name: noam
    pass: "%Gen%"
    group: noam,sudo
    shell: /bin/bash
  - name: shay
    pass: "mL{3_Ajx04,,,.......||||||//3QZ"
    group: shay
    shell: /bin/bash

# Network Configuration
Network_Configuration:
  - nic: tun0
    ip: 192.168.2.14
    gateway: 192.168.2.1
    dns: 8.8.8.8,8.4.8.4
  - nic: eth0
    ip: "%DHCP%"
    gateway: "%DHCP%"
    dns: "%DHCP%"
```

Notice the readability and ease of use.

---

**How can you contribute?**
- [As a *QA* tester](/AutoPilot/contribute/QA.html)
