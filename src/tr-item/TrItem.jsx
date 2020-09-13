import React, {Component} from "react";

export default class TrItem extends Component {

    render() {
        const {
            id,
            firstName,
            lastName,
            email,
            phone
        } = this.props
        return (
            <>
                <tr>
                    <td>{id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                </tr>
            </>
        )
    }
}