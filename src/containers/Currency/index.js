import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Currency from 'components/views/Currency'
import { setCurrencies, removeItem, addItem } from 'store/currencies/actions'

const CurrencyContainer = () => {
    const currenciesData = useSelector(state => state.currencies)
    const dispatch = useDispatch();


    const handleDeleteItem = (currencyName) => {
        dispatch(removeItem(currencyName))
    };

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    };

    const handleReloadData = () => {
        dispatch(setCurrencies())
    };

    useEffect(() => {
        const storageCurrencies = localStorage.getItem('currencies')

        if (!storageCurrencies) {
            dispatch(setCurrencies())
        }
        
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        localStorage.setItem('currencies', JSON.stringify(currenciesData.data));
    }, [currenciesData.data])

    // Loading for server data
    if (currenciesData.loading) {
        return <div>Loading data from server......</div>
    }

    // Error something went wrong 
    if (Object.getOwnPropertyNames(currenciesData.errorData).length !== 0) {
        return <div>Something went wrong</div>
    }

    return (
        <Currency 
            currencies={currenciesData.data} 
            handleDeleteItem={handleDeleteItem}
            handleAddItem={handleAddItem}
            handleReloadData={handleReloadData}
        />
    )
}

export default CurrencyContainer