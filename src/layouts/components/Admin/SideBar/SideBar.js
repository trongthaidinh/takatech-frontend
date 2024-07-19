import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
    faDiagramProject,
    faLayerGroup,
    faHandshake,
    faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import routes from '~/config/routes';

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
        <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : styles.expanded}`}>
            <div className={styles.logo}>
                <strong>VNETC</strong>
                <FontAwesomeIcon
                    icon={isCollapsed ? faCaretRight : faCaretLeft}
                    onClick={toggleSidebar}
                    className={styles.toggleIcon}
                />
            </div>
            <ul className={styles.menu}>
                <li>
                    <NavLink to={routes.admin} className={styles.menuItem}>
                        <FontAwesomeIcon icon={faTachometerAlt} className={styles.menuIcon} />
                        <span className={styles.menuText}>{!isCollapsed && 'Bảng điều khiển'}</span>
                    </NavLink>
                </li>
                <li>
                    <div className={styles.menuItem} onClick={() => toggleMenu('menuManagement')}>
                        <FontAwesomeIcon icon={faClipboardList} className={styles.menuIcon} />
                        <span className={styles.menuText}>
                            {!isCollapsed && (
                                <>
                                    Quản lý Menu
                                    <FontAwesomeIcon
                                        icon={openMenus.menuManagement ? faChevronDown : faChevronRight}
                                        className={styles.chevronIcon}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={`${styles.subMenu} ${openMenus.menuManagement ? styles.open : ''}`}>
                        <li>
                            <NavLink to={routes.navigationList}>Danh sách Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addNavigation}>Thêm Menu</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={routes.messagesList} className={styles.menuItem}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.menuIcon} />
                        <span className={styles.menuText}>{!isCollapsed && 'Quản lý tin nhắn'}</span>
                    </NavLink>
                </li>
                <li>
                    <div className={styles.menuItem} onClick={() => toggleMenu('userManagement')}>
                        <FontAwesomeIcon icon={faUsers} className={styles.menuIcon} />
                        <span className={styles.menuText}>
                            {!isCollapsed && (
                                <>
                                    Quản lý người dùng
                                    <FontAwesomeIcon
                                        icon={openMenus.userManagement ? faChevronDown : faChevronRight}
                                        className={styles.chevronIcon}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={`${styles.subMenu} ${openMenus.userManagement ? styles.open : ''}`}>
                        <li>
                            <NavLink to={routes.userList}>Danh sách người dùng</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addUser}>Thêm người dùng</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={styles.menuItem} onClick={() => toggleMenu('productManagement')}>
                        <FontAwesomeIcon icon={faBox} className={styles.menuIcon} />
                        <span className={styles.menuText}>
                            {!isCollapsed && (
                                <>
                                    Quản lý sản phẩm
                                    <FontAwesomeIcon
                                        icon={openMenus.productManagement ? faChevronDown : faChevronRight}
                                        className={styles.chevronIcon}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={`${styles.subMenu} ${openMenus.productManagement ? styles.open : ''}`}>
                        <li>
                            <NavLink to={routes.productList}>Danh sách sản phẩm</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addProduct}>Thêm sản phẩm</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={styles.menuItem} onClick={() => toggleMenu('newsManagement')}>
                        <FontAwesomeIcon icon={faNewspaper} className={styles.menuIcon} />
                        <span className={styles.menuText}>
                            {!isCollapsed && (
                                <>
                                    Quản lý tin tức
                                    <FontAwesomeIcon
                                        icon={openMenus.newsManagement ? faChevronDown : faChevronRight}
                                        className={styles.chevronIcon}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={`${styles.subMenu} ${openMenus.newsManagement ? styles.open : ''}`}>
                        <li>
                            <NavLink to={routes.newsList}>Danh sách tin tức</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addNews}>Thêm tin tức</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={styles.menuItem} onClick={() => toggleMenu('projectManagement')}>
                        <FontAwesomeIcon icon={faDiagramProject} className={styles.menuIcon} />
                        <span className={styles.menuText}>
                            {!isCollapsed && (
                                <>
                                    Quản lý dự án
                                    <FontAwesomeIcon
                                        icon={openMenus.projectManagement ? faChevronDown : faChevronRight}
                                        className={styles.chevronIcon}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={`${styles.subMenu} ${openMenus.projectManagement ? styles.open : ''}`}>
                        <li>
                            <NavLink to={routes.projectList}>Danh sách dự án</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addProject}>Thêm dự án</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={styles.menuItem} onClick={() => toggleMenu('serviceManagement')}>
                        <FontAwesomeIcon icon={faLayerGroup} className={styles.menuIcon} />
                        <span className={styles.menuText}>
                            {!isCollapsed && (
                                <>
                                    Quản lý dịch vụ
                                    <FontAwesomeIcon
                                        icon={openMenus.serviceManagement ? faChevronDown : faChevronRight}
                                        className={styles.chevronIcon}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={`${styles.subMenu} ${openMenus.serviceManagement ? styles.open : ''}`}>
                        <li>
                            <NavLink to={routes.serviceList}>Danh sách dịch vụ</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addService}>Thêm dịch vụ</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={styles.menuItem} onClick={() => toggleMenu('partnerManagement')}>
                        <FontAwesomeIcon icon={faHandshake} className={styles.menuIcon} />
                        <span className={styles.menuText}>
                            {!isCollapsed && (
                                <>
                                    Quản lý đối tác
                                    <FontAwesomeIcon
                                        icon={openMenus.partnerManagement ? faChevronDown : faChevronRight}
                                        className={styles.chevronIcon}
                                    />
                                </>
                            )}
                        </span>
                    </div>
                    <ul className={`${styles.subMenu} ${openMenus.partnerManagement ? styles.open : ''}`}>
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
                            <NavLink to={routes.imagesList}>Danh sách ảnh</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addVideo}>Thêm Video</NavLink>
                        </li>
                        <li>
                            <NavLink to={routes.addImage}>Thêm Ảnh</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={routes.settings}>
                        <div className={styles.menuItem}>
                            <FontAwesomeIcon icon={faCogs} className={styles.menuIcon} />
                            <span className={styles.menuText}>{!isCollapsed && 'Cài đặt'}</span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
