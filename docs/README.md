# ALUM.SH - docs

<style>
.tag-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 50px; /* Adjust the gap between tags */
    padding: 20px;
    max-width: 800px; /* Limit the width of the tag container */
    justify-content: space-between; /* Align items with equal space between them */
}

.tag {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #082336;
    color: #ffffff;
    padding: 20px; /* Adjust the padding to control the size of the squares */
    border-radius: 8px; /* Adjust the border radius for a rounded look */
    text-decoration: none;
    transition: background-color 0.3s ease;
    width: 100%; /* Make sure button takes full width of its container */
    position: relative; /* Needed for the padding trick */
    overflow: hidden; /* Ensure content does not overflow */
}

/* Pseudo-element for responsive height */
.tag::before {
    content: "";
    display: block;
    padding-top: 70%; /* Aspect ratio: 70% height of width */
}

.tag:hover {
    background-color: #2ebaae;
}
</style>

Documents on scripts and codes made by Noam (myself 😁)

## Other links:
<div class="tag-container">
    <a href="https://alum.sh/" class="tag"><strong>Main site</strong></a>
    <a href="https://www.linkedin.com/in/noam-alum/" class="tag"><strong>LinkedIn</strong></a>
    <a href="https://github.com/Noam-Alum/" class="tag"><strong>GitHub</strong></a>
</div>