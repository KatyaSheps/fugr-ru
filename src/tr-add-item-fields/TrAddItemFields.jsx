import React, {Component} from "react";

export default class TrAddItemFields extends Component {

    constructor(props) {
        super(props);

        this.state = {
            addData: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            }
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {
        const key = e.target.name;
        const addData = this.state.addData;
        addData[key] = e.target.value;

        this.setState({
            addData: addData
        })

        this.props.onAddDataChanged(this.state.addData);
    }

    render() {
        return (
            <>
                <tr>
                    <td><input type="text"
                               name="id"
                               onChange={this.onValueChange}
                               value={this.state.id}
                    /></td>
                    <td><input type="text"
                               name="firstName"
                               onChange={this.onValueChange}
                               value={this.state.firstName}
                    /></td>
                    <td><input type="text"
                               name="lastName"
                               onChange={this.onValueChange}
                               value={this.state.lastName}
                    /></td>
                    <td><input type="text"
                               name="email"
                               onChange={this.onValueChange}
                               value={this.state.email}
                    /></td>
                    <td><input type="text"
                               name="phone"
                               onChange={this.onValueChange}
                               value={this.state.phone}
                    /></td>
                </tr>
            </>
        )
    }
}