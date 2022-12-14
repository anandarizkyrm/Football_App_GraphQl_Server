const playersDb = [
    {
        id: 154,
        league : 61,
        firstName : "Messi",
        lastName : "Lionel",
        age : 35,
        nationality : 'Argentina',
        flag : "https://www.pngfind.com/pngs/m/105-1056035_argentina-png-argentina-flag-icon-png-transparent-png.png",
        club : "Paris Saint Germain",
        logo : "https://media.api-sports.io/football/teams/85.png",
        position : ['AMF', 'CF', 'RW'],
        photo : "https://media.api-sports.io/football/players/154.png"
        
    },
    {
        id: 2,
        firstName : "Cristiano",
        lastName : "Ronaldo",
        age : 38,
        nationality : 'Portugal',
        flag : "https://www.iconspng.com/images/flag-of-portugal/flag-of-portugal.jpg",
        club : "Manchester United",
         logo : "https://media.api-sports.io/football/teams/33.png",
        position : ['CF'],
        photo : "https://media.api-sports.io/football/players/874.png"
    },
    {
    	id : 276,
    	firstName : "Neymar",
    	league : 61,
    	lastName : "junior",
    	nationality : "Brazil",
    	logo : "https://media.api-sports.io/football/teams/85.png",
    	flag : "https://www.pngfind.com/pngs/m/105-1056035_argentina-png-argentina-flag-icon-png-transparent-png.png",
    	club : "Paris Saint Germain",
    	position : ["AMF", "LMF"],
        photo :"https://media.api-sports.io/football/players/276.png"

    }
]


exports.db = {
 playersDb
}
