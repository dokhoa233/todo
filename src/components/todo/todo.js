import React from "react";
import "./todo.css";
import Search from "../list/search";
import Add from "../list/add";
import List from "../list/list";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.search = null;
    this.add = null;
    this.sort = null;
  }

  onSearch = (textSearch) => {
    this.search && this.search(textSearch);
  };
  onAdd = (objData) => {
    this.add && this.add(objData);
  };
  onSort = (sortValue) => {
    this.sort && this.sort(sortValue);
  };
  registerFunction = (fn) => {
    this.search = fn.search;
    this.add = fn.add;
    this.sort = fn.sort;
  };

  renderTitle() {
    return (
      <div className="header">
        <div className="title">Project 01 - To Do List</div>
        <div className="sub-title">ReactJs</div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div>{this.renderTitle()}</div>
        <div className="search-add flex-row">
          <Search onSearch={this.onSearch} onSort={this.onSort} />
          <Add onAdd={this.onAdd} />
        </div>
        <List register={this.registerFunction} />
      </div>
    );
  }
}
