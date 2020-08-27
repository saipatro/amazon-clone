import React from "react";
import "./product.css";
import styled from "styled-components";

const Rating = styled.div`
  --rating: ${(props) => (props.rating ? props.rating : "")};
  --star-size: 25px;
  --star-color: #eee;
  --star-background: #fc0;
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;
  &::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      var(--star-background) var(--percent),
      var(--star-color) var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Product = ({ id, title, price, rating, imageUrl }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <Rating className="product__rating" rating={rating}></Rating>
      </div>
      <img className="product__img" src={imageUrl} alt="" />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
