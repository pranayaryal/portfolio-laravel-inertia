const CodeSky = ({children}) => {
    return (
        <span className="text-sky-300">{children}</span>
    )
}

const CodeViolet = ({children, className}) => {
    return (
        <span className={`text-violet-300 ${className}`}>{children}</span>
    )
}

const CodeAmber = ({children}) => {
    return (
        <span className="text-yellow-500">{children}</span>
    )
}

export  { CodeViolet, CodeSky, CodeAmber };