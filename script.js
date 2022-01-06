function getWeather() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	    let weather = JSON.parse(this.response) 
        // Access the result here
        let country = weather.location.country;
	    let city = weather.location.name;
        let tempature = weather.current.temp_c;
        let tempatureFeels = weather.current.feelslike_c;
        let wind =Math.floor(weather.current.wind_kph*0.28);
        document.getElementById("cityText").innerHTML = "City: " + city + "," + "<br>" + country
        document.getElementById("tempText").innerHTML = "Temperature: " + tempature + "°C"
        document.getElementById("tempFeelsText").innerHTML = "feels like: " + tempatureFeels + "°C"
        document.getElementById("windText").innerHTML = "wind: " + wind + " m/s"
        document.getElementById("condition").setAttribute("src", weather.current.condition.icon)
        document.getElementById("conditionText").innerHTML = weather.current.condition.text
        document.getElementById("weather").innerHTML = ""

        let currentCondition = document.getElementById("conditionText").innerHTML
        // Jos currentCondition sisältää sanan "rain", niin lisätään teksti: "It is raining, maybe take an umbarella with you."
        let word = "rain"
        if(currentCondition.includes(word)===true){
        document.getElementById("warm").innerHTML = "It is raining, maybe take an umbarella with you."
        }

        // Jos currentCondition sisältää sanan "snow", niin lisätään teksti: "It is snowing, make a snowman?"
        let word2 = "snow"
        if(currentCondition.includes(word2)===true){
        document.getElementById("warm").innerHTML = "It is snowing, make a snowman?"
        }
        
        // Jos lämpötila on tietty niin annetaan tietty teksti.
        if(tempature<-35){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, You must be in Jakutsk?"
        }
        if(tempature>=-35 && tempature<=-25){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, I'd recommed you to stay inside and enjoy a hot cup of cocoa"
        }
        if(tempature>=-25 && tempature<=-16){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, if you go outside dress really warm!"
        }
        if(tempature>=-15 && tempature<=-11 ){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, Go to a kota and grill some sausage "
        }
        if(tempature>=-10 && tempature<=-6){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, perfect weather for winter sports!"
        }
        if(tempature>=-5 && tempature<=0 ){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, Water starts to freeze"
        }
        if(tempature>0 && tempature<=5){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, you might want to put some gloves on."
        }
        if(tempature>5 && tempature<9){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, Ideal temperature for a jog"
        }
        if(tempature>=10 && tempature<=14){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, you might need a jacket. "
        }
        if(tempature>=15 && tempature<=19){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, good weather for a walk. "
        }
        if(tempature>=20){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, remember to drink plenty of water! "
        }

        // Lisätekstit tuulelle 
        if(tempature>10 && wind>=3 && wind<=4){
            document.getElementById("windy").innerHTML = "The wind " + "(" + wind + " m/s" + ")" + " and temperature " + "(" + tempature + "°C" + ") " + "are perfect for flying a kite"
        }
        if(wind>=10){
            document.getElementById("windy").innerHTML = "The wind is quite harsh, hold on to your hats."
        }
        if(wind<=6 && wind>=3){
            document.getElementById("windy").innerHTML = "There is a light breeze"
        }
        if(wind<10 && wind>=7){
            document.getElementById("windy").innerHTML = "There is moderate wind"
        }
        if(wind<=2){
            document.getElementById("windy").innerHTML = "The wind is really quiet."
        }
        
        //ja conditionille
        if(document.getElementById("conditionText").innerHTML == "Sunny" && tempature>20){
            document.getElementById("warm").innerHTML = "It is warm and sunny, go sunbathe!"
        }

        // Jos span on tyhjä niin diviä ei tuoda esiin, muussa tapauksessa tuodaan esille.
        if(document.querySelector("#weather").innerHTML != ""){
            document.getElementById("weatherResult").style.visibility = "visible";
        }
        else{
            document.getElementById("weatherResult").style.visibility = "hidden";
        }
        if(document.querySelector("#windy").innerHTML != ""){
            document.getElementById("windResult").style.visibility = "visible";
        }
        else{
            document.getElementById("windResult").style.visibility = "hidden";
        }
        if(document.querySelector("#warm").innerHTML != ""){
            document.getElementById("warmResult").style.visibility = "visible";
        }
        else{
            document.getElementById("warmResult").style.visibility = "hidden";
        }
	}
    };
    // Haetaan tiedot apista
    if(document.getElementById("oulu").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Oulu&aqi=no",true);
        // Send request
        xhttp.send();
    }
    else if(document.getElementById("paris").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Paris&aqi=no",true);
        // Send request
        xhttp.send();
    }
    else if(document.getElementById("tamatave").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Tamatave&aqi=no",true);
        // Send request
        xhttp.send();
    }
    else if(document.getElementById("jakutsk").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Jakutsk&aqi=no",true);
        // Send request
        xhttp.send();
    }
    else if(document.getElementById("hoedspruit").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Hoedspruit&aqi=no",true);
        // Send request
        xhttp.send();
    }
    else if(document.getElementById("wellington").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Wellington&aqi=no",true);
        // Send request
        xhttp.send();
    }
    // Jos valittuna empty ja painaa nappia, kaikki säätiedot ja niiden taustat näkymättömiä.
    if(document.getElementById("empty").selected == true){
        document.getElementById("weatherResult").style.visibility = "hidden";
        document.getElementById("windResult").style.visibility = "hidden";
        document.getElementById("warmResult").style.visibility = "hidden";
        document.getElementById("condition").style.visibility = "hidden"
        document.getElementById("conditionText").style.visibility = "hidden"
        document.getElementById("cityText").style.visibility = "hidden"
        document.getElementById("tempText").style.visibility = "hidden"
        document.getElementById("tempFeelsText").style.visibility = "hidden"
        document.getElementById("windText").style.visibility = "hidden"
        
        alert("Select a city!")
    }
    // Muussa tapauksessa tuodaan esiin
    else {
        document.getElementById("conditionText").style.visibility = "visible"
        document.getElementById("condition").style.visibility = "visible"
        document.getElementById("cityText").style.visibility = "visible"
        document.getElementById("tempText").style.visibility = "visible"
        document.getElementById("tempFeelsText").style.visibility = "visible"
        document.getElementById("windText").style.visibility = "visible"

    }
    
}

// Resettaa edelliset tulokset
function resetResults() {
    document.getElementById("weather").innerHTML = ""
    document.getElementById("windy").innerHTML = ""
    document.getElementById("warm").innerHTML = ""
}






/*let weatherInfo = "In " + city + " there is " + tempature + " degree celcius and it feels like " + tempatureFeels + " degree celcius. " + " Wind speed is " + wind + "m/s"
        document.getElementById("weatherInfo").innerHTML = weatherInfo*/