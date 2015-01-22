/* */

var chef = "Chef Blackstock",
   sous= "Sous Chef Flynn",
   leadCook = "overton";
var menu = ["Coq au Vin", "Beef Wellington", "Blackened Salmon"]
var wellington = ["Duxelles", "Crepe", "Beef"]
var coqAuVin = ["Wine", "Chicken", " Pearl Onions"]
var salmon = ["Salmon", "Garlic Mashed Potatoes","Asparagus"] 

// global variables 

var journey = function(name){
	console.log( name + " has left his house and went to the market to pick up the ingredients for tonights VIP table")

}   

var vipMenu = function(dish)
{
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

journey(chef)	
vipMenu(coqAuVin)
console.log( leadCook + '" I dropped the asparagus!!!"')
var lostItem = salmon.pop()
salmon.push("Veg Melody")
console.log(salmon)