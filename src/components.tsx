import {useState,useEffect} from 'react';
interface User{
	name:string,
	roll:number,
	age:number,
	email:string,

}

export default function Components(){

	const[user,setUser]=useState<User>({name:"",roll:0,age:0,email:""});
	const [userinfo,getUser]=useState<User>({name:"sujan",roll:14,age:22,email:"asujan"});
useEffect(()=>{
setUser(userinfo);
	
},[]);
  return(

<button  onClick={() =>{
getUser(userinfo);}} >clck  </button>
  );
}   


