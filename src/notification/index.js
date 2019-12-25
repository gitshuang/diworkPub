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
    this.key = 0;
  }

  getTypeNotifica = (type) => {
    // const { type } = this.props;
    type = type || this.props.type;
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

  getTypeIcon = (type) => {
    // const { type } = this.props;
    type = type || this.props.type;
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
    const { title, content, duration, closable, type } = options;
    if (this.key) {
      this.notification.destroy();
      this.notification = Notification.newInstance({
        position: 'topMiddle',
        transitionName: "Fade",
        className: this.getTypeNotifica(type) + " " + notification_mess,
      });
    }
    const key = Date.now();
    this.key = key;
    const _closable = typeof closable === 'undefined' ? false : closable;
    this.notification.notice({
      content: (<div>
        <div className={_title}>
          <Icon className={_tip} type={this.getTypeIcon(type)} />
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