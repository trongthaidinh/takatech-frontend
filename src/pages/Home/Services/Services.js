import React from 'react';
import classNames from 'classnames/bind';
import styles from './Services.module.scss';
import services from '~/assets/images/services';
import Title from '~/components/Title';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

const Services = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Title text="Dịch vụ" showSeeAll={true} slug={routes.services} />
                <div className={cx('slide-wrapper')}>
                    <div className={cx('service-container')}>
                        {services.map((service) => (
                            <div key={service.id} className={cx('service-item')}>
                                <div
                                    className={cx('image-container')}
                                    style={{ backgroundImage: `url(${service.imgURL})` }}
                                ></div>
                                <h3 className={cx('service-title')}>{service.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
