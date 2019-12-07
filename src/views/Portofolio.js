import React from 'react';

import Layout from '../components/organisms/Layout';


function Portofolio(props){
    return(
        <Layout full={true}>
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">
                        Ari Nurcahya
                    </h1>
                    <h2 className="subtitle">
                        Software Engineer
                    </h2>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Portofolio;