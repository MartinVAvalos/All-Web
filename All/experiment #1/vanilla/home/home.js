var aboutMe = document.querySelector("#aboutMe");
var project = document.querySelector("#project");

aboutMe.addEventListener('click', () => {
    window.location.replace("file:///Users/muse/Desktop/vanilla/about_me/about_me.html");
});

project.addEventListener('click', () => {
    window.location.replace("file:///Users/muse/Desktop/vanilla/project/project.html");
})



// window.location.href; returns the href (URL) of the current page
// window.location.hostname; returns the domain name of the web host
// window.location.pathname; returns the path and filename of the current page
// window.location.protocol; returns the web protocol used (http: or https:)
// window.location.assign; loads a new document