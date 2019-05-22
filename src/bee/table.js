import 'bee-table/build/Table.css';
if (window.location.origin.indexOf("u8c") > -1) {
  require("./table_u8c.css");
}

/*
* 行选中状态，添加selected类名
* 操作按钮的父元素用action-btns-container类名，按钮添加action-btn
* */
export * from 'bee-table';
export { default } from 'bee-table';
