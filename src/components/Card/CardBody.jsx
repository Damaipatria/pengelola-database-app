export const CardBody = ({ className, children }) => {
  return (
    <>
      <div className={`py-1 px-4 ${className}`}>
        {children}
      </div>
    </>
  )
}