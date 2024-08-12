import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { getProjects } from '~/services/projectService';
import { getCategoriesByType } from '~/services/categoryService';
import Title from '~/components/Title';
import PushNotification from '~/components/PushNotification';
import LoadingScreen from '~/components/LoadingScreen';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import styles from './Projects.module.scss';

const cx = classNames.bind(styles);

function Projects() {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const [projectsData, categoriesData] = await Promise.all([getProjects(), getCategoriesByType(4)]);
                setProjects(projectsData);
                setCategories(categoriesData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    if (error) {
        const errorMessage = error.response ? error.response.data.message : 'Network Error';
        return <PushNotification message={errorMessage} />;
    }

    if (loading) {
        return <LoadingScreen />;
    }

    const getCategorySlug = (project) => {
        const category = categories.find((cat, index) => index === project.projectType);
        return category ? category.slug : '';
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Title text="Dự án" showSeeAll={true} slug={`${routes.projects}`} />
                <Swiper
                    spaceBetween={10}
                    breakpoints={{
                        1280: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
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
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className={cx('slide')}>
                            <div className={cx('project')}>
                                <Link to={`${routes.projects}/${getCategorySlug(project)}/${project._id}`}>
                                    <h3 className={cx('project-name')}>{project.name}</h3>
                                    <img src={project.image} alt={project.name} className={cx('project-image')} />
                                    <p className={cx('project-des')}>
                                        {project.summary || 'No description available.'}
                                    </p>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Projects;
