import classes from './Table.module.css'
import React from 'react';

class Table extends React.Component {
    render() {
        if(this.props.data && typeof this.props.data == 'string') {
            return (
                <table className={classes.table}>
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="3">{this.props.data}</td>
                            
                        </tr>
                    </tbody>
                </table>
            );
        } else if(this.props.data) {
            let players = Object.entries(this.props.data.players).map(player => {
                let data = player[1];
                data.score = 0;
                for(let scoreType in data.scores) {
                    data.score += this.props.multipliers[scoreType] * data.scores[scoreType];
                }
                data.score = data.score.toFixed(0);
                data.tag = player[0];
                return data
            });

            players = players.sort((a, b) => {
                return a.score - b.score;
            });
            return (
            <table className={classes.table}>
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {
                players.map((player, index) => {
                    return(
                    <tr key={player.name}>
                        <td>{index + 1}</td>
                        <td>{player.name}</td>
                        <td> {player.score}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            );
        } else {
            return null;
        }
    }
}
export default Table;