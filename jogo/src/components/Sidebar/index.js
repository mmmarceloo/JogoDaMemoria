import './style.css'
import Logo from '../../assets/logo.svg'


function Sidebar({setStateCards, cards}) {

    function handleReset() {
        cards.forEach((card) => {
            card.turned = false
        });

        setStateCards(cards)
    }
    return(
        
    <div className='menu'>
        <img src={Logo} alt='Logo' />
        <button onClick={() => handleReset()}>RESET</button>
      
    </div>
      
         
     
    )      
   
}

export default Sidebar