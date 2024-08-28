import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import LoadingScreen from '~/components/LoadingScreen';
import PushNotification from '~/components/PushNotification';
import Title from '~/components/Title';
import { getProductById, getProductBySlug } from '~/services/productService';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

const ProductDetail = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(useParams());

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                let data;
                if (id.length === 24) {
                    data = await getProductById(id);
                } else {
                    data = await getProductBySlug(id);
                }

                setProductDetail(data);
                console.log(data);
            } catch (error) {
                setError(error);
                console.error('Error fetching product detail:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (error) {
        const errorMessage = error.response ? error.response.data.message : 'Network Error';
        return <PushNotification message={errorMessage} />;
    }

    if (loading) {
        return <LoadingScreen isLoading={loading} />;
    }

    return (
        <article className={cx('wrapper')}>
            <Helmet>
                <title>{productDetail.name} | TAKATECH</title>
                <meta name="description" content={`Chi tiết về sản phẩm: ${productDetail.name}.`} />
                <meta name="keywords" content={`sản phẩm, ${productDetail.name}, Takatech`} />
            </Helmet>

            <div className={cx('info-section')}>
                <Title text="Thông tin sản phẩm" />
                <h2 className={cx('product-name')}>{productDetail.name}</h2>

                <div className={cx('product-image-wrapper')}>
                    <img src={productDetail.image} alt={productDetail.name} className={cx('product-image')} />
                </div>

                <div
                    className={cx('info-content')}
                    dangerouslySetInnerHTML={{ __html: productDetail.detail[0].content }}
                />
            </div>
        </article>
    );
};

export default ProductDetail;
