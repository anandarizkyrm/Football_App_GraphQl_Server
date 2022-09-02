const playersDb = [
    {
        id: 1,
        firstName : "Messi",
        lastName : "Lionel",
        age : 35,
        nationality : 'Argentina',
        flag : "https://www.pngfind.com/pngs/m/105-1056035_argentina-png-argentina-flag-icon-png-transparent-png.png",
        club : "Paris Saint Germain",
        position : ['AMF', 'CF', 'RW'],
        photo : "https://i.pinimg.com/564x/7c/1a/35/7c1a355096eab3a1a7db6075d56fbcb6.jpg"
    },
    {
        id: 2,
        firstName : "Cristiano",
        lastName : "Ronaldo",
        age : 38,
        nationality : 'Portugal',
        flag : "https://www.iconspng.com/images/flag-of-portugal/flag-of-portugal.jpg",
        club : "Manchester United",
        position : ['CF'],
        photo : "https://i.pinimg.com/564x/7c/1a/35/7c1a355096eab3a1a7db6075d56fbcb6.jpg"
    }
]

exports.db = {
 playersDb
}
