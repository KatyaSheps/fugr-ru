import React, {Component} from "react";
import Thead from "../thead/Thead";
import TrList from "../tr-list/TrList";
import TrAddItemFields from "../tr-add-item-fields/TrAddItemFields";
import AddItem from "../add-item/AddItem";

export default class Table extends Component {

    render() {
        const {onAdd} = this.props;
        return (
            <>
                <table className="table table-bordered">
                    <Thead />
                    <tbody>
                    <TrList items={this.props.items}/>
                    {this.props.showAddField && <TrAddItemFields />}
                    </tbody>
                </table>
                {this.props.showAddField && <AddItem onAdd={() => onAdd()}/>}
            </>
        )
    }
}