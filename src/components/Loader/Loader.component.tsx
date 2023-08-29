import React from 'react'
import { ILoader } from './Loader.d'

const Loader: React.FC<ILoader> = ({ loading, size, color, duration }) => {
    const spinnerStyle = {
        borderWidth: `${size * 0.05}px`,
        borderColor: color,
        animationDuration: duration,
    }

    const animDiv2 = () => {
        const calculatedDelay = parseFloat(duration) * -0.5 + 's'
        return { animationDelay: calculatedDelay }
    }

    return (
        <div
            style={{ display: loading ? 'block' : 'none' }}
            className="loader_container"
        >
            <div style={spinnerStyle}></div>
            <div style={{ ...spinnerStyle, ...animDiv2() }}></div>
        </div>
    )
}

Loader.defaultProps = {
    loading: true,
    size: 80,
    color: '#7f58af',
    duration: '1s',
}

export default Loader
