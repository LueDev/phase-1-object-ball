function gameObject(){
    const game = {
        "home":{
            "teamName": "Brooklyn Nets",
            "colors": "Black, White",
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slam dunks": 1
                }, 
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slam dunks": 7
                }, 
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slam dunks": 15
                }, 
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slam dunks": 5
                }, 
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slam dunks": 1
                }, 
            }
        },
        "away":{
            "teamName": "Charlotte Hornets",
            "colors": "Turquoise, Purple",
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slam dunks": 2
                }, 
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slam dunks": 10
                }, 
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slam dunks": 5
                }, 
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slam dunks": 0
                }, 
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slam dunks": 12
                }, 
            }
        }
        
    }

    return game
}

// console.log("Object entries => ", Object.values(gameObject()))
// console.log(gameObject())

function homeTeamName() {
    return gameObject()["home"]["teamName"];
}

function deepIterator(target, targetSelector="default", attribute="default", callback=null){    

    if (typeof target === "object"){
        for (const key in target){
            // console.log("KEY: ", key)
            // console.log("KEY VALUE: ", target[key])

            // debugger
            //nested checks
            if((key === targetSelector && attribute !== "default")){
                // debugger
                // console.log("NESTED TARGET SELECTOR FOUND");
                // console.log("nested target selector attribute value: ", target[key][attribute]);
                return target[key][attribute]
            }

            //shallow checks
            if(key === targetSelector && attribute === "default"){
                // debugger
                // console.log(target[key])
                // console.log("SHALLOW TARGET SELECTOR FOUND")
                // console.log("shallow target selector attribute value: ", target[key]) 
                return target[key]
            }
            // debugger 
            if(callback !== null){
                // debugger
                //Closure function that captures the current scope and variable. We can do test cases here 
                const result = callback(key, target[key])
                if(result !== undefined){
                    return result
                }
            
            }
            // debugger
           
            // Recursive call
            const result = deepIterator(target[key], targetSelector, attribute, callback);
            if (result !== undefined) {
                return result; // Stop and return the result if found
            }
        }
    }
}

/*

Build a function, 
TODO[x]: numPointsScored - that takes in an argument of a player's name and returns the number of points scored for that player.
    - Think about where in the object you will find a player's points. How can you iterate down into that level? Think about the return value of your function.
TODO[x]: Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
    - Think about how you will find the shoe size of the correct player. How can you check and see if a player's name matches the name that has been passed into the function as an argument?
TODO[x]: Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
TODO[x]: Build a function, teamNames, that operates on the game object to return an array of the team names.
TODO[x]: Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
TODO[x]: Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats. Check out the following example of the expected return value of the playerStats function:
TODO[x]: Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
    - First, find the player with the largest shoe size
    - Then, return that player's number of rebounds
    - Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.

TODO[x]: Bonus Questions - Define functions to return the answer to the following questions:
TODO[x]: Which player has the most points? Call the function mostPointsScored.
TODO[x]: Which team has the most points? Call the function winningTeam.
TODO[x]: Which player has the longest name? Call the function playerWithLongestName.
TODO[x]: Super Bonus - Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.

*/

//Using the built-in conditionals for shallow checks and nested checks 
const numPointsScored = deepIterator(gameObject(), targetSelector="Alan Anderson", attribute="points")
const shoeSize = deepIterator(gameObject(), targetSelector="Alan Anderson", attribute="shoe")
const playerStats = deepIterator(gameObject(), targetSelector="Alan Anderson")

//Closure func that runs within the deepIterator. All params must be present for this to work.
//Figure out why all params must be present if they have default values and I only tried to call target and callback.
const teamNames = function(){

    const names = []; //the empty array must be initiated outside of the callback otherwise it will reset and return undefined after complete iteration

    const iterator = deepIterator(gameObject(), targetSelector='default', attribute='default', callback=function(key, value){
        if(key === 'teamName'){
            // console.log("Called from teamNames")
            names.push(value)
        }
    })

    return names
}

//Set a colors flag var to track when the team name is mentioned since it comes first in the gameObject() object
//When true, check when key === 'colors' and grab the value 
const teamColors = function(team){

    const colors = {}
    let teamFlag = false
    const iterator = deepIterator(gameObject(), targetSelector='default', attribute='default', callback=function(key, value){
        
        
        if(value === team){
            teamFlag = true
         }
       
         if(teamFlag){
            if(key === 'colors'){
                return value
            }
         }
        
    })

    colors[team] = iterator
    return [colors]
}

//Similar to teamColors, use a players flag when team name is found and when inside the player object, use a local array
//to capture all player jersey numbers
const playerNumbers = function(team){

    const jerseyNumbers = []
    const res = {}
    let teamFlag = false 

    const iterator = deepIterator(gameObject(), targetSelector='default', attribute='default', callback=function(key, value){
        
        //When team found, set teamFlag to true
        if(value === team){
            teamFlag = true
         }
       
         if(teamFlag){
            if(key === 'players'){
                debugger
               for(player in value){
                    jerseyNumbers.push(value[player]['number'])
                    // console.log("VALUE: ", value)
                    // console.log("PLAYER: ", player)
                    // console.log("JERSEY NUMBER: ", value[player]['number'])
               }
            }
         }
        
    })

    res[team + " Jersey Numbers"] = jerseyNumbers
    return res

}

