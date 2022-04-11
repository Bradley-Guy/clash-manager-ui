import React from 'react';

class Card extends React.Component {
    render() {
        if(this.props.data !== "loading") {
            let url = this.props.data.favouriteCard.imageUri;
            let cardName = this.props.data.favouriteCard.name;
            return (
            <div>
                <p>Favourite Card:</p>
                <img src={url} alt="The clan's favourite card."/>
                <p>{cardName}</p>
            </div>
            );
        }
    }

}
export default Card;