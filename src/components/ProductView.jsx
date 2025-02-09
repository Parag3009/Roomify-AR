import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router";

import { useDispatch } from "react-redux";

import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import { remove } from "../redux/product-modal/productModalSlice";

import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";

import { useHistory, Link } from 'react-router-dom';

const ProductView = (props) => {
  const dispatch = useDispatch();

  const history = useHistory();

  let product = props.product;

  if (product === undefined)
    product = {
      title: "",
      price: "",
      image01: null,
      image02: null,
      categorySlug: "",
      slug: "",
      type: [],
      AR:[],
      IMG:[],
      description: "",
    };

 

  const[ar,setAr]=useState(product.AR);
  console.log(ar);
  console.log("haha")
  const[img,setIMG]=useState(product.IMG);
  console.log(img);

  const [previewImg, setPreviewImg] = useState(product.image01);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [type, setType] = useState(product.type);
  console.log(type);

  console.log( product.type);
  
  const [quantity, setQuantity] = useState(1);

 
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setType(product.type);
    setAr(product.AR);
    setIMG(product.IMG)
  }, [product]);

  const addToCart = () => {
    let newItem = {
      slug: product.slug,

      type: type,
      price: product.price,
      quantity: quantity,
    };
    if (dispatch(addItem(newItem))) {
      alert("Add to cart successfully!");
    } else {
      alert("Fail");
    }
  };

  const goToCart = () => {
    let newItem = {
      slug: product.slug,

      type: type,
      price: product.price,
      quantity: quantity,
    };
    if (dispatch(addItem(newItem))) {
      dispatch(remove());
      props.history.push("/cart");
    } else {
      alert("Fail");
    }
    
    

  };

  const Identity = ar;
  console.log(Identity);
  const ItemN = 'item7';
  const kala = img
  

  const singleAr=()=>{

     history.push({
  pathname: '/singlear',
  state: { Identity: Identity, ItemN: ItemN ,kala:kala},
});


{/* <Link
  to={{
    pathname: '/singlear',
    state: { Identity: Identity, ItemN: ItemN },
  }}
>
  Go to SingleAr
</Link> */}


    // history.push({
    //   pathname: '/singlear',
      
    //   state: { Identity: Identity,itemN:itemN },
      
    // });

//     <Link to={{ pathname: "/singlear", state: { Identity: [1, 2] } }}>Go to SingleAr</Link>

//     // When navigating to SingleAr
// history.push({
//   pathname: '/singlear',
//   state: { Identity: [1, 2] },
// });



    

  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Product Details</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Hide" : "More"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(product.price)}
          </span>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Type</div>
          <div className="product__info__item__list">
            {product.type.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  type === item ? "active" : ""
                }`}
                onClick={() => setType(item)}
              >
                <span className="product__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Amount</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>Add to cart</Button>
          <Button onClick={() => goToCart()}>Purchase now</Button><br/>
         
          <Link
  to={{
    pathname: '/singlear',
    state: { Identity: Identity, ItemN: ItemN },
  }}
>
  <Button>View AR</Button>
</Link>

        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Product Details</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Hide" : "More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default withRouter(ProductView);
