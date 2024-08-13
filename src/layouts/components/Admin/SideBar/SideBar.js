import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './SideBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretRight,
    faCaretLeft,
    faTachometerAlt,
    faClipboardList,
    faEnvelope,
    faUsers,
    faBox,
    faCogs,
    faChevronRight,
    faChevronDown,
    faNewspaper,
    faLayerGroup,
    faHandshake,
    faBookOpen,
    faInfoCircle,
    faUserFriends,
    faListAlt,
} from '@fortawesome/free-solid-svg-icons';
import routes from '~/config/routes';
import companyLogo from '~/assets/images/takatech-logo.png';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [openMenus, setOpenMenus] = useState({});

    const toggleSidebar = () => {
        if (!isCollapsed) {
            setOpenMenus({});
        }
        setIsCollapsed(!isCollapsed);
    };

    const toggleMenu = (menu) => {
        if (isCollapsed) {
            setIsCollapsed(false);
        } else {
            setOpenMenus((prev) => ({
                [menu]: !prev[menu],
                ...(prev[menu]
                    ? {}
                    : Object.keys(prev).reduce((acc, key) => {
                          if (key !== menu) acc[key] = false;
                          return acc;
                      }, {})),
            }));
        }
    };

    return (
        <div className={cx('sidebar', { collapsed: isCollapsed, expanded: !isCollapsed })}>
            <div className={cx('logoWrapper')}>
                <Link to={routes.admin}>
                    <img src={companyLogo} alt="Company Logo" className={cx('logo')} />
                </Link>
                <FontAwesomeIcon
                    icon={isCollapsed ? faCaretRight : faCaretLeft}
                    onClick={toggleSidebar}
                    className={cx('toggleIcon')}
                />
            </div>
            <ul className={cx('menu')}>
                <li>
                    <NavLink to={routes.admin} className={cx('menuItem')}>
                        <FontAwesomeIcon icon={faTachometerAlt} className={cx('menuIcon')} />
                        <span className={cx('menuText')}>{!isCollapsed && 'Bảng điều khiển'}</span>
                    </NavLink>
                </li>
                <li>
                    <div className={cx('menuItem')} onClick={() => toggleMenu('menuManagement')}>
                        <FontAwesomeIcon icon={faClipboardList} className={cx('menuIcon')} />
                        <span className={cx('menuText')}>
                            {!isCollapsed && (
                                <>
                                    Quản lý Menu
                                    <FontAwesomeIcon
                                        icon={openMenus.menuManagement ? faChevronDown : faChevronRight}
                                        className={cx('chevronIcon')}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={cx('subMenu', { open: openMenus.menuManagement })}>
                        <li>
                            <NavLink to={routes.navigationList}>Danh sách Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addNavigation}>Thêm Menu</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={cx('menuItem')} onClick={() => toggleMenu('categoryManagement')}>
                        <FontAwesomeIcon icon={faListAlt} className={cx('menuIcon')} />
                        <span className={cx('menuText')}>
                            {!isCollapsed && (
                                <>
                                    Quản lý danh mục
                                    <FontAwesomeIcon
                                        icon={openMenus.categoryManagement ? faChevronDown : faChevronRight}
                                        className={cx('chevronIcon')}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={cx('subMenu', { open: openMenus.categoryManagement })}>
                        <li>
                            <NavLink to={routes.categoryList}>Danh sách danh mục</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addCategory}>Thêm danh mục</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={routes.messagesList} className={cx('menuItem')}>
                        <FontAwesomeIcon icon={faEnvelope} className={cx('menuIcon')} />
                        <span className={cx('menuText')}>{!isCollapsed && 'Quản lý tin nhắn'}</span>
                    </NavLink>
                </li>
                <li>
                    <div className={cx('menuItem')} onClick={() => toggleMenu('userManagement')}>
                        <FontAwesomeIcon icon={faUsers} className={cx('menuIcon')} />
                        <span className={cx('menuText')}>
                            {!isCollapsed && (
                                <>
                                    Quản lý người dùng
                                    <FontAwesomeIcon
                                        icon={openMenus.userManagement ? faChevronDown : faChevronRight}
                                        className={cx('chevronIcon')}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={cx('subMenu', { open: openMenus.userManagement })}>
                        <li>
                            <NavLink to={routes.userList}>Danh sách người dùng</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addUser}>Thêm người dùng</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={cx('menuItem')} onClick={() => toggleMenu('productManagement')}>
                        <FontAwesomeIcon icon={faBox} className={cx('menuIcon')} />
                        <span className={cx('menuText')}>
                            {!isCollapsed && (
                                <>
                                    Quản lý sản phẩm
                                    <FontAwesomeIcon
                                        icon={openMenus.productManagement ? faChevronDown : faChevronRight}
                                        className={cx('chevronIcon')}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={cx('subMenu', { open: openMenus.productManagement })}>
                        <li>
                            <NavLink to={routes.productList}>Danh sách sản phẩm</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addProduct}>Thêm sản phẩm</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={cx('menuItem')} onClick={() => toggleMenu('newsManagement')}>
                        <FontAwesomeIcon icon={faNewspaper} className={cx('menuIcon')} />
                        <span className={cx('menuText')}>
                            {!isCollapsed && (
                                <>
                                    Quản lý tin tức
                                    <FontAwesomeIcon
                                        icon={openMenus.newsManagement ? faChevronDown : faChevronRight}
                                        className={cx('chevronIcon')}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={cx('subMenu', { open: openMenus.newsManagement })}>
                        <li>
                            <NavLink to={routes.newsList}>Danh sách tin tức</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addNews}>Thêm tin tức</NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <div className={cx('menuItem')} onClick={() => toggleMenu('serviceManagement')}>
                        <FontAwesomeIcon icon={faLayerGroup} className={cx('menuIcon')} />
                        <span className={cx('menuText')}>
                            {!isCollapsed && (
                                <>
                                    Quản lý dịch vụ
                                    <FontAwesomeIcon
                                        icon={openMenus.serviceManagement ? faChevronDown : faChevronRight}
                                        className={cx('chevronIcon')}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={cx('subMenu', { open: openMenus.serviceManagement })}>
                        <li>
                            <NavLink to={routes.serviceList}>Danh sách dịch vụ</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addService}>Thêm dịch vụ</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={cx('menuItem')} onClick={() => toggleMenu('partnerManagement')}>
                        <FontAwesomeIcon icon={faHandshake} className={cx('menuIcon')} />
                        <span className={cx('menuText')}>
                            {!isCollapsed && (
                                <>
                                    Quản lý đối tác
                                    <FontAwesomeIcon
                                        icon={openMenus.partnerManagement ? faChevronDown : faChevronRight}
                                        className={cx('chevronIcon')}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={cx('subMenu', { open: openMenus.partnerManagement })}>
                        <li>
                            <NavLink to={routes.partnerList}>Danh sách đối tác</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addPartner}>Thêm đối tác</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={styles.menuItem} onClick={() => toggleMenu('libraryManagement')}>
                        <FontAwesomeIcon icon={faBookOpen} className={styles.menuIcon} />
                        <span className={styles.menuText}>
                            {!isCollapsed && (
                                <>
                                    Quản lý thư viện
                                    <FontAwesomeIcon
                                        icon={openMenus.libraryManagement ? faChevronDown : faChevronRight}
                                        className={styles.chevronIcon}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={`${styles.subMenu} ${openMenus.libraryManagement ? styles.open : ''}`}>
                        <li>
                            <NavLink to={routes.videosList}>Danh sách video</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addVideo}>Thêm video</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.imagesList}>Danh sách hình ảnh</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addImage}>Thêm hình ảnh</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={styles.menuItem} onClick={() => toggleMenu('aboutManagement')}>
                        <FontAwesomeIcon icon={faInfoCircle} className={styles.menuIcon} />
                        <span className={styles.menuText}>
                            {!isCollapsed && (
                                <>
                                    Quản lý trang
                                    <FontAwesomeIcon
                                        icon={openMenus.aboutManagement ? faChevronDown : faChevronRight}
                                        className={styles.chevronIcon}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={`${styles.subMenu} ${openMenus.aboutManagement ? styles.open : ''}`}>
                        <li>
                            <NavLink to={routes.pageList}>Danh sách trang</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addPage}>Thêm trang</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={styles.menuItem} onClick={() => toggleMenu('teamManagement')}>
                        <FontAwesomeIcon icon={faUserFriends} className={styles.menuIcon} />
                        <span className={styles.menuText}>
                            {!isCollapsed && (
                                <>
                                    Quản lý đội ngũ
                                    <FontAwesomeIcon
                                        icon={openMenus.teamManagement ? faChevronDown : faChevronRight}
                                        className={styles.chevronIcon}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={`${styles.subMenu} ${openMenus.teamManagement ? styles.open : ''}`}>
                        <li>
                            <NavLink to={routes.memberList}>Danh sách đội ngũ</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addMember}>Thêm đội ngũ</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={routes.settings} className={styles.menuItem}>
                        <FontAwesomeIcon icon={faCogs} className={styles.menuIcon} />
                        <span className={styles.menuText}>{!isCollapsed && 'Cài đặt'}</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
