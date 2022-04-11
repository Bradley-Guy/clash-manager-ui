import React from 'react';

class Card extends React.Component {
    render() {
        if(this.props.data) {
            let url = this.props.data.favouriteCard.imageUri;
            let cardName = this.props.data.favouriteCard.name;
            return (
            <div>
                <p>Favourite Card:</p>
                <img src={url}/>
                <img alt={""}/>
                <p>{cardName}</p>
            </div>
            );
        }
    }

}
export default Card;