'use client';
import { useCart } from '@/hooks/useCart';
import { ReactNode } from 'react';
import styles from './TotalPrice.module.css';

const TotalPrice = (): ReactNode => {
	const totalPrice = useCart((state) => state.totalPrice);
	return <div className={styles.total}><div>Итого: {totalPrice} руб.</div></div>;
};

export default TotalPrice;
