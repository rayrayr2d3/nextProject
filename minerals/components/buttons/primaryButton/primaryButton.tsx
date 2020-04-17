import IButtonProps from '../IButtonProps';
import '../button.scss';
import React from 'react';

const PrimaryButton: React.FC<IButtonProps> = props => {
    return (
        <button className="primary">
            {props.text}
        </button>
    );
}

export default PrimaryButton;