import axios from 'axios';
import { success, error } from "react-notification-system-redux";

const registerUser = user => dispatch => {
    axios
        .post('/api/v1/auth/users', user)
        .then(response => {
            if (response && response.status === 200) {
                dispatch({
                    type: 'REGISTRATION_SUCCESS',
                    payload: true
                });

                dispatch(
                    success({
                        title: 'Registration success',
                        message: 'Please log in to continue',
                        position: 'tc',
                        autoDismiss: 10
                    })
                );
            }
        }).catch(err => {
            dispatch(
                error({
                    title: 'Registration failed',
                    message: err.response.data.error,
                    position: 'tc',
                })
            );
        });
};

export { registerUser };