import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';
import useSeo from '../hooks/use-seo';

const Layout = (props) => {

    const seo = useSeo();
    console.log(seo);

    const { siteName, fallbackSeo: { description, title }} = seo;
    return (  
        <>
        <Global
            styles={css`
                html{
                    font-size:62.5%;//esto permite que abajo al usemos pixels como rems 1 rem =10px
                    box-sizing: border-box;
                }
                *, *:before, *:after {
                    box-sizing: inherit;
                    }
                body{
                    font-size:18px;
                    font-size:1.8rem;
                    line-height:1.5;
                    font-family:'PT Sans', sans-serif;
                }
                h1, h2, h3 {
                    margin:0;
                    line-height:1.5;
                }
                h1, h2{
                    font-family:'Roboto', serif;
                }
                h3{
                    font-family:'PT Sans', sans-serif;
                }
                ul{
                    list-style:none;
                    margin:0;
                    padding:0;
                }
            `}
        />
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
        </Helmet>
        <Header />
        {props.children}
        <Footer
        title= {title}
        />
        </>
    );
}
 
export default Layout;