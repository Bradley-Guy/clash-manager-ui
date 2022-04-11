import classes from './ClanTagInput.module.css'
import React from 'react';
import axios from 'axios';

class ClanTagInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            showTuning: classes.hide
        }
    }
    updateClan() {
        let url = 'http://localhost:7071/api/ClanStats?clanTag=' + this.state.input;
        this.props.setData("loading");
        axios.get(url).then((response) => {
            this.props.setData(response.data);
        });
    }
    toggleDropdown() {
        if(this.state.showTuning === classes.show) {
            this.setState({
                input: this.state.input,
                showTuning: classes.hide
            });
        } else {
            this.setState({
                input: this.state.input,
                showTuning: classes.show
            });
        }
    }
    render() {
        return (
            <div className={classes.container}>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <div>
                <p>#</p>
                <input
                    type="text"
                    placeholder='Enter Clan Tag'
                    // value={this.state.input}
                    value={this.state.input}
                    onChange={e => this.setState({input: e.target.value.toUpperCase()})}
                    onKeyDown={(e) => {
                        if(e && e.key === 'Enter') {
                            this.updateClan();
                        }
                    }}
                />
                <button onClick={(e) => this.updateClan()}><span className='material-icons'>search</span></button>
                <button onClick={(e) => this.toggleDropdown()}><span className='material-icons'>tune</span></button>
                </div>
                <div className={this.state.showTuning}>Filters Will Go Here</div>
            </div>
         );
    }
}
export default ClanTagInput;