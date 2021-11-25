import React, { useLayoutEffect } from "react";


async function getVenues() {

  try {
    
    const response = await fetch("https://api.rodeoworld.co.uk/venues/list", {
      method : "GET",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      },
      
    });

    let data = await response.json();
    console.log(data);

    return data;

  } catch (error) {
    console.error(error);
  }


}


function Venues() {

  let data = getVenues();
  console.log(data);

  return (
    <div> This is the venue page</div>,
    
    <ul>

      {Object.keys(data).map((item, id) => (
          <li key={id}>
              <span>key: {id} {data[item]}</span>
          </li>
      ))}

      {Object.entries(data).map(([key, val], i) => (
          <p key={i}>
              <span>{key}: {val} </span>
          </p>
      ))}

    </ul>

  );

}

export default Venues;
