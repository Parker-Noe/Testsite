document.addEventListener('DOMContentLoaded', function() {
    // Get the current timestamp
    var timestamp = new Date().toLocaleString();

    // Display the timestamp in the designated HTML element
    document.getElementById('timestamp').innerHTML = 'Timestamp: ' + timestamp;
});
