export const CardHeader = ({ className, children }) => {
  return (
    <>
      <div className={`py-4 px-4 bg-gray-50 border-b ${className}`}>
        {children}
      </div>
    </>
  )
}