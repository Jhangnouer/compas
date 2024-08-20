if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
        const alpha = event.alpha;

        // Rotate the compass
        const compassElement = document.getElementById('compass');
        compassElement.style.transform = `rotate(${-alpha}deg)`;

        // Determine direction based on alpha
        const directionElement = document.getElementById('direction');
        let direction = "";

        if (alpha >= 45 && alpha < 135) {
            direction = "Timur";
        } else if (alpha >= 135 && alpha < 225) {
            direction = "Selatan";
        } else if (alpha >= 225 && alpha < 315) {
            direction = "Barat";
        } else {
            direction = "Utara";
        }

        directionElement.textContent = `Arah: ${direction}`;
    }, true);
} else {
    alert("DeviceOrientationEvent tidak didukung oleh browser Anda.");
}
