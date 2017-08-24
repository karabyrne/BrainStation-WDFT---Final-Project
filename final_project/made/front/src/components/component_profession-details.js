import React from 'react';
import axios from 'axios';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const cardTextStyle = {
    fontSize: 16
}




class ProfessionDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            professionDetails: [],
            educationDetails: [],
            aOrAn: "a",
        }
        this.getProfessions = this.getProfessions.bind(this)
    }
    componentDidMount() {
        this.getProfessions()
    }

    renderAOrAn = () => {
        const firstLetter = this.state.educationDetails.education[0].toLowerCase()
        console.log("firstLetter = ", firstLetter)
        if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u') {
            this.setState({
                aOrAn: "an"
            })
        } else {
            this.setState({
                aOrAn: "a"
            })
        }
    }

    getProfessions() {
        console.log("getProfessions ran");
        const self = this
        console.log("worked");
        axios.get('http://localhost:8080/api/v1/professions/' + this.props.params.industry + '/' + this.props.params.name)
            .then(function (response) {
                console.log("professions call =", response.data);
                self.setState({
                    professionDetails: response.data
                })
                axios.get("http://localhost:8080/api/v1/education/" + response.data.education)
                    .then(function (response) {
                        console.log("education call =", response.data);
                        self.setState({
                            educationDetails: response.data
                        }, () => {
                            console.log("running a or and")
                            self.renderAOrAn();
                        })
                    })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        return (
            <div>
                <div className="card col-xs-12 col-sm-8 col-sm-offset-2">
                    <Card>
                        <CardMedia
                            className="cardImage"
                            overlay={<CardTitle title={this.state.professionDetails.title} />}
                        >
                            <img src={this.state.professionDetails.image} alt={this.state.professionDetails.title} />
                        </CardMedia>
                        <CardTitle title="The Details" />
                        <CardText style={cardTextStyle}>
                            <ul>
                                <li>You can expect to spend approximately <strong>{this.state.educationDetails.tuition}</strong> on earning {this.state.aOrAn} <strong>{this.state.educationDetails.education}</strong>.</li>
                                <br />
                                <li>The average salary for a <strong>{this.state.professionDetails.title}</strong> in Ontario is <strong>{this.state.professionDetails.averageSalary}</strong>, with a salary
                                range of <strong>{this.state.professionDetails.salaryRange}</strong>, dependent upon experience, level of training, or additional education.</li>
                                <br />
                                <li>The average rating for job satisfaction on a scale of 1 - 10 is <strong>{this.state.professionDetails.jobSatisfaction}</strong>. This is determined by
                                calculating the average rating for income, work/life balance, and overall sense of fulfillment on a professional level.</li>
                            </ul>
                        </CardText>
                    </Card>




                </div>
            </div>
        )

    }
}


export default ProfessionDetails;
