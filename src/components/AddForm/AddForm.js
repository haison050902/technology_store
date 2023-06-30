import React, { useState } from 'react';
import styles from './AddForm.module.scss';
import classNames from 'classnames/bind';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function AddForm() {
    const cx = classNames.bind(styles);
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div className={cx('content')}>
            <button className={cx('btn-modal')} onClick={toggleModal}>
                <AiOutlinePlusCircle className={cx('plusIcon')} />
                Add Product
            </button>
            {modal && (
                <div className={cx('modal')}>
                    <div className={cx('overlay')}></div>
                    <div className={cx('modal-content')}>
                        <h2>Hello</h2>
                        <p>Hello</p>
                        <button className={cx('close-modal')} onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddForm;
