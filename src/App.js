import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchField from "./search-field/SearchField";
import Table from "./table/Table";

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showAddField: false,
            data: []
        };

        this.setShowAddField = this.setShowAddField.bind(this);
        this.addItem = this.addItem.bind(this);
        this.getAddData = this.getAddData.bind(this);
    }

    componentDidMount() {
        fetch("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    setShowAddField() {
        this.setState({ showAddField: true });
    }

    addItem() {
        let data = this.state.data;
        data.push(this.state.addItemData);
        this.setState({
            showAddField: false,
            data: data
        });
    }

    getAddData(data) {
        this.setState({ addItemData: data});
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
                            items={this.state.data}
                            showAddField={this.state.showAddField}
                            onAdd={this.addItem}
                            onAddDataChanged={this.getAddData}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
