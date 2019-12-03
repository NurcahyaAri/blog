import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {
    getArticlesFromNetwork,
    removeArticles,
} from '../actions/getArticles';

import Layout from '../components/organisms/Layout';
import ArticlesCard from '../components/organisms/Card/ArticlesCard';

function Home(props){
    const getArticles = async () => {
        await props.dispatchArticles()
    }
    useEffect( () => {
        props.removeArticles();
        getArticles();
    }, []);

    return (
        <Layout>
            <div className="container">
                <div className="columns is-multiline">
                    <ArticlesCard data={props.articles.blog.data}/>
                </div>
            </div>
        </Layout>
    );
}

const mapPropsToState = (state) => {
    return {
        articles : state
    }
}

const mapDispatchToState = dispatch => {
    return {
        dispatchArticles : () => dispatch(getArticlesFromNetwork()),
        removeArticles : () => dispatch(removeArticles()),
    };
}

export default connect(mapPropsToState, mapDispatchToState)(Home);