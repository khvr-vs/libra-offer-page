import React from 'react';
import Carousel from "../../../bridge/components/carousel/carousel";
function FirstOffer({}) {

    const items = [
        {title: 'AAA', description: 'wergeg tewgrwhreherherh wgwrgrw', icon: 'af'}
    ]
    return (
        <div>
            <Carousel
                title={'Hello'}
                items={items}
            />

        </div>
    );
}

export default FirstOffer;