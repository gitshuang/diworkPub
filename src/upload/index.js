import React, { Component } from 'react';
import Icon from '../icon';
import {
  upload_page, appImg, appValidate, edit, titlp_lab,
  // hidden_form, icon, form_btnFile, ie9_form,
} from './style.css';

class UploadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationIcon: "",
      imgWarning: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.logo != this.state.applicationIcon) {
      this.setState({
        applicationIcon: nextProps.logo
      })
    }
  }

  uploadImage = () => {
    this.refs.file.click();
  }

  imgChange = (e) => {
    const { logoError, logoError2 } = this.props;
    if (e.target.value.trim().length === 0) {
      this.setState({
        imgWarning: logoError
      });
    }
    let val = e.target.value && e.target.value.substr(e.target.value.lastIndexOf("."));
    if (val && !val.match(/.jpg|.gif|.png|.bmp|.svg/i)) {
      this.setState({
        imgWarning: logoError2
      });
      return false;
    } else {
      this.setState({
        imgWarning: false
      });
    }

    let obj = this.refs.file.files[0];
    const from = new FormData();
    from.append('file', obj);
    this.props.uploadApplication(from).then(({ url }) => {
      this.setState({
        applicationIcon: url
      });
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(url);
      }
    }, (e) => {
      console.log(e);
    });
  }

  render() {
    const { applicationIcon, imgWarning } = this.state;
    return (
      <div className={upload_page}>
        {
          applicationIcon == "" ? (
            <div className={`${appImg} imgsrc`} />
          ) : (
              <img id="imgSrc" src={applicationIcon} className={`${appImg} imgsrc`} />
            )
        }

        {
          imgWarning ? (
            <div className={appValidate}>{imgWarning}</div>
          ) : null
        }

        <div>
          <input type="file" ref="file" accept="image/x-png,image/gif,image/jpeg,image/bmp" onChange={this.imgChange} style={{ display: "none" }} />
          <div className={edit} onClick={this.uploadImage} >
            <Icon type="copyreader" />
          </div>
        </div>

        {
          this.props.tip ? <span className={titlp_lab}>{this.props.tip}</span> : ''
        }
      </div>
    )
  }
}

export default UploadPage;
