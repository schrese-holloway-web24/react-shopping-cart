import React, {useContext} from 'react';

//contexts
import {CartContext} from '../contexts/CartContext';

//components
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const {cart} = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
