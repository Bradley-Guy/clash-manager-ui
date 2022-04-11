import React from 'react';
import classes from './Slider.module.css'

class Slider extends React.Component {
    render() {
        return (<div className={classes.slider}><p>{this.props.name}</p><input type="range" min="0" max="1" defaultValue="0.5" step="0.1"></input></div>);
    }

}
export default Slider;