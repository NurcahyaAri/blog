import Home from '../views/Home';
import Article from '../views/Article';

export default [{
    path : '/',
    exact: true,
    component : Home
}, {
    path : '/article/:id',
    exact: true,
    component : Article
}];