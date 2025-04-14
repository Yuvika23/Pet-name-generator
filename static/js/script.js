document.getElementById('petForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values from form
    const petType = document.getElementById('pet_type').value;
    const gender = document.getElementById('gender').value;
    const personality = document.getElementById('personality').value;

    // Send POST request to Flask
    fetch('/generate_name', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `pet_type=${petType}&gender=${gender}&personality=${personality}`
    })
    .then(response => response.json())
    .then(names => {
        // Display the names
        const nameList = document.getElementById('nameList');
        nameList.innerHTML = '';  // Clear previous names

        if (names.length > 0) {
            names.forEach(name => {
                const li = document.createElement('li');
                li.textContent = name;
                nameList.appendChild(li);
            });
        } else {
            nameList.innerHTML = 'No names found for the selected options.';
        }
    })
    .catch(error => console.error('Error:', error));
});
