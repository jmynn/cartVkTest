import { ReactNode } from 'react';
import styles from './Cart.module.css';
import Products from '@/components/ui/Products/Products';
import TotalPrice from '@/components/ui/TotalPrice/TotalPrice';

const Cart = (): ReactNode => {
	return (
		<div className={styles.cart}>
			<Products />
			<TotalPrice />
		</div>
	);
};

export default Cart;
