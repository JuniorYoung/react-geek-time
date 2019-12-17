import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class StatefulTabSelect extends PureComponent {
  static propTypes = {
    initialValue: PropTypes.string.isRequired,
    // value: PropTypes.string,
    options: PropTypes.array,
    // onChange: PropTypes.func
  };

  static defaultProps = {
    // value: null,
    options: [],
    initialValue: '',
    // onChange: () => {}
  };

  state = {
    value: this.props.initialValue
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("get derived");
  //   return { ...prevState, value: nextProps.value || nextProps.initialValue };
  // }
  handleSelect = selected => {
    console.log(selected);
    this.setState({ value: selected });
    // this.props.onChange(selected);
  };
  render() {
    console.log("render");
    const { options } = this.props;
    return (
      <div className="tab-selector">
        <ul>
          {options.map(opt => (
            <li
              key={opt.value}
              className={`tab-item ${
                opt.value === this.state.value ? "selected" : ""
              }`}
              onClick={() => this.handleSelect(opt.value)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const options = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" }
];

export function StatefulTabSelectSample(props) {
  return (
    <div>
      Select color: <StatefulTabSelect options={options} initialValue="red" />
    </div>
  );
}
