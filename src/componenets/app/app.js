import React from 'react';
import Header from '../heder/header';
import RandomPlanet from '../random-planet/random-planet'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'

import './app.css';

const App = () => {
     return (
         <div>
             <Header/>
             <RandomPlanet/>
             <div className='row mb2'>
                 <div className='col-md-6'>
                     <ItemList/>
                 </div>
                 <div className='col-md-6'>
                     <PersonDetails/>
                 </div>
             </div>
         </div>
     )
}

export default App;