const {UserList,MovieList}= require("../FakeData")
const _=require("lodash")

const resolvers={
    Query:{
        //user resolvers
        users:()=>{
            return UserList;
        },
        user: (parent ,args )=>{
            const id =args.id
            const user=_.find(UserList,{id:Number(id)})
            return user
        },

        //movie resolvers
        movies:()=>{
            return MovieList
        },
        movie:(parent,args)=>{
            const name=args.name
            const movie=_.find(MovieList,{name:name})
            return movie
        }
    },

    User:{
        favoriteMovies:()=> {
            return _.filter(MovieList,(movie)=>movie.yearOfPublication==2023)
        }
    },

    Mutation:{
        createUser:(parent,args)=>{
            const user=args.input
            const lastId=UserList[UserList.length-1].id
            user.id=lastId+1
            console.log(user)
            UserList.push(user)
            return user
        },
        updateUserName:(parent,args)=>{
            console.log(args.input)
            const {id,username}=args.input
            console.log(username)
            let userUpdated
            UserList.forEach(user => {
                if (user.id===Number(id)){
                    user.username=username
                    userUpdated=user
                    console.log(userUpdated)
                }
            }); 
            return userUpdated
        },
        deleteUser:(parent,args)=>{
            const id=args.id
            _.remove(UserList,(user)=>user.id===Number(id));
            return null
        }
    }
};
//could use id inplace of id:id
module.exports={resolvers}