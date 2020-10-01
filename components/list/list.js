import React from "react";
import "./main.css";
import Item from "./item";
export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      { num: 1, name: "trúng lô", level: "High" },
      { num: 2, name: "ăn xiên", level: "Medium" },
      { num: 3, name: "tạch", level: "Small" },
      { num: 4, name: "đoàng", level: "Medium" },
      { num: 5, name: "đoàng đoàng", level: "Large" },
    ];
    this.onSearch = this.onSearch.bind(this);
    this.onAdd = this.onAdd.bind(this);
    props.register &&
      props.register({
        search: this.onSearch,
        add: this.onAdd,
      });
  }

  onSearch(textSearch) {
    if (textSearch) {
      const newData = this.data.filter((e) => e.name.includes(textSearch));
      this.data = newData;
    }
    this.forceUpdate();
  }
  onAdd(objData) {
    const newData = [...this.data];
    newData.push(objData);
    this.data = newData;
    this.forceUpdate();
  }

  renderTitle() {
    return (
      <div className="list-title list-height align-center justify-start border-radius">
        List Item
      </div>
    );
  }
  renderHeader() {
    return (
      <div className="list-item list-height align-center">
        <div className="list-stt">
          <b>STT</b>
        </div>
        <div className="list-name justify-start">
          <b>Name</b>
        </div>
        <div className="level-action">
          <b>Level</b>
        </div>
        <div className="level-action justify-start">
          <b>Action</b>
        </div>
      </div>
    );
  }

  onDelete = (stt) => {
    const deleteIndex = this.data.findIndex((e) => e.num === stt);
    if (deleteIndex !== -1) this.data.splice(deleteIndex, 1);
  };
  onSave = (data) => {
    this.data[this.data.findIndex((e) => e.num === data.num)] = data;
    // this.data[this.data.findIndex((e) => e.num === id)].name = name;
    // this.data[this.data.findIndex((e) => e.num === id)].level = level;
    console.log(this.data);
  };

  renderListData() {
    return (
      <div>
        {this.data.map((e) => {
          return (
            <Item data={e} onDelete={this.onDelete} onSave={this.onSave} />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className=" main-list border-radius">
        {this.renderTitle()}
        {this.renderHeader()}
        {this.renderListData()}
      </div>
    );
  }
}
