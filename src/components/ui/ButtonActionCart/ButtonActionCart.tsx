'use client';
import { FunctionComponent, ReactNode } from 'react';

type Props = { handleClick: () => void, children: ReactNode };

const ButtonAddToCart: FunctionComponent<Props> = ({
	handleClick, children
}): ReactNode => {
	return <button onClick={handleClick}>{children}</button>;
};

export default ButtonAddToCart;
