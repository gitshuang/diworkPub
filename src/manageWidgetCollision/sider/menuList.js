import React from 'react';
import Menu from 'bee/menus';
const SubMenu = Menu.SubMenu;
import {menuListStyle} from './style.css';
import onClickOutside from 'react-onclickoutside';
import { connect } from 'react-redux';
import { mapStateToProps } from '@u';
import manageActions from '../core/action';
const { updateCheckedCardList } = manageActions;


@connect(
    mapStateToProps(
        'checkedCardList',
        {
            namespace: 'managewidget',
        },
    ),
    {
        updateCheckedCardList
    }
)
@onClickOutside
export default class MenuList extends React.Component{
    
    handleClick = (e) => {
        this.props.showServiceAndChangeInput(e.keyPath);
        this.props.updateCheckedCardList([]);
    }
    handleClickOutside(evt) {

       const {showServiceAndChangeInput,isMenuListShow} = this.props;
       if(evt.target.className=='inputMask')return
        if(isMenuListShow){
            showServiceAndChangeInput();
        }
       
      }
    render(){
        const {menuList,isMenuListShow} = this.props;
        return <Menu defaultOpenKeys={["0"]} className={menuListStyle} onClick={this.handleClick} style={{display:isMenuListShow?"block":"none"}}>
        {menuList.map((item, index) => {
            return <Menu.Item  key={item.menuBarCode} >  {/*title={item.menuBarName}*/}
            {item.menuBarName}
                {/* {item.menuItems.map((a, g) => {
                    return <Menu.Item key={a.menuItemId} >{a.menuItemName}</Menu.Item>
                })} */}
            </Menu.Item>
        }) }
    </Menu>
    }
}