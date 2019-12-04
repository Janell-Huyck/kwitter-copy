import React from "react";
import { withAsyncAction } from "../HOCs";
import "./editUserForm.css";
import { Input, Button } from "semantic-ui-react";
import { Spinner } from ".";

class EditUserForm extends React.Component {
    state = {
        username: '',
        password: '',
        displayName: '',
        bio: '',
        pictureLocation: '',
        error: false,
    }
    check = () => {
        if (this.state.username.trim().length < 3 || this.state.username.trim().length > 20) {
            return false
        }
        else if (this.state.password.trim().length < 3 || this.state.password.trim().length > 20) {
            return false
        }
        else if (this.state.displayName.trim().length < 3 || this.state.displayName.trim().lenght > 20) {
            return false
        }
            return true
    }
    handleSubmit = event => {
        event.preventDefault()
        if (this.check) {
            this.props.EditUser({

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
                        label='New Username'
                        type='text'
                        name='username'
                        placeholder='3-20 characters'
                        autoFocus
                        required
                        onChange={this.handleChange}
                    />
                    <Input
                        size='large'
                        label='New Password'
                        type='password'
                        name='password'
                        placeholder='3-20 characters'
                        required
                        onChange={this.handleChange}
                    />
                    <Input
                        size='large'
                        label='New Display Name'
                        type='text'
                        name='displayName'
                        placeholder='3-20 characters'
                        required
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

export default EditUserForm;
