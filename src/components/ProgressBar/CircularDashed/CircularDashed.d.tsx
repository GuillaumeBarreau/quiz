export interface ICircularDashed {
    progress?: number
    maxValue?: number
    strokeWidth?: number
    ballStrokeWidth?: number
    reduction?: number
    transitionDuration?: string
    transitionTimingFunction?: string
    background?: string
    hideValue?: boolean
    gradient?: {
        stop: number
        color: `#${string}`
    }[]
    subtitle?: string
    suffix?: string
}
