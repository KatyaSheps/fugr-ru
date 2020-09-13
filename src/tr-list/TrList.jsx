import React, {Component} from "react";
import TrItem from "../tr-item/TrItem";

export default class TrList extends Component {

    render() {
        const items = this.props.items.map((item) => {
            return <TrItem {...item}/>
        });
        return (items)
    }
}