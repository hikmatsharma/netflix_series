import React, { useState } from 'react';
import Card from './Cards';
import Sdata from './Sdata';
// const favseries = "netflix"
const App = ()=>(
    <>
    <h1 className = "heading_style">Top 5 Netflix Series in 2022</h1>
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );

    })}
  </>
);

export default App;