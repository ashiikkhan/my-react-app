import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <h2>This is Clock component</h2>
        <h1>
          <span>
            Hello {this.props.user} ! It is
            {this.state.date.toLocaleTimeString(this.props.locale)}
          </span>
        </h1>
      </div>
    );
  }
}

export default Clock;

/**
 * State is "data that changes "
 * React actually reacts two times when state changes and props changes (props can be changed by it's parents)
 * state is a javascript object
 * "super " just calls the base class constructor
 * componentDidMount() runs after component has been rendered to the DOM
 *
 */
