import React from 'react';
import { Helmet } from 'react-helmet';
import Overview from './Overview';
import Products from './Products';
import Services from './Services';
// import Projects from './Projects';
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
                content="VNETC cung cấp sản phẩm, dịch vụ cơ điện chất lượng hàng đầu và tin tức mới nhất ngành điện lực."
            />
            <meta name="keywords" content="sản phẩm điện, dịch vụ điện, tin tức ngành điện lực, VNETC" />
            <meta name="author" content="CÔNG TY CỔ PHẦN THÍ NGHIỆM CƠ ĐIỆN VIỆT NAM - VNETC" />
        </Helmet>
        <Banner />
        <Overview />
        <Products />
        <Services />
        {/* <Projects /> */}
        <NewsLibrary />
        <FAQs />
        <Partners />
    </article>
);

export default Home;
