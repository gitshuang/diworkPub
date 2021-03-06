import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext } from 'react-dnd';
import update from 'react/lib/update';
import PropTypes from 'prop-types';
import Icon from '../../icon';
import Button from 'bee/button';
import { widgetList, widgetItem, title, file_context, title_left,
  file_icon, title_right, context, bottom ,footer,clearfix,addModule,pop_dialog_widge_list} from './style.css'
import WidgetItem from './widgetItem';
import WidgeFileItem from './widgeFileItem';
import PopDialog from '../../pop';
import SelectWidgetList from '../manageSelectWidgetList';


class WidgetList extends Component {

    //TUDO 数据中的 size ： sm 、lg、xg （小[标准]、中、大）

    // static propTypes = {
    //     widgeList: PropTypes.array.isRequired,
    // }
    constructor(props) {
      super(props);
      this.state = {
        showModal:false,
        moveLine:'none',
        checkId:'',
      }
    }

  // 添加文件夹
  addFolderFn = (data)=> {
    const { addFolder } = this.props;
    const index = {groupIndex:data};
    addFolder(index);
  }

  openSelectWidget = ()=> {
      this.setState({
        showModal:true
      })
  }
  savePosition = (id,moveLine) => {
    this.setState({
      checkId:id,
      moveLine,
    })
  }
  moveLine = (id,moveLinePara)=>{
    if(id == this.state.checkId){
      return moveLinePara;
    }else{
      return 'none'
    }
  }
  moveItemDrag = (id,preParentId, preType,afterId,parentId,afterType,ifIntoFile,timeFlag,dataFolder) => {
    let data = {id,preParentId,preType,afterId,parentId,afterType,ifIntoFile,timeFlag,dataFolder}
    const { moveService,openFolder } = this.props;
    moveService(data);
    preType === 3 && afterType === 2 && timeFlag && dataFolder && openFolder(dataFolder);
  }
  addFolderDrag = (groupIndex,id,preParentId, preType,afterId,parentId,afterType) => {
    let data = {groupIndex,id,preParentId, preType,afterId,parentId,afterType}
    const { addFolder } = this.props;
    addFolder(data);
  }
  editTitle = (id,name) => {
    let data = {id,name}
    const { editTitle } = this.props;
    editTitle(data);
  }

  widgeOnclick = (e,da) => {
    const {index,setCurrGroupIndex} = this.props;
    setCurrGroupIndex(index);
    if(e.target.getAttribute("name") == "file"){
      this.props.openFolder(da);
    }

  }

  popSave = (data)=>{

  }

  popClose = ()=>{
      this.setState({
        showModal:false
      })
  }

  render() {
    var {
      manageList,
      curEditFolderId,
      selectList,
      selectGroup,
      currEditonlyId,
      title,
      drag,
      dragState,
      deleteFolder,
      renameFolder,
      setFolderEdit,selectListActions,selectGroupActions,
      cancelFolderEdit,
      openFolder,
      setEditonlyId,
      setDragInputState,
      addFolder,
      delectService,
      applicationsMap,
      allServicesByLabelGroup,
      getAllServicesByLabelGroup,
      setCurrentSelectWidgetMap,
      addDesk,
      requestSuccess,
      requestError,
      currGroupIndex,
      folderBgSrc,
      languagesJSON
    } = this.props;
    var widgetItemProps ={
      manageList,
      curEditFolderId,
      selectList,
      selectGroup,
      currGroupIndex,
      title,
      drag,
      deleteFolder,
      renameFolder,
      setFolderEdit,
      selectListActions,selectGroupActions,
      addFolder,
      delectService
    }
    var widgetFileProps = {
      manageList,
      curEditFolderId,
      selectList,
      selectGroup,
      currEditonlyId,
      drag,
      dragState,
      deleteFolder,
      renameFolder,
      setFolderEdit,selectListActions,selectGroupActions,
      cancelFolderEdit,
      openFolder,
      setEditonlyId,
      setDragInputState,
      folderBgSrc
    }
    var selectWidgetListProps = {
      applicationsMap,
      manageList,
      allServicesByLabelGroup,
      getAllServicesByLabelGroup,
      setCurrentSelectWidgetMap,
      deleteFolder,
      addDesk,
      requestSuccess,
      requestError,
  }
      const { data,index } = this.props;
      // const pop_btn = [
      //   {label:"确认",fun:this.popSave,className:""},
      //   {label:"取消",fun:this.popClose,className:""}
      // ]   //设置操作按钮

      // const { data } = this.props;

      const list = data.map((item, i) => {
        const {
          type,
          parentId,
          widgetId: id,
          widgetName: name,
        } = item;
        switch (type) {
          case 2:
            return (
              <WidgeFileItem
                key={`widget-file-${id}-${i}`}
                data={item}
                id={id}
                parentId={parentId}
                index={id}
                drag={drag}
                propsIndex={index}
                type={type}
                savePosition = {this.savePosition}
                moveLine = {this.moveLine(id,this.state.moveLine)}
                moveItemDrag={this.moveItemDrag}
                editTitle={this.editTitle}
                onClick={(e)=>{this.widgeOnclick(e,item)}}
                {...widgetFileProps}
                languagesJSON={languagesJSON}
              />
            );
          default:
            return (
              <WidgetItem
                ref={id}
                drag={drag}
                key={`widget-${id}-${i}`}
                data={item}
                id={id}
                parentId={parentId}
                index={id}
                propsIndex={index}
                type={type}
                savePosition = {this.savePosition}
                moveLine = {this.moveLine(id,this.state.moveLine)}
                moveItemDrag={this.moveItemDrag}
                editTitle={this.editTitle}
                addFolderDrag={this.addFolderDrag}
                {...widgetItemProps}
                languagesJSON={languagesJSON}
              />
            );
        }
      })

    let _da = {};
    // let _parentId = "";
    // if(this.props.data.length != 0){
    //   _parentId = this.props.data[0].parentId;
    //   console.log("this.props.data[0].parentId ---- " + this.props.data[0].parentId );
    // }

    return (<ul className={`${widgetList} ${clearfix}`} >
        {list}
        <div className={addModule} onClick={this.openSelectWidget} >
          {/*<Icon title="添加快捷方式至首页" type="add"  />*/}
          <Icon title={languagesJSON.addQuick_to_home} type="add"  />
        </div>

        <PopDialog className={pop_dialog_widge_list} type="info" title={languagesJSON.addQuick_to_home} close={this.popClose} backdrop={false} show = { this.state.showModal } data={_da} >
            <SelectWidgetList close={this.popClose} parentId={this.props.parentId}
            {...selectWidgetListProps}
                              languagesJSON={languagesJSON}
            />
        </PopDialog>

      </ul>);
  }
}

export default WidgetList;
