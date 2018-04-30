define(function(){
	var controller = require("userForm0c3272030a4c24fController");
	var controllerActions = ["Form0c3272030a4c24fControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})