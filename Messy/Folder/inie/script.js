
const params = new URLSearchParams(window.location.search);
const num = localStorage.getItem("TempPassKey")

//console.log(num)

if (params.get("key") !== num){
    window.location.href = "https://google.com";
}