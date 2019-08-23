import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        hashedPassword: ''
    };

    onChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
    onSubmit = event => {
        event.preventDefault();
        // eslint-disable-next-line
        for (const key in this.state) {
          if (this.state[key].length < 1) {
            console.log("All fields required");
            return false;
          }
        }
        this.props.loginUser(this.state);
    };

    render() {
        const { user } = this.props;

        if (user.token) {
            return <Redirect to='/'/>;
        }

        return(
            <form className='registration-form col-6 ml-auto mr-auto' onSubmit={this.onSubmit}>
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
                        name='hashedPassword'
                        className='form-control'
                        onChange={this.onChange}
                        required
                    />
                </div>
                <button className='btn btn-success float-right mt-3' type='submit'>
                    Log In
                </button>
            </form>
        );
    }

}

export default Login;