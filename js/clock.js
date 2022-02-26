var userName = prompt("Adınızı giriniz:", "adınız");
document.getElementById('myName').innerHTML = userName;


function showTime(){
    var currentdate = new Date();
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    var day= currentdate.getDay();
    var hour = currentdate.getHours();
    var minute = currentdate.getMinutes();
    var second = currentdate.getSeconds();
    var dateTime = `${hour}:${minute}:${second} ${days[day]}`;

    document.getElementById('myClock').innerHTML = dateTime;
}


