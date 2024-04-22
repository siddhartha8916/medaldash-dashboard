const CircularProgressBar = ({
  value,
  size,
  thickness,
}: {
  value: number
  size: number
  thickness: number
}) => {
  const radius = size / 2
  const circumference = 2 * Math.PI * radius
  const progress = 1 - value / 100 // Invert the progress value
  const dashOffset = circumference * progress + 6

  return (
    <svg
      className="circular-progress"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
    >
      <circle
        className="circular-progress-track"
        cx={radius}
        cy={radius}
        r={radius - thickness / 2}
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth={thickness}
      />
      <circle
        className="circular-progress-indicator"
        cx={radius}
        cy={radius}
        r={radius - thickness / 2}
        fill="transparent"
        stroke="#1CC287"
        strokeWidth={thickness}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        transform={`rotate(-90 ${radius} ${radius})`} // Rotate the circle to start from the top
        strokeLinecap="round"
      />
    </svg>
  )
}

export default CircularProgressBar
