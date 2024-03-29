const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// used 25 as example
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Click to Install';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', () => {
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App was installed', event);
});
