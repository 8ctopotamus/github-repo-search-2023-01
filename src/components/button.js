const Button = ({ children, additionalClasses = 'btn-primary', ...props }) => {
  return (
    <button className={`btn ${additionalClasses}`} {...props}>
      {children}
    </button>
  )
}

export default Button