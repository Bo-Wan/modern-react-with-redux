import React from 'react';

class Clock extends React.Component {

    state = { time: null }
        componentDidMount() {
          setInterval(() => {
            this.setState({time:new Date().toLocaleTimeString()})
          }, 100)
        }

        render() {
            return (
                <div className="time">
                    The time is: {this.state.time}
                </div>
            );
        }
    }

export default Clock;
