import classes from './ClanTagInput.module.css'
import React from 'react';
import axios from 'axios';

class ClanTagInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    updateClan() {
        let url = 'http://localhost:7071/api/ClanStats?clanTag=' + this.state.input;
        axios.get(url).then((response) => {
            this.props.setData(response.data);
        });
    }
    render() {
        return (
            <div className={classes.container}>
                <p>#<input
                    type="text"
                    placeholder='Enter clan tag'
                    // value={this.state.input}
                    value={this.state.input}
                    onChange={e => this.setState({input: e.target.value.toUpperCase()})}
                /></p>
                
                <button onClick={(e) => this.updateClan()}>Update</button>
            </div>
         );
    }
}
export default ClanTagInput;