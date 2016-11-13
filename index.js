(function(){
	"use strict";

	var fs = require("fs");

	var Ajv = require('ajv');

	var ajv = new Ajv({v5: true, allErrors: true}); // options can be passed, e.g. {allErrors: true}


var data = {
		"todaysKey":20161113,"date":"Wed Sep 07 2016 06:35:05 GMT-0700 (PDT)",
		"source":{
			"domain":"www.collectorsweekly.com",
			"pageUrlTemplate":"/ajax/category-auctions.php?id= *** config.category.id *** &sort=completed&limit=1000&offset=0",
			"proxy":"proxy-environment.us-west-1.elasticbeanstalk.com",
			"queue":"https://sqs.us-west-1.amazonaws.com/727578435510/test",
			"settings":{
				"directories":{"diffTable":"_diffs","rawTable":"_raw","storeTable":"_store"},
				"images":{"directory":"store/images/","thumbnail":"140","additional":"400"},
				"blacklist":["gemsandjew"]
			}
		},
		"configuration":{
			"mode":"NORMAL",
			"location":"REMOTE",
			"source":"s3_text",
			"destination":"s3_text",
			"dataStore":{"read": {
				"remote": {},
				"local": {}
			}, "write": {
				"remote": {},
				"local": {}
			}}
		}
	};




	//"dataStore":{"read":{"remote":{"dynamo":{"endpoint":"https://dynamodb.us-west-1.amazonaws.com","region":"us-west-1","profile":"mgable","settings":{"size":10,"startingDelay":3000,"increment":500,"tables":{"diff":"_diffs","raw":"_raw","store":"_store"}}},"s3_text":{"profile":"mgable","endpoint":null,"region":"us-west-1","bucket":"store.collectors-db.com"}},"local":{"dynamo":{"endpoint":"http://localhost:8000","region":"us-west-1","profile":"mgable","settings":{"size":25,"startingDelay":3000,"increment":500,"tables":{"diff":"_diffs","raw":"_raw","store":"_store"}}},"file":{"endpoint":"data/"},"s3_text":{"profile":"mgable","endpoint":null,"region":"us-west-1","bucket":"store.collectors-db.com"}}},"write":{"remote":{"dynamo":{"endpoint":"https://dynamodb.us-west-1.amazonaws.com","region":"us-west-1","profile":"mgable","settings":{"size":10,"startingDelay":3000,"increment":500,"tables":{"diff":"_diffs","raw":"_raw","store":"_store"}}},"s3_text":{"profile":"mgable","endpoint":null,"region":"us-west-1","bucket":"store.collectors-db.com"}},"local":{"dynamo":{"endpoint":"http://localhost:8000","region":"us-west-1","profile":"mgable","settings":{"size":25,"startingDelay":100,"increment":500,"tables":{"diff":"_diffs","raw":"_raw","store":"_store"}}},"file":{"endpoint":"data/"},"s3_text":{"profile":"mgable","endpoint":null,"region":"us-west-1","bucket":"store.collectors-db.com"}}}},"imageStore":{"remote":{"endpoint":null,"profile":"mgable","region":"us-west-1","bucket":"images.collectors-db.com","imageDirectory":"store/images/"},"local":{"imageDirectory":"/Users/markgable/Sites/data/"}},"indexStore":{"local":{"profile":"mgable","endpoint":"http://localhost:9200","region":"us-west-2","index":"collectorsdb","mappings":{"_timestamp":{"enabled":true},"properties":{"date":{"type":"long"},"#REF":{"type":"string"},"failed":{"type":"boolean"},"id":{"type":"string"},"images":{"properties":{"local":{"type":"string"},"original":{"type":"string"}}},"link":{"type":"string"},"meta":{"properties":{"bids":{"type":"integer"},"date":{"properties":{"formatted":{"type":"date","format":"dateOptionalTime"},"origin":{"type":"string"}}},"price":{"type":"integer"},"watchers":{"type":"integer"}}},"source":{"properties":{"listedIn":{"type":"string"},"originalUrl":{"type":"string"},"provider":{"type":"string"}}},"src":{"properties":{"local":{"type":"string"},"origin":{"type":"string"},"original":{"type":"string"}}},"suggest":{"type":"completion","analyzer":"simple","payloads":false,"preserve_separators":true,"preserve_position_increments":true,"max_input_length":50,"context":{"type":{"type":"category","path":"_type"}}},"title":{"type":"string","fields":{"touched":{"type":"string","analyzer":"snowball"},"untouched":{"type":"string","index":"not_analyzed"}}}}},"settings":{"size":500,"delay":4000,"stopWords":["vintage","antique","rare","the","with","co","old","the","nice","good","of","early","you"]}},"remote":{"profile":"mgable","endpoint":"http://search-collectors-db-k6k76eedtz272dx3t5eqsmo2wq.us-west-1.es.amazonaws.com","region":"us-west-1","index":"collectorsdb","mappings":{"_timestamp":{"enabled":true},"properties":{"date":{"type":"long"},"#REF":{"type":"string"},"failed":{"type":"boolean"},"id":{"type":"string"},"images":{"properties":{"local":{"type":"string"},"original":{"type":"string"}}},"link":{"type":"string"},"meta":{"properties":{"bids":{"type":"integer"},"date":{"properties":{"formatted":{"type":"date","format":"dateOptionalTime"},"origin":{"type":"string"}}},"price":{"type":"integer"},"watchers":{"type":"integer"}}},"source":{"properties":{"listedIn":{"type":"string"},"originalUrl":{"type":"string"},"provider":{"type":"string"}}},"src":{"properties":{"local":{"type":"string"},"origin":{"type":"string"},"original":{"type":"string"}}},"suggest":{"type":"completion","analyzer":"simple","payloads":false,"preserve_separators":true,"preserve_position_increments":true,"max_input_length":50,"context":{"type":{"type":"category","path":"_type"}}},"title":{"type":"string","fields":{"touched":{"type":"string","analyzer":"snowball"},"untouched":{"type":"string","index":"not_analyzed"}}}}},"settings":{"size":500,"delay":4000,"stopWords":["vintage","antique","rare","the","with","co","old","the","nice","good","of","early","you"]}}}},"clean-up":{"diffs":1,"raw":90},"category":{},"report":{"status":{},"details":""},"items":[],"raw":[],"data":{},"task":{"current":null,"completed":[]},"categories":[{"name":"advertising_tins","id":1175},{"name":"fiesta","id":650},{"name":"golden_age_comic_books","id":1015},{"name":"tobacco_tins","id":346}],"tasks":[{"name":"fetch","options":{"proxy":true}},{"name":"parse"},{"name":"save","options":{"type":"raw"}},{"name":"diff"},{"name":"dup_check"},{"name":"save","options":{"type":"diff"}},{"name":"additional_data","options":{"proxy":true}},{"name":"save","options":{"type":"store"}},{"name":"save","options":{"type":"store","destination":"dynamo"}},{"name":"images"},{"name":"index"}]};


ajv.addSchema
	
ajv.addKeyword('isDate', {  type:'string', compile: function (sch, parentSchema) {
  return function (data) { 
  	return !isNaN(Date.parse(data)) 
  }
}});

var types = {
	"id": "types",
	"type": "string", "enum": ["dynamo", "s3_text", "file", "image"]
};

var schema = { 
	"id": "jobObj",
	"type": "object", 
	"properties": {
		"todaysKey": {"minimum": 20160000, "maximum": 21000000},
		"date" : {"type": "string", "isDate": ""},
		"source": {
			"type": "object",
			"properties": {
				"domain": {"pattern": "www\.collectorsweekly\.com"},
				"pageUrlTemplate": {"type": "string"},
				"proxy": {"type": "string"},
				"queue": {"type": "string"},
				"settings": {
					"type": "object",
					"properties": {
						"directories":{
							"type": "object",
							"maxProperties": 3,
							"minProperties": 3,
							"required": ["diffTable", "rawTable" ,"storeTable"]
						},
						"images": {
							"type": "object",
							"maxProperties": 3,
							"minProperties": 3,
							"required": ["directory", "thumbnail" ,"additional"]
						},
						"blacklist": {"type": "array"}
					},
					"additionalProperties": false,
					"required": ["directories", "images", "blacklist"]
				}
			},
			"required": ["domain", "pageUrlTemplate", "proxy", "queue", "settings"],
			"additionalProperties": false
		},
		"configuration":{
			"type": "object",
			"properties": {
				"mode": {"enum": ["NORMAL", "TEST"]},
				"location": {"enum": ["REMOTE", "LOCAL"]},
				"source":{"$ref": "types"},
				"destination":{"$ref": "types"},
				"dataStore": {
					"type": "object",
					"properties": {
						"read": {
							"type": "object",
							"properties": {
								"local": {"type": "object"},
								"remote": {"type": "object"},
							},
							"additionalProperties": false,
							"required": ["local", "remote"]
						},
						"write": {
							"type": "object",
							"properties": {
								"local": {"type": "object"},
								"remote": {"type": "object"},
							},
							"additionalProperties": false,
							"required": ["local", "remote"]
						},
					},
					"additionalProperties": false,
					"required": ["read", "write"]
				}
			},
			"required": ["mode", "location", "source", "destination", "dataStore"],
			"additionalProperties": false
		}
	},
	"additionalProperties": false,
	"required": ["date", "source", "configuration"]
};


ajv.addSchema([types, schema]);

var validate = ajv.compile(schema);
console.log(validate(data)); // true
// console.log(validate({date: "Wed Sep 07 2016 06:35:05 GMT-0700 (PDT)"})); // true
// console.log(validate({date: "Wed Sep 07 2016"})); // true
// console.log(validate({date: "2016-11-9"})); // true
// console.log(validate({date: "2016119"})); // false
// console.log(validate({date: "adadsa"}));
// console.log(validate({date: "adadsa", "foo": "bar"}));
// console.info(validate({date: 123}));
// console.info(validate({freight: 123}));

if (validate.errors){
	console.error("ERRORS!!!!");
	console.info(validate.errors);
}




	// var data = {"date":"Wed Sep 07 2016 06:35:05 GMT-0700 (PDT)"} //,"source":{"domain":"www.collectorsweekly.com","pageUrlTemplate":"/ajax/category-auctions.php?id= *** config.category.id *** &sort=completed&limit=1000&offset=0","proxy":"proxy-environment.us-west-1.elasticbeanstalk.com","queue":"https://sqs.us-west-1.amazonaws.com/727578435510/test","settings":{"directories":{"diffTable":"_diffs","rawTable":"_raw","storeTable":"_store"},"images":{"directory":"store/images/","thumbnail":"140","additional":"400"}},"blacklist":["gemsandjew"]},"configuration":{"mode":"NORMAL","location":"REMOTE","source":"s3_text","destination":"s3_text","dataStore":{"read":{"remote":{"dynamo":{"endpoint":"https://dynamodb.us-west-1.amazonaws.com","region":"us-west-1","profile":"mgable","settings":{"size":10,"startingDelay":3000,"increment":500,"tables":{"diff":"_diffs","raw":"_raw","store":"_store"}}},"s3_text":{"profile":"mgable","endpoint":null,"region":"us-west-1","bucket":"store.collectors-db.com"}},"local":{"dynamo":{"endpoint":"http://localhost:8000","region":"us-west-1","profile":"mgable","settings":{"size":25,"startingDelay":3000,"increment":500,"tables":{"diff":"_diffs","raw":"_raw","store":"_store"}}},"file":{"endpoint":"data/"},"s3_text":{"profile":"mgable","endpoint":null,"region":"us-west-1","bucket":"store.collectors-db.com"}}},"write":{"remote":{"dynamo":{"endpoint":"https://dynamodb.us-west-1.amazonaws.com","region":"us-west-1","profile":"mgable","settings":{"size":10,"startingDelay":3000,"increment":500,"tables":{"diff":"_diffs","raw":"_raw","store":"_store"}}},"s3_text":{"profile":"mgable","endpoint":null,"region":"us-west-1","bucket":"store.collectors-db.com"}},"local":{"dynamo":{"endpoint":"http://localhost:8000","region":"us-west-1","profile":"mgable","settings":{"size":25,"startingDelay":100,"increment":500,"tables":{"diff":"_diffs","raw":"_raw","store":"_store"}}},"file":{"endpoint":"data/"},"s3_text":{"profile":"mgable","endpoint":null,"region":"us-west-1","bucket":"store.collectors-db.com"}}}},"imageStore":{"remote":{"endpoint":null,"profile":"mgable","region":"us-west-1","bucket":"images.collectors-db.com","imageDirectory":"store/images/"},"local":{"imageDirectory":"/Users/markgable/Sites/data/"}},"indexStore":{"local":{"profile":"mgable","endpoint":"http://localhost:9200","region":"us-west-2","index":"collectorsdb","mappings":{"_timestamp":{"enabled":true},"properties":{"date":{"type":"long"},"#REF":{"type":"string"},"failed":{"type":"boolean"},"id":{"type":"string"},"images":{"properties":{"local":{"type":"string"},"original":{"type":"string"}}},"link":{"type":"string"},"meta":{"properties":{"bids":{"type":"integer"},"date":{"properties":{"formatted":{"type":"date","format":"dateOptionalTime"},"origin":{"type":"string"}}},"price":{"type":"integer"},"watchers":{"type":"integer"}}},"source":{"properties":{"listedIn":{"type":"string"},"originalUrl":{"type":"string"},"provider":{"type":"string"}}},"src":{"properties":{"local":{"type":"string"},"origin":{"type":"string"},"original":{"type":"string"}}},"suggest":{"type":"completion","analyzer":"simple","payloads":false,"preserve_separators":true,"preserve_position_increments":true,"max_input_length":50,"context":{"type":{"type":"category","path":"_type"}}},"title":{"type":"string","fields":{"touched":{"type":"string","analyzer":"snowball"},"untouched":{"type":"string","index":"not_analyzed"}}}}},"settings":{"size":500,"delay":4000,"stopWords":["vintage","antique","rare","the","with","co","old","the","nice","good","of","early","you"]}},"remote":{"profile":"mgable","endpoint":"http://search-collectors-db-k6k76eedtz272dx3t5eqsmo2wq.us-west-1.es.amazonaws.com","region":"us-west-1","index":"collectorsdb","mappings":{"_timestamp":{"enabled":true},"properties":{"date":{"type":"long"},"#REF":{"type":"string"},"failed":{"type":"boolean"},"id":{"type":"string"},"images":{"properties":{"local":{"type":"string"},"original":{"type":"string"}}},"link":{"type":"string"},"meta":{"properties":{"bids":{"type":"integer"},"date":{"properties":{"formatted":{"type":"date","format":"dateOptionalTime"},"origin":{"type":"string"}}},"price":{"type":"integer"},"watchers":{"type":"integer"}}},"source":{"properties":{"listedIn":{"type":"string"},"originalUrl":{"type":"string"},"provider":{"type":"string"}}},"src":{"properties":{"local":{"type":"string"},"origin":{"type":"string"},"original":{"type":"string"}}},"suggest":{"type":"completion","analyzer":"simple","payloads":false,"preserve_separators":true,"preserve_position_increments":true,"max_input_length":50,"context":{"type":{"type":"category","path":"_type"}}},"title":{"type":"string","fields":{"touched":{"type":"string","analyzer":"snowball"},"untouched":{"type":"string","index":"not_analyzed"}}}}},"settings":{"size":500,"delay":4000,"stopWords":["vintage","antique","rare","the","with","co","old","the","nice","good","of","early","you"]}}}},"clean-up":{"diffs":1,"raw":90},"category":{},"report":{"status":{},"details":""},"items":[],"raw":[],"data":{},"task":{"current":null,"completed":[]},"categories":[{"name":"advertising_tins","id":1175},{"name":"fiesta","id":650},{"name":"golden_age_comic_books","id":1015},{"name":"tobacco_tins","id":346}],"tasks":[{"name":"fetch","options":{"proxy":true}},{"name":"parse"},{"name":"save","options":{"type":"raw"}},{"name":"diff"},{"name":"dup_check"},{"name":"save","options":{"type":"diff"}},{"name":"additional_data","options":{"proxy":true}},{"name":"save","options":{"type":"store"}},{"name":"save","options":{"type":"store","destination":"dynamo"}},{"name":"images"},{"name":"index"}]};

	// var schema = JSON.parse(fs.readFileSync('./schema1.json', 'utf-8'));

	// ajv.addKeyword('isDate', { 
	// 	validate: function (schema, data) {
	// 		console.info("I am in validate");
	// 	  return false;
	// 	}, 
	// 	errors: false 
	// });


	// //var data = JSON.parse(fs.readFileSync('./boss.json', 'utf-8'));

	// var schema = {
	// 	"$schema": "http://json-schema.org/draft-04/schema#",
	// 	"id": "http://mynet.com/schemas/user.json#",
	// 	"title": "User",
	// 	"description": "Job Object structure",
	// 	"type": "object",
	// 	"properties": {
	// 		"date": { "type": "string", "format": "isDate" },
	// 	},
	// 	"additionalProperties": false
	// }




	

	// var validate = ajv.compile(schema);
	// var valid = validate(data);
	// if (!valid) console.log(validate.errors);

	// console.info("is data valid? " + valid);


})();
