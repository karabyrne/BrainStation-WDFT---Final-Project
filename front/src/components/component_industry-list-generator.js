import React from 'react';
import { Link } from 'react-router';






class IndustryListGenerator extends React.Component {

    render() {
        return (

            <ul>
                {
                    this.props.list.map((value, index) => {
                        return (
                            <li key={value.label}>
                                <Link to={"/professions/" + value.slug }>{value.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )

    }
}


export default IndustryListGenerator; 
