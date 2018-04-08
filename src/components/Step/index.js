import React from 'react';
import './Step.css';

class Step extends React.Component {
    handleClick = () => {
        const { onClick, number, isClickable } = this.props;
        if (isClickable) {
            onClick(number);
        }
    }

    render () {
        const { number, children, isSelected, isClickable } = this.props;

        return (
            <div onClick={this.handleClick} className={`step ${isSelected ? 'step-selected' : ''} ${isClickable ? 'step-clickable' : ''}`}>
                <p className="step__number">{number}</p>
                <p className="step__title">{children}</p>
            </div>
        )
    }
}

export default Step;