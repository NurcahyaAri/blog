import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

import Card from '../../molecules/Card/Card';
import Cover from '../../molecules/Card/Cover';
import Body from '../../molecules/Card/Body';
import Footer from '../../molecules/Card/Footer';
function ArticlesCard(props){
    return (
        props.data.map((data, id) => {
            const url = `/blog/article/${data.id}`;
            return (
                <Link to={url} className="column is-3" key={data.id}>
                    <Card>
                        <Cover cover={data.cover}/>
                        <div className="card-content">
                            <Body>
                                {data.title}
                            </Body>
                            <Footer>
                                {moment(data.created_at).format('D MMMM Y H:m')}
                            </Footer>
                        </div>
                    </Card>
                </Link>
            )
        })
    );
}
export default ArticlesCard;