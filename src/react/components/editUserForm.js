import React from "react";
import { withAsyncAction } from "../HOCs";
import "./editUserForm.css";
import { Input, Button } from "semantic-ui-react";
import { connect } from 'react-redux'


class EditUserForm extends React.Component {
    state = {
        username: this.props.username,
        password: '',
        displayName: '',
        about: '',
        error: false,
    }
    check = () => {
        const { username, password, displayName } = this.state;
        if (username.trim().length < 3 || username.trim().length > 20) {
          return false;
        } else if (password.trim().length < 3 || password.trim().length > 20) {
          return false;
        } else if (
          displayName.trim().length < 3 ||
          displayName.trim().length > 20
        ) {
          return false;
        } else return true;
    }
    handleSubmit = event => {
        event.preventDefault()
        if (this.check) {
            this.props.updateUserInfo({
                username: this.state.username,
                password: this.state.password,
                displayName: this.state.displayName,
                about: this.state.about,
            })
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        if (event.target.value.trim().length < 3 || event.target.value.trim().length > 20) {
            event.target.style.color = 'red'
        }
        else {
            event.target.style.color = 'gray'
        }
    }
    render() {
        return (
            <React.Fragment>
                <form id='edit-profile-form' onSubmit={this.handleSubmit}>
                    <h1>Edit Profile</h1>
                    <Input
                        size='large'
                        label='New Password'
                        type='password'
                        name='password'
                        placeholder='3-20 characters'
                        onChange={this.handleChange}
                    />
                    <Input
                        size='large'
                        label='New Display Name'
                        type='text'
                        name='displayName'
                        placeholder='3-20 characters'
                        onChange={this.handleChange}
                    />
                    <Input
                        size='large'
                        label='New Bio'
                        type='text'
                        name='bio'
                        placeholder='Enter bio...'
                        onChange={this.handleChange}
                    />
                    <Button
                    size = 'huge'
                    type = 'submit'

                    >
                        Submit
                    </Button>
                </form>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        username: state.auth.login.result.username,
    }
}


export default connect(mapStateToProps)(withAsyncAction('users', 'updateUserInfo')(EditUserForm));
