import Register from '../../components/Register';
import {RegisterAction} from '../../actions/registerAction';
import {connect} from "react-redux";
import {reduxForm } from 'redux-form';

const validate = (values) => {
    const errors = {};
    const requiredFields = [
        'fullname',
        'username',
        'email',
        'password',
        'confirmPassword',
    ];

    requiredFields.forEach(field => {
        if (!values[field] || !values[field].trim()) {
            errors[field] = 'Required !';
        }
    });

    if(values.fullname && !/^[a-zA-Z]{2,20}$/.test(values.fullname))
        errors.fullname = 'lastname can contain 2-20 characters, only letters (a-zA-Z)';
    if(values.username && !/^[a-z0-9_-]{2,20}$/.test(values.username))
        errors.username = 'Username can contain 2-20 characters, letters (a-z), numbers, "_" and "-"';
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid email address !";
    if(values.password && !/\d/.test(values.password))
        errors.password = "Password must contain a number !"
    else if(values.password && !/[A-Z]/.test(values.password))
        errors.password = "Password must contain an uppercase letter !"
    else if(values.password && !/[a-z]/.test(values.password))
        errors.password = "Password must contain a lowercase letter !"
    else if(values.password && !/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(values.password))
        errors.password = "Password must contain a special character !"
    else if(values.password && !/[a-zA-Z0-9 !@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]{8,20}/.test(values.password))
        errors.password = "Password must contain 8-20 characters !"
    if(values.confirmPassword && values.password !== values.confirmPassword)
        errors.confirmPassword = "Passwords does not match !"
    return errors;
}

const mapStateToProps = (state) => (
{
    form : state.form,
    user : state.user,
    status : state.register.registerStatus,
    err: state.register.error
});

const mapDispatchToProps = {
    "registerAction": RegisterAction
};

const mergeProps = (stateProps, dispatchProps, otherProps)=> ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    handleSubmit : otherProps.handleSubmit((form)=>{
        const formData = new FormData();
        formData.append('lastname', form.fullname);
        formData.append('firstname', form.fullname);
        formData.append('username', form.username);
        formData.append('email', form.email);
        formData.append('password' ,form.password);
        dispatchProps.registerAction(formData);
    }),
});

const connectedRegisterContainer = connect(mapStateToProps, mapDispatchToProps,mergeProps)(Register);
const RegisterContainer = reduxForm({
    form : "register",
    "destroyOnUnmount": true,  
    validate,
})(connectedRegisterContainer);

export default RegisterContainer;