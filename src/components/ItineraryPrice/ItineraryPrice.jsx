/* The code defines a React functional component called `ItineraryPrice`. It takes a prop called
`price` as input. */
const ItineraryPrice = ({price}) => {
    const maxRating = 5;

    const coins = Array.from({ length: maxRating }, (_, index) => (
        <span key={index} className={`coin ${index < price ? 'filled' : 'empty'}`}>&#36;</span>
    ));

    return (
        <div className="coin-price ml-2">
            {coins}
        </div>
    );
}

export default ItineraryPrice