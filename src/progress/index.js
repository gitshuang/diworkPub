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
        const {tenantId,startFlag} = this.props;
        startFlag && this.goToLoading()
    }


    componentWillReceiveProps = (nextProps) =>{
        const {tenantId,startFlag} = nextProps;
        startFlag && this.goToLoading(tenantId)
    }

    goToLoading = (tenantId) =>{
        const tenantIdVal = tenantId || this.props.tenantId;
        const {check,idRequire} = this.props;
        //必须第一个接口返回id就立刻执行加载
        if(idRequire && (tenantIdVal == '' || tenantIdVal == undefined)) {return false;};
        let self = this;
        let perValue  = (Math.floor(Math.random()*10+1));//输出1～10之间的随机整数
        if(self.state.processValue < 90 ){
            self.setState({processValue:self.state.processValue+perValue})
        }
        check(tenantIdVal,this.loadingFunc,this.successFunc);
    }

    loadingFunc = () =>{
        const {check,tenantId,idRequire} = this.props;
        let perValue  = (Math.floor(Math.random()*10+1));//输出1～10之间的随机整数
        let self = this;
        if(this.state.processValue < 90 ){
            this.setState({processValue:this.state.processValue+perValue})
        }
        //当不需要第一个接口返回id立刻执行加载
        if(!idRequire && this.state.processValue < 100){
            setTimeout(function () {
                check(tenantId,self.loadingFunc,self.successFunc);
            }, 500)
        }
    }
    successFunc = () =>{
        const {tenantId}  = this.props;
        ProgressBar.done();
        this.setState({processValue:100})//直接结束
        setTimeout(() => {
          window.location.href  ="/?tenantId=" + tenantId + "&switch=true";
        }, 600);
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