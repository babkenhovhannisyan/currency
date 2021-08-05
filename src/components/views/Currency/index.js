import { useState } from 'react'
import PropTypes from 'prop-types';
import Card from './card'
import './style.css'

const Currency = ({ currencies, handleDeleteItem, handleAddItem, handleReloadData }) => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [error, setError] = useState(false);


    const handleAdd = () => {
        if (name && number) {
            setError(false)
            const addedItem = {
                name,
                value: number
            }

            setName("")
            setNumber(0)
            setError(false)
    
            handleAddItem(addedItem)
        } else {
            setError(true)
        }
    };


    return (
        <div className='dashboard-container'>
            <h2>Dashboard of Currencies</h2>
            {error && <p className='dashboard-conteiner__error-text'>Please fill required fields *</p>}
            <div className='dashboard-container__reloadData' onClick={handleReloadData}>Reload Data</div>
            <div className='dashboard-container__addItemContainer'>
                <input value={name} type='text' onChange={(e) => setName(e.target.value)} placeholder='Name *' />
                <input value={number} type='number' onChange={(e) => setNumber(e.target.value)} placeholder='Value *' />
                <div className='dashboard-container__add' onClick={handleAdd}>Add</div>
            </div>
            <div className='dashboard-container__currencies'>
                { currencies.map(item => <Card item={item} key={item.name} handleDeleteItem={handleDeleteItem} />) }
            </div>
        </div>
    )
}

Currency.defaultProps = {
    currencies: [],
    handleDeleteItem: () => {},
    handleAddItem: () => {},
    handleReloadData: () => {},
};
  
Currency.propTypes = {
    currencies: PropTypes.array,
    handleDeleteItem: PropTypes.func,
    handleAddItem: PropTypes.func,
    handleReloadData: PropTypes.func,
};

export default Currency