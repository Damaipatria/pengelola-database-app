import { CardBody } from "./CardBody"
import { CardFooter } from "./CardFooter"
import { CardHeader } from "./CardHeader"

export const Card = ({ className, children }) => {
  return (
    <>
      <div className={`bg-white border rounded-md ${className}`}>
        {children}
      </div>
    </>
  )
}

export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})