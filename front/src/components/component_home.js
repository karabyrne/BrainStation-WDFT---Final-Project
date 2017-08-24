import React from 'react';



class Home extends React.Component {

    render() {
        // const style = {
        //     height: 300,
        //     width: "100%",
        //     marginTop: 60,
        //     marginBottom: 60,
        //     textAlign: 'center',
        //     display: 'inline-block',
        // };

        return (
            <div className="clearing clearfix">



                <div className="hero-image">
                    <div className="hero-text">
                        <h1>Your education is an investment</h1>
                        <h3>It's time to start treating it like one</h3>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-8 col-sm-offset-2">

                    <div>
                        <div className="seth-godin-quote">
                            “What is school for?
                                <br />
                            If you’re not asking that, you’re wasting time and money.”
                                <br />
                            - Seth Godin
                        </div>
                        <div className="home-content">
                        <p className="paragraph">As the cost to pursue a higher education increases and the value of a post-secondary diploma/degree decreases, students incur more and more debt without a financial road map or career path to ensure they are able to repay government/bank loans or see the return on that investment within a reasonable amount of time.</p> 
                        
                        <p className="paragraph">Made For That will provide a centralized database and user-friendly resource for students to treat their education as an investment, to spend time learning about different career paths, and to approach their post-secondary education with an inspired and informed mindset.</p> 
                        </div>
                    </div>
                </div>
            </div>
         )
    }
}


export default Home; 
