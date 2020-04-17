import IButtonProps from '../IButtonProps';
import '../button.scss';
import React from 'react';

const SecondaryButton: React.FC<IButtonProps> = props => {
    return (
        <button className="secondary">
            {props.text}
        </button>
    );
}

export default SecondaryButton;