import React, { Component } from "react";

export default class Counter extends Component {
 
  styles = {
    fontSize: 15,
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  };

  // renderTags = () => {
  //   if (this.state.tags.length === 0) return <p>Tere are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag, index) => (
  //         <li key={index}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // };


  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span> 
        <button
          onClick={ () => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm m-2"
        >
          Increment
        </button>
        {/* <ul>{this.renderTags()}</ul> */}
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
      </div>
    );
  }
}

