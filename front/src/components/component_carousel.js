import React from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors'

export default class Carousel extends React.Component {

    render() {
        return (
            <div>
                <AutoRotatingCarousel
                    label="Get started"
                    open
                >
                    <Slide
                        media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />}
                        mediaBackgroundStyle={{ backgroundColor: red400 }}
                        contentStyle={{ backgroundColor: red600 }}
                        title="Looking for new talent?"
                        subtitle="You'll find it here."
                    />
                    <Slide
                        media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />}
                        mediaBackgroundStyle={{ backgroundColor: blue400 }}
                        contentStyle={{ backgroundColor: blue600 }}
                        title="Ready to showcase your talent?"
                        subtitle="This is your chance."
                    />
                    <Slide
                        media={<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />}
                        mediaBackgroundStyle={{ backgroundColor: green400 }}
                        contentStyle={{ backgroundColor: green600 }}
                        title="Never do another phone interview again."
                        subtitle="If you're looking to fill a role, this was made for that."
                    />
                </AutoRotatingCarousel>
            </div>
        )
    }
}
