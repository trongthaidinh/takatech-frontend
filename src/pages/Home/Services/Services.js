import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Services.module.scss';
import { developImg } from '~/assets/images/services';
import Title from '~/components/Title';
import routes from '~/config/routes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getCategoriesByType } from '~/services/categoryService';
import { Link } from 'react-router-dom';
import LoadingScreen from '~/components/LoadingScreen';

const cx = classNames.bind(styles);

const Services = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getCategoriesByType(3);
                setCategories(fetchedCategories);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <LoadingScreen isLoading={loading} />;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Title text="Dịch vụ" showSeeAll={true} slug={routes.services} />

                <div className={cx('service-layout')}>
                    {[
                        {
                            title: 'Đột phá giá trị kinh doanh với giải pháp thiết kế đổi mới và ứng dụng công nghệ hiện đại.',
                            imgSrc: developImg.imgURL,
                            content: (
                                <>
                                    <div className={cx('service-image')}>
                                        <img src={developImg[0].imgURL} alt="Service description or context" />
                                    </div>
                                </>
                            ),
                        },
                        {
                            content: (
                                <>
                                    <h3>Thiết kế UI - UX</h3>
                                    <p>
                                        Thời kỳ mà thiết kế chỉ đơn thuần là sắp xếp các thành phần đã qua. Ngay cả
                                        những sản phẩm có chức năng tương tự, nếu khác biệt trong thiết kế UI/UX cũng có
                                        thể tạo ra những trải nghiệm hoàn toàn khác nhau. Chúng tôi cam kết mang đến
                                        những thiết kế phù hợp với nhu cầu và mong muốn của người dùng, từ đó nâng cao
                                        giá trị trải nghiệm của họ. Với tầm nhìn toàn diện, chúng tôi sẽ phát triển
                                        những giao diện tuyệt vời để đảm bảo một trải nghiệm người dùng xuất sắc.
                                    </p>

                                    <h3>Thương hiệu & Tiếp thị</h3>
                                    <p>
                                        Mặc dù thị trường đang có dấu hiệu phát triển, nhưng cạnh tranh tại Việt Nam vẫn
                                        chưa thực sự gay gắt. Tuy nhiên, môi trường kinh doanh đang trở nên khó khăn
                                        hơn, và việc thiếu kế hoạch rõ ràng sẽ khiến bạn khó tạo ra sự nổi bật giữa
                                        những đối thủ. Với sự kết hợp giữa tư duy chiến lược và thiết kế sáng tạo, chúng
                                        tôi sẽ giúp khách hàng xây dựng các kế hoạch và chiến lược hiệu quả, nhằm khẳng
                                        định vị thế của họ trên thị trường Việt Nam.
                                    </p>
                                </>
                            ),
                        },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            className={cx('service-item', { odd: index % 2 !== 0 })}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div className={cx('service-image')}></div>
                            <div className={cx('service-content')}>
                                <h2>{service.title}</h2>
                                {service.content}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        1280: { slidesPerView: 4 },
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        0: { slidesPerView: 1 },
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className={cx('swiper-container')}
                >
                    {categories.map((category, index) => (
                        <SwiperSlide key={category._id} className={cx('slide')}>
                            <Link to={`${routes.services}/${category.slug}`}>
                                <motion.div
                                    className={cx('service-item')}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.25 }}
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className={cx('image-container')}
                                        style={{ backgroundImage: `url(${category.image})` }}
                                    ></div>
                                    <h3 className={cx('service-title')}>{category.name}</h3>
                                </motion.div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Services;
