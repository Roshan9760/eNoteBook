import React, { useEffect, useState } from 'react'

const About = () => {

  const [count,setCount] =useState(0)

  useEffect(()=>{
       setTimeout(() => {
         setCount((count) => count + 1);
       }, 1000);
  },[])
  return <h1>I have rendered {count} times!</h1>;
}

export default About