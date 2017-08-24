import React from 'react';
// import Paper from 'material-ui/Paper';


class About extends React.Component {

    render() {

        return (
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">

                <div>
                    <div className="education-quote">
                        “Those three things -- autonomy, complexity, and a connection between effort and reward -- are, most people will agree, the three qualities that work has to have if it is to be satisfying.” 
                        <br/>
                        - Malcolm Gladwell
                        </div>
                    <div className="home-content">
                        <p className="paragraph">Canada’s current student loan debt is approaching $17 billion, and it is increasing at an alarming rate (this figure only represents debt incurred at a federal level, it does not account for provincial or private loans).</p>

                        <p className="paragraph">Young adults are strongly encouraged to attend a post-secondary institution, and are often misinformed about what that level or type of education will amount to in the form of an income or lifestyle. There is a lack of reliable information for students in the planning stages of their educational endeavours that, if provided, could serve as a preventative measure in the overall maintenance of an individual’s financial health.</p>
                   
                        <p className="paragraph">Made For That provides a service that assists high school graduates or individuals seeking a career change by providing a resource for strategically mapping/calculating the financial and lifestyle return of their educational investment.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About; 
