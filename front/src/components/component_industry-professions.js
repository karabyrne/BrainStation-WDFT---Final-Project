import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';


class IndustryProfessions extends React.Component {

    constructor() {
        super();
        this.state = {
            professionsByIndustry: []
        }
        this.getProfessions = this.getProfessions.bind(this)
    }
    componentDidMount() {
        this.getProfessions()
    }

    getProfessions() {
        console.log("getProfessions ran");
        const self = this
        console.log("worked");
        axios.get('/api/v1/professions/' + this.props.params.industry)
            .then(function (response) {
                console.log(response.data);
                self.setState({
                    professionsByIndustry: response.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const style = {
            height: 300,
            width: "100%",
            //marginTop: 90,
            marginBottom: 60,
            textAlign: 'center',
            display: 'inline-block',
        };
        // when database is set up, no need to use lodash
        // const professionDetails = lodash.find(professionsByIndustry, {slug: this.props.params.name});

        return (
            <div>

                <div className="professionHeader">
                    Choose your profession
                </div>

                {this.state.professionsByIndustry.map((profession, index) =>
                    <div key={profession.title} className="col-xs-12 col-sm-4">
                        <Link to={"/professions/" + this.props.params.industry + "/" + profession.slug}>
                            <Paper style={style} zDepth={5}>
                                <div className="paper-text"> {profession.title}</div>
                            </Paper>
                        </Link>
                    </div>
                )}
            </div>
        )

    }
}


export default IndustryProfessions; 
