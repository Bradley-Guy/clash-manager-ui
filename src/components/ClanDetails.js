import classes from './ClanDetails.module.css'
import React from 'react';

class ClanDetails extends React.Component {
    render() {
        if(this.props.data && this.props.data === "loading") {
            return (
                <table className={classes.table}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>War Trophies</th>
                        <th>Clan Score</th>
                        <th>Members</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="3">Loading...</td>
                        </tr>
                    </tbody>
                </table>
            );
        } else if(this.props.data) {
            return (
            <table className={classes.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>War Trophies</th>
                    <th>Clan Score</th>
                    <th>Members</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.trophies}</td>
                    <td> {this.props.data.score}</td>
                    <td> {this.props.data.members}</td>
                </tr>
                </tbody>
            </table>
            );
        } else {
            return null;
        }
    }
}
export default ClanDetails;