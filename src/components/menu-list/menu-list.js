import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, addedToCart} from '../../actions'

import Spiner from '../spinner'

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount(){
        this.props.menuRequested()
        const {RestoService} = this.props;
        RestoService.getMenuItems().then(res => this.props.menuLoaded(res))
    }

    render() {
        const {menuItems, loading, addedToCart} = this.props;

        if(loading) return <Spiner/>;
        
        const listMenuItems = menuItems.map(menuItem => <MenuListItem
             menuItem={menuItem}
             key={menuItem.id}
             onAddToCart={() => addedToCart(menuItem.id)}
             />)

        return (
            <ul className="menu__list">
                {listMenuItems}
            </ul>
        )
    }
};

// передаем, как props, menuItem , который и используем в MenuList -> const {menuItems} = this.props;
const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    menuLoaded, 
    menuRequested,
    addedToCart
};


// const mapDispatchToProps = (dispatch) => {
//     return {
//         menuLoaded: (newMenu) => {
//             dispatch(menuLoaded(newMenu))
//         }
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         menuLoaded: (newMenu) => {
//             dispatch({
//                 type: 'MENU_LOADED',
//                 payload: newMenu
//             })
//         }
//     }
// }


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));