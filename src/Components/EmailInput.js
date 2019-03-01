import React, {Component} from 'react';

class EmailInput extends Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            email: ''
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
    }

    onEmailChange(event) {
        var email = event.target.value;

        //this is lifting the state value to the parent
        this.props.onEmailInputChange(email);

        this.setState( () => {
                return {
                    email
                }
            }
        );
    };

    handleOnFocus(event){
        event.target.valid = true;
        this.props.onEmailFocus();
    }

    render() {
        return (
            <div className="form-group">
                <p>{this.props.title}</p>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input className={this.props.emailInputValidationClass}
                    aria-describedby="emailHelp" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    onChange={this.onEmailChange}
                    onFocus={this.handleOnFocus}
                    placeholder="Enter email"
                    type="email"
                    value={this.state.email}
                    required  />
            </div>
        );
    };
}

export default EmailInput;