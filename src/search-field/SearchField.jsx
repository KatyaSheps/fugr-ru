import React, {Component} from "react";

export default class SearchField extends Component {

    render() {
        return (
            <>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."/>
                    <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
                </div>
            </>
        )
    }
}