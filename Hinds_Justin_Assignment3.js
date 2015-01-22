/* */

var chef = "Chef Blackstock",
   sous= "Sous Chef Flynn",
   leadCook = "Overton";
var menu = ["Coq au Vin", "Beef Wellington", "Blackened Salmon"]
var wellington = ["Duxelles", "Crepe", "Beef"]
var coqAuVin = ["Wine", "Chicken", " Pearl Onions"]
var salmon = ["Salmon", "Garlic Mashed Potatoes","Asparagus"] 
var served = 0
// global variables 

var journey = function(name){
	console.log( name + " has left his house and went to the market to pick up the ingredients for tonights VIP table")

};   
var vipMenu = function(dish){
	for(var menuItems = 0; menuItems<menu.length; menuItems++)
	{
		var menuItem = menu[menuItems],
			ingredients =  dish
		console.log("start making " + menuItem+ " It Has " + ingredients)
			for(entree=0; entree<dish.length; entree++)
			{
			console.log (ingredients)
			}
		}	
	};
var service = function(covers){
	while(served < covers ){
	
	console.log( " We have " + ( covers - served) + "covers left!");
	served += 10;
	}
		return served;
};
journey(chef)	
service(80)
vipMenu(coqAuVin)
console.log( leadCook + '" I dropped the asparagus!!!"')
var lostItem = salmon.pop()
salmon.push("Veg Melody")
console.log("Since " + leadCook + "decided to drop the asparagus the new build for the Blackened Salmon is " +salmon)