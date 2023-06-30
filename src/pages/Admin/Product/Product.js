import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineDelete } from 'react-icons/ai';
import ModalAddProduct from '~/components/ModalAddProduct/ModalAddProduct';
import { useState, useEffect } from 'react';
import ModalUpdateProduct from '~/components/ModalUpdateProduct/ModalUpdateProduct';

function Product() {
    //Get product list
    const [productData, SetproductData] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                SetproductData(resp.listProduct);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const cx = classNames.bind(styles);

    //Set status of product
    const Status = ({ amount }) => {
        if (amount == 0) {
            return <span className={cx('outOfStock')}>Out Of Stock</span>;
        } else {
            return <span className={cx('inStock')}>In Stock</span>;
        }
    };

    //Delete product
    const handleDelete = (id) => {
        fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        window.location.reload();
    };

    return (
        <div className={cx('content')}>
            <div className={cx('productHeader')}>
                <h1 className={cx('title')}>Products</h1>
                <ModalAddProduct />
            </div>
            <table className={cx('content-table')}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productData &&
                        productData.map((item, index) => (
                            <tr key={index}>
                                <td className={cx('tdProduct')}>
                                    <div className={cx('productImgName')}>
                                        <img className={cx('productImg')} src={item.image} />
                                        <span className={cx('productName')}>{item.name}</span>
                                    </div>
                                </td>
                                <td>{item.category}</td>
                                <td>{item.amount}</td>
                                <td>
                                    <Status amount={item.amount} />
                                </td>
                                <td>{item.price}</td>
                                <td className={cx('action')}>
                                    <ModalUpdateProduct product_id={item.product_id} />
                                    <AiOutlineDelete
                                        className={cx('deleteProduct')}
                                        onClick={() => {
                                            if (window.confirm('Are you sure you wish to delete this item?'))
                                                handleDelete(item.product_id);
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Product;
