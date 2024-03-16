'use client';
import ButtonActionCart from '@/components/ui/ButtonActionCart/ButtonActionCart';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types';
import { FunctionComponent, ReactNode } from 'react';
import IconTrash from '../IconTrash/IconTrash';
import styles from './CountControl.module.css';

type Props = {
	product: Product;
};

const CountControl: FunctionComponent<Props> = ({ product }): ReactNode => {
	const addToCart = useCart((state) => state.addProduct);
	const removeFromCart = useCart((state) => state.removeProduct);
	const hasProduct = useCart((state) => !!state.products[product.id]);
	const countProduct = useCart(
		(state) => state.products[product.id]?.count ?? 0
	);

	const handleAddProduct = () => addToCart(product);
	const handleRemoveProduct = () => removeFromCart(product);
	const handleRemoveAllProducts = () => removeFromCart(product, true);

	return (
		<div className={styles.panel}>
			{hasProduct && (
				<>
					<div className={styles.control}>
						<div className={styles.action}>
							{countProduct > 1 && (
								<ButtonActionCart
									handleClick={handleRemoveProduct}>
									-
								</ButtonActionCart>
							)}
						</div>
						<div className={styles.count}>{countProduct}</div>
						<div className={styles.action}>
							{countProduct !== 10 && (
								<ButtonActionCart
									handleClick={handleAddProduct}>
									+
								</ButtonActionCart>
							)}
						</div>
					</div>
					<ButtonActionCart handleClick={handleRemoveAllProducts}>
						<IconTrash />
					</ButtonActionCart>
				</>
			)}
			{!hasProduct && (
				<ButtonActionCart handleClick={handleAddProduct}>
					Добавить в корзину
				</ButtonActionCart>
			)}
		</div>
	);
};

export default CountControl;
