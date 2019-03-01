import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Content from './content'
import Footer from './footer'
import BatchMove from './batchMove'
import PopDialogComp from './popDialogComp'
import judgedBackend from './backend';
import { DragDropContext } from 'react-dnd';
import Sider from './sider';
import CustomDragLayer from './dragLayer/customDragLayer.js';
import { Provider,connect } from 'react-redux';
import store from './core/index'

import manageActions from './core/action';
const { returnDefaultState,updateGroupList,emptySelectGroup,setManageList,setEditState } = manageActions;
import { mapStateToProps } from './core/util';

//import rootActions from 'store/root/actions';
//const { requestStart, requestSuccess, requestError } = rootActions;

@connect(
  mapStateToProps(
    'manageList',
    'isEdit',
      {
          namespace: 'managewidget',
      },
  ),
  {
      returnDefaultState,
      updateGroupList,
      emptySelectGroup,
      setManageList,
      setEditState
  }
)
class CreateManageModule extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false,
      showCancelModal: false,
    };
    this.goToLocation = '';
    this.configBack = false;
  }

  componentWillUnmount() {
    const { returnDefaultState } = this.props;
    returnDefaultState();
  }

  
  moveGroupDrag = (id, afterId) => {
    const { moveGroup } = this.props;
    moveGroup({ id, afterId });
  }
 
  // 批量删除
  batchDelectFn = () => {
    const { batchDelect } = this.props;
    batchDelect();
    this.popClose();
  }

  openGroupTo = () => {
    const { openBatchMove } = this.props;
    openBatchMove();
  }
  // 打开删除的弹窗
  popOpen = () => {
    this.setState({
      showModal: true,
    });
  }
  // 关闭删除的弹窗
  popClose = () => {
    this.setState({
      showModal: false,
    });
  }

  
  componentDidMount(){
    const { history } = this.props;

    history.block((location) => {
      //const { isEdit } = this.props;
      let sta = store.getState();
      const {isEdit} = sta;
      this.goToLocation = location.pathname;
      if ((location.pathname !== this.props.match.path) && isEdit && !this.configBack) {
        this.setState({
          showCancelModal: true,
        });
      }
    });
  }
   //  保存
   save = () => {
    const {
      setManageList,
      manageList,
    } = this.props;
    if (this.checkBtn) {
      this.checkBtn.click();
    }
    setManageList(manageList).then(({ error, payload }) => {
      if (error) {
        //requestError(payload);

      } else {
        this.goBack();
      }
      this.popCloseCancel();
    });
  }
  // 取消
  cancel = () => {
    const {
      // isEdit,
      setEditState,
    } = this.props;
    setEditState(false);
    this.popCloseCancel();
    this.goBack();
  }
  // 返回操作
  goBack = () => {
    this.configBack = true;
    const { emptySelectGroup } = this.props;
    emptySelectGroup();
    this.props.history.replace(this.goToLocation);
  }

    // 打开取消的弹窗
    popOpenCancel = () => {
      //const { isEdit } = this.props;
      let sta = store.getState();
      const {isEdit} = sta;
      if (isEdit) {
        this.setState({
          showCancelModal: true,
        });
      } else {
        this.goBack();
      }
    }
    // 关闭取消的弹窗
    popCloseCancel = () => {
      this.setState({
        showCancelModal: false,
      });
    }
  render() {
   const {languagesJSON,isEdit} = this.props;
    const {showModal,showCancelModal} = this.state;
    var popDialogProps = {
      save:this.save,
      showModal,
      showCancelModal,
      popClose:this.popClose,
      batchDelectFn:this.batchDelectFn,      
      cancel:this.cancel,
      popCloseCancel:this.popCloseCancel,
    }
    var footerProps = {
      batchDelectFn:this.batchDelectFn,
      openGroupTo:this.openGroupTo,
      isEdit,
      save:this.save,
      popOpenCancel:this.popOpenCancel,
    }
    return (
      <Provider store={store} >
       <div style={{display:'flex'}}>
          {/* <div style={{width:300}}>sider</div> */}
          <Sider languagesJSON={languagesJSON} menuListUrl={this.props.menuListUrl}/>
          <Content languagesJSON={languagesJSON} manageListUrl = {this.props.manageListUrl}/>
          <Footer languagesJSON={languagesJSON} {...footerProps} />
          {/* <BatchMove {...batchMoveRedux} languagesJSON={languagesJSON}/> */}
          <PopDialogComp {...popDialogProps} languagesJSON={languagesJSON}/>
          <CustomDragLayer/>

      </div>
    </Provider>
     
    );
  }
}

export default DragDropContext(judgedBackend)(CreateManageModule);
