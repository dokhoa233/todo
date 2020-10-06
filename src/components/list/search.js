import React from "react";
import "./main.css";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSort: "",
      data: props.data || {},
    };
  }
  renderSearch() {
    return (
      <input
        ref={(ref) => (this.input = ref)}
        className="input-search font-15px align-center btn-default"
        type="text"
        id="search"
        name="search"
        placeholder="Search Item Name"
        onChange={(e) => this.onChange(e.target.value)}
      />
    );
  }
  reset = () => {
    this.input && (this.input.value = "");
  };
  onChange = (textSearch) => {
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.onSearch && this.props.onSearch(textSearch);
    }, 1000);
  };
  onClear = () => {
    this.reset();
  };

  renderClear() {
    return (
      <div
        className="btn btn-blue font-15px clear-search align-center justify-center"
        onClick={this.onClear}
      >
        Clear
      </div>
    );
  }

  renderSortby() {
    return (
      <div className="flex-row">
        <select
          name="sortsearch"
          id="sortsearch"
          className="sort-search align-center justify-center border-radius font-15px"
          onChange={(e) => this.changeSortValue(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="Alphabet-Asc">Alphabet-Asc (A-Z)</option>
          <option value="Alphabet-Desc">Alphabet-Desc (Z-A)</option>
        </select>
        <div className="add-item btn btn-green border-radius align-center">
          {this.state.nameSort}
        </div>
      </div>
    );
  }

  changeSortValue = (value) => {
    this.setState({ nameSort: value });
    this.props.onSort && this.props.onSort(value);
  };

  render() {
    return (
      <div className="search-sort flex-row">
        <div className="main-search flex-row">
          {this.renderSearch()}
          {this.renderClear()}
        </div>
        <div className="flex-row">{this.renderSortby()}</div>
      </div>
    );
  }
}
