import React, {Component} from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginForm extends Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            error_email: '',
            error_password: '',
            results: '',
            validation_form_class: 'needs-validation', 
            validation_input_password_class: 'form-control', 
        }

        this.onPaswordChange = this.onPaswordChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleEmailOnFocus = this.handleEmailOnFocus.bind(this);
        this.handlePasswordOnFocus = this.handlePasswordOnFocus.bind(this);
        

    }

    //handler for data from child component
    onEmailChange(email){
        
        console.log("From the child: " + email);

        this.setState( () => {
                return {
                    email
                };
            }
        );

        console.log("From the parent state: " + this.state.email);
    }

    handleEmailOnFocus(){

        let validation_form_class =  this.state.validation_form_class;
        validation_form_class = 'needs-validation';

        let validation_input_password_class = this.state.validation_input_password_class;

        this.setState( () => {
                return{
                    validation_form_class,
                    validation_input_password_class
                }
            }
        );
    }

    onSubmit(event){

        event.preventDefault();

        const results = ("Email address is: " + this.state.email) +
        ("      Password is: " + this.state.password);

        this.setState( () => {
                return {
                    results
                };
            }
        );

        this.state.validation_form_class += " was-validated";
        //this is also lifting state to the parent
        this.props.onFormSubmit(results);
        this.validateForm();
    }

    onPaswordChange(password){
        
        console.log("From the child: " + password);

        this.setState( () => {
                return {
                    password
                };
            }
        );
        
        console.log("From the parent state: " + this.state.password);
    }

    handlePasswordOnFocus(){
        this.handleEmailOnFocus();
    }


    validateForm(){

        //grab the state values
        let email = this.state.email;
        let password = this.state.password;
        let error_email =  this.state.error_email;
        let error_password = this.state.error_password;
        let validation_input_password_class = this.state.validation_input_password_class;     

        //check if email was entered
        if(!email)
        {
            error_email = "You must provide an email address";
        }
        else
        {
            error_email = "";
        }

        //check if password is valid
        if(password.length >= 8)
        {
            console.log("PASSWORD IS GOOD");
            let error_password_message = "Password is good!";
            error_password = error_password_message;
        }
        else
        {
            // invalid password, maybe show an error to the user.
            let error_password_message = "You must provide a strong password that meets length requirements";
            error_password = error_password_message;
            validation_input_password_class = "form-control is-invalid"; 
            console.log(error_password_message);
        }

        //update error messages
        this.setState( () => {
                return {
                    error_email,
                    error_password,
                    validation_input_password_class,
                };
            }
        );
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <EmailInput onEmailInputChange={this.onEmailChange} 
                                onEmailFocus={this.handleEmailOnFocus}
                                emailErrorMessage={this.state.error_email}
                                title="Login" />

                    <PasswordInput onPasswordInputChange={this.onPaswordChange}
                                    passwordInputValidationClass={this.state.validation_input_password_class}
                                    passwordErrorMessage={this.state.error_password} />
                    <button type="submit" 
                            className="btn btn-primary">Submit</button>
                </form>
            </div>            
        );
    };
}
export default LoginForm;