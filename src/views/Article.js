import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import Layout from '../components/organisms/Layout';

import {getArticleByIdFromNetWork} from '../actions/getArticles';

function Article(props){
    let {id} = useParams();
    const getArticle = async () => {
        await props.dispatchArticle(id);
    }
    useEffect(() => {
        getArticle();
    }, []);
    return (
        <Layout>
            <h1>{props.article.article.title}</h1>
        </Layout>
    );
};

const mapPropsToState = (state) => {
    return {
        article : state
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dispatchArticle : (id) => dispatch(getArticleByIdFromNetWork(id))
    }
}

export default connect(mapPropsToState, mapDispatchToState)(Article);