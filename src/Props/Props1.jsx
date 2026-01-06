import React from 'react'
import Card from '../assets/Components/Card'


function Props1() {

  const touristPlaces = [
    {
      name: "Eiffel Tower",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
      code_no: "FR001",
      email_id: "info@eiffeltower.fr",
      ph_no: "+33 892 70 12 39",
      date_of_founded: "31 Mar 1889",
      location: "Paris, France"
    },
    {
      name: "Great Wall of China",
      img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwLnbYKgre9ogGhzCq0a-9RmrKmbZDkvGWQgCnQQiwImZafIESUsFaBHjA2odh8wMZxL8gAHTCPEdJ3ovzO6T8GR-eoSYzhgdrijPPkaNvI7fnNG3_ynM5QNkQXjYqGFqUo2LNN1Q=s680-w680-h510-rw",
      code_no: "CN002",
      email_id: "info@greatwall.cn",
      ph_no: "+86 10 6162 6022",
      date_of_founded: "7th century BC",
      location: "China"
    },
    {
      name: "Taj Mahal",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      code_no: "IN003",
      email_id: "info@tajmahal.in",
      ph_no: "+91 562 222 7261",
      date_of_founded: "1632",
      location: "Agra, India"
    },
    {
      name: "Statue of Liberty",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
      code_no: "US004",
      email_id: "info@statueofliberty.org",
      ph_no: "+1 212-363-3200",
      date_of_founded: "28 Oct 1886",
      location: "New York, USA"
    },
    {
      name: "Machu Picchu",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
      code_no: "PE005",
      email_id: "info@machupicchu.pe",
      ph_no: "+51 84 582030",
      date_of_founded: "15th century",
      location: "Cusco, Peru"
    }
  ];

  console.log(touristPlaces);

  return (
    <div className='flex flex-wrap justify-center'>
      {touristPlaces.map((place, index) => (
        <Card
          key={index}
          image={place.img}
          Name={place.name}
          CD_no={place.code_no}
          email_id={place.email_id}
          phone={place.ph_no}
          date={place.date_of_founded}
          location={place.location}
        />
      ))}
    </div>
  )
}

export default Props1;