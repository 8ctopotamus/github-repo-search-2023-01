const Row = ({ className = '', ...props }) => {
  return <div className={`row ${className}`} {...props} />
}

export default Row