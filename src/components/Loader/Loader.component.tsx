import React from 'react'
import styles from './Loader.module.css'

const Loader: React.FC = () => {
    return (
        <div className={styles.loader_container}>
            <svg
                width="200"
                height="500"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g className={styles.loader_bars}>
                    <g className={styles.loader_upper_bar}>
                        <rect
                            id="1_2"
                            width="80"
                            height="25"
                            rx="8"
                            fill="#e5e5e5"
                        />
                    </g>
                    <g className={styles.loader_middle_bar}>
                        <rect
                            id="Rectangle 2"
                            x="20"
                            y="40"
                            width="80"
                            height="25"
                            rx="8"
                            fill="#c0c0c0"
                        />
                    </g>
                    <g className={styles.loader_bottom_bar}>
                        <rect
                            id="3_2"
                            y="80"
                            width="80"
                            height="25"
                            rx="8"
                            fill="#8d8686"
                        />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Loader
