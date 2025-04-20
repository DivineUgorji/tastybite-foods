function Play({ className, width = 1.5, alt }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      alt={alt}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke-width={width}
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <polygon
        points="10 8 16 12 10 16 10 8"
        stroke-width={width}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Play;
