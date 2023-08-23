import { useState,useEffect } from "react";

import Layout from "../components/layout/Layout";

function Help() {
//   const [name,setName]=useState('')
const [state, setState] = useState({name:''});

  
useEffect(()=>{

 setTimeout(() => {
    setState({name:"emonsab"})
 }, 5000);

 console.log(" set timeout called")

},[state.name])

console.log("rendering")
  const data = [
    {
      name: "md emon hossain",
      email: "emon.cse273@gmail.com",
    },
    {
      name: "shakib",
      email: "shakib@gmail.com",
    },
    {
      name: "kamrul",
      email: "kamrul@gmail.com",
    },
  ];



  return (
    <Layout>
      {/* <h1>Hello i am {name?name:"Guest"}</h1> */}
      {/* using short circuit */}
      {/* {name &&  <h1>Hello {name}, I am help page</h1>}
   {!name &&  <h1>Hello guest , i am help page</h1>} */}

      {/* using ternary */}

      {state.name ? (
        <h1>Hello {state.name}, I am help page</h1>
      ) : (
        <h1>Hello guest , i am help page</h1>
      )}

      {data.length > 0 ? (
        <ul>
          {data.map((value, index) => {
            return (
              <li value={index}>
                {value.name},<b>and email is </b>{value.email}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no data</p>
      )}
    </Layout>
  );
}

export default Help;
