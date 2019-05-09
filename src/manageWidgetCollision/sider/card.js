import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { hasCardContainInGroups } from '../utils';
import { mapStateToProps } from '@u';
import { list_item_content, title, isAddColor, title_name } from './style.css'
import manageActions from '../core/action';
const { updateManageList,updateShadowCard } = manageActions;

const noteSource = {
    beginDrag(props, monitor, component) {
        
        const data = props.data;
        
        if (!data.checked) {//拖拽没被选择上的元素时，元素被push进checkedCardList
            props.checkedCardList.push(data);
            //component.clickSiderCard(true, data.parentId, data.menuItemId);
        }
        props.checkedCardList.forEach(element => {
            element.size = 1;
            element.type = 3;
            element.widgetId = element.service.serviceId;
            element.widgetName = element.service.serviceName;
            element.serviceCode = element.service.serviceCode;
            element.icon = element.service.serviceIcon;
            element.size = element.widgetTemplate ? element.widgetTemplate.size : 1;
            element.serviceType = element.widgetTemplate ? element.widgetTemplate.serviceType : 1;
           
            switch(element.size){
                case 1:
                element.height = 1;
                element.width = 1;
                break;
                case 2:
                element.height = 1;
                element.width = 2;
                break
                case 3:
                element.height = 2;
                element.width = 2;
                break
                default:
                element.height = 1;
                element.width = 1;
              }
        });
        const dragCard = {
            isShadow:true,
            width:1,
            height:1, 
            widgetId:"shadowCardId",
        };
        props.updateShadowCard(dragCard);
        console.log(props.checkedCardList,'checkedCardList=========checkedCardList')
        return { id: "shadowCardId", type:"cardList", cardList: props.checkedCardList }  //3代表widget，parentId=2暂时代表侧边栏

    },
    endDrag(props, monitor, component) {
        const DraggedItem = monitor.getItem();
        const { manageList, updateManageList } = props;
        if (!monitor.didDrop()) {

                manageList.forEach(item => {
                    item.children.forEach((a, b) => {
                        if (a.widgetId == DraggedItem.id) {
                            item.children.splice(b, 1)
                        }
                    })
                })
            updateManageList(manageList)
        } else {
            console.log("正常拖拽")//
        }
    },
    canDrag(props, monitor) {
        const { manageList, data } = props;
        if (hasCardContainInGroups(manageList, data.service.serviceCode)) {
            return false
        }
        return true
    }
};

@connect(
    mapStateToProps(
        'manageList',
        'checkedCardList',
        {
            namespace: 'managewidget',
        },
    ),
    {
        updateManageList,
        updateShadowCard
    }
)
@DragSource('item', noteSource, (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
})
export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.connectDragPreview(getEmptyImage(), {
            captureDraggingState: true
        });
    }

    shouldComponentUpdate(nextProps,nextState){//优化：只有checked变化是才更新组件
        if(nextProps.data.checked!==this.props.data.checked)return true;
        const isContain = hasCardContainInGroups(this.props.manageList, this.props.data.service.serviceCode)
        const isNextContain = hasCardContainInGroups(nextProps.manageList, nextProps.data.service.serviceCode);
        if (isContain!=isNextContain) {
    		return true;
        }
        return false
    }

    //改变SiderCard的选中状态
    clickSiderCard = () => {
        const { menuItemId, parentId, checked } = this.props.data;
        this.props.onChangeChecked(!checked, parentId, menuItemId);
    };

    render() { 

        const { connectDragSource, manageList} = this.props;
        const { service:{serviceName,serviceCode}, checked } = this.props.data;
        const isContainInGroups = hasCardContainInGroups(manageList, serviceCode);
        return connectDragSource(
            <div>
                {
                    isContainInGroups
                        ?
                        <div className="app_col" >
                        <div className={`${list_item_content} ${title} ${isAddColor}`}>
                            <span className={title_name} >{serviceName}</span>
                        </div>
                        </div>
                        :
                        <div className="app_col" onClick={this.clickSiderCard}>
                        <div className={`${list_item_content} ${title} ${checked ? 'item-checked' : null}`}>
                            <span className={title_name}  title={serviceName}>{serviceName}</span>
                            
                                <i
                                    className={checked?"selected":null}
                                    style={{ color: 'rgb(0, 122, 206)' }}
                                ></i>
                            
                        </div>
                        </div>

                }

               
            </div>
        );
    }
}



