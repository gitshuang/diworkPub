import React, { Component } from 'react';
import ProgressBar from 'bee-progress-bar';
import 'bee-progress-bar/build/ProgressBar.css';
import Icon from '../icon';
import{ progress_wrap,progress_loading,progress_load_icon,loading_desc} from './style.css';

class  Progress extends Component {
    constructor(props){
        super(props);
        this.state={
            processValue:0,//默认开始的是0
        }
    }

    componentDidMount = () =>{
        const {startFlag} = this.props;
        startFlag && this.goToLoading()
    }


    componentWillReceiveProps = (nextProps) =>{
        const {startFlag} = nextProps;
        startFlag && this.goToLoading()
    }

    goToLoading = () =>{
        let perValue  = (Math.floor(Math.random()*10+1));//输出1～10之间的随机整数
        if(this.state.processValue < 90 ){
            this.setState({processValue:this.state.processValue+perValue})
        }
        //回调函数
        this.props.loadingCallBack(this.loadingFunc,this.successFunc);
    }

    loadingFunc = () =>{
        let perValue  = (Math.floor(Math.random()*10+1));//输出1～10之间的随机整数
        if(this.state.processValue < 90 ){
            this.setState({processValue:this.state.processValue+perValue})
        }
    }
    successFunc = () =>{
        const {successFunc}  = this.props;
        this.setState({processValue:100})//直接结束
        ProgressBar.done();
        if(typeof(successFunc) === 'function'){
            successFunc();
        } else {
            setTimeout(() => {
            window.location.href  ="/?tenantId=" + tenantId + "&switch=true";
            }, 600);
        }
       
    }

    render(){
        const {loadingDesc}  = this.props
        let now = this.state.processValue;
        return(
            <div className={progress_wrap}>
                <ProgressBar  className={ progress_loading } striped={false} now = {now} label={`${now}%`} ></ProgressBar>
                <Icon className={progress_load_icon} type="loading" />
                <span className={loading_desc}>{loadingDesc?loadingDesc:'正在配置信息…'}</span>
            </div>
        )
    }
    
}

export default Progress;