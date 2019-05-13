import React, { Component } from 'react';
import manageActions from '../core/action';
const { changeSiderState, getAllMenuList, updateCheckedCardList } = manageActions;


import { add_item, sider_container, toggleBar, selectService, selectServiceArea } from './style.css'
import { TransitionGroup, CSSTransitionGroup } from 'react-transition-group';
import MenuList from './menuList';
import Card from './card'
import Icon from "../../icon";
import CardsList from './cardList';

import { connect } from 'react-redux';
import { mapStateToProps } from '../core/util';

@connect(
    mapStateToProps(
        'isSiderDisplay',
        'manageList',
        'allMenuList',
        'checkedCardList',
        {
            namespace: 'managewidget',
        },
    ),
    {
        getAllMenuList,
        changeSiderState,
        updateCheckedCardList
    }
)
export default class MySider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
            inputValue: '',
            isMenuListShow: false,
            cardsList: [],
            keyPath: [],
            searchValue: ''
        };
    }
    componentDidMount() {
        const { manageList, menuList } = this.props;
        this.setState({
            menuList: menuList,
        }, () => {
            if (menuList.length) {
                this.showServiceAndChangeInput()
            }
        })

    }
  
    renderMenu = () => {
        const { menuList, isMenuListShow } = this.state;
        const props = {
            isMenuListShow,
            menuList,
            showServiceAndChangeInput: this.showServiceAndChangeInput
        }
        return <MenuList  {...props} />
    }
    showServiceAndChangeInput = (keyPath = this.state.keyPath) => {
        // 通过keyPath，获得一二级
        var inputValue = '';
        let cardsList = [];
        const { menuList } = this.state;
        if (!menuList.length) return
        if (keyPath.length) {
            this.state.menuList.forEach((item) => {
                if (item.menuBarCode == keyPath[0]) {
                    inputValue = item.menuBarName //+ '/';
                    cardsList = item.menuItems;
                    // item.menuItems.forEach((a) => {
                    //     if (a.menuItemId == keyPath[0]) {
                    //         inputValue += a.menuItemName;
                    //         cardsList = a.children;
                    //         return
                    //     }
                    // })
                }
            })
        }

        if (!keyPath.length) {
            cardsList = menuList[0].menuItems//.children
            inputValue = `${menuList[0].menuBarName}`///${menuList[0].menuItems[0].menuItemName
        }

        this.setState({
            cardsList,
            inputValue,
            isMenuListShow: false,
            keyPath,
            canShowEmptyDom: false
        })

    }

    renderService = () => {
        const { checkedCardList } = this.props;
        const { cardsList, canShowEmptyDom } = this.state;
        let dom = '';
        dom = cardsList.map((a, b) => {
            if (a.children && a.children.length == 0) {
                const isContainInCheckCardList = checkedCardList.some((item) => { return item.serviceCode == a.serviceCode })
                a.checked = isContainInCheckCardList;
                return <div key={`${a.menuItemId}-${b}`} className="result_app_list_3" >
                    <Card data={JSON.parse(JSON.stringify(a))} key={`${a.menuItemId}-${b}`} index={b}
                        onChangeChecked={this.onChangeChecked}
                    />
                    <hr />
                </div>
            }
            return <CardsList
                key={a.menuItemId}
                list={a.children}
                listName={a.menuItemName}
                checkedCardList={checkedCardList}
                onChangeChecked={this.onChangeChecked} />
        })
        if (!dom.length && canShowEmptyDom) {
            dom = <div className='emptyDom'>暂无结果</div>
        }
        return dom
    }
    componentWillReceiveProps(props) {
    }
    onChangeChecked = (checked, parentId, serviceCode) => {
        const { cardsList } = this.state;
        //const newCardsList = JSON.parse(JSON.stringify(cardsList))
        const { checkedCardList, updateCheckedCardList } = this.props;
        let newCheckedCardList = JSON.parse(JSON.stringify(checkedCardList));
        if (checked) {//如果是选中，push checkedCardList
            cardsList.forEach((item) => {
                if (item.serviceCode == serviceCode && !item.children.length) {
                    newCheckedCardList.push(item)
                }

                if (item.children.length) {
                    item.children.forEach((a) => {
                        if (a.serviceCode == serviceCode) {
                            newCheckedCardList.push(a)
                        }
                    })
                }
            })
        }
        if (!checked) {//如果是解除选中状态，改变cardList状态，从 checkedCardList中删除
            cardsList.forEach((item) => {
                if (item.serviceCode == serviceCode && !item.children.length) {
                    //item.checked = checked;
                    newCheckedCardList = newCheckedCardList.filter(item => {
                        return item.serviceCode !== serviceCode
                    })
                }

                if (item.children.length) {
                    item.children.forEach((a) => {
                        if (a.serviceCode == serviceCode) {
                            // a.checked = checked;
                            newCheckedCardList = newCheckedCardList.filter(item => {
                                return item.serviceCode !== serviceCode
                            })
                        }
                    })
                }
            })
        }
        this.setState({
            cardsList: cardsList,
        })
        updateCheckedCardList(newCheckedCardList)
    }

    searchService = (e) => {
        //根据cardsList变化来render
        if (e.keyCode == 13) {
            const value = e.target.value
            let cardsList = [];
            this.state.menuList.forEach((a, b) => {
                a.menuItems.forEach((c, d) => {
                    c.children.forEach((e, f) => {
                        if (e.children.length == 0 && e.service.serviceName.indexOf(value) != -1) {
                            cardsList.push(e);
                        } else if (e.children.length != 0) {
                            e.children.forEach((g, h) => {
                                if (g.service.serviceName.indexOf(value) != -1) {
                                    cardsList.push(g);
                                }
                            })
                        }
                    })
                })
            })
            //如果有重复的,给手动搜索到的cardList去重,给下拉展示的cardList不去重,给checkedCardList去重
            const deduplicatedList = [];
            cardsList.forEach((item, index) => {
                var isContain = deduplicatedList.some(d => {
                    return d.serviceCode == item.serviceCode
                })
                if (!isContain) {
                    deduplicatedList.push(item);
                }
            })

            this.setState({ cardsList: deduplicatedList, canShowEmptyDom: true });
        }

    }
    switchFetchFn = () => {
        this.setState(
            {
                ifSearchState: !this.state.ifSearchState,
                cardsList: []
            }, () => {
                if (this.state.ifSearchState) { //如果切换到search,就清空 ccardList
                    //debugger

                } else {   //如果切换到menu ，就取menu的第一级
                    this.showServiceAndChangeInput()
                }
            });

    }
    render() {

        const { inputValue, searchValue, ifSearchState, isMenuListShow } = this.state;
        const { isSiderDisplay, changeSiderState, languagesJSON } = this.props;
        return (
            <TransitionGroup component="div" className={sider_container}>
                <CSSTransitionGroup
                    transitionName={{
                        enter: 'animated',
                        enterActive: 'fadeInLeft',
                        leave: 'animated',
                        leaveActive: 'fadeOutLeft',
                    }}
                    transitionEnterTimeout={1300}
                    transitionLeaveTimeout={1300} >
                    {
                        isSiderDisplay ?
                            <div >
                                <div className="sider-container-fixed">
                                    <div style={{ position: 'absolute', width: 320, zIndex: 99999, backgroundColor: '#fff' }}>
                                        <div className={add_item}>
                                            <span><Icon type="notice" />{languagesJSON.notice}</span>
                                            {/* <i className={toggleBar}
                                onClick={changeSiderState}>
                                {"<"}</i> */}
                                        </div>


                                        {ifSearchState ?
                                            <div className={selectServiceArea}>
                                                <Icon type="search" onClick={this.switchFetchFn} className="frontSearchIcon" />
                                                <input className={selectService}
                                                    onKeyUp={this.searchService}
                                                    key="clickSearch"
                                                    placeholder="输入服务名称"
                                                    className="searchInput"
                                                />

                                                <span onClick={this.switchFetchFn} className="option">取消</span>
                                            </div> : <div className={selectServiceArea}>
                                                <input className={selectService}
                                                    // onFocus={() => { this.setState({ isMenuListShow: true }) }}
                                                    value={inputValue}
                                                    key="menuSearch"
                                                    // onBlur={() => { this.setState({ isMenuListShow: false }) }}
                                                    className="menuInput"
                                                    disabled="disabled"
                                                />
                                                <div className="inputMask" onClick={() => { this.setState({ isMenuListShow: !isMenuListShow }) }}></div>
                                                <Icon type={isMenuListShow ? "upward" : "pull-down"} className="arrow" />
                                                <Icon type="search" onClick={this.switchFetchFn} className="option" />
                                            </div>}
                                    </div>

                                    {this.renderMenu()}
                                    <div className="serviceArea" ref={ref => this.serviceArea = ref}>
                                        {this.renderService()}
                                    </div>
                                </div>
                            </div> : <div style={{ width: 20 }}><i className={`${add_item} ${toggleBar}`}
                                style={{ position: "fixed" }}
                                onClick={changeSiderState}>
                                {">"}</i></div>}
                </CSSTransitionGroup>
            </TransitionGroup>


        );
    }
}
