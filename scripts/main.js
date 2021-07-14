const kittyflip = document.getElementById('kittyflip');

kittyflip.onclick = function () {
    const kittysrc = kittyflip.getAttribute('src');
    const flipped = (kittysrc === 'images/kitty.jpeg') ? 'kittybluesteel.png' : 'kitty.jpeg';
    kittyflip.setAttribute('src', 'images/' + flipped);
};

function setUserName() {
    let name = prompt('Whats yo name');
    if (!name) { name = 'fjwke'; }
    localStorage.setItem('name', name);
    document.querySelector('footer').textContent = 'Whassup ' + name;
}

let name = localStorage.getItem('name')
if (name == null) {
    setUserName();
} else {
    document.querySelector('footer').textContent = 'See yo back ' + name;
}

document.querySelector('button').onclick = setUserName;
