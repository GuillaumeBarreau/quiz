import React from 'react'
import { usePathname } from 'next/navigation'

const AnchorLink = ({ children, href, className, tabIndex, testId }) => {
    const pathname = usePathname()

    return (
        <a href={href}>
            <span className="d-inline-flex align-items-center navbar-item">
                <span
                    className={pathname === href ? activeClasses : className}
                    tabIndex={tabIndex}
                    data-testid={testId}
                >
                    {children}
                </span>
            </span>
        </a>
    )
}

export default AnchorLink
