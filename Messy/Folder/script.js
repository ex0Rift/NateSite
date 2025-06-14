
document.getElementById("INP").addEventListener("submit" , function (e){
    e.preventDefault();

    const d$aa$d = document.getElementById("name").value;
    const a$dd$a = document.getElementById("password").value;

    if (d$aa$d == "admin"){
        if (a$dd$a == "qwe"){
            window.location.href = "https://natesite.co.uk";
        }
    }
});