import { Card } from "../Card"

export const Modal = ({
  show,
  onHide,
  onSubmit,
  title = 'Card Title',
  children
}) => {

  return (
    <>
      <dialog open className={`${show ? 'opacity-100' : 'opacity-0 invisible'} w-full h-full absolute top-0 flex justify-center items-center bg-black/30 transition-all duration-300`}>
        <Card className={'w-1/2 h-fit'}>
          <Card.Header className={"text-xl font-semibold text-gray-800"}>
            {title}
          </Card.Header>
          <Card.Body>
            {children}
          </Card.Body>
          <Card.Footer className={"flex justify-end gap-4"}>
            <button onClick={onHide} type="button" className="py-1 px-5 text-gray-800 border border-gray-800 rounded">Batal</button>
            <button onClick={onSubmit} type="submit" className="py-1 px-5 text-white bg-blue-500 rounded">Simpan</button>
          </Card.Footer>
        </Card>
      </dialog>
    </>
  )
}