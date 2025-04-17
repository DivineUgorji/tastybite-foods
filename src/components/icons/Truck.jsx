function Truck({className, width = 1.5, alt}) {
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
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
            stroke-width={width} 
            stroke-linecap="round" 
            stroke-linejoin="round" />
            
            <path d="M15 18H9"
            stroke-width={width} 
            stroke-linecap="round" 
            stroke-linejoin="round" />

            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
            stroke-width={width} 
            stroke-linecap="round" 
            stroke-linejoin="round" />

            <circle cx="17" cy="18" r="2"
            stroke-width={width} 
            stroke-linecap="round" 
            stroke-linejoin="round" />

            <circle cx="7" cy="18" r="2"
            stroke-width={width} 
            stroke-linecap="round" 
            stroke-linejoin="round" />
        </svg>
    )
}

export default Truck
