import React, {Component} from 'react';

class PasswordInput extends Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            password: ''
        }; 

        this.onPasswordChange = this.onPasswordChange.bind(this);

    }

    /* this event handler simply "lifts" state to the parent component */
    onPasswordChange(event){
        var password = event.target.value;

        this.props.onPasswordInputChange(password);

        this.setState( () => {
                return {
                    password
                }
            }
        );
    }

    render() {

        return (
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input className={this.props.passwordInputValidationClass}  
                       id="exampleInputPassword1" 
                       onChange={this.onPasswordChange}  
                       className="form-control"                                            
                       placeholder="Your password"
                       type="password"
                       value={this.props.password} 
                       required />
                <div>
                    {this.props.passwordErrorMessage}
                </div>                         
            </div>            
        );
    };
}

export default PasswordInput;