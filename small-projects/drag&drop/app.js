const dragImage = document.getElementById('dragImage');

let isDragging = false;
let offsetX, offsetY;
console.log(dragImage.offsetLeft)
// Mouse down event to start dragging
dragImage.addEventListener('mousedown', (event) => {
    isDragging = true;
    // Calculate the offset between the mouse pointer and the image's top-left corner
    offsetX = event.clientX - dragImage.offsetLeft;
    offsetY = event.clientY - dragImage.offsetTop;
});

// Mouse move event to drag the image
document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        // Move the image to the new position
        dragImage.style.left = `${event.clientX - offsetX}px`;
        dragImage.style.top = `${event.clientY - offsetY}px`;
    }
});

// Mouse up event to stop dragging
document.addEventListener('mouseup', () => {
    isDragging = false;
});
