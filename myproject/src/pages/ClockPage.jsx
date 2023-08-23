import { useState,useEffect } from "react";
import   * as DateFns from "date-fns"

import Layout from "../components/layout/Layout";


function getTimes(date){

    return{
          hour:DateFns.getHours(date),
        minute:DateFns.getMinutes(date),


        secound:DateFns.getSeconds(date)
    }
}

function ClockPage(){

    const [date,setDate]=useState(new Date());
    useEffect(()=>{

setTimeout(()=>{

    setDate(new Date());
},1000)
    },[date])

   
// console.log(getTimes(date))

const time=getTimes(date);
    return (


        <Layout>
            <h1>clock</h1>

            <h1>{time.hour<10 ?`0${time.hour}`:time.hour}:{time.minute<10?`0${time.minute}`:time.minute}:{time.secound<10?`0${time.secound}`:time.secound}</h1>
        </Layout>
    )
}

export default ClockPage;