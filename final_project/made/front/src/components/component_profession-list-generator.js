import React from 'react';
import { Link } from 'react-router';






class ProfessionListGenerator extends React.Component {

    render() {
        return (

            <ul>
                {
                    this.props.list.map((value, index) => {
                        return (
                            <li key={value.label}>
                                <Link to={"/professions/" + this.props.industry + "/" + value.slug }>{value.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )

    }
}


export default ProfessionListGenerator; 
