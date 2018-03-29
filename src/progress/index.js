import React, { Component } from 'react';
import ProgressBar from 'bee-progress-bar';
import 'bee-progress-bar/build/ProgressBar.css';
import Icon from '../icon';
import{ process_loading,loading_desc} from './style.css';

class  Progress extends Component {
    constructor(props){
        super(props);
        this.state={
            processValue:0,//默认开始的是0
        }
    }

    componentWillReceiveProps = (nextProps) =>{
        const {tenantId,startFlag} = nextProps;
        startFlag && this.goToLoading(tenantId)
    }

    goToLoading = (tenantId) =>{
        const {check } = this.props;
        let self = this;
        let perValue  = (Math.floor(Math.random()*10+1));//输出1～10之间的随机整数
        if(self.state.processValue < 90 ){
            self.setState({processValue:self.state.processValue+perValue})
        }
        check(tenantId,this.goToLoading,this.goToLoadingAfter);
    }

    goToLoadingAfter = (loadingInterVal) =>{
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
            <div>
                <ProgressBar  className={ process_loading } striped={false} now = {now} label={`${now}%`} ></ProgressBar>
                <Icon type="loading" />
                <span className={loading_desc}>{loadingDesc?loadingDesc:'正在配置信息…'}</span>
            </div>
        )
    }
    
}

export default Progress;