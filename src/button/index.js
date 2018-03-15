import React, { Component } from 'react';
import Button from 'bee/button';
import {btn,brand_btn,default_btn,default_line_btn,default_alpha_btn,check_selected_btn,check_close_btn,danger_btn,warning_btn,default_white_btn} from './style.css';

//品牌色
const ButtonBrand = ({ ...props }) => {
    const { children ,disabled, className} = props;
  return (<Button className={`${btn} ${brand_btn} ${className ? className : ''}`} disabled={disabled} onClick={(e)=>{props.onClick(e,...props)}}>{children}</Button>);
};

//通用按钮
const ButtonDefault = ({ ...props }) => {
    const { children ,disabled} = props;
    return(<Button className={`${btn} ${default_btn}`} disabled={disabled} onClick={(e)=>{props.onClick(e,...props)}}>{children}</Button>);
};

//带边框
const ButtonDefaultLine = ({ ...props }) => {
    const { children ,disabled} = props;
    return(<Button className={`${btn} ${default_line_btn}`} type="button" disabled={disabled} onClick={(e)=>{props.onClick(e,...props)}}>{children}</Button>);
};

//默认背景透明
const ButtonDefaultAlpha = ({ ...props }) => {
    const { children ,disabled} = props;
    return(<Button className={`${btn} ${default_alpha_btn}`} disabled={disabled} onClick={(e)=>{props.onClick(e,...props)}}>{children}</Button>);
};

//默认背景透明
const ButtonCheckSelected = ({ ...props }) => {
    const { children ,disabled,id} = props;
    const attribute = id?{id}:{};
    return(<Button {...attribute} className={`${btn} ${check_selected_btn}`} disabled={disabled} onClick={(e)=>{props.onClick(e,...props)}}>{children}</Button>);
};
//默认背景透明
const ButtonCheckClose = ({ ...props }) => {
    const { children ,disabled} = props;
    return(<Button className={`${btn} ${check_close_btn}`} disabled={disabled} onClick={(e)=>{props.onClick(e,...props)}}>{children}</Button>);
};

//默认白色背景带边框
const ButtonDefaultWhite = ({ ...props }) => {
    const { children ,disabled} = props;
    return(<Button className={`${btn} ${default_white_btn}`} disabled={disabled} onClick={(e)=>{props.onClick(e,...props)}}>{children}</Button>);
};

//危险
const ButtonDanger = ({ ...props }) => {
    const { children ,disabled} = props;
    return(<Button className={`${btn} ${danger_btn}`} disabled={disabled} onClick={(e)=>{props.onClick(e,...props)}}>{children}</Button>);
};

//警告
const ButtonWarning = ({ ...props }) => {
    const { children ,disabled} = props;
    return(<Button className={`${btn} ${warning_btn}`} disabled={disabled} onClick={(e)=>{props.onClick(e,...props)}}>{children}</Button>);
};

export default ButtonDefault;
export { ButtonDanger,ButtonBrand,ButtonDefaultAlpha, ButtonDefaultLine,ButtonWarning,
  ButtonCheckClose,ButtonCheckSelected,ButtonDefaultWhite};

/**
参数

type: PropTypes.string, 后续拓展，暂无
label: PropTypes.string, 显示文字
onClick:PropTypes.fun,   按钮回调事件
data:PropTypes.object   回调事件回带数据Object格式

<div style={{width:"500px",height:"600px",padding:"10px"}}>
<ButtonBrand />  品牌色
<ButtonDefault />  通用按钮
<ButtonDefaultLine /> 通用按钮带边框
<ButtonDefaultAlpha /> 通用按钮无背景
<ButtonWarning />   告警
<ButtonDanger />  危险

</div>
**/