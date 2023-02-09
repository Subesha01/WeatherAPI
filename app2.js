function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='c08ca4fa65fcd0dc91a6cbc809ca2a8d';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then(data =>{
        var t=data['main']['temp']
        document.getElementById("output").innerHTML=t;
        var s=data['main']['temp_max']
        document.getElementById("output").innerHTML=s;
        var r=data['main']['temp_min']
        document.getElementById("output").innerHTML=r;
         })
} 