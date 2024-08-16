import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { getProductsPagination } from '~/services/productService';
import { getCategoriesByType } from '~/services/categoryService';
import styles from './Products.module.scss';
import Title from '~/components/Title';
import PushNotification from '~/components/PushNotification';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import routes from '~/config/routes';
import { Link } from 'react-router-dom';
import LoadingScreen from '~/components/LoadingScreen'; // Import the LoadingScreen component

const cx = classNames.bind(styles);

function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductsAndCategories = async () => {
            try {
                const productsData = await getProductsPagination();
                const categoriesData = await getCategoriesByType(1);
                setProducts(productsData);
                setCategories(categoriesData);
                setLoading(false); // Stop loading once data is fetched
            } catch (err) {
                setError(err);
                setLoading(false); // Stop loading even if there's an error
                console.error('Error fetching data:', err);
            }
        };

        fetchProductsAndCategories();
    }, []);

    if (loading) {
        return <LoadingScreen isLoading={loading} />;
    }

    if (error) {
        return <PushNotification message={error.message} />;
    }

    const getCategorySlug = (product) => {
        const category = categories.find((cat) => cat._id === product.category_id);
        return category ? category.slug : '';
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Title text="Sản phẩm" showSeeAll={true} slug={`${routes.products}`} />
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    breakpoints={{
                        1280: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}
                    loop={true}
                    centeredSlides={true}
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination
                    className={cx('swiper-container')}
                    onSlideChange={(swiper) => {
                        const slides = swiper.slides;
                        slides.forEach((slide, index) => {
                            const isActive = index === swiper.activeIndex;
                            slide.style.transform = isActive ? 'scale(1.1)' : 'scale(0.9)';
                            slide.style.opacity = isActive ? '1' : '0.5';
                        });
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product._id} className={cx('slide')}>
                            <Link to={`${routes.products}/${getCategorySlug(product)}/${product._id}`}>
                                <div className={cx('product')}>
                                    <h3 className={cx('product-name')}>{product.name}</h3>
                                    <img src={product.image[0]} alt={product.name} className={cx('product-image')} />
                                    <p className={cx('product-des')}>{product.summary}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Products;
