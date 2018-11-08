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
    placeholder: PropTypes.string,
    btnText: PropTypes.string,
    keywords: PropTypes.string,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    classname: PropTypes.string,
  }
  static defaultProps = {
    placeholder: '',
    btnText: '搜索',
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
    const { placeholder, btnText, keywords, onKeyDown, onChange, onClick, classname } = this.props;
    return (
      <div className={`${searchPanel} ${classname}`}>
        <FormControl
          className={serviceSearch}
          placeholder={placeholder}
          value={keywords}
          onKeyDown={onKeyDown}
          onChange={onChange}
        />
        <div className={search_icon_con} onClick={onClick}>
          <b>|</b>
          <Icon type="search" />
          <span>{btnText}</span>
        </div>
      </div>
    )
  }

}

export default SearchInput;
