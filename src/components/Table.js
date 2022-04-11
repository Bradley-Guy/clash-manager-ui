import classes from './Table.module.css'
import React from 'react';

class Table extends React.Component {
    render() {
        if(this.props.data && this.props.data === "loading") {
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
                            <td colSpan="3">Loading...</td>
                            
                        </tr>
                    </tbody>
                </table>
            );
        }else if(this.props.data) {
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
                this.props.data.ranks.map((item, index) => {
                    return(
                    <tr key={item[1].name}>
                        <td>{index + 1}</td>
                        <td>{item[1].name}</td>
                        <td> { item[1].score}</td>
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