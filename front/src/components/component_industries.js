import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { GridList, GridTile } from 'material-ui/GridList';




class Industries extends React.Component {
    constructor() {
        super();
        this.state = {
            industries: []

        }
        this.getIndustries = this.getIndustries.bind(this)
    }

    componentDidMount() {
        this.getIndustries()
    }

    getIndustries() {
        console.log("getIndustries ran");
        const self = this
        console.log("worked");
        axios.get('/api/v1/professions')
            .then(function (response) {
                self.setState({
                    industries: response.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },

            gridList: {
                width: 900,
                height: 750,
                overflowY: 'auto',
            },
        };

        //   const tilesData = [
        //     {
        //       img: 'assets/family-physician.jpg',
        //       title: 'Healthcare',
        //     },
        //     {
        //       img: 'assets/nurse.jpg',
        //       title: 'Legal',
        //     },
        //   ];

        return (
            <div className="col-xs-12 col-sm-8 col-sm-offset-2 overlay"
            >
                <div className="industryHeader">
                    Choose your industry
                </div>



                <div                         
                    style={styles.root}>
                    <GridList
                        cols={3}
                        cellHeight={280}
                        style={styles.gridList}
                    >
                        {this.state.industries.map((industry) => (
                            <Link to={"/professions/" + industry.slug}>
                            <GridTile
                                key={industry.image}
                                title={industry.name}
                            >
                            <img src={industry.image} alt={industry.name} />
                            </GridTile>
                            </Link>
                        ))}
                    </GridList>
                </div>
            </div>
        )
    }
}


export default Industries;