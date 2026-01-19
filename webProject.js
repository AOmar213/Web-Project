// Add event listeners to images on the Rooms Page
document.addEventListener("DOMContentLoaded", function() {
    const roomImages = document.querySelectorAll('.rbimg');
    
    roomImages.forEach(image => {
        image.addEventListener('click', function() {
            const roomId = image.getAttribute('data-room-id');
            // Store the selected room ID in localStorage
            localStorage.setItem('selectedRoom', roomId);
        });
    });
});

// On the form page (roomReservations.html), auto-select the radio button
window.onload = function() {
    const selectedRoom = localStorage.getItem('selectedRoom');
    
    if (selectedRoom) {
        // Check the corresponding radio button based on the room ID
        const radioButton = document.getElementById(selectedRoom);
        if (radioButton) {
            radioButton.checked = true;
        }
    }
};