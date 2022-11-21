import './App.css';
import React from 'react';
import ProducList from './components/ProductList/ProductList';
import data from './ecommerceData'
import SearchInput from './components/UI/SearchInput/SearchInput';
import SortButton from './components/UI/SortButton/SortButton';

function App() {
  return (
    <div className="App">
      <div className='sortPanel'>
        Filter Products
        <SearchInput placeholder="Find Product..."/>
        <SortButton>Most Expensive</SortButton>
        <SortButton>Least Expensive</SortButton>
      </div>
      <div className='productsContainer'>
        {data.length} Product(s) found
        <ProducList products={data}/>
      </div>
    </div>
  );
}

export default App;
