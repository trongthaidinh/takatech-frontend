const routes = {
    home: '/',
    admin: '/admin',
    menu: '/admin/menu',
    about: '/gioi-thieu',
    introduction: '/gioi-thieu/tong-quan',
    history: '/gioi-thieu/lich-su',
    organizational: '/gioi-thieu/so-do-to-chuc',
    vision: '/gioi-thieu/tam-nhin-su-menh-gia-tri',
    capacityProfile: '/gioi-thieu/ho-so-nang-luc',
    qualityGoals: '/gioi-thieu/muc-tieu-chat-luong',
    products: '/san-pham',
    productDetail: '/san-pham/:id',
    news: '/tin-tuc',
    newsDetail: `/tin-tuc/:category/:id`,
    newsCategory: `/tin-tuc/:categoryId`,
    socialEconomicNews: '/tin-tuc/tin-kinh-te-xa-hoi',
    industryNews: '/tin-tuc/tin-nganh',
    search: '/tim-kiem',
    projects: '/du-an-va-nang-luc',
    ongoingProjects: '/du-an-va-nang-luc/du-an-dang-thuc-hien',
    services: '/dich-vu',
    teams: '/doi-ngu',
    error404: '/404',
    contact: '/lien-he',
};

export default routes;
