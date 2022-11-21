import './App.css';
import React from 'react';
import ProducList from './components/ProductList/ProductList';
import data from './ecommerceData'
import SearchInput from './components/UI/SearchInput/SearchInput';
import SortButton from './components/UI/SortButton/SortButton';
import { useState } from 'react';

function App() {

  const [sortType, setSortType] = useState("")
  const [query, setQuery] = useState("")

  
  const getSearchedProducts = () => {
    return data.filter(product =>
      product.title.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
    )
  }

  const getPriceAsc = (list) => {
    return [...list].sort((a, b) =>
      a.price - b.price
    )
  }

  const getPriceDesc = (list) => {
    return [...list].sort((a, b) =>
      b.price - a.price
    )
  }

  const getFilteredProducts = (sType) => {
    let productList = getSearchedProducts()
    if (sType === 'asc') {
      return getPriceAsc(productList)
    } 
    else if (sType === 'desc') {
      return getPriceDesc(productList)
    }
    return productList
  }

  return (
    <div className="App">
      <div className='sortPanel'>
        Filter Products
        <SearchInput placeholder="Find Product..." onChange={e => setQuery(e.target.value)} value={query}/>  
        <div className='buttonContainer' onClick={_ => setSortType('desc')}><SortButton>Most Expensive</SortButton></div>
        <div className='buttonContainer' onClick={_ => setSortType('asc')}><SortButton>Least Expensive</SortButton></div>
      </div>
      <div className='productsContainer'>
        {getFilteredProducts(sortType).length} Product(s) found
        <ProducList products={getFilteredProducts(sortType)}/>
      </div>
    </div>
  );
}

export default App;
