import React, { Component } from 'react';
import ManageFolderDialog from './manageFolderDialog';

export default class FolderDialog extends Component{
  constructor(props){
    super(props);
  }

  static defaultProps = {}

  render(){
    var {
      curDisplayFolder,
      folderModalDisplay,
      closeFolder,
      moveService,
      manageList,
      curEditFolderId,
      selectList,
      selectGroup,
      currGroupIndex,
      drag,
      deleteFolder,
      renameFolder,
      setFolderEdit,
      selectListActions,selectGroupActions,
      addFolder,
      delectService,
      languagesJSON
    } = this.props;
    var folderDialogProps = {
      curDisplayFolder,
      folderModalDisplay,
      closeFolder,
      moveService
    }
    var widgetItemProps ={
      manageList,
      curEditFolderId,
      selectList,
      selectGroup,
      currGroupIndex,
      drag,
      deleteFolder,
      renameFolder,
      setFolderEdit,
      selectListActions,selectGroupActions,
      addFolder,
      delectService
    }
    return (
      <div className="manageDialog">
        <ManageFolderDialog { ...folderDialogProps } {...widgetItemProps} languagesJSON={languagesJSON}/>
      </div>
    )
  }
}




