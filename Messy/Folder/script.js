
document.getElementById("INP").addEventListener("submit" , function (e){
    e.preventDefault();

    const d$aa$d = document.getElementById("name").value;
    const a$dd$a = document.getElementById("password").value;

    num = Math.random();
    localStorage.setItem("TempPassKey",num)

    if (d$aa$d == "admin"){
        if (a$dd$a == "Entry011008"){
            window.location.href = "https://natesite.co.uk/Messy/Folder/inie/Ipage.html?key="+num;
            //window.location.href = "http://127.0.0.1:5500/NateSite/Messy/Folder/inie/Ipage.html?key="+num;
        }
    }
});