import { Grid } from '@material-ui/core';
import styles from './ModalAddProduct.module.scss';
import classNames from 'classnames/bind';
import categories from '~/pages/Admin/Product/Categories';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ModalAddProduct() {
    const cx = classNames.bind(styles);
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    //Add Product
    const [idProduct, SetIdProduct] = useState('');
    const [nameProduct, SetNameProduct] = useState('');
    const [imgProduct, SetImgProduct] = useState('');
    const [categoryProduct, SetCategoryProduct] = useState('');
    const [description, setDescription] = useState('');
    const [priceProduct, SetPriceProduct] = useState('');
    const [highlight, setHighlight] = useState({ content: '', image: '' });
    const [specification, setSpecification] = useState({ '': '' });

    const navigate = useNavigate();

    //Add field title and value
    const [field, setField] = useState([{ title: '', value: '' }]);
    const handleAddField = () => {
        let a = Object.assign({}, specification, { '': '' });
        setSpecification(a);
    };

    //Set Specification
    const objSpecification = field.reduce((acc, item, i) => {
        acc[item.title] = item.value;
        return acc;
    }, {});

    const handleDeleteField = (i) => {
        const deleteField = [...field];
        deleteField.splice(i, 1);
        setField(deleteField);
    };
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
            default:
                a = 1;
        }
        const productDetail = {
            category_id: a,
            name: nameProduct,
            price: priceProduct,
            image: imgProduct,
            description: description,
            specifications: specification,
            highlight: highlight,
        };
        fetch(`http://localhost:3001/products/new_product`, {
            method: 'POST',
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

    return (
        <div>
            <button className={cx('btn-modal')} onClick={toggleModal}>
                Add Product
            </button>
            <div className={cx('content')}>
                {modal && (
                    <div className={cx('modal')}>
                        <div className={cx('overlay')}></div>
                        <div className={cx('modal-content')}>
                            <h2>Add Product</h2>

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
                                        {categories.map((category) => (
                                            <option>{category.name}</option>
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
                                        onChange={(e) => setHighlight({ ...highlight, content: e.target.value })}
                                    />
                                </Grid>

                                <Grid sm={6} item>
                                    <h4>Highlight Image</h4>

                                    <input
                                        value={highlight.image}
                                        type="text"
                                        name="highlightImage"
                                        placeholder="Enter Highlight Image"
                                        onChange={(e) => setHighlight({ ...highlight, image: e.target.value })}
                                    />
                                </Grid>
                                {Object.keys(specification).map((key, index) => (
                                    <Grid container spacing={2}>
                                        <Grid sm={3} item>
                                            <h4>Label</h4>
                                            <input
                                                placeholder="Title"
                                                name="title"
                                                value={key}
                                                onChange={(e) => handleChange(e, key)}
                                            />
                                        </Grid>
                                        <Grid sm={7} item>
                                            <h4>Content</h4>
                                            <textarea
                                                placeholder="Value"
                                                name="value"
                                                type="text"
                                                value={specification[key]}
                                                onChange={(e) => handleChange(e, key)}
                                            />
                                        </Grid>
                                        <Grid sm={2} item>
                                            {field.length > 1 && (
                                                <div className={cx('deleteField')}>
                                                    <a onClick={() => handleDeleteField(index)}>Delete Field</a>
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
                                                    Add Product
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

export default ModalAddProduct;
