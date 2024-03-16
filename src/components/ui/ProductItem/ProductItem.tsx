import type { Product } from '@/types';
import Image from 'next/image';
import { FunctionComponent, ReactNode } from 'react';
import styles from './ProductItem.module.css';

type Props = Pick<Product, 'id' | 'title' | 'image' | 'price'> & {
	children: ReactNode;
};

const ProductItem: FunctionComponent<Props> = ({
	image,
	price,
	title,
	children,
}): ReactNode => {
	return (
		<div className={styles.product}>
			<div className={styles.image}>
				<Image
					alt='product pic'
					src={image}
					width={200}
					height={200}
				/>
				<div className={styles.title}>{title}</div>
			</div>
			<div className={styles.info}>
				<div className={styles.price}>{price} руб.</div>
				{children}
			</div>
		</div>
	);
};

export default ProductItem;
