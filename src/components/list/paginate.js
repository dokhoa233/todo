import React from "react";
import "./main.css";
import Back from "@material-ui/icons/ChevronLeft";
import Next from "@material-ui/icons/ChevronRight";
import First from "@material-ui/icons/FirstPage";
import Last from "@material-ui/icons/LastPage";

const PAGE_SIZE = 5;

export default class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0,
      totalCount: props.totalCount || 0,
      totalPage: Math.ceil(props.totalCount / PAGE_SIZE),
      currentPage: 1,
    };
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onFirst = this.onFirst.bind(this);
    this.onLast = this.onLast.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      count: nextProps.count || 0,
      totalCount: nextProps.totalCount || 0,
      totalPage: Math.ceil(nextProps.totalCount / PAGE_SIZE),
    });
  }

  onBack() {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 }, () => {
        this.props.onChangePage &&
          this.props.onChangePage(this.state.currentPage);
      });
    }
  }
  onNext() {
    if (this.state.currentPage < this.state.totalPage) {
      this.setState({ currentPage: this.state.currentPage + 1 }, () => {
        this.props.onChangePage &&
          this.props.onChangePage(this.state.currentPage);
      });
    }
  }
  onFirst() {
    this.props.onChangePage && this.props.onChangePage(1);
  }
  onLast() {
    this.props.onChangePage && this.props.onChangePage(this.state.totalPage);
  }

  render() {
    const from = (this.state.currentPage - 1) * PAGE_SIZE + 1;
    const count =
      this.state.totalPage > this.state.currentPage
        ? from + 4
        : this.state.totalCount;
    return (
      <div className="flex-row justify-between">
        <div>
          {" "}
          {from} to {count} of {this.state.totalCount}
        </div>
        <div className="flex-row">
          <div onClick={this.onFirst}>
            <First />
          </div>
          <div onClick={this.onBack}>
            <Back />
          </div>{" "}
          <div className="align-center">
            Page {this.state.currentPage} of {Math.ceil(this.state.totalPage)}{" "}
          </div>
          <div onClick={this.onNext}>
            <Next />
          </div>
          <div onClick={this.onLast}>
            <Last />
          </div>
        </div>
      </div>
    );
  }
}
