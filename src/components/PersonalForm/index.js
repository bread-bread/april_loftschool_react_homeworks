import React from 'react';
import './PersonalForm.css';

class PersonalForm extends React.Component {
    handleChangeForm = (e) => {
        const { onChangeForm } = this.props,
            {name, value} = e.target;

        onChangeForm(name, value);
    }

    render () {
        const { firstName, lastName, email } = this.props;
        return (
            <div>
                <h1 className='title'>Персональная информация</h1>
                <div className='personal-form' data-test='personal-form'>
                    <input type='text' name='firstName' onChange={this.handleChangeForm} placeholder='First name' value={firstName}/>
                    <input type='text' name='lastName' onChange={this.handleChangeForm} placeholder='Last name' value={lastName}/>
                    <input type='text' name='email' onChange={this.handleChangeForm} placeholder='Email' value={email}/>                                
                </div>
            </div>
        )
    }
}

export default PersonalForm;