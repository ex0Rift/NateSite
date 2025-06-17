
document.getElementById("INP").addEventListener("submit" , function (e){
    e.preventDefault();

    const d$aa$d = document.getElementById("name").value;
    const a$dd$a = document.getElementById("password").value;

    num = Math.random();
    localStorage.setItem("TempPassKey",num)

    fetch("https://my-backend-wy3i.onrender.com/auth/details")
        .then(response => response.json())
        .then(data => {
            if (d$aa$d == data.user){
                if (a$dd$a == data.password){
                    window.location.href = "https://natesite.co.uk/Messy/Folder/inie/Ipage.html?key="+num;
                    //window.location.href = "http://127.0.0.1:5500/Messy/Folder/inie/Ipage.html?key="+num;
        }
    }
        });
});