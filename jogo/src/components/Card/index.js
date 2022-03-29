import './style.css'
import CardBack from '../../assets/card-back.png'

function Card({ card, stateCards, setStateCards }) {
    function handleTurnCard(params) {
        const localCards = [...stateCards]

        const currentCard = localCards.find((item) => item.id === card.id)

        const onlyTurned = localCards.filter((item) => item.turned)

        if (onlyTurned.length > 1) {
            return
        }

        if (onlyTurned.length && card.slug === onlyTurned[0].slug) {
            currentCard.turned = !currentCard.turned
            setStateCards(localCards)
            setTimeout(() => {
                handleClearCards(currentCard, onlyTurned[0], localCards )

            }, 800)
            return

        }
        currentCard.turned = !currentCard.turned
        setStateCards(localCards)
        if (onlyTurned.length) {
            setTimeout(() => {

                localCards.forEach((item) => {
                    item.turned = false
                })
                setStateCards([...localCards])
            }, 800)
        }
    }

    function handleClearCards(card1, card2, localCards) {
        if (card1.id === card2.id) {
            return
        }

        const filterCards = localCards.filter((item) =>
            item.id !== card1.id && item.id !== card2.id)

        setStateCards(filterCards)
    }
    return (

        <img className='card'
            src={card.turned ? card.image : CardBack}
            alt='card'
            onClick={() => handleTurnCard()} />

    )
}

export default Card