function CaretUp({className, width = 1.5, alt}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width={width}
        stroke-linecap="round" stroke-linejoin="round" 
        className={className}
        alt={alt}>
            <path d="m18 15-6-6-6 6"/>
        </svg>
    )
}

export default CaretUp
