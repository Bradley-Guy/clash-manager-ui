import React from 'react';
import classes from './Slider.module.css'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }
    render() {
        return (
        <div className={classes.slider}>
            <p>{`${this.props.name}: ${(Math.round(this.state.value * 100) / 100).toFixed(2)}`}</p>
            <input type="range" min="0" max="1" defaultValue="1" step="0.01" onChange={e => this.setState({value: e.target.value})}></input>
        </div>
        );
    }

}
export default Slider;