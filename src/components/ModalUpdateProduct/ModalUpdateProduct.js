import React, { useEffect, useState } from 'react';
import styles from './ModalUpdateProduct.module.scss';
import classNames from 'classnames/bind';
import { HiPencilAlt } from 'react-icons/hi';
import { Grid } from '@material-ui/core';
import categories from '~/pages/Admin/Product/Categories';
import { Navigate } from 'react-router-dom';

function ModalUpdateProduct(product_id) {
    const [idProduct, SetIdProduct] = useState();
    const [nameProduct, SetNameProduct] = useState();
    const [imgProduct, SetImgProduct] = useState();
    const [categoryProduct, SetCategoryProduct] = useState();
    const [description, setDescription] = useState();
    const [priceProduct, SetPriceProduct] = useState();
    const [specification, setSpecification] = useState();
    const [amount, setAmount] = useState();
    const [highlight, setHighlight] = useState();
    useEffect(() => {
        fetch(`http://localhost:3001/products/${product_id.product_id})`)
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                SetIdProduct(resp.product.product_id);
                SetNameProduct(resp.product.name);
                SetImgProduct(resp.product.image);
                SetCategoryProduct(resp.product.category);
                SetPriceProduct(resp.product.price);
                setSpecification(resp.product.specifications);
                setHighlight(resp.product.highlight);
                setAmount(resp.product.amount);
                setDescription(resp.product.description);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const cx = classNames.bind(styles);
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    //Add field title and value
    // const [field, setField] = useState([{ title: '', value: '' }]);
    const handleAddField = () => {
        let a = Object.assign({}, specification, { '': '' });
        setSpecification(a);
    };

    // const handleDeleteField = (i) => {
    //     console.log(field);
    //     const deleteField = [...specification];
    //     deleteField.splice(i, 1);
    //     setSpecification(deleteField);
    // };
    const handleChange = (e, k) => {
        const { name, value } = e.target;
        const onChangeValue = { ...specification };
        if (name == 'title') {
            let a = onChangeValue[k];
            delete onChangeValue[k];
            onChangeValue[value] = a;
        } else {
            onChangeValue[k] = value;
        }
        setSpecification(onChangeValue);
    };

    //Submit???
    const handleSubmit = (e) => {
        let a;
        switch (categoryProduct) {
            case 'Laptop':
                a = 1;
                break;
            case 'Desktop':
                a = 2;
                break;
            case 'Smartphone':
                a = 3;
                break;
            case 'Tablet':
                a = 4;
                break;
            case 'Monitor':
                a = 5;
                break;
            case 'Mouse':
                a = 6;
                break;
            case 'Keyboard':
                a = 7;
                break;
            case 'Gamepad':
                a = 8;
                break;
            case 'In-ear':
                a = 9;
                break;
            case 'Over-ear':
                a = 10;
                break;
            case 'Speaker':
                a = 11;
        }
        const productDetail = {
            category_id: a,
            name: nameProduct,
            price: priceProduct,
            image: imgProduct,
            description: description,
            amount: amount,
            specifications: specification,
            highlight: highlight,
        };
        fetch(`http://localhost:3001/products/${idProduct}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productDetail),
        });
        // .then((respone) => respone.json())
        // .then((data) => {
        // });
        setModal(!modal);
        window.location.reload();
    };

    //Update Product

    return (
        <div>
            <button className={cx('btn-modal')} onClick={toggleModal}>
                <HiPencilAlt />
            </button>
            <div className={cx('content')}>
                {modal && (
                    <div className={cx('modal')}>
                        <div className={cx('overlay')}></div>
                        <div className={cx('modal-content')}>
                            <h2>Update Product</h2>

                            <button className={cx('close-modal')} onClick={toggleModal}>
                                X
                            </button>

                            <Grid container spacing={2}>
                                <Grid sm={6} item>
                                    <h4>Name</h4>
                                    <input
                                        value={nameProduct}
                                        type="text"
                                        name="productName"
                                        placeholder="Enter Product Name"
                                        onChange={(e) => SetNameProduct(e.target.value)}
                                    />
                                </Grid>

                                <Grid sm={6} item>
                                    <h4>Category</h4>

                                    <select
                                        onChange={(e) => SetCategoryProduct(e.target.value)}
                                        value={categoryProduct}
                                        name="categories"
                                    >
                                        {categories.map((category, index) => (
                                            <option key={index}>{category.name}</option>
                                        ))}
                                    </select>
                                </Grid>

                                <Grid sm={6} item>
                                    <h4>Image</h4>

                                    <input
                                        value={imgProduct}
                                        type="url"
                                        name="image"
                                        placeholder="Enter Image URL Product"
                                        onChange={(e) => SetImgProduct(e.target.value)}
                                    />
                                </Grid>

                                <Grid sm={6} item>
                                    <h4>Price</h4>

                                    <input
                                        value={priceProduct}
                                        type="int"
                                        name="price"
                                        placeholder="Enter Price Product"
                                        onChange={(e) => SetPriceProduct(e.target.value)}
                                    />
                                </Grid>

                                <Grid sm={6} item>
                                    <h4>Amount in stock</h4>

                                    <input
                                        value={amount}
                                        type="int"
                                        name="amount"
                                        placeholder="Enter Price Amount"
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </Grid>

                                <Grid sm={12} item>
                                    <h4>Description</h4>

                                    <input
                                        value={description}
                                        type="text"
                                        name="description"
                                        placeholder="Enter Price Description"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Grid>

                                <Grid sm={6} item>
                                    <h4>Highlight Content</h4>

                                    <input
                                        value={highlight.content}
                                        type="text"
                                        name="highlightContent"
                                        placeholder="Enter Highlight Content"
                                        onChange={(e) => setHighlight(e.target.value)}
                                    />
                                </Grid>

                                <Grid sm={6} item>
                                    <h4>Highlight Image</h4>

                                    <input
                                        value={highlight.image}
                                        type="url"
                                        name="highlightImage"
                                        placeholder="Enter Highlight Image"
                                        onChange={(e) => setHighlight(e.target.value)}
                                    />
                                </Grid>

                                {Object.keys(specification).map((key, index) => (
                                    <Grid key={index} container spacing={2}>
                                        <Grid sm={3} item>
                                            <h4>Title</h4>
                                            <input
                                                placeholder="Title"
                                                name="title"
                                                value={key}
                                                onChange={(e) => handleChange(e, key)}
                                            />
                                        </Grid>
                                        <Grid sm={7} item>
                                            <h4>Value</h4>
                                            <textarea
                                                placeholder="Value"
                                                name="value"
                                                value={specification[key]}
                                                onChange={(e) => handleChange(e, key)}
                                            />
                                        </Grid>
                                        <Grid sm={2} item>
                                            {specification.length > 1 && (
                                                <div className={cx('deleteField')}>
                                                    {/* <a onClick={() => handleDeleteField(index)}>Delete Field</a> */}
                                                </div>
                                            )}
                                        </Grid>

                                        <Grid sm={4} item>
                                            {Object.keys(specification).length - 1 === index && (
                                                <a className={cx('addField')} onClick={handleAddField}>
                                                    Add Field
                                                </a>
                                            )}
                                        </Grid>
                                        <Grid sm={4} item>
                                            {Object.keys(specification).length - 1 === index && (
                                                <a className={cx('cancelAddProduct')} onClick={toggleModal}>
                                                    Cancel
                                                </a>
                                            )}
                                        </Grid>
                                        <Grid sm={4} item>
                                            {Object.keys(specification).length - 1 === index && (
                                                <a onClick={handleSubmit} className={cx('addProduct')}>
                                                    Update Product
                                                </a>
                                            )}
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ModalUpdateProduct;
