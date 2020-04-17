import IButtonProps from '../IButtonProps';
import '../button.scss';
import React from 'react';

const TertiaryButton: React.FC<IButtonProps> = props => {
    return (
        <button className="tertiary">
            {props.text}
        </button>
    );
}

export default TertiaryButton;