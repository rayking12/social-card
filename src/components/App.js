import React from 'react';
import '../styles/App.css';
import Card from './Card';
import  card from '../CardData';
import shot from '../Nature.jpg';
import headshot from '../oche.jpg'



function App() {
  return (
    <div className="App">
      <Card 
      logoUrl={shot}
      headline={card.headline}
      urlCreditImage={headshot}
      name={card.name1}
      message={card.message}
      url={card.url}
      />
      <Card 
      logoUrl={shot}
      headline={card.headline}
      urlCreditImage={headshot}
      name={card.name}
      message={card.message}
      url={card.url}
      />
      <Card 
      logoUrl={shot}
      headline={card.headline}
      urlCreditImage={headshot}
      name={card.name}
      message={card.message}
      url={card.url}
      />
    </div>
  );
}

export default App;


