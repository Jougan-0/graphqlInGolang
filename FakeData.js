const UserList=[
    {
        id:1,
        name:"John",
        username:"john",
        age:20,
        nationality:"CANADA",
        friends:[    {
            id:2,
            name:"Doe",
            username:"doe",
            age:22,
            nationality:"AMERICA",
        },
        {
    id:4,
    name:"Riya",
    username:"riya",
    age:22,
    nationality:"INDIA",
},
]
    },
    {
        id:2,
        name:"Doe",
        username:"doe",
        age:22,
        nationality:"AMERICA",
    },
    {
        id:4,
        name:"Riya",
        username:"riya",
        age:22,
        nationality:"INDIA",
        friends:[
            {
                id:5,
        name:"Tejjus",
        username:"tejjus",
        age:25,
        nationality:"INDIA",
            }
        ]
    },
    {
        id:5,
        name:"Tejjus",
        username:"tejjus",
        age:25,
        nationality:"INDIA",
    },
    {
        id:6,
        name:"Shlok",
        username:"shlok",
        age:22,
        nationality:"INDIA",
    },
]


const MovieList=[
    {
        id:1,
        name:"Avenger's Endgame",
        yearOfPublication:2017,
        isInTheaters:true,
    },
    {
        id:2,
        name:"Wonka",
        yearOfPublication:2023,
        isInTheaters:true,
    },
    {
        id:3,
        name:"Dunki",
        yearOfPublication:2023,
        isInTheaters:false,
    },
    {
        id:4,
        name:"Deadpool 3",
        yearOfPublication:2024,
        isInTheaters:false,
    },
    {
        id:5,
        name:"Koi mil gya",
        yearOfPublication:2004,
        isInTheaters:true,
    },
]

module.exports ={UserList,MovieList}