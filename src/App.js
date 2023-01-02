import React from 'react'
import Operations from './Operations'
import Cards from './Cards'
import Sdata from './Sdata'
import './index.css'

function ncard(val){
  // console.log(val); // this will give the value of the Sdata
  // Sdata is const array of objects that are mapped and accessed here in ncard with val and initialized with help of val.
  // as soon as ncard run it will print the value of the card how much information added in there will get directly printed on webpage in these case three are passed so three are printed as much as we want we can pass that in Sdata wala object.
  return(
    <Cards 
       source = {val.source}
       title = {val.title}
       span = {val.span}
       link = {val.link}
     />
  )
}
const App = () => {
  return (
    <div>
      <Operations />
      <div className='container'>
          {Sdata.map(ncard)}
      </div>
    </div>
  )
}

export default App