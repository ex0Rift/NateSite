fetch("https://my-backend-wy3i.onrender.com/auth/details")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("DataDisplay").textContent = data.user;
    });