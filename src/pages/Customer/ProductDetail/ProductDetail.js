import { useEffect, useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import FunctionTitle from '~/components/FunctionTitle/FunctionTitle';
import products from '~/Statics/products';
import TechnicalSpecification from '~/components/TechnicalSpecification/TechnicalSpecification';
import ProductItem from '~/components/ProductItem/ProductItem';
import ReviewItem from '~/components/ReviewItem/ReviewItem';
import { CartContext } from '../../../Context/CartContext/CartContext';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
    const cartItems = useContext(CartContext);
    const cartItemsState = cartItems.cartItemsState;
    const setCartItemsState = cartItems.setCartItemsState;
    const [selectedProduct, setSelectedProduct] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.product);
                setSelectedProduct(data.product);
            })
            .catch((error) => {
                console.error(error);
            });
        window.scrollTo(0, 0);
    }, []);
    const cx = classNames.bind(styles);
    const title = 'Home > Products > ' + selectedProduct.name;
    const filteredProducts = products.filter(
        (product) => product.categoryName === selectedProduct.category && product.id !== selectedProduct.id,
    );
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const starClassName = cx('star', { filled: i < selectedProduct.rating });
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={starClassName}
                    style={{ color: i < selectedProduct.rating ? '#fdbf00' : '#ccc' }}
                />,
            );
        }
        stars.push(
            <p key="5" style={{ opacity: 0.6, marginLeft: '12px', marginTop: '10px' }}>
                2 reviews
            </p>,
        );
        return stars;
    };

    const handleAddToCart = () => {
        if (selectedProduct.amount === 0) {
            setToastMessage('Please select another product because it is out of stock.');

            // alert('Please select another product because out of stock');
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        } else {
            const productInCart = cartItemsState.listProduct?.find(
                (item) => item.product_id == selectedProduct.product_id,
            );
            if (productInCart) {
                setToastMessage('Please select another product because you already have a product in the cart.');
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 3000);
                // alert('Please select another product because you already have a product in the cart');
            } else {
                const newItem = {
                    customer_id: localStorage.getItem('customer_id'),
                    product_id: selectedProduct.product_id,
                };
                const newItem1 = {
                    image: selectedProduct.image,
                    name: selectedProduct.name,
                    price: selectedProduct.price,
                    product_id: selectedProduct.product_id,
                    quantity: 1,
                };
                const newItem2 = {
                    cart_id: cartItemsState.cart_id,
                    discount_id: cartItemsState.discount,
                    listProduct: [...cartItemsState.listProduct, newItem1],
                    total_price: cartItemsState.total_price + selectedProduct.price,
                };
                fetch('http://localhost:3001/carts/add_to_cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newItem),
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        setToastMessage('Product added to cart successfully.');
                        setShowToast(true);
                        setCartItemsState(newItem2);
                        setTimeout(() => {
                            setShowToast(false);
                        }, 3000);
                        // window.alert('Add product to cart successfully');
                    })
                    .catch((error) => {
                        // Handle any errors
                        console.error(error);
                    });
            }
        }
    };
    return (
        <div className={cx('wrapper')}>
            <FunctionTitle title={title} />
            <div className={cx('generalInfo')}>
                <div className={cx('infoContainer')}>
                    <div className={cx('mainImageContainer')}>
                        <img className={cx('mainImage')} src={selectedProduct?.image} alt="product" />
                    </div>
                    <div className={cx('subImageContainer')}>
                        <img
                            className={cx('subImage')}
                            style={{ border: '3px solid #ccc' }}
                            src={selectedProduct?.image}
                            alt="product"
                        />
                        <img className={cx('subImage')} src={selectedProduct?.image} alt="product" />
                        <img className={cx('subImage')} src={selectedProduct?.image} alt="product" />
                        <img className={cx('subImage')} src={selectedProduct?.image} alt="product" />
                    </div>
                </div>
                <div className={cx('infoContainer')}>
                    <div className={cx('infoDetail')}>
                        <p className={cx('productName')}>{selectedProduct?.name}</p>
                        <div className={cx('starRating')}>{renderStars()}</div>
                        <p className={cx('productPrice')}>${selectedProduct?.price}.00</p>
                        {selectedProduct?.amount > 0 ? (
                            <div className={cx('productAmount')}>
                                <FontAwesomeIcon
                                    style={{ color: '#4AE417', margin: 'auto 0', fontSize: '20px' }}
                                    icon={faCheck}
                                ></FontAwesomeIcon>
                                <p style={{ color: '#4AE417', margin: 'auto 50px auto 12px', fontSize: '20px' }}>
                                    In stocks
                                </p>
                                <p className={cx('sku')}>SKU: PD{selectedProduct?.product_id}</p>
                            </div>
                        ) : (
                            <div className={cx('productAmount')}>
                                <FontAwesomeIcon
                                    style={{ color: '#E23600', margin: 'auto 0', fontSize: '20px' }}
                                    icon={faXmark}
                                ></FontAwesomeIcon>
                                <p style={{ color: '#E23600', margin: 'auto 50px auto 12px', fontSize: '20px' }}>
                                    Out of stocks
                                </p>
                                <p className={cx('sku')}>SKU: PD{selectedProduct?.product_id}</p>
                            </div>
                        )}
                        <p className={cx('productDescription')}>{selectedProduct?.description}</p>
                    </div>

                    <div onClick={handleAddToCart} className={cx('button')}>
                        <div className={cx('buttonWrapper')}>
                            <div className={cx('textButton')}>Add to cart</div>
                            <span className={cx('iconButton')}>
                                <svg
                                    viewBox="0 0 16 16"
                                    className="bi bi-cart2"
                                    fill="currentColor"
                                    height="16"
                                    width="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {selectedProduct.specifications && <TechnicalSpecification data={selectedProduct?.specifications} />}
            {selectedProduct.highlight?.content !== null && selectedProduct.highlight?.image !== null && (
                <div className={cx('highlightContainer')}>
                    <p className={cx('highlightTitle')}> Highlight Features</p>
                    <hr style={{ margin: 0 }} />
                    <p className={cx('highlightContent')}>{selectedProduct.highlight?.content}</p>
                    <img className={cx('highlightImage')} src={selectedProduct.highlight?.image} alt="product" />
                </div>
            )}
            <div className={cx('highlightContainer')}>
                <p className={cx('highlightTitle')}>Similiar Products</p>
                <hr style={{ margin: 0 }} />
                <ul style={{ display: 'flex', flexDirection: 'row', overflow: 'auto' }}>
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            <ProductItem data={product} />
                        </li>
                    ))}
                </ul>
            </div>
            <p className={cx('highlightTitle')}>All Reviews</p>
            <hr style={{ margin: 0, marginBottom: '12px' }} />
            {/* <div className={cx('reviewCotainer')}>
                {selectedProduct.reviews.map((review) => (
                    <li key={review.id} style={{ listStyle: 'none' }}>
                        <ReviewItem data={review} />
                    </li>
                ))}
            </div> */}
            {showToast && (
                <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
                    <Toast className={cx('toast')}>
                        <Toast.Body className={cx('toastBody')}>{toastMessage}</Toast.Body>
                    </Toast>
                </ToastContainer>
            )}
        </div>
    );
}

export default ProductDetail;
