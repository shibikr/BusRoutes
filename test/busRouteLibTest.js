var City = require('../routes/busRouteLib').City;
var lib = require('../routes/busRouteLib').lib;
var assert = require('chai').assert;

var sampleData = [ '1',
				  'YESHWANTHPUR BUS STAND,GOVT SOAP FACTORY,MALLESWARAM 11TH CR.',
				  '1A',
				  'YESHWANTHPUR BUS STAND,GOVT SOAP FACTORY',
				  '1C',
				  'YESHWANTHPUR REG MKT,MALLESWARAM 11TH CR.',
				  '1D',
				  'JAYANAGAR BUS STAND,SOUTH END CIRCLE',
				  '1E',
				  'JP NGR. 6TH PHASE,JP NAGAR 24TH MN/9TH CR',
				  '1F',
				  'K R MARKET,CHAMRAJPET',
				  '2A',
				  'JP NAGAR 1ST PHASE,JNR 5TH BLK'];

describe("addBus",function(){
	it('should add the given bus to routes',function(){
		var madivala = new City();
		madivala.addBus('171G');
		var result = Object.keys(madivala.busRoute);
		assert.deepEqual(result,['171G']);
	});
	it('should add whatever bus we give',function(){
		var bangalore = new City();
		sampleData.forEach(function(bus,index,array){
			if(index%2==0)
				bangalore.addBus(bus);
		});
		var result = Object.keys(bangalore.busRoute);
		assert.deepEqual(result,[ '1', '1A', '1C', '1D', '1E', '1F', '2A' ]);
	});
});

describe("addStop",function(){
	it('should add the given stop to the corresponding bus',function(){
		var madivala = new City();
		madivala.addBus('171G');
		madivala.addStop('171G','KoramangalaWaterTank');
		var result = madivala.busRoute;
		assert.deepEqual(result,{ '171G': [ 'KoramangalaWaterTank' ] });
	});
	it('should add large amount of datas',function(){
		var bangalore = new City();
		sampleData.forEach(function(data,index,array){
			if(index%2==0){
				bangalore.addBus(data);
			}else{
				var stops = data.split(',');
				for(var i = 0 ; i< stops.length ;i++){
					bangalore.addStop(array[index-1],stops[i]);
				}
			};
		});
		var result = { busRoute: 
					   { '1': [ 'YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY',
					          'MALLESWARAM 11TH CR.' ],
					     '1A': [ 'YESHWANTHPUR BUS STAND', 'GOVT SOAP FACTORY' ],
					     '1C': [ 'YESHWANTHPUR REG MKT', 'MALLESWARAM 11TH CR.' ],
					     '1D': [ 'JAYANAGAR BUS STAND', 'SOUTH END CIRCLE' ],
					     '1E': [ 'JP NGR. 6TH PHASE', 'JP NAGAR 24TH MN/9TH CR' ],
					     '1F': [ 'K R MARKET', 'CHAMRAJPET' ],
					     '2A': [ 'JP NAGAR 1ST PHASE', 'JNR 5TH BLK' ] } };
		assert.deepEqual(JSON.stringify(result),JSON.stringify(bangalore));
	});
});

describe("getAllStops",function(){
	it('should give all stops from the city',function(){
		var madivala = new City();
		sampleData.forEach(function(data,index,array){
			if(index%2==0){
				madivala.addBus(data);
			}else{
				var stops = data.split(',');
				for(var i = 0 ; i< stops.length ;i++){
					madivala.addStop(array[index-1],stops[i]);
				}
			};
		});
		var result = [ 'YESHWANTHPUR BUS STAND',
					   'GOVT SOAP FACTORY',
					   'MALLESWARAM 11TH CR.',
					   'YESHWANTHPUR REG MKT',
					   'JAYANAGAR BUS STAND',
					   'SOUTH END CIRCLE',
					   'JP NGR. 6TH PHASE',
					   'JP NAGAR 24TH MN/9TH CR',
					   'K R MARKET',
					   'CHAMRAJPET',
					   'JP NAGAR 1ST PHASE',
					   'JNR 5TH BLK' ];
		assert.deepEqual(madivala.getAllStops(),result);
	});
});

describe('getDirectBuses',function(){
	var bangalore = new City();
	bangalore.busRoute = { '1': [ 'YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY',
					          'MALLESWARAM 11TH CR.' ],
					     '1A': [ 'YESHWANTHPUR BUS STAND', 'GOVT SOAP FACTORY' ],
					     '1C': [ 'YESHWANTHPUR REG MKT', 'MALLESWARAM 11TH CR.' ],
					     '1D': [ 'JAYANAGAR BUS STAND', 'SOUTH END CIRCLE' ],
					     '1E': [ 'JP NGR. 6TH PHASE', 'JP NAGAR 24TH MN/9TH CR' ],
					     '1F': [ 'K R MARKET', 'CHAMRAJPET' ],
					     '2A': [ 'JP NAGAR 1ST PHASE', 'JNR 5TH BLK' ] } ;
	it('should return number of direct buses if present',function(){
		var result = bangalore.getDirectBuses('YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY');
		assert.deepEqual(['1','1A'],result);
	});
	it('should return a message when no bus found',function(){
		var result = bangalore.getDirectBuses('JP NGR. 6TH PHASE','GOVT SOAP FACTORY');
		assert.deepEqual('Sorry! no bus found',result);
	});
});

describe('getHubs',function(){
	it('should give most popular hubs',function(){
		var bangalore = new City();
		bangalore.busRoute = { '1': [ 'YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY',
						          'MALLESWARAM 11TH CR.' ],
						     '1A': [ 'YESHWANTHPUR BUS STAND', 'GOVT SOAP FACTORY' ],
						     '1C': [ 'YESHWANTHPUR REG MKT', 'MALLESWARAM 11TH CR.' ],
						     '1D': [ 'JAYANAGAR BUS STAND', 'SOUTH END CIRCLE' ],
						     '1E': [ 'JP NGR. 6TH PHASE', 'JP NAGAR 24TH MN/9TH CR' ],
						     '1F': [ 'K R MARKET', 'CHAMRAJPET' ],
						     '2A': [ 'JP NAGAR 1ST PHASE', 'JNR 5TH BLK' ] } ;
		var result = [ { stop: 'YESHWANTHPUR BUS STAND', count: 2 },
					   { stop: 'MALLESWARAM 11TH CR.', count: 2 },
					   { stop: 'GOVT SOAP FACTORY', count: 2 },
					   { stop: 'YESHWANTHPUR REG MKT', count: 1 },
					   { stop: 'JAYANAGAR BUS STAND', count: 1 } ];				     
		assert.deepEqual(bangalore.getPopularHubs(),result);				  
	});
});
