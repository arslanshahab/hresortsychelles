import { RoomRounded, ShoppingBasketRounded } from '@material-ui/icons';
import React from 'react';
import constants from "utils/constants";

const DescriptionCard = (props) => {
    return (
        <React.Fragment>
            <div className="description-card-wrapper p-5">
                <div className="container">
                    <h1 className="text-center p-4">{constants.DESCRIPTION_CARD.TITLE}</h1>
                    <p className="text-center mt-4">
                        {constants.DESCRIPTION_CARD.DESCRIPTION} <br/>
                        {constants.DESCRIPTION_CARD.OFFER}
                    </p>
                    <p className="text-center">
                        <ShoppingBasketRounded /> Book period – until 05/12/2020 <span className="px-4"></span> 
                        <RoomRounded /> Stay period – until 05/12/2020
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DescriptionCard;