import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Registration extends Component {
    state = {
        username: '',
        email: '',
        rehashedPassword: ''
    };

    onChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    };

    onSubmit = event => {
        event.preventDefault();
        // eslint-disable-next-line
        for (const key in this.state) {
            if (this.state[key].length < 1) {
                return false;
            }
        }
        this.props.registerUser(this.state);
    };

    render() {
        const { isRegistered } = this.props;

        if (isRegistered) {
            return <Redirect to='/login'/>
        }

        return (
            <form className='registration-form col-6 ml-auto mr-auto' onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label htmlFor=''>User Name</label>
                    <input
                        type='text'
                        name='username'
                        className='form-control'
                        onChange={this.onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor=''>E-mail</label>
                    <input
                        type='email'
                        name='email'
                        className='form-control'
                        onChange={this.onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor=''>Password</label>
                    <input
                        type='password'
                        name='rehashedPassword'
                        className='form-control'
                        onChange={this.onChange}
                        required
                    />
                </div>
                <button className='btn btn-success float-right mt-3' type='submit'>
                    Register
                </button>
            </form>
        );
    };
};

export default Registration;