import React from 'react';

import { CartItemContainer, NameContainer, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <span>
        {quantity} x &#8377;{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
