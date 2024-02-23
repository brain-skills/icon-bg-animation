const iconArray = [
    "fa fa-users", "fab fa-vk", "fab fa-bootstrap", "fab fa-github", "fab fa-php",
    "fa fa-phone", "fa fa-bath", "fa fa-shower", "fa fa-thermometer-half", "fa fa-balance-scale",
    "fa fa-battery-half", "fa fa-bicycle", "fa fa-bolt", "fa fa-gift", "fa fa-graduation-cap",
    "far fa-heart", "fa fa-globe", "fa fa-hourglass-end", "fab fa-twitter", "fa fa-users",
    "fa fa-user", "fa fa-dog", "fa fa-cat", "fa fa-bullhorn", "far fa-comment", "far fa-envelope",
    "fa fa-gift", "fa fa-graduation-cap", "far fa-heart", "fa fa-globe", "fa fa-hourglass-end",
    "fab fa-twitter", "fa fa-users", "fab fa-vk", "fa fa-bath", "fa fa-shower", "fa fa-thermometer-half",
    "fa fa-balance-scale", "fa fa-battery-half", "fa fa-bicycle", "fa fa-bolt", "fa fa-gift",
    "fa fa-graduation-cap", "far fa-heart", "fa fa-globe", "fa fa-hourglass-end", "fab fa-twitter",
    "fa fa-users", "fa fa-user", "fa fa-dog", "fa fa-cat", "fa fa-bullhorn", "far fa-comment",
    "far fa-envelope", "fa fa-shower", "fa fa-thermometer-half", "fa fa-balance-scale",
    "fa fa-battery-half", "fab fa-bootstrap", "fab fa-github", "fab fa-php", "fa fa-battery-half",
    "fa fa-graduation-cap", "far fa-heart", "fa fa-globe", "fa fa-hourglass-end", "fab fa-twitter",
    "fa fa-users", "fa fa-user", "fa fa-dog", "fa fa-cat", "fa fa-bullhorn", "far fa-comment",
    "far fa-envelope", "fa fa-shower", "fa fa-thermometer-half", "fa fa-balance-scale",
];

const iconContainers = document.querySelectorAll('.icon-container');

iconContainers.forEach(container => {
    iconArray.forEach(iconClass => {
        const iconElement = document.createElement('i');
        iconElement.className = `icon ${iconClass}`;
        container.appendChild(iconElement);
    });
});