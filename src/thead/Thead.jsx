import React, {Component} from "react";

export default class Thead extends Component {

    render() {
        return (
            <>
                <thead>
                <tr>
                    <th>Id <i className="fa fa-arrow-down"></i></th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
                </thead>
            </>
        )
    }
}