import { Formik } from "formik"
import { useState } from "react"

let nextId = 1

export const Home = () => {

  const [data, setData] = useState([
    {
      id: 0,
      nama: 'Joko',
      alamat: 'Sleman'
    },
  ])
  const [showAddModal, setShowAddModal] = useState(false)

  const onAddData = ((values, { resetForm }) => {
    setData([...data, { id: nextId++, nama: values?.nama, alamat: values.alamat }]);
    setShowAddModal(!showAddModal);

    resetForm();
  })

  const onRemoveData = (id) => {
    setData(data.filter((item) => { return item.id !== id }))
  }

  return (
    <>
      <article className="p-5 bg-white rounded-md">
        <section className="flex justify-between items-center mb-5 px-1">
          <h1 className="font-medium text-2xl text-gray-800">Data Umat</h1>
          <button onClick={() => setShowAddModal(!showAddModal)} className="py-1.5 px-7 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-700">Tambah</button>
        </section>
        <section>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">No,</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Nama</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Alamat</th>
                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {data.map((item, index) => {
                        return (
                          <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index + 1}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.nama}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.alamat}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                <button onClick={() => onRemoveData(item.id)} type="button" className="inline-flex items-center gap-x-2 text-sm text-red-500 font-semibold rounded-lg border border-transparent hover:text-red-600 focus:outline-none focus:text-red-700 disabled:opacity-50 disabled:pointer-events-none">
                                  delete
                                </button>
                              </td>
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <dialog open className={`${showAddModal ? 'opacity-100' : 'opacity-0 invisible'} w-full h-full absolute top-0 bg-black/30 transition-all duration-300`}>
          <div className="flex justify-center items-center h-full">
            <div className="basis-1/3 p-5 bg-white rounded-md">
              <div className="flex items-center gap-2 mb-5 pb-2 text-blue-500 border-b">
                <span className="material-symbols-rounded">
                  add
                </span>
                <h2 className="font-medium text-lg">Tambah Data</h2>
              </div>

              <Formik
                enableReinitialize
                initialValues={{
                  nama: '',
                  alamat: '',
                }}
                onSubmit={onAddData}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <>
                    <form onSubmit={handleSubmit} className="text-center">
                      <div className="flex flex-col gap-3 mb-5">
                        <div>
                          <input
                            type="text"
                            name="nama"
                            placeholder="Nama"
                            value={values.nama}
                            onChange={handleChange}
                            className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="alamat"
                            placeholder="Alamat"
                            value={values.alamat}
                            onChange={handleChange}
                            className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-4">
                        <span onClick={() => setShowAddModal(!showAddModal)} className="py-1.5 px-7 font-medium text-gray-700 border border-gray-700 rounded-md hover:bg-gray-700 hover:text-white active:bg-gray-800">Batal</span>
                        <button type="submit" className="py-1.5 px-7 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-700">Tambah</button>
                      </div>
                    </form>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </dialog>
      </article>
    </>
  )
}