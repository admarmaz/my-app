
async function getOffers() {

    try {

        const response = await fetch("https://api.rodeoworld.co.uk/offers/list", {
            method : "GET",
            headers : {
            "Authorization" : localStorage.getItem("token"),
                },

            path : {"idVenue" : 73,
            },
        });

        const data = await response.json();
        console.log(data);

    return data;
    }catch (error) {
        console.error(error);
    }
}



function Offers() {

    const offers = getOffers();
  
    return (
      <div> This is the offer page</div>
    );
  
}

export default Offers;