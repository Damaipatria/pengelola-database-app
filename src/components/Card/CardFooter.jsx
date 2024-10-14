export const CardFooter = ({ className, children }) => {
  return (
    <>
      <div className={`py-3 px-4 bg-gray-50 border-t ${className}`}>
        {children}
      </div>
    </>
  )
}