import './style.css';
import Sidebar from '../../components/Sidebar/index'
import Card from '../../components/Card/index'
import cards from '../../cards'
import { useState } from 'react'

function Main() {
const [stateCards, setStateCards] = useState([...cards])
  function handleChangeCard(cardId) {
    console.log(cardId);
  }
  return (
    <div className='container'>
      <Sidebar 
      setStateCards = {setStateCards}
      cards = {cards}
      />
      <div className='container-main'>
        {stateCards.map((card) => (
          <Card 
          key={card.id} 
          card={card}
          stateCards = {stateCards}
          setStateCards = {setStateCards}
          />
        ))}
      </div>
    
    </div>
  );
}

export default Main;
