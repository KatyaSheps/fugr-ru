import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchField from "./search-field/SearchField";
import Table from "./table/Table";

class App extends Component{
    constructor(props) {
        super(props);

        this.data = [
            {
                "id" : 1,
                "firstName" : "Vasya",
                "lastName" : "Pupkin",
                "email" : "v.pupkin@yandex.ru",
                "phone" : "947473",
            },
            {
                "id" : 2,
                "firstName" : "Petya",
                "lastName" : "Zalupkin",
                "email" : "p.zalupkin@yandex.ru",
                "phone" : "4534646",
            },
            {
                "id" : 2,
                "firstName" : "Masha",
                "lastName" : "Kakulkina",
                "email" : "kakulkina@yandex.ru",
                "phone" : "111222333",
            },
        ]
        this.state = {
            showAddField: false,
        };
        this.setShowAddField = this.setShowAddField.bind(this);
        this.setHideAddField = this.setHideAddField.bind(this);
    }

    setShowAddField() {
        this.setState({ showAddField: true });
    }

    setHideAddField() {
        this.setState({ showAddField: false });
    }

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <h1>Таблица</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-dark float-right"
                                onClick={this.setShowAddField}
                            >Добавить</button>
                        </div>
                    </div>
                    <div className="row">
                        <SearchField />
                        <Table
                            items={this.data}
                            showAddField={this.state.showAddField}
                            onAdd={this.setHideAddField}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
