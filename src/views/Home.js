import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {
    Link
} from 'react-router-dom';
import {
    getArticlesFromNetwork,
    removeArticles,
    getArticleByCategoryFromNetwork,
} from '../actions/getArticles';

import {
    getCategoriesFromNetwork,
    removeCategories
} from '../actions/getCategories';

import Layout from '../components/organisms/Layout';
import ArticlesCard from '../components/organisms/Card/ArticlesCard';

function Home(props){
    const [category, setCategory] = useState(0);
    const getArticles = async () => {
        await props.dispatchArticles();
    }
    const getCategories = async () => {
        await props.dispatchCategory();
    }
    useEffect( () => {
        props.removeArticles();
        props.removeCategories();
        getArticles();
        getCategories();
    }, []);
    useEffect( () => {
        // getCategories();;
    }, [props])

    const setActiveCategory = (id) => {
        setCategory(id);
        props.removeArticles();
        if(id !== 0){
            props.dispatchArticlesByCategory(id);
        } else {
            getArticles();
        }
    }

    return (
        <Layout>
            <div className="container">
                <div className="container">
                    <p class="panel-tabs">
                        <Link 
                            className={0 === category? "is-active" : ""}  
                            key={0}
                            onClick={() => {
                                setActiveCategory(0)
                            }}
                            >
                                All Category
                        </Link>
                        {
                            props.articles.category.map((data, index) => {
                                return (
                                    <Link 
                                        className={data.id === category? "is-active" : ""}  
                                        key={data.id}
                                        onClick={() => {
                                            setActiveCategory(data.id)
                                        }}
                                        >
                                            {data.name}
                                    </Link>
                                )
                            })
                        }
                    </p>
                </div>
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
        dispatchCategory : () => dispatch(getCategoriesFromNetwork()),
        dispatchArticlesByCategory : (categoryId) => dispatch(getArticleByCategoryFromNetwork(categoryId)),
        removeArticles : () => dispatch(removeArticles()),
        removeCategories : () => dispatch(removeCategories()),
    };
}

export default connect(mapPropsToState, mapDispatchToState)(Home);