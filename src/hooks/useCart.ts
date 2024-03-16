import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Cart, CartItem } from '../types';
import { setFixedPoint } from '@/utils/setFixedPoint';

export const useCart = create<Cart>()(
	devtools(
		persist(
			(set) => ({
				products: {},
				totalPrice: 0,
				addProduct: (cartItem) =>
					set((state) => ({
						products: {
							...state.products,
							[cartItem.id]: !!state.products[cartItem.id]
								? {
										count:
											state.products[cartItem.id].count +
											1,
										amount: setFixedPoint(
											state.products[cartItem.id].amount +
												cartItem.price
										),
								  }
								: {
										count: 1,
										amount: setFixedPoint(cartItem.price),
								  },
						},
						totalPrice: setFixedPoint(
							state.totalPrice + cartItem.price
						),
					})),
				removeProduct: (cartItem, isAll) =>
					set((state) => {
						if (
							state.products[cartItem.id].count === 0 ||
							(!!state.products[cartItem.id] && isAll)
						) {
							//all items
							const newProducts: CartItem = { ...state.products };
							const newTotalPrice = setFixedPoint(
								state.totalPrice -
									state.products[cartItem.id].amount
							);
							delete newProducts[cartItem.id];

							return {
								products: { ...newProducts },
								totalPrice: newTotalPrice,
							};
						}
						//1 item
						return {
							products: {
								...state.products,
								[cartItem.id]: {
									count:
										state.products[cartItem.id].count - 1,
									amount: setFixedPoint(
										state.products[cartItem.id].amount -
											cartItem.price
									),
								},
							},
							totalPrice: setFixedPoint(
								state.totalPrice - cartItem.price
							),
						};
					}),
			}),
			{ name: 'cart' }
		)
	)
);
