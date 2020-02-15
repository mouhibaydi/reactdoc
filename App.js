import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './navbar'
import Para from './paragraphe'
import Blocks from './block'
import Liste from "./liste"
import Cards from "./cards"
import Notes from "./notes"
import City from "./city"
import Footer from "./footer"
let cardsmenu = [
  {
    image: "https://www.docplanner.com/img/flag.png",
    texte: "Leader in 10 countries",
    paragraphe: "Poland, Turkey, Italy, "


  }, {
    image: "https://www.docplanner.com/img/visits.png",
    texte: "1.5 million appointments  ",
    paragraphe: "booked last month  "
  },
  {
    image: " https://www.docplanner.com/img/patients.png",
    texte: "30 million unique patients  ",
    paragraphe: "visit us every month  "
  },
  {
    image: "https://www.docplanner.com/img/doctors.png",
    texte: "2 million active doctors  ",
    paragraphe: "trust in our solutions "
  }
]



let conblock = [{
  name: "for student",
  paragraphe: "Find a doctor, book a visit and solve any health-related doubt",
  Select: ["spain", "france", "tunisie"],
  Image: "https://www.docplanner.com/img/screen-marketplace@2x.png"
},
{
  name: "for doctors",
  paragraphe: "Save time managing visits and cut no-shows by half",
  Image: "https://www.docplanner.com/img/screen-saas@2x.png"
}



]
let para = ['We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that s why we are always next to them: to help them find the best possible care. Anytime, anywhere.',
  'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.'

]
let nav = [{
  name: 'about us',
  link: '#'

},
{
  name: 'career',
  link: '#'
},
{
  name: 'departements',
  link: '#',
  submenu: ['marketing && PR', 'custumer succsess && sales']
}
]
let listmenu = [
  {
    name: "znenaylakerz",
    link: "#"
  },
  {
    name: "doctoria",
    link: "#"
  },
  {
    name: "miodotte",
    link: "#"
  },
  {
    name: "doktorvakimi",
    link: "#"
  },
  {
    name: "znemylekar",
    link: "#"
  }
]
let cityinfo = [
  {
    image: "https://www.docplanner.com/images/warsaw.png",
    titre: "warsaw",
    butn: " see opening",
    link: "#"

  },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    titre: "barcelone",
    butn: "see opening",
    link: "#"

  },
  {
    image: "https://www.docplanner.com/images/istanbul.png",
    titre: "istanbul",
    butn: "see opening",
    link: "#"

  },
  {
    image: "https://www.docplanner.com/images/rome.png",
    titre: "rome",
    butn: "see opening",
    link: "#"

  },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    titre: "mexico city",
    butn: "see opening",
    link: "#"

  },
  {
    image: "https://www.docplanner.com/images/curitiba.png",
    titre: "curtibia",
    butn: "see opening",
    link: "#"
  }









]

function App() {
  return (
    <div>
      <Nav info={nav} />
      <Para info2={para} />
      <Blocks contenu={conblock} />
      <Liste obj={listmenu} />
      <Cards menu={cardsmenu} />
      <Notes />
      <City info3={cityinfo} />
      <Footer />
    </div>
  )
}

export default App;
