import { Component } from "react";
import Users from "./Users";
import { DUMMY_USERS } from "../store/user-context";
import classes from './UserFinder.module.css'

class UserFinder extends Component {
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        //API call http request
        this.setState({ filteredUsers: DUMMY_USERS })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: DUMMY_USERS.filter(user => user.name.includes(this.state.searchTerm))
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
            <Users users={this.state.filteredUsers} />
        </>

    }
}

export default UserFinder;


