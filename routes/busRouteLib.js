var lib = {};

var City = function(){
	this.busRoute = {};
};

lib.getDistinctStops = function(stops){
	return stops.filter(function(stop, i, array){ 
		return array.indexOf(stop) === i; 
	});
};

lib.getAllBusStops = function(city){
	var allStops = [];
	for(var busNo in city){
		var value = city[busNo];
		allStops = allStops.concat(value);
	};
	return allStops;
};

lib.getOccuranceOfEachStop = function(stopsName,data){
	var hubs = [];
	for(var i in stopsName){
		var count = 0;
		for(var index in data){
			if(stopsName[i] == data[index])
				count++;
		}
		hubs.push({'stop':stopsName[i],'count':count});
	};
	return hubs;
};

lib.sortStopsByOccurence = function(stops){
	return stops.sort(function(stop1,stop2){
		return stop2.count - stop1.count;
	});
};

City.prototype = {
	addBus : function(bus){
		this.busRoute[bus] = this.busRoute[bus] || [];
	},
	addStop : function(bus,stop){
		this.busRoute[bus] && this.busRoute[bus].push(stop);
	},
	getAllStops : function(){
		var allStops = lib.getAllBusStops(this.busRoute);
		return lib.getDistinctStops(allStops);
	},
	getDirectBuses : function(start,end){
		var buses = [];
		for(var busNo in this.busRoute){
			if(this.busRoute[busNo].indexOf(start) != -1 &&
				this.busRoute[busNo].indexOf(end) != -1){
				buses.push(busNo);
			}
		};
		if(buses.length != 0)
			return buses;
		return 'Sorry! no bus found';
	},
	getPopularHubs : function(numberOfHubs){
		var number = numberOfHubs || 5;
		var allStops = lib.getAllBusStops(this.busRoute);
		var uniqueStops = lib.getDistinctStops(allStops);
		var occurenceOfStops = lib.getOccuranceOfEachStop(uniqueStops,allStops);
		return lib.sortStopsByOccurence(occurenceOfStops).splice(0,5);
	}
};

module.exports.City = City;
module.exports.lib = lib;