import React from "react";
import "./main.css";
import PopUpDelele from "./popupdelete";

const buttonColor = {
  High: "btn-red",
  Medium: "btn-blue",
  Large: "btn-submit",
  Small: "btn-gray",
};

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || {},
      isShowPopUpDel: false,
    };
  }
  renderLevel() {
    if (this.isEditMode) {
      return (
        <div className="level-action justify-center">
          <select
            name="sort-add-list"
            id="sort-add-list"
            className=" select btn-default border-radius"
            onChange={(e) => this.changeValue("level", e.target.value)}
          >
            {/* <option value="">{this.state.level}</option> */}
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="High">High</option>
          </select>
        </div>
      );
    } else {
      return (
        <div className="level-action justify-center align-center">
          <div
            className={`btn ${
              buttonColor[this.state.data.level]
            } border-radius btn-b btn-small`}
          >
            {this.state.data.level}
          </div>
        </div>
      );
    }
  }

  changeValue(type, value) {
    this.changed[type] = value;
  }

  renderName() {
    if (this.isEditMode) {
      return (
        <div className="list-name justify-start">
          <input
            type="text"
            id="iname"
            // value={this.state.name}
            name="iname"
            className="input btn-default border-radius"
            onChange={(e) => this.changeValue("name", e.target.value)}
            placeholder={this.state.data.name}
          />
        </div>
      );
    } else {
      return (
        <div className="list-name justify-start">{this.state.data.name}</div>
      );
    }
  }
  renderAction() {
    if (this.isEditMode) {
      return (
        <div className="level-action flex-row flex-start ">
          <div
            className="btn btn-black btn-default border-radius font-medium"
            onClick={this.onCancel}
          >
            Cancel
          </div>
          <div
            className="btn btn-green btn-default border-radius font-medium"
            onClick={this.onSave}
          >
            Save
          </div>
        </div>
      );
    } else {
      return (
        <div className="level-action flex-row flex-start ">
          <div
            className="btn font-medium btn-orange border-radius"
            onClick={this.onEdit}
          >
            Edit
          </div>
          <div
            className="btn font-medium btn-red border-radius"
            onClick={this.onDelete}
          >
            Delete
          </div>
        </div>
      );
    }
  }

  onEdit = () => {
    this.isEditMode = true;
    this.changed = {};
    this.forceUpdate();
  };

  onSave = () => {
    if (Object.keys(this.changed).length) {
      const newData = Object.assign(this.state.data, this.changed);
      this.props.onSave(newData);
      this.isEditMode = false;
      this.setState({ data: newData });
    }
  };

<<<<<<< HEAD
  onDelete = () => {
    // this.popup && (this.popup.style.visibility = "visible");
    // this.popup.classList.toggle("invisible");
    // this.isShowPopUpDel = true;
    this.setState({
      isShowPopUpDel: true,
    });
  };
=======
  
>>>>>>> b17baca9b695951e6aa72cb0a0d2f7ec194cf8ba

  onCancel = () => {
    this.isEditMode = false;
    this.forceUpdate();
  };

  onPopUp = (yesno) => {
    if (yesno === "yes") {
      this.props.onDelete && this.props.onDelete(this.state.data.num);
      this.setState({ data: null });
    } else {
      this.setState({
        isShowPopUpDel: false,
      });
    }
  };
  renderPopUpDel() {
    return <PopUpDelele onPopUp={this.onPopUp} />;
  }

  render() {
    if (!this.state.data) return null;
    const { num } = this.state.data;
    return (
      <div className="list-item list-height flex-row border-radius">
        <div className="list-stt justify-center">{num}</div>
        {this.renderName()}
        {this.state.isShowPopUpDel ? this.renderPopUpDel() : null}
        {this.renderLevel()}
        {this.renderAction()}
      </div>
    );
  }
}
