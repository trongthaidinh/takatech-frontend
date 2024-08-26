import React from 'react';
import { Helmet } from 'react-helmet';
import Overview from './Overview';
import Products from './Products';
import Services from './Services';
import NewsLibrary from './NewsLibrary';
import Banner from './Banner';
import Partners from './Partners';
import FAQs from './FAQs';

const Home = () => (
    <article>
        <Helmet>
            <title>Trang Chủ | TAKATECH </title>
            <meta
                name="description"
                content="VNETC cung cấp sản phẩm, dịch vụ phần mềm, ứng dụng web chất lượng hàng đầu và tin tức mới nhất ngành công nghệ thông tin."
            />
            <meta name="keywords" content="sản phẩm, dịch vụ phần mềm, tin tức ngành công nghệ thông tin, takatech" />
            <meta name="author" content="CÔNG TY TNHH CÔNG NGHỆ TAKATECH" />
        </Helmet>
        <Banner />
        <Overview />
        <Services />
        <Products />
        <NewsLibrary />
        <FAQs />
        <Partners />
    </article>
);

export default Home;
