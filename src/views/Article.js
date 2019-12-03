import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {baseUrl} from '../config/environment';

import Cover from '../components/molecules/Card/Cover';
import Layout from '../components/organisms/Layout';

import {
    getArticleByIdFromNetWork,
    removeArticle
} from '../actions/getArticles';
import moment from 'moment';

function Article(props){
    let {id} = useParams();
    let [coverUrl, setCoverUrl] = useState('');
    const getArticle = async () => {
        await props.dispatchArticle(id);
    }
    useEffect(() => {
        props.removeArticle();
        getArticle();
    }, []);

    useEffect(() => {
        if(props.article.article.cover){
            setCoverUrl(`${baseUrl}${props.article.article.cover.url}`);
        }
    })

    return (
        <Layout>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1">{props.article.article.title}</h1>
                        <div className="subtitle" style={{fontSize: '10pt'}}>
                            <p>{moment(props.article.article.created_at).format("MMMM D YYYY H:mm")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        {
                            coverUrl == '' ? 
                            '' : 
                            <figure className="image is-4by3">
                                <img src={coverUrl} height={256} alt={"Cover"}/>
                            </figure>
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <p>{props.article.article.content}</p>
                        </div>
                    </div>
                </div>
            </section>
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
        dispatchArticle : (id) => dispatch(getArticleByIdFromNetWork(id)),
        removeArticle : () => dispatch(removeArticle())
    }
}

export default connect(mapPropsToState, mapDispatchToState)(Article);