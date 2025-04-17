function Clock({className, width = 1.5, alt}) {
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        
        className={className}
        alt={alt}>
            <circle cx="12" cy="12" r="10"
            stroke-width={width}
            stroke-linecap="round" 
            stroke-linejoin="round" />
            
            <polyline points="12 6 12 12 16 14"
            stroke-width={width}
            stroke-linecap="round" 
            stroke-linejoin="round" />
        </svg>
    )
}

export default Clock
