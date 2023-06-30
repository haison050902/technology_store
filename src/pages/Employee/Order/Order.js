import { useEffect, useState } from 'react';
import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import { Grid } from '@material-ui/core';

function Order() {
    //Get Product List
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/products', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setListProducts(data.listProduct);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    //Create Order
    const [order, setOrder] = useState([]);

    //Add to Order
    const handleAddToOrder = (index) => {
        const selectedProduct = listProducts[index];
        const isProductInOrder = order.some((item) => item.product_id === selectedProduct.product_id);

        if (isProductInOrder) {
            alert('Product is already in the order.');
            return;
        }
        const newOrderItem = {
            product_id: selectedProduct.product_id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            quantity: 1,
        };
        setOrder([...order, newOrderItem]);
    };

    //Create quantity function

    const handleOrder = () => {
        // Kiểm tra số lượng sản phẩm trong order
        const isQuantityValid = order.every((item) => {
            const product = listProducts.find((p) => p.id === item.id);
            return product && item.quantity <= product.quantity;
        });

        if (!isQuantityValid) {
            alert('Quantity of products in order exceeds available quantity.');
            return;
        }
        const data = {
            total_price: totalPrice,
            listProduct: order,
        };

        // Gọi API order
        fetch('http://localhost:3001/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Order placed successfully:', data);
                // Reset order after successful placement
                setOrder([]);
            })
            .catch((error) => {
                console.error('Failed to place order:', error);
            });
    };
    const handleMinus = (index) => {
        const updatedOrder = [...order];
        const updatedQuantity = updatedOrder[index].quantity - 1;
        if (updatedQuantity > 0) {
            updatedOrder[index].quantity = updatedQuantity;
            setOrder(updatedOrder);
        }
    };

    const handlePlus = (index) => {
        const updatedOrder = [...order];
        updatedOrder[index].quantity += 1;
        setOrder(updatedOrder);
    };

    const handleDelete = (index) => {
        if (window.confirm('Are you sure you want to delete this product from the order?') === true) {
            const updatedOrder = [...order];
            updatedOrder.splice(index, 1);
            setOrder(updatedOrder);
        }
    };

    let totalPrice = 0;

    order.forEach((item) => {
        totalPrice += item.price * item.quantity;
    });

    const cx = classNames.bind(styles);

    return (
        <div>
            <div className={cx('productHeader')}>
                <h1>Place Order</h1>
            </div>
            <div className={cx('content')}>
                <table className={cx('content-table')}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listProducts?.map((item, index) => (
                            <tr style={{ height: '80px' }} key={index}>
                                <td style={{ height: '80px' }} className={cx('tdProduct')}>
                                    <div style={{ height: '80px' }} className={cx('productImgName')}>
                                        <img className={cx('productImg')} src={item.image} />
                                        <span className={cx('productName')}>{item.name}</span>
                                    </div>
                                </td>
                                <td style={{ height: '80px' }}>${item.price}</td>
                                <td style={{ height: '80px' }}>
                                    <AiFillPlusSquare
                                        onClick={() => handleAddToOrder(index)}
                                        className={cx('addToOrder')}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={cx('orderDetails')}>
                    <div className={cx('orderContainer')}>
                        <div className={cx('orderContent')}>
                            <Grid container spacing={2}>
                                <Grid sm={12}>
                                    <h1>Order Details</h1>
                                </Grid>
                                <Grid sm={12}>
                                    <div className={cx('orderEmployee')}>
                                        <h3>Employee:</h3>
                                        <p>{localStorage.getItem('employee')}</p>
                                    </div>
                                </Grid>
                                <Grid sm={12}>
                                    <div className={cx('orderEmployee')}>
                                        <h3>Date:</h3>
                                        <p>22/06/2023</p>
                                    </div>
                                </Grid>

                                {order?.map((item, index) => (
                                    // <div key={index}>
                                    <>
                                        <Grid className={cx('nameProduct')} sm={8}>
                                            <h3>{item.name}</h3>
                                        </Grid>
                                        <Grid className={cx('nameProduct')} sm={1}>
                                            <AiFillMinusSquare
                                                onClick={() => handleMinus(index)}
                                                className={cx('minusQuantity')}
                                            />
                                        </Grid>
                                        <Grid className={cx('nameProduct')} sm={1}>
                                            <span style={{ margin: '4px auto' }} className={cx('quantityProduct')}>
                                                {item.quantity}
                                            </span>
                                        </Grid>
                                        <Grid className={cx('nameProduct')} sm={1}>
                                            <AiFillPlusSquare
                                                onClick={() => handlePlus(index)}
                                                className={cx('plusQuantity')}
                                            />
                                        </Grid>
                                        <Grid className={cx('nameProduct')} sm={1}></Grid>
                                        <Grid className={cx('nameProduct')} sm={3}>
                                            <button onClick={handleDelete} className={cx('deleteOrderProduct')}>
                                                <h2>Delete</h2>
                                            </button>
                                        </Grid>
                                        <Grid className={cx('nameProduct')} sm={6}></Grid>
                                        <Grid className={cx('nameProduct borderBT')} sm={3}>
                                            <h2 style={{ margin: '20px 0' }}>${item.price}</h2>
                                        </Grid>
                                    </>
                                    // </div>
                                ))}

                                {/* <Grid className={cx('gridDiscounts')} sm={12}>
                                    <div className={cx('discounts')}>
                                        <label>Discount code:</label>
                                        <input className={cx('inputDiscount')} type="text" />
                                    </div>
                                </Grid> */}
                                <Grid className={cx('gridTotal')} sm={12}>
                                    <div className={cx('total')}>
                                        <label>Total Price:</label>
                                        <h3 className={cx('totalPrice')}>${totalPrice}</h3>
                                    </div>
                                </Grid>
                                <Grid sm={12}>
                                    <button onClick={handleOrder} className={cx('submitOrder')}>
                                        <h1>ORDER</h1>
                                    </button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
