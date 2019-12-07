import Home from '../views/Home';
import Article from '../views/Article';
import Portofolio from '../views/Portofolio';

export default [{
    path : '/',
    exact: true,
    component : Portofolio
}, {
    path : '/blog/article/:id',
    exact: true,
    component : Article
}, {
    path : '/blog',
    exact : true,
    component : Home
}];