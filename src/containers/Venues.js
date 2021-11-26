import React, { useEffect } from "react";



async function getVenues() {

  try {
    
    const response = await fetch("https://api.rodeoworld.co.uk/venues/list", {
      method : "GET",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      },
    });

    let data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}


function Venues() {

  let data = getVenues();

  return (
    <div> This is the venue page</div>
  );

}

export default Venues;
