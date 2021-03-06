import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import Modal from 'bee/modal';
import { IS_IE } from '../utils';
import Icon from '../icon';
import {
  ButtonBrand, ButtonWarning, ButtonDefaultAlpha, ButtonDanger,
  ButtonU8c, ButtonU8cPrimary, ButtonU8cDefault
} from '../button';
import { btn, closeBtn, pop_type, error, warning, danger, success } from './style.css';

class PopDialog extends Component {
  static propTypes = {
    title: PropTypes.string,
    show: PropTypes.bool,
    btns: PropTypes.array,
    close: PropTypes.any,
    data: PropTypes.any,
    type: PropTypes.string,
    backdrop: PropTypes.bool,
    id: PropTypes.string,
  }

  static defaultProps = {
    backdrop: false
  };

  btnClick = (evt, da) => {
    let e = evt || window.event;
    window.event ? e.cancelBubble = true : e.stopPropagation();
    let _data = this.props.data ? this.props.data : this;
    if (typeof da.fun === 'function') {
      da.fun(_data, e)
    } else {
      const { close } = this.props;
      if (typeof close === 'function') {
        close();
      }
    }
  }

  getTypeIcon = (type) => {
    switch (type) {
      case 'error':
        return "error4";
      case 'warning':
        return "notice";
      case 'danger':
        return "help-information";
      case 'success':
        return "succeed";
    }
    return "";
  }

  getTypeClass = (type) => {
    switch (type) {
      case 'error':
        return error;
      case 'warning':
        return warning;
      case 'danger':
        return danger;
      case 'success':
        return success;
    }
    return "";
  }

  //此方法类型，和窗口类型保持一致，且增加其他没有的类型，后续用到哪些可自动增加。
  getButtonType = (type, da, key) => {
    let _className = da.className ? da.className : '';
    switch (type) {
      case 'error':
        return <ButtonDanger key={"danger_pop_btn" + key} onClick={(e) => { this.btnClick(e, da) }} className={`${_className} ${btn} danger`} disabled={da.disable ? true : false} >{da.label}</ButtonDanger>;
      case 'warning':
        return <ButtonWarning key={"warning_pop_btn" + key}
          onClick={(e) => { this.btnClick(e, da) }}
          className={`${_className} ${btn} warning`}
          disabled={da.disable ? true : false} >{da.label}</ButtonWarning>;
      case 'danger':
        return <ButtonBrand key={"brand_pop_btn" + key}
          onClick={(e) => { this.btnClick(e, da) }}
          className={`${_className} ${btn} brand`}
          disabled={da.disable ? true : false} >{da.label}
        </ButtonBrand>;
      case 'defaultAlpha':
        return <ButtonDefaultAlpha key={"brand_pop_btn" + key}
          onClick={(e) => { this.btnClick(e, da) }}
          className={`${_className} ${btn} defaultalpha`}
          disabled={da.disable ? true : false} >{da.label}
        </ButtonDefaultAlpha>;
      case 'u8c':
        return <ButtonU8c key={"u8c_pop_btn" + key}
          onClick={(e) => { this.btnClick(e, da) }}
          className={`${_className} ${btn} `}
          disabled={da.disable ? true : false} >{da.label}
        </ButtonU8c>;
      case 'u8cPrimary':
        return <ButtonU8cPrimary key={"u8cPrimary_pop_btn" + key}
          onClick={(e) => { this.btnClick(e, da) }}
          className={`${_className} ${btn} `}
          disabled={da.disable ? true : false} >{da.label}
        </ButtonU8cPrimary>;
      case 'u8cDefault':
        return <ButtonU8cDefault key={"u8cDefault_pop_btn" + key}
          onClick={(e) => { this.btnClick(e, da) }}
          className={`${_className} ${btn} `}
          disabled={da.disable ? true : false} >{da.label}
        </ButtonU8cDefault>;

    }
    return "";
  }

  getButtonList = () => {
    const { btns, data } = this.props;
    let _btns = [];
    if (!btns || btns.length == 0) return _btns;
    btns.map((da, i) => {
      let _button = null;
      if (da.type) {
        _button = this.getButtonType(da.type, da, i);
      } else {
        _button = i === 0 ? this.getButtonType("danger", da, i) : this.getButtonType("defaultAlpha", da, i);
      }
      _btns.push(_button);
    })
    return _btns;
  }

