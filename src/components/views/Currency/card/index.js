import PropTypes from 'prop-types';

const Card = ({ item, handleDeleteItem }) => {
    return (
        <div className='dashboard-container__card'>
            <div className='dashboard-container__cardInsideContainer'>
                <p className='dashboard-container__title'>Currency:</p>
                <p className='dashboard-container__currencyName'>{item.name}</p>
            </div>
            <div className='dashboard-container__cardInsideContainer'>
                <p className='dashboard-container__title'>Value:</p>
                <p className='dashboard-container__price'>{item.value}</p>
            </div>
            <div 
                className='dashboard-container__deleteButton'
                onClick={() => handleDeleteItem(item.name)}
            >
                Delete
            </div>
        </div>
    )
}

Card.defaultProps = {
    currencies: {},
    handleDeleteItem: () => {},
};
  
Card.propTypes = {
    currencies: PropTypes.object,
    handleDeleteItem: PropTypes.func
};

export default Card