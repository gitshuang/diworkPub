import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../bee/form-control';
import Icon from '../icon';
import {
  searchPanel,
  serviceSearch,
  search_icon_con,
} from './index.css';
class SearchInput extends Component {
  static propTypes = {
    keywords: PropTypes.string,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    classname: PropTypes.string,
  }
  static defaultProps = {
    keywords: '',
    onKeyDown: () => { },
    onChange: () => { },
    onClick: () => { },
    classname: ''
  }
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    const { keywords, onKeyDown, onChange, onClick, classname } = this.props;
    return (
      <div className={`${searchPanel} ${classname}`}>
        <FormControl
          className={serviceSearch}
          placeholder="搜索人员信息、服务及其他内容"
          value={keywords}
          onKeyDown={onKeyDown}
          onChange={onChange}
        />
        <div className={search_icon_con} onClick={onClick}>
          <b>|</b>
          <Icon type="search" />
          <span>搜索</span>
        </div>
      </div>
    )
  }

}

export default SearchInput;