  render() {
    const { type, backdrop, id } = this.props;
    let _btns = this.getButtonList();

    // if(this.props.btns){
    //     let _data = this.props.data ? this.props.data : this;
    //     this.props.btns.map((da,i)=>{
    //         let _className = da.className ? da.className : null;
    //         let _defultAlphaButton = <ButtonDefaultAlpha key={"pop_btn"+i} onClick={ (e) => { this.btnClick(e,da) } } className={`${_className} ${btn} defaultalpha`} >{da.label}</ButtonDefaultAlpha>;
    //         let _button =  null;
    //         if(this.props.type == "delete"){
    //            _button = i===0?<ButtonWarning key={"pop_btn"+i} onClick={ (e) => { this.btnClick(e,da)} } className={`${_className} ${btn} warning`} >{da.label}</ButtonWarning>:_defultAlphaButton;
    //         }else{
    //            _button = i===0?<ButtonBrand key={"pop_btn"+i} onClick={ (e) => { this.btnClick(e,da) } } className={`${_className} ${btn} brand`} disabled={da.disable?true:false} >{da.label}</ButtonBrand>:_defultAlphaButton;
    //         }
    //         _btns.push(_button);
    //     })
    // }

    // this.props.backdrop?false:true
    return (
      <Modal className={`${IS_IE ? 'ie9_pop' : ''} ${this.props.className ? `pop_dialog ${this.props.className}` : "pop_dialog"} ${pop_type} ${this.getTypeClass(this.props.type)}`} backdrop={backdrop} show={this.props.show} onHide={this.props.close} animation={false}>
        <Modal.Header>
          <Modal.Title>
            {type ? <Icon type={this.getTypeIcon(type)} /> : ""}
            {this.props.title}
            <div className={`${closeBtn} close`}>
              <Icon type="error3" id={`${id}_close`} onClick={this.props.close} />
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            {this.props.children ? this.props.children : (this.props.msg ? this.props.msg : '')}
          </div>


        </Modal.Body>

        <Modal.Footer>
          {_btns}
        </Modal.Footer>
      </Modal>
    )
  }

}

// const PopDialog = ({ ...props }) => {
//   // const { children ,disabled} = props;
//   return(<PopDialogComponent {...props} />)
// };

// class DialogComponent extends Component{
//   static defaultProps = {
//     title: '',
//     content: '',
//     btns: [],
//     show: true,
//     backdrop:true,
//   }
//   btnClickMaker(fn,disable) {
//     if(disable)return;
//     const { close } = this.props;
//     if (fn && typeof fn === 'function') {
//       return () => {
//         fn(close);
//       };
//     } else {
//       return close;
//     }
//   }
//   render(){
//     const {
//       title,
//       content,
//       show,
//       btns,
//       close,
//       backdrop,
//     } = this.props;
//     return(
//       <Modal className="pop_dialog" backdrop={backdrop} show={show}>
//         <Modal.Header>
//           <Modal.Title>{title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div>
//             {content}
//           </div>
//           <div className={closeBtn} onClick={close} >
//             <Icon type="error3" />
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           {
//             btns.map(({ type, label, fun ,disable}, i) => {
//               if (!label) {
//                 return null;
//               }
//               let BtnComponent = ButtonDefaultAlpha;
//               switch(type) {
//                 case 'brand':
//                   BtnComponent = ButtonBrand;
//                   break;
//                 case 'warning':
//                   BtnComponent = ButtonWarning;
//                   break;
//                 default:
//                   break;
//               }
//               return (
//                 <BtnComponent disabled={disable?true:false}
//                   key={i}
//                   className={btn}
//                   onClick={()=>{this.btnClickMaker(fun,_disable)}} >
//                   {label}
//                 </BtnComponent>
//               );
//             })
//           }
//         </Modal.Footer>
//       </Modal>
//     )
//   }
// }

class Dialog {
  constructor(options) {
    this.div = document.createElement('div');
    this.props = {
      ...options,
      close: options.close ? options.close.bind(this) : this.close.bind(this),
    };
    document.body.appendChild(this.div);
    this.render();
  }
  close = () => {
    const {
      props,
      props: {
        onClose,
      },
    } = this;
    if (typeof onClose === 'function' && !onClose()) {
      return;
    }
    props.show = false;
    var pro = new Promise(
      (resolve) => {
        this.render();
        setTimeout(() => {
          resolve();
        }, 1000);
      }
    );
    pro.then(this.destroy.bind(this));
  }
  render = () => {
    const { props, div } = this;
    ReactDOM.render(<PopDialog {...props} show={true}>{this.props.content}</PopDialog>, div);
    return this;
  }
  destroy = () => {
    const {
      div,
    } = this;
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
}

let globalDialogInstance;
let dialogIsOpen = false;
function makeGlobalDialogInstance(options) {
  globalDialogInstance = new Dialog(options);
  return globalDialogInstance;
}
function openGlobalDialog(options) {
  // if (dialogIsOpen) {
  //   return;
  // }
  // dialogIsOpen = true;
  const dialogFactory = makeGlobalDialogInstance.bind(null, options);
  if (globalDialogInstance) {
    globalDialogInstance.destroy();
  }
  let instance = dialogFactory();
  return instance;
}
function closeGlobalDialog() {
  if (globalDialogInstance) {
    globalDialogInstance.close();
  }
}
// window.dialog = dialog;
export default PopDialog;
export {
  openGlobalDialog,
  closeGlobalDialog,
};
