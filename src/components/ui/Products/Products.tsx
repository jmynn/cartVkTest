'use client';
import axios from 'axios';
import { ReactNode } from 'react';
import useSWR from 'swr';
import { Product } from '../../../types';
import ProductItem from '../ProductItem/ProductItem';
import styles from './Products.module.css';

import CountControl from '../CountControl/CountControl';

const fetcher = async (route: `/${string}`) => {
	const { data } = await axios<Product[] | null>(route);
	return data;
};

const Products = (): ReactNode => {
	const {
		data: products,
		error,
		isLoading,
		isValidating,
	} = useSWR('/api/product', fetcher);
	return (
		<div className={styles.products}>
			{(isLoading || isValidating) && (
				<h1 className={styles.loading}>Loading...</h1>
			)}
			{!!error && (
				<h1 className={styles.error}>Произошла какая-то ошибка..</h1>
			)}
			{!!products &&
				products.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						image={product.image}
						price={product.price}
						title={product.title}>
						<CountControl product={product} />
					</ProductItem>
				))}
		</div>
	);
};

export default Products;
