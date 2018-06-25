import Banners from './Banners';
import { connect } from 'react-redux';

import { setCategories } from '../../ducks/banners';

const mapStateToProps = state => ({
	categories : state.banners.get('categories').toJS()
});

const mapDispatchToProps = dispatch => ({
	setCategories : (categories) => dispatch(setCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(Banners);