const Button = ({ children, className = 'btn-primary', ...props }) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button