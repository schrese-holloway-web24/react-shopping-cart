import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {useLocalStorage} from './hooks/useLocalStorage';
//contexts
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	console.log(products);
	//adds items to the cart
	const addItem = item => {
		setCart([...cart, item])
		// window.localStorage.setItem('cart', products)
	};

	//removes items from the cart
	const removeItem = itemsID => {
		setCart(cart.filter(item => item.id !== itemsID))
		console.log('clicked')
	}

	return (
		<div className="App">
			<ProductContext.Provider value = {{products, addItem}}>
				<CartContext.Provider value = {{cart, removeItem}}>
					<Navigation />
						{/* Routes */}
						<Route
							exact
							path="/"
							component = {Products}
						/>

						<Route
							path="/cart"
							component = {ShoppingCart}
						/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
