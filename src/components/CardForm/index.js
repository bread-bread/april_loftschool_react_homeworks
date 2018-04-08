import React from 'react';

class CardForm extends React.Component {
    handleChangeForm = (e) => {
        const { name, value } = e.target;

        this.props.onChangeForm(name, value);
    }

    componentWillUnmount() {

    }

    render() {
        const { cardNumber } = this.props;
        return (
            <div>
                <h1 className='title'>Номер карты</h1>
                <div className='card-form' data-test='card-form'>
                    <input type='text' name='cardNumber' onChange={this.handleChangeForm} placeholder='0000000000000000' value={cardNumber}/>
                </div>
            </div>
        )
    }
}

export default CardForm;