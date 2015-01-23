/* 
Justin Hinds
SDI
Term - 1501
*/

var chef = "Chef Blackstock",
   sous= "Sous Chef Flynn",
   leadCook = "Overton";
var menu = ["Beef Wellington", "Coq au Vin", "Blackened Salmon"];
var build = [["Duxelles", "Crepe", "Beef"], ["Wine", "Chicken", " Pearl Onions"], ["Salmon", "Garlic Mashed Potatoes","Asparagus"]];
var wellington = ["Duxelles", "Crepe", "Beef"];
var coqAuVin = ["Wine", "Chicken", " Pearl Onions"];
var salmon = ["Salmon", "Garlic Mashed Potatoes","Asparagus"];
var served = 0;
var serviceComplete = true;
// global variables 

var journey = function(name){
	console.log( name + " has left his house and went to the market to pick up the ingredients for tonights VIP table")

};   
var vipMenu = function(dish){
	for(var menuItems = 0; menuItems < menu.length; menuItems++){
		var menuItem = menu[menuItems],
			ingredients =  dish
		console.log("start making " + menuItem + " It Has " + ingredients[menuItems])
			for(entree=2; entree < dish.length; entree++)
			{
			var  ingredients = dish[menuItems];
			console.log (ingredients + " have all been prepared, ready for the pass!")
			}
		}	
			return ingredients
	};
var service = function(covers){
	while(served < covers ){
	
	console.log( " We have " + ( covers - served) + "covers left!");
	served += 10;
	}
		return served;
};
var cleanUp = function(bool){
	if(bool === false){
	console.log("The night ain't over ladies and gentlemen, PICK IT UP!")
	}else if(bool === true){
		console.log("Well that was service now let us clean up this catastrophe!")
		}else{
			console.log(" Call for a head count")
			} 
			return bool;

};
journey(chef)	
console.log(chef + " enters the restaurant and briefs his staff on the VIP's coming to eat tonight.")
console.log("Service begins and the team starts putting out the orders before the VIP table arrives")
service(80)
console.log("VIP are here!")
vipMenu(build)
console.log( leadCook + '" I dropped the asparagus!!!"')
var lostItem = salmon.pop()
salmon.push("Veg Melody")
console.log("Since " + leadCook + "decided to drop the asparagus the new build for the Blackened Salmon is " +salmon)

cleanUp(serviceComplete)
var vipOrders = function(json){
	for(var i = 0; i < json.VIP.length; i++){
		var chefOrder = json.VIP[i];
		console.log("Chef" + Vip.chef + "wants " + VIP.dish )
	}
};
vipOrders(json2);