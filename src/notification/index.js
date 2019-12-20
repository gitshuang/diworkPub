import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'pub-comp/icon';
import Notification from 'bee/notification';
import { notification_mess, notification_cont, title_cont, warning_cont, success_cont, info_cont, error_cont, _title, _close, _tip } from "./index.css";


let _notification;
class NotificationMess extends Component {

  // static propTypes = {
  //   notice: PropTypes.string,
  //   close: PropTypes.fun,
  //   open:PropTypes.fun,
  //   title:PropTypes.string,
  //   type:PropTypes.string,
  //   className:""
  // }

  constructor(props) {
    super(props);

    this.notification = Notification.newInstance({
      position: 'topMiddle',
      transitionName: "Fade",
      className: this.getTypeNotifica() + " " + notification_mess,
      style: props.style
    });
  }

  getTypeNotifica = () => {
    const { type } = this.props;
    switch (type) {
      case "warning":
        return warning_cont;
      case "success":
        return success_cont;
      case "info":
        return info_cont;
      case "error":
        return error_cont;
    }
  }

  getTypeIcon = () => {
    const { type } = this.props;
    switch (type) {
      case "warning":
        return "notice";
      case "success":
        return "succeed";
      case "info":
        return "help-information";
      case "error":
        return "error4";
    }
  }

  open = (options) => {
    const { title, content, duration, closable } = this.props;
    const key = Date.now();
    const _closable = typeof closable === 'undefined' ? false : closable;
    this.notification.notice({
      content: (<div>
        <div className={_title}>
          <Icon className={_tip} type={this.getTypeIcon()} />
          <span className={title_cont}>{title}</span>
          {
            _closable ?
              <Icon type="error3" className={_close} onClick={this.close(this, key)} />
              : null
          }
        </div>
        {content ? <div className={notification_cont}>{content}</div> : null}
      </div>),
      key,
      duration: typeof duration === 'undefined' ? 1 : duration,
      closable: _closable,
      onClose: () => { _notification = null; }
    });
  }

  close = () => {

  }
}


function openMess(options) {
  // _notification = null;//防止notification一个页面只能打开一种，其他被覆盖
  if (!_notification) {
    _notification = new NotificationMess(options);
  }
  _notification.open(options);
}

export default NotificationMess;
export {
  openMess,
  close,
};


/**
组件使用方式
import NotificationMess,{openMess} from 'components/notification';
type 类型[warning,success,info,error]
openMess({
  title:"234",
  type:"error",
  content:"你所提交的信息已经审核失败，可以进入个人信箱查看原因， 如有疑问，请联系客服人员。"
});
**/
