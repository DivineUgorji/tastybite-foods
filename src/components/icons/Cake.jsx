function Cake({className, width = 1.5, alt}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none"
        className={className}
        alt={alt}>
            <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"
             stroke-width={width} 
             stroke-linecap="round" 
             stroke-linejoin="round" />
            <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"
             stroke-width={width} 
             stroke-linecap="round" 
             stroke-linejoin="round" />
            <path d="M2 21h20"
             stroke-width={width} 
             stroke-linecap="round" 
             stroke-linejoin="round" />
            <path d="M7 8v3"
             stroke-width={width} 
             stroke-linecap="round" 
             stroke-linejoin="round" />
            <path d="M12 8v3"
             stroke-width={width} 
             stroke-linecap="round" 
             stroke-linejoin="round" />
            <path d="M17 8v3"
             stroke-width={width} 
             stroke-linecap="round" 
             stroke-linejoin="round" />
            <path d="M7 4h.01"
             stroke-width={width} 
             stroke-linecap="round" 
             stroke-linejoin="round" 
            />
            <path d="M12 4h.01"
             stroke-width={width} 
             stroke-linecap="round" 
             stroke-linejoin="round" 
            />
            <path d="M17 4h.01"
             stroke-width={width} 
             stroke-linecap="round" 
             stroke-linejoin="round" 
            />
            </svg>
    )
}

export default Cake
