/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faMapMarkerAlt,
    faPhone,
    // faMobileAlt,
    // faWrench,
    // faCogs,
    // faChartLine,
    // faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { createMessage } from '~/services/contactService';
import PushNotification from '~/components/PushNotification';
import { Helmet } from 'react-helmet';
import styles from './Contact.module.scss';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ContactPage = () => {
    const [notification, setNotification] = useState({ message: '', type: '' });

    const initialValues = {
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Vui lòng nhập Họ và Tên của bạn!'),
        email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập Email!'),
        phoneNumber: Yup.string().required('Vui lòng nhập số điện thoại'),
        subject: Yup.string().required('Vui lòng chọn chủ đề!'),
        message: Yup.string().required('Vui lòng nhập nội dung tin nhắn!'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await createMessage(values);
            setNotification({ message: 'Gửi tin nhắn thành công!', type: 'success' });
            resetForm();
        } catch (error) {
            console.error('Error sending message:', error);
            setNotification({ message: 'Lỗi khi gửi tin nhắn.', type: 'error' });
        }
    };

    return (
        <div className={cx('contactPage')}>
            <Helmet>
                <title>Liên Hệ | TAKATECH</title>
                <meta
                    name="description"
                    content="Liên Hệ | TAKATECH. Hãy gửi tin nhắn cho chúng tôi nếu bạn có bất kỳ câu hỏi nào."
                />
                <meta name="keywords" content="liên hệ, TakaTech, gửi tin nhắn" />
                <meta name="author" content="CÔNG TY TNHH CÔNG NGHỆ TAKATECH" />
            </Helmet>
            <div className={cx('mapContainer')}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31137.243125385394!2d108.061915!3d12.703279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f75d27c44c3b%3A0x4b9780df3cd87c5c!2zQ8O0bmcgdHkgQ8O0bmcgbmdo4buHIFRha2FUZWNo!5e0!3m2!1sen!2sus!4v1723283471077!5m2!1sen!2sus"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={cx('inner')}>
                <div className={cx('formWrapper')}>
                    <div className={cx('contactInfo')}>
                        <div className={cx('infoTitle')}>
                            <h2 className={cx('title')}>Thông tin liên hệ</h2>
                            <p className={cx('subTitle')}>Hãy liên hệ với chúng tôi!</p>
                        </div>
                        <div className={cx('infoDetails')}>
                            <div className={cx('infoItem')}>
                                <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                                <a href="tel:02623977171">
                                    Số điện thoại: <span>0914 586 999</span>
                                </a>
                            </div>
                            {/* <div className={cx('infoItem')}>
                                <span>
                                    <FontAwesomeIcon icon={faMobileAlt} className={cx('icon')} />
                                    Hotline theo mảng phụ trách:
                                    <ul className={cx('contact-list')}>
                                        <li>
                                            <FontAwesomeIcon icon={faWrench} className={cx('icon')} />
                                            <a href="tel:0931951140">
                                                Đội Thí nghiệm - Kiểm định, thí nghiệm lần đầu thiết bị điện; QLVH ĐD &
                                                TBA: <span>093 1951 140</span> (Mr. Phi)
                                            </a>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faCogs} className={cx('icon')} />
                                            <a href="tel:0911711933">
                                                Đội Dịch vụ - Xử lý sự cố điện và Thí nghiệm; Kiểm định định kỳ các TBA:{' '}
                                                <span>091 1711 933</span> (Mr. Phước)
                                            </a>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faChartLine} className={cx('icon')} />
                                            <a href="tel:0982064747">
                                                Phòng Kinh doanh - Lập dự toán thí nghiệm: <span>098 2064 747</span>{' '}
                                                (Ms. Ngọc)
                                            </a>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faFileAlt} className={cx('icon')} />
                                            <a href="tel:0932585866">
                                                {' '}
                                                Phòng Tài chính - Tổng hợp: <span>093 2585 866</span> (Ms. Mai)
                                            </a>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faFileAlt} className={cx('icon')} />
                                            <a href="tel:0971787996">
                                                Bộ phần Hồ sơ pháp lý kỹ thuật: <span>097 1787 996</span> (Mr. Kiệt)
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </div> */}
                            <div className={cx('infoItem')}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                                <a href="mailto:vietnam.etc.ltd@gmail.com">Email: taka.techsoft@gmail.com</a>
                            </div>
                            <div className={cx('infoItem')}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={cx('icon')} />
                                <span>Địa chỉ: 200 Hà Huy Tập, Phường Tân Lợi, Tp. Buôn Ma Thuột, Tỉnh Đắk Lắk</span>
                            </div>
                        </div>
                        <div className={cx('socialLinks')}>
                            <Link to="https://www.facebook.com/takatechsoft/">
                                <FontAwesomeIcon icon={faFacebook} className={cx('socialIcon')} />
                            </Link>
                            <Link to="https://www.instagram.com/dinhtuan.le/">
                                <FontAwesomeIcon icon={faInstagram} className={cx('socialIcon')} />
                            </Link>
                            <Link to="https://x.com/takatech_bmt">
                                <FontAwesomeIcon icon={faTwitter} className={cx('socialIcon')} />
                            </Link>
                        </div>
                    </div>
                    <div className={cx('contactForm')}>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className={cx('formGroup')}>
                                        <label htmlFor="fullName">Họ và Tên</label>
                                        <Field type="text" id="fullName" name="fullName" className={cx('input')} />
                                        <ErrorMessage name="fullName" component="div" className={cx('error')} />
                                    </div>
                                    <div className={cx('formGroup', 'formRow')}>
                                        <div className={cx('formHalf')}>
                                            <label htmlFor="email">Email</label>
                                            <Field type="email" id="email" name="email" className={cx('input')} />
                                            <ErrorMessage name="email" component="div" className={cx('error')} />
                                        </div>
                                        <div className={cx('formHalf')}>
                                            <label htmlFor="phoneNumber">Số điện thoại</label>
                                            <Field
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                className={cx('input')}
                                            />
                                            <ErrorMessage name="phoneNumber" component="div" className={cx('error')} />
                                        </div>
                                    </div>
                                    <div className={cx('formGroup')}>
                                        <label>Chủ đề</label>
                                        <div className={cx('subject')}>
                                            <Field
                                                type="radio"
                                                name="subject"
                                                id="subject1"
                                                value="Dịch vụ"
                                                className={cx('customRadio')}
                                            />
                                            <label htmlFor="subject1" className={cx('radioLabel')}>
                                                Dịch vụ
                                            </label>
                                            <Field
                                                type="radio"
                                                name="subject"
                                                id="subject2"
                                                value="Sản phẩm"
                                                className={cx('customRadio')}
                                            />
                                            <label htmlFor="subject2" className={cx('radioLabel')}>
                                                Sản phẩm
                                            </label>
                                            <Field
                                                type="radio"
                                                name="subject"
                                                id="subject3"
                                                value="Khác"
                                                className={cx('customRadio')}
                                            />
                                            <label htmlFor="subject3" className={cx('radioLabel')}>
                                                Khác
                                            </label>
                                        </div>
                                        <ErrorMessage name="subject" component="div" className={cx('error')} />
                                    </div>
                                    <div className={cx('formGroup')}>
                                        <label htmlFor="message">Nội dung</label>
                                        <Field
                                            as="textarea"
                                            id="message"
                                            name="message"
                                            className={cx('input', 'textarea')}
                                        />
                                        <ErrorMessage name="message" component="div" className={cx('error')} />
                                    </div>
                                    <div className={cx('formActions')}>
                                        <Button type="submit" disabled={isSubmitting}>
                                            Gửi
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <PushNotification message={notification.message} type={notification.type} />
        </div>
    );
};

export default ContactPage;
