var fs = require('fs');
var City = require('./busRouteLib').City;
var lib = require('./busRouteLib').lib;

var data = fs.readFileSync('../data/All_Routes_By_Number.txt','utf8').split(/\r\n|\:/);

var createBusesData = function(data){
	var bangalore = new City();
	data.forEach(function(element,index,array){
		if(index%2 == 0){
			bangalore.addBus(element);
		}else{
			var stops = element.split(',');
			for(var i = 0 ; i< stops.length ;i++){
				bangalore.addStop(array[index-1],stops[i]);
			}
		}
	});
};

createBusesData(data);