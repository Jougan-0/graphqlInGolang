const {gql}= require('apollo-server');

const typeDefs=gql`
    type User{
        id:ID!
        name: String!
        username:String!
        age:Int!
        nationality:Nationality!
        friends:[User]
        favoriteMovies:[Movie]
    }

    type Movie{
        id:ID!
        name:String!
        yearOfPublication:Int!
        isInTheaters:Boolean!
    }
    input createUserInput{
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
    }
    input updateUserNameInput{
        id:ID!
        username:String!
    }
    type Mutation{
        createUser(input:createUserInput!):User!
        updateUserName(input:updateUserNameInput!):User!
        deleteUser(id:ID!):User
    }
    type Query{
        users:[User!]!
        user(id:ID!):User! #mostly not required to use "!" should be handled in frontend
        movies :[Movie!]!
        movie(name:String!):Movie!
    }

    enum Nationality{
        CANADA
        AMERICA
        INDIA
    }
`;

module.exports={typeDefs};