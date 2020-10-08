import React from "react";
import "./main.css";
import Item from "./item";
import Paginate from "./paginate";

const PAGE_SIZE = 5;
let curPage = 1;

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.originData = [];
    this.onSearch = this.onSearch.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onSort = this.onSort.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    props.register &&
      props.register({
        search: this.onSearch,
        add: this.onAdd,
        sort: this.onSort,
      });
  }

  componentDidMount() {
    this.data = [
      { num: "", name: "trúng lô", level: "High" },
      { num: "", name: "ăn xiên", level: "Medium" },
      { num: "", name: "tạch", level: "Small" },
      { num: "", name: "đoàng", level: "High" },
      { num: "", name: "đoànggg", level: "Medium" },
      { num: "", name: "đoàng đoànggg", level: "High" },
      { num: "", name: "success ", level: "High" },
      { num: "", name: "success success", level: "Small" },
      { num: "", name: "bumf ", level: "Small" },
      { num: "", name: "bumf bumf ", level: "Medium" },
      { num: "", name: "xx ", level: "High" },
      { num: "", name: "xxx ", level: "Large" },
      { num: "", name: "yy ", level: "High" },
      { num: "", name: "yyy ", level: "Medium" },
      { num: "", name: "zz ", level: "Large" },
      { num: "", name: "zzz ", level: "Medium" },
    ];
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].num = i + 1;
    }

    this.originData = [...this.data];
    if (this.data.length > PAGE_SIZE) {
      this.data.length = PAGE_SIZE;
    }
    this.forceUpdate();
  }

  onSearch(textSearch) {
    if (textSearch) {
      const newData = this.data.filter((e) => e.name.includes(textSearch));
      this.data = newData;
    } else {
      this.data = this.originData;
    }
    this.forceUpdate();
  }
  onAdd(objData) {
    objData["num"] = this.originData.length + 1;
    this.originData.unshift(objData);
    if (curPage === 1) {
      this.data = this.originData.slice(0, 5);
    }
    this.forceUpdate();
  }
  onChangePage(currentPage) {
    this.data = this.originData.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE
    );
    curPage = currentPage;
    this.forceUpdate();
  }
  onSort(sortValue) {
    if (sortValue === "Alphabet-Asc")
      this.data = this.originData
        .sort((a, b) => a.name.localeCompare(b.name, "vi"))
        .slice(0, 5);
    else {
      this.data = this.originData
        .sort((a, b) => b.name.localeCompare(a.name, "vi"))
        .slice(0, 5);
    }
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
  };

  renderListData() {
    return (
      <div>
        {this.data.map((e) => {
          return (
            <Item
              key={`item_${e.num}`}
              data={e}
              onDelete={this.onDelete}
              onSave={this.onSave}
            />
          );
        })}
      </div>
    );
  }
  renderPaginate() {
    return (
      <Paginate
        count={this.data.length}
        totalCount={this.originData.length}
        onChangePage={this.onChangePage}
        onAdd={this.onAdd}
      />
    );
  }

  render() {
    return (
      <div className=" main-list border-radius">
        {this.renderTitle()}
        {this.renderHeader()}
        <div className="item-scroll">{this.renderListData()}</div>
        {this.renderPaginate()}
      </div>
    );
  }
}
