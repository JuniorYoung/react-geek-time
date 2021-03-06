import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ value, onChange, options }) => (
    <span>
        <h1>{value}</h1>
        <select
            onChange={e => onChange(e.target.value)}
            value={value}
        >
            {options.map(option => (
                <option
                    value={option.value}
                    key={option.text}
                >
                    {option.text}
                </option>
            ))}
        </select>
    </span>
)

Picker.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Picker