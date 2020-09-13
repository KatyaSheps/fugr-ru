import React, {Component} from "react";

export default class AddItem extends Component {

    render() {
        const {onAdd} = this.props;
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-dark float-right" onClick={onAdd}>Добавить в таблицу</button>
            </div>
        )
    }
}