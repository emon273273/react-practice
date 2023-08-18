import { useState } from "react";

import Layout from "../components/layout/Layout";

function Help() {
  // const [name,setName]=useState('')

  // setTimeout(()=>{
  // setName("emon")

  // },5000)

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
  const [name, setName] = useState("");
  return (
    <Layout>
      {/* <h1>Hello i am {name?name:"Guest"}</h1> */}
      {/* using short circuit */}
      {/* {name &&  <h1>Hello {name}, I am help page</h1>}
   {!name &&  <h1>Hello guest , i am help page</h1>} */}

      {/* using ternary */}

      {name ? (
        <h1>Hello {name}, I am help page</h1>
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
