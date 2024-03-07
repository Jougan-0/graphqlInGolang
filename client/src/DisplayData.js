import React, { useState } from 'react'
import {useQuery,gql,useLazyQuery, useMutation}from"@apollo/client";
const QueryAllUser=gql`
    query GetAllUSER{
     users{
            id
            name
            age
            username
            nationality
  #   friends {
  #     age
  # name
  #   }
           }
        }
`

const GetAllMovies=gql`
query GetMovie{
  movies{
    id
    isInTheaters
    name
    yearOfPublication
  }
}
`
const Get_Movie_By_Name=gql`
query GetMovieByName($name:String!){
  movie(name:$name){
    name
    yearOfPublication
  }
}
`
const CreateUser=gql`
mutation createUser($input:createUserInput!){
  createUser(input:$input){
  name
  username
  age
  nationality
  } 
}

`

const DisplayData = () => {
  const [searchedMovie,setSearchedMovie]=useState("");
  
  
  const [name,setName]=useState("");
  const [username,setUserName]=useState("");
  const [age,setAge]=useState(0);
  const [nationality,setNationality]=useState("");
  
 const{data,isloading,error,refetch}=useQuery(QueryAllUser)
 const{data:movieData}=useQuery(GetAllMovies)
const [createUser]=useMutation(CreateUser)
const[fetchMovie,{data:movieSearchedData,error:MovieError}]=useLazyQuery(Get_Movie_By_Name);
 if (isloading){
  return <h1>Data is loading ....</h1>
 }
 if (error){
  console.log(error)
 }
 if(MovieError)
 {
  console.log(MovieError)
 }
  return (
    <div>
      <div>
        <input type='text' placeholder='Name....' onChange={(event)=>{
          setName(event.target.value)
        }}/>
        <input type='text' placeholder='Username....'onChange={(event)=>{
          setUserName(event.target.value)
        }}/>
        <input type='number' placeholder='Age....'onChange={(event)=>{
          setAge(event.target.value)
        }}/>
        <input type='text' placeholder='Nationality ....'onChange={(event)=>{
          setNationality(event.target.value.toUpperCase())
        }}/>
        <button onClick={()=>{
          createUser({variables:{input:{name,username,age:Number(age),nationality}}})
          refetch();
        }}>CreateUser</button>
      </div>
      {data && data.users.map((user)=>{
        return(
          <div key={user.id}>
          <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>

            <h1>Username:{user.username}</h1>

          </div>
        )
      })}
      {movieData && movieData.movies.map((movie)=>{
        return(
          <div key={movie.id}>
            <h1>Name:{movie.name}</h1>
            <h1>Year of publication:{movie.yearOfPublication}</h1>
            </div>
        )
      })}

      <div>
        <input type='text' placeholder='Interstaller .... ' onChange={(event)=>{
          setSearchedMovie(event.target.value);
        }}/>
        <button onClick={()=>{
          fetchMovie({variables:{
            name:searchedMovie
          }})
        }}>Fetch data</button>
        <div>
          {movieSearchedData && 
          <div>
            <h1>MovieName : {movieSearchedData.movie.name}</h1>{""}
            <h1>Year of Publication : {movieSearchedData.movie.yearOfPublication}</h1>{""}
          </div>
          }
          <div>
            {MovieError && <div>
              {""}
              <h1>There was an error</h1>
              </div>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default DisplayData