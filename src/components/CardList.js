import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
  return (  
    <React.StrictMode>
      {
        robots.map((robot,i)=>{
            return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
          }
        )
      }
    </React.StrictMode>
  );
}
export default CardList;