var data = require('./data.js');

var cities = data.list;

function separator (name) {
	while (name.length < 30) { 
		name += '=';
	}
	return name;
}

function kToF(k) {
	return Math.floor(((k - 273.15) * 1.8) + 32);
}

function direction(degrees) {
	var cardinals = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
	return cardinals[Math.floor((degrees % 360) / 45)];
}

console.assert(direction(360) === 'N');
console.assert(direction(90) === 'E');

function weatherInfo (city) {
	return separator(city.name) + '\n' +
		city.weather[0].description + '\n' +
		'Temp: ' + kToF(city.main.temp) + '\n' +
		'Lo: ' + kToF(city.main.temp_min) + ' ' + 'F' + ' Hi: ' + kToF(city.main.temp_max) + ' ' + 'F' + '\n' +
		'Humidity: ' + city.main.humidity + '\n' +
		'Wind: ' + city.wind.speed + ' MPH ' + direction(city.wind.deg) + '\n' +
		separator('');
}

var newArr = data.list.map(weatherInfo);

newArr.sort();

var dataStr = newArr.join('');

console.log(dataStr); 

// console.log(weatherInfo(cities[0]));
// console.log(weatherInfo(city.weather.description));

//sorting the cities
var places = cities.filter(function(city) {
	if (city.name === city) {
		return true;
	} else {
		return false;
	}
});
var name = cities.map(function (city) {
	return city.name;
});
// console.log(name.sort());

cities.forEach(function (city) { 
	for (var i = 0; i < city.length; i++) {
		cities = city.name + 1;
	}
	// console.log(name.sort());
});

// console.log(weatherInfo(name[0]));

//the most frequent weather description
var weatherDescrip = cities.map(function (city) {
	return city.weather[0].description;
});

var counts = {};
var description;

for (var i = 0; i < weatherDescrip.length; i++) {
	description = weatherDescrip[i];
	if (counts[description] === undefined) {
		counts[description] = 1;	
	} else {
		counts[description] += 1;
	}
}

var maxDescription;

for (var description in counts) {
	if (maxDescription === undefined || counts[maxDescription] < counts[description]) {
		maxDescription = description;
	}
}


//AVERAGE
// avg of all temps
var allTemp = cities.filter(function (temperature) {
	if (temperature.main.temp === temperature) {
		return true;
	} else {
		return false;
	}
});
var temp = cities.map(function (temperature) {
	return temperature.main.temp;
});
var tempTotal = temp.reduce(function (previous, current) {
	return previous + current;
});
// console.log(tempTotal);
// console.log(tempTotal/temp.length);


// avg of all temp min
var allLo = cities.filter(function (lo) {
	if (lo.main.temp_min === lo) {
		return true;
	} else {
		return false;
	}
});
var loTemp = cities.map(function (lo) {
	return lo.main.temp_min;
});
var loTotal = temp.reduce(function (previous, current) {
	return previous + current;
});
// console.log(loTotal);
// console.log(loTotal/temp.length);



// avg of all max temps
var allHi = cities.filter(function (hi) {
	if (hi.main.temp_max === hi) {
		return true;
	} else {
		return false;
	}
});
var hiTemp = cities.map(function (hi) {
	return hi.main.temp_max;
});
var hiTotal = temp.reduce(function (previous, current) {
	return previous + current;
});
// console.log(hiTotal);
// console.log(hiTotal/temp.length);


// avg of all humidity
var allHum = cities.filter(function (humidity) {
	if (humidity.main.humidity === humidity) {
		return true;
	} else {
		return false;
	}
});
var hum = cities.map(function (humidity) {
	return humidity.main.humidity;
});
var humTotal = hum.reduce(function (previous, current) {
	return previous + current;
});
// console.log(humTotal);
// console.log(humTotal/hum.length);


// avg of wind
var allWind = cities.filter(function (wind) {
	if(wind.wind.speed === wind) {
		return true;
	} else {
		return false;
	}
});
var speed = cities.map(function (wind) {
	return wind.wind.speed;
});
var speedTotal = speed.reduce(function (previous, current) {
	return previous + current;
});
// console.log(speedTotal);
// console.log(speedTotal/speed.length);


// avg of degrees
var allDeg = cities.filter(function (degrees) {
	if (degrees.wind.deg === degrees) {
		return true;
	} else {
		return false;
	}
});
var deg = cities.map(function (degrees) {
	return degrees.wind.deg;
});
var degTotal = deg.reduce(function (previous, current) {
	return previous + current;
});
// console.log(degTotal);
// console.log(degTotal/deg.length);



// the highest and lowest temp
var highestTemp = 0;

function maxTemp(highestTemp) {
	for (var i = 0; i < hiTemp.length; i++) {
		if( hiTemp[i] > highestTemp) {
			highestTemp = hiTemp[i];
		}
		return highestTemp;
	}
}

// console.log(highestTemp);
// console.assert((highestTemp) === 302.096);


var lowestTemp = loTemp[0];

function minTemp(lowestTemp) {
	for(var i = 0; i < loTemp.length; i ++) {
		if(loTemp[i] < lowestTemp) {
			lowestTemp = loTemp[i];
		}
		return lowestTemp;
	}
}
// console.log(lowestTemp);
// console.assert((lowestTemp) === 301.271);

// the highest and lowest humidity

var highestHum = 0;

for (var i = 0; i < hum.length; i++) {
	if(hum[i] > highestHum) {
		highestHum = hum[i];
	}
	return highestHum;
}
// console.log(highestHum);
// console.assert((highestHum) === 62);

var lowestHum = hum[0];

for(var i = 0; i < hum.length; i++) {
	if(hum[i] < lowestHum) {
		lowestHum = hum[i];
	}
	return lowestHum;
}

// console.log(lowestHum);
// console.assert((lowestHum) == 56);

// lowest and highest wind speed

var highestSpeed = 0;

for (var i = 0; i < speed.length; i++) {
		if(speed[i] > highestSpeed) {
			highestSpeed = speed[i];
		}
		return highestSpeed;
}
// console.log(highestSpeed);
// console.assert((highestSpeed) == 6.56);

var lowestSpeed = speed[0];

for(var i = 0; i < speed.length; i++) {
	if(speed[i] < lowestSpeed) {
		lowestSpeed = speed[i];
	}
	return lowestSpeed;
}

// console.log(lowestSpeed);
// console.assert((lowestSpeed) == 5.51);

// directions
var highestDeg = 0;

for (var i = 0; i < deg.length; i++) {
		if(deg[i] > highestDeg) {
			highestDeg = deg[i];
		}
		return highesDeg;
}
// console.log(highestDeg);
// console.assert((highestDeg) == 184.003);

var lowestDeg = deg[0];

for (var i = 0; i < deg.length; i++) {
	if(deg[i] < lowestDeg) {
		lowestDeg = deg[i];
	}
	return lowestDeg;
}
// console.log(lowestDeg);
// console.assert((lowestDeg) == 179.003);

