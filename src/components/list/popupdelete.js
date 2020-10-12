import React from "react";
import "./main.css";
export default class PopUpDelele extends React.Component {
  constructor(props) {
    super(props);
    this.yes = this.yes.bind(this);
    this.no = this.no.bind(this);
  }
  yes() {
    this.props.onPopUp && this.props.onPopUp("yes");
  }
  no = () => {
    this.props.onPopUp && this.props.onPopUp(null);
  };

  render() {
    return (
      <div class="groundPopup" onClick={this.no}>
        <div
          className={`popupDel border-radius btn-default align-center flex-column justify-around`}
          // style={{ visibility: "visible" }}
          ref={(ref) => (this.popup = ref)}
        >
          <div> Are you sure? </div>
          <div className="flex-row justify-center align-center">
            <div
              className="yesno btn  border-radius btn-blue justify-center align-center"
              onClick={this.yes}
            >
              Yes
            </div>
            <div
              className="yesno btn border-radius btn-red justify-center align-center"
              onClick={this.no}
            >
              No
            </div>
          </div>
        </div>
      </div>
    );
  }
}
