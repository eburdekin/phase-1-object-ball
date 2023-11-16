const teamStats = {
    "home": {
        teamName: "Brooklyn Nets",
        colors: ["black", "white"],
        players: {
            "Alan Anderson": {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1,
            },
            "Reggie Evans": {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7,
            },
            "Brook Lopez": {
                "number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15,
            },
            "Mason Plumlee": {
                "number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 21,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 5,
            },
            "Jason Terry": {
                "number": 31,
                "shoe": 15,
                "points": 19,
                "rebounds": 2,
                "assists": 2,
                "steals": 4,
                "blocks": 11,
                "slamDunks": 1,
            }
        }
    },
    "away": {
        teamName: "Charlotte Hornets",
        colors: ["turquoise", "purple"],
        players: {
            "Jeff Adrien": {
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2,
            },
            "Bismak Biyombo": {
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10,
            },
            "DeSagna Diop": {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5,
            },
            "Ben Gordon": {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0,
            },
            "Brendan Haywood": {
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12,
            }
        }
    }
}

function gameObject() {
    return teamStats
}


function teamNames() {
    let names = []
    for (let location in teamStats) {
        let teamObj = teamStats[location];
        names.push(teamObj.teamName)
    }
    console.log(`Team names: ${names}`)
}

teamNames()


function teamColors(teamName) {
    let colors = []

    for (let location in teamStats) {
        let teamObj = teamStats[location];
        if (teamObj.teamName === `${teamName}`) {
            colors = teamObj.colors;
            break;
        }
    }
    console.log(`${teamName} colors: ${colors}`)
}

teamColors('Brooklyn Nets')
teamColors('Charlotte Hornets')


function numPointsScored(playerName) {
    for (let location in teamStats) {
        let teamObj = teamStats[location]
        for (let stats in teamObj) {
            let players = teamObj[stats]
            for (let playerNames in players) {
                if (playerNames === playerName) {

                    let stats = players[playerNames]
                    console.log(`${playerName} scored ${stats.points} points!`)
                }
            }
        }
    }
}


numPointsScored("Alan Anderson")
numPointsScored("Brendan Haywood")


function shoeSize(playerName) {
    let object = gameObject()
    for (let teams in object) {
        let teamFacts = object[teams]
        for (let stats in teamFacts) {
            let players = teamFacts[stats]
            for (let playerNames in players) {
                if (playerNames === playerName) {

                    let stats = players[playerNames]
                    console.log(`${playerName}'s feet are size ${stats.shoe}!`)
                }
            }
        }
    }
}


shoeSize("Brook Lopez")
shoeSize("Mason Plumlee")


function playerStats(playerName) {
    let object = gameObject()
    for (let teams in object) {
        let teamFacts = object[teams]
        for (let stats in teamFacts) {
            let players = teamFacts[stats]
            for (let playerNames in players) {
                if (playerNames === playerName) {
                    let stats = players[playerNames]
                    console.log(`Stats for ${playerName}`)
                    console.log(stats)
                }
            }
        }
    }
}

playerStats("Reggie Evans")
playerStats("Jason Terry")

function playerNumbers(teamName) {
    let numbersArray = []
    for (let location in teamStats) {
        let teamFacts = teamStats[location];
        if (teamFacts.teamName === teamName) {
            let players = teamFacts.players;
            for (let playerName in players) {
                let playerStats = players[playerName];
                let allNumbers = playerStats.number
                numbersArray.push(allNumbers);
            }
        }
    }
    console.log(`${teamName}'s jersey numbers:`)
    console.log(numbersArray)
}

playerNumbers("Brooklyn Nets")
playerNumbers("Charlotte Hornets")
