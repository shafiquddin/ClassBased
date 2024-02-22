import { Component } from "react";
import Users from "./Users";
import UsersContext from "../store/user-context";
import classes from './UserFinder.module.css'
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
    static contextType = UsersContext;
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        //API call http request
        this.setState({ filteredUsers: this.context.users })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter(user => user.name.includes(this.state.searchTerm))
            });
        }
    }

    onChangeHandler(event) {
        this.setState({ searchTerm: event.target.value })
    }

    render() {

        return <>
            <div className={classes.finder}>
                <input type="search" onChange={this.onChangeHandler.bind(this)} />
            </div>
            <ErrorBoundary>
                <Users users={this.state.filteredUsers} />
            </ErrorBoundary>
        </>

    }
}

export default UserFinder;