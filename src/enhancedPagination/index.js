import React, { Component } from 'react';
import Pagination from 'bee/pagination';
//新增的三个
//onDataNumSelect func 下拉选择每页展示的数据数的时候
//dataNumSelect  array ，下拉的数据选择有哪些
//dataNumSelectActive number，默认选中的每页展示的数据数
// 函数接受一个组件参数……
import {enhanced_pagination,data_per_select,data_select,page_jump,page_jump_value,u_float_pagination
  } from './style.css';

const EnhancedPagination = WrappedComponent => {
    return class extends Component {
      static defaultProps = {
        first: true,
        last: true,
        prev: true,
        next: true,
        boundaryLinks: true,
        size: 'sm',
        gap: true,
        maxButtons: 7,
        dataNumSelect: [
          { id: 0, name: '5条/页' },
          { id: 1, name: '10条/页' },
          { id: 2, name: '15条/页' },
          { id: 3, name: '20条/页' }
        ],
        items: 0,
        activePage: 1,
        dataNum:undefined,
        enhancedPaginationText:{//因为多语
          jump:'跳至',
          jumpPage:'页'
        }
      }

      constructor(props){
        super(props);
        this.state = {
          activePage:this.props.activePage,//当前的页码
          dataNum:'1',//dataNumSelect的id 对应的时10条/页
        }
      }

      componentWillReceiveProps(nextProps){
        if (this.state.activePage !== nextProps.activePage){
          this.setState({
            activePage:nextProps.activePage,
          })
        }
      }

      onKeyup = (e) =>{
        e.keyCode === 13 && this.setPageJump(e)
      }

      setPageJump = (e) =>{
        let value = e.target.value;
        if((value < 1 && value!=='')||value > this.props.items || (value == 0 && value !== '')){
          return false;
        }else{
          //注意这里要将下拉的数据还原
          this.setState({activePage:value},function(){
            if(value!== '')this.props.onSelect(value*1)
          })
        }
      }

      dataNumSelect = (e) =>{
        let value = e.target.value;
        let dataNumValue = this.props.dataNumSelect[value].name
        this.setState({
          dataNum:value
        })
        if(this.props.onDataNumSelect){
          this.props.onDataNumSelect(value,dataNumValue)
        }
      }

      render() {
        const newProps = {
            maxButtons:5,
            boundaryLinks:true
        }
        const {onDataNumSelect,dataNumSelect,dataNum, enhancedPaginationText, ...restProps} = this.props
        return (
            <div className={enhanced_pagination}>
                <WrappedComponent  {...newProps} {...restProps}  className={u_float_pagination}/>
                <div className={data_per_select}>
                    <select  name="data-select" id="" className={data_select}  value={dataNum===undefined?this.state.dataNum:dataNum} onChange={e=>this.dataNumSelect(e)}>
                      {dataNumSelect.length > 0 && dataNumSelect.map((item, i) => {
                      return <option key={i} value={item.id}>{item.name}</option>
                      })}
                    </select>
                </div>
                <div className={page_jump}>
                    {enhancedPaginationText.jump}<input className={page_jump_value} type='number' value={this.state.activePage} onKeyDown={e=>this.onKeyup(e)} onChange={e=>this.setPageJump(e) }/>{enhancedPaginationText.jumpPage}
                </div>
            </div>
        )
      }
    }
  }

export default EnhancedPagination(Pagination);
