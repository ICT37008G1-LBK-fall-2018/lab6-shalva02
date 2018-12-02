var first = document.getElementById('first');
var second = document.getElementById('second');

function insertAfter(firstElement, secondElement) {
    var container = document.getElementById('container');
    if (container.lastChild == secondElement) {
        container.appendChild(firstElement);
    } else {
        container.insertBefore(firstElement, secondElement.nextSibling);
    }

}
insertAfter(first, second)