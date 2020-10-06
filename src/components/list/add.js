import React from "react";
import "./main.css";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.objData = {};
  }
  reset = () => {
    this.input && (this.input.value = "");
    this.select && (this.select.selectedIndex = 0);
  };
  onCancel = () => {
    this.objData = {};
    this.reset();
  };
  onAdd = (type, value) => {
    this.objData[type] = value;
  };
  onSubmit = () => {
    this.props.onAdd && this.props.onAdd(this.objData);
    this.objData = {};
    this.reset();
  };

  renderAdd() {
    return (
      <div className="flex-column">
        <div className="btn btn-blue border-radius">Add Item</div>
        <div className="sub-add flex-row">
          <input
            ref={(ref) => (this.input = ref)}
            className="font-15px btn-default item align-center border-radius"
            type="text"
            id="add"
            name="add"
            placeholder="Item Name"
            onChange={(e) => this.onAdd("name", e.target.value)}
          />
          <select
            ref={(ref) => (this.select = ref)}
            name="sortadd"
            id="sortadd"
            className="sort-add item align-center justify-center border-radius font-15px"
            onChange={(e) => this.onAdd("level", e.target.value)}
          >
            <option value="">Level</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="High">High</option>
          </select>
          <div
            className="btn item btn-submit border-radius"
            onClick={this.onSubmit}
          >
            Submit
          </div>
          <div
            className="btn item btn-black btn-default border-radius"
            onClick={this.onCancel}
          >
            Cancel
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderAdd()}</div>;
  }
}
