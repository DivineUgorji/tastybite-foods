function VegetarianCarrot({className, width = 1.5, alt}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        alt={alt}>
            <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"    
            stroke-width={width}
            stroke-linecap="round" stroke-linejoin="round" />

            <path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"
               stroke-width={width}
               stroke-linecap="round" stroke-linejoin="round" />

            <path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"
               stroke-width={width}
               stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default VegetarianCarrot
