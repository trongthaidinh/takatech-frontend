import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Overview.module.scss';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import overviewGif from '~/assets/images/overview';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

function Overview() {
    return (
        <div className={cx('wrapper')}>
            <motion.div
                className={cx('inner')}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false }}
                style={{ perspective: '1000px' }}
            >
                <motion.div
                    className={cx('content')}
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className={cx('title')}>CÔNG TY TNHH CÔNG NGHỆ TAKATECH</h2>
                    <p className={cx('text')}>
                        Công ty TNHH Công Nghệ Takatech là một đơn vị phát triển phần mềm chuyên nghiệp 5 tỉnh Tây
                        Nguyên và trên toàn quốc, gồm các sản phẩm Phần mềm, Website, App android, App IOS, công cụ AI
                        và IoT - kết nối các đồ vật và thiết bị thông qua cảm biến.
                    </p>
                    <p className={cx('text')}>
                        Công ty TNHH Công Nghệ Takatech là một đơn vị phát triển phần mềm chuyên nghiệp 5 tỉnh Tây
                        Nguyên và trên toàn quốc, gồm các sản phẩm Phần mềm, Website, App android, App IOS, công cụ AI
                        và IoT - kết nối các đồ vật và thiết bị thông qua cảm biến.
                    </p>
                    <Link to={routes.about}>
                        <Button className={cx('button')} primary rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                            Tìm hiểu thêm
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    className={cx('sticker-container')}
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img className={cx('sticker')} src={overviewGif.gif} alt="Animated Sticker" />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Overview;
