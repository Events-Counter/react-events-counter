import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css'

const IconEmoji = ({ className, label, symbol, size=2}) => (
    <span
        className={`${styles.emoji} ${className}`}
        role="img"
        style={{fontSize: size+"em"}}
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >{symbol}</span>
);

IconEmoji.propTypes = {
    symbol: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    // size: PropTypes.oneOf([18, 24, 36, 48, 64])
};


export default IconEmoji;