import React, { Component } from "react";
import ComponentB from "./componentB";

class ComponentA extends Component {
  static defaultProps = {
    dataSource: [
      {
        m: 1,
        n: 2
      }
    ]
  };
  state = {
    aa: {}
  };
  checkAndChange = () => {};
  render() {
    const { dataSource } = this.props;
    return (
      <div>
        {dataSource.map((item, idx) => (
          <div>
            <ComponentB
              idx={idx}
              item={this.state.aa}
              checkAndChange={this.checkAndChange}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ComponentA;
