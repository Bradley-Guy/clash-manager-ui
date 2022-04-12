import React from 'react';
import classes from './Card.module.css';

class Card extends React.Component {
    render() {
        if(this.props.data !== "loading") {
            let url = this.props.data.favouriteCard.imageUri;
            let cardName = this.props.data.favouriteCard.name;
            return (
            <div className={classes.card}>
                <p className={classes.top}>Favourite Card:</p>
                <img src={url} alt="The clan's favourite card."/>
                <p className={classes.bottom}>{cardName}</p>
            </div>
            );
        }
    }

}
export default Card;