//When key === 'players', we'll loop through the value
const bigShoeRebounds = function(){

    let biggestShoeRebounds = {}
    const biggestShoeCount = {}
    let biggestShoe = 0
    const iterator = deepIterator(gameObject(), targetSelector='default', attribute='default', callback=function(key, value){
        if(key === 'players'){
            for(player in value){
                if(value[player]['shoe'] > biggestShoe){
                    biggestShoe = value[player]['shoe']
                    biggestShoeRebounds = {} //resets the object every time a new player with bigger shoes is found
                    biggestShoeRebounds[player] = value[player]['rebounds'] // populates the rebounds of the player with the biggest shoes
                }
            }

        }
    })

    return biggestShoeRebounds
}

//BONUS QUESTIONS: 
// Which player scored the most points? 
const mostPointsScored = function(){

    let playerWithMostPoints = {}
    let mostPointsScored = 0
    const iterator = deepIterator(gameObject(), targetSelector='default', attribute='default', callback=function(key, value){
        if(key === 'players'){
            for(player in value){
                if(value[player]['points'] > mostPointsScored){
                    mostPointsScored = value[player]['points']
                    playerWithMostPoints = {} //resets the object every time a new player with bigger shoes is found
                    playerWithMostPoints[player] = value[player]['points'] // populates the rebounds of the player with the biggest shoes
                }
            }

        }
    })

    return playerWithMostPoints
}

// Which team won?  
const winningTeam = function(){

    let teamPoints = {}
    let teamAPoints = 0
    let teamBPoints = 0

    let currentTeam
    let teamCountFlag = 0
    let winner = {}
    const iterator = deepIterator(gameObject(), targetSelector='default', attribute='default', callback=function(key, value){
        
        if(key === 'teamName'){
            teamCountFlag++ // when true, add 1. When equal to 2, this will mean the team changed. 
            currentTeam = value //First team: BK Nets 
            // console.log("TEAM COUNT", teamCountFlag)
        }

        if(key === 'players'){
            for(player in value){
                if(teamCountFlag === 1){
                    teamAPoints += value[player]['points']
                    teamPoints[currentTeam] = teamAPoints
                }

                if(teamCountFlag === 2){
                    teamBPoints += value[player]['points']
                    teamPoints[currentTeam] = teamBPoints
                }
            }

        }
    })

    const mostPoints = Math.max(...Object.values(teamPoints))
    // console.log("MOST POINTS: ", mostPoints)
    // console.log(teamPoints)
    for(team in teamPoints){
        if(teamPoints[team] === mostPoints){
            winner[team] = teamPoints[team]
        }
    }

    return winner
}

 // Which player has the longest name
const playerWithLongestName = function(){

    let longestName = {}
    let nameLength = 0
    const iterator = deepIterator(gameObject(), targetSelector='default', attribute='default', callback=function(key, value){
        if(key === 'players'){
            for(player in value){
                if(player.length > nameLength){
                    nameLength = player.length
                    // console.log("PLAYER: ", player)
                    longestName = {} //resets the object every time a new player with bigger shoes is found
                    longestName[player] = player.length// populates the rebounds of the player with the biggest shoes
                }
            }

        }
    })

    return longestName
}

//returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.
const doesLongNameStealATon = function(){

    longestName = playerWithLongestName()

    let stealsCounter = 0
    let playerWithHighestSteals = {}
    const iterator = deepIterator(gameObject(), targetSelector='default', attribute='default', callback=function(key, value){
        if(key === 'players'){
            for(player in value){
                if(value[player]['steals'] > stealsCounter){
                    stealsCounter = value[player]['steals']
                    console.log("PLAYER: ", player)
                    playerWithHighestSteals = {} //resets the object every time a new player with bigger shoes is found
                    playerWithHighestSteals[player] = value[player]['steals']// populates the rebounds of the player with the biggest shoes
                }
            }

        }
    })

    return Object.keys(longestName)[0] === Object.keys(playerWithHighestSteals)[0]
}

console.log("PLAYER STATS: ", playerStats)
console.log("JERSEY NUMBERS: ", playerNumbers("Charlotte Hornets"))
console.log("TEAM NAMES: ", teamNames())
console.log("TEAM COLORS: ", teamColors("Charlotte Hornets"))
console.log("Alan Anderson, points scored: ", numPointsScored)
console.log("Alan Anderson, shoe size: ", shoeSize)
console.log("Player with BIGGEST SHOE REBOUNDS: ", bigShoeRebounds())
console.log("PLAYER WITH MOST POINTS SCORED: ", mostPointsScored())
console.log("WINNER: ", winningTeam())
console.log("LONGEST NAME: ", playerWithLongestName())
console.log("PLAYER WITH MOST STEALS ", doesLongNameStealATon())