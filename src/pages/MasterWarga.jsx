/* eslint-disable no-unused-vars */
import { Formik } from "formik";
import { useState } from "react";

export const MasterWarga = () => {

  let nextId = 1
  // let indexForm = 1

  const [data, setData] = useState([
    {
      id: 0,
      nama: 'Joko',
      alamat: 'Sleman'
    },
  ])
  const [showAddModal, setShowAddModal] = useState(false)
  const [indexForm, setIndexForm] = useState(1)

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
          <h1 className="font-medium text-2xl text-gray-800">Master Warga</h1>
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
            <div className="w-3/4 p-5 bg-white rounded-md">
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
                    <form onSubmit={handleSubmit} className="">
                      <div className="">
                        <div className={`${indexForm === 1 ? '' : 'hidden'} flex gap-3`}>
                          <div className="basis-1/2 flex flex-col gap-2">
                            {/* Nama Lengkap */}
                            <div>
                              <label htmlFor="">Nama Lengkap</label>
                              <input
                                type="text"
                                name="namaLengkap"
                                placeholder="Nama Lengkap"
                                className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            {/* Tanggal Lahir */}
                            <div>
                              <label htmlFor="">Tanggal Lahir</label>
                              <input
                                type="date"
                                name="namaLengkap"
                                placeholder=""
                                className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            {/* Tempat Lahir */}
                            <div className="flex items-end gap-2">
                              <div className="basis-1/2">
                                <label htmlFor="">Tempat Lahir</label>
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Provinsi</option>
                                </select>
                              </div>
                              <div className="basis-1/2">
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Kota</option>
                                </select>
                              </div>
                            </div>
                            {/* Alamat */}
                            <div className="flex flex-col gap-1">
                              <div className="basis-1/2">
                                <label htmlFor="">Alamat</label>
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Provinsi</option>
                                </select>
                              </div>
                              <div className="basis-1/2">
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Kota</option>
                                </select>
                              </div>
                              <div className="basis-1/2">
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Kecamatan</option>
                                </select>
                              </div>
                              <div className="basis-1/2">
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Desa</option>
                                </select>
                              </div>
                              <div>
                                <textarea rows="2" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="basis-1/2 flex flex-col gap-2">
                            {/* No Telp */}
                            <div>
                              <label htmlFor="">No Telp</label>
                              <input
                                type="text"
                                name="namaLengkap"
                                placeholder="Nama Lengkap"
                                className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            {/* Email */}
                            <div>
                              <label htmlFor="">Email</label>
                              <input
                                type="email"
                                name="namaLengkap"
                                placeholder=""
                                className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            {/* Jenis Kelamin */}
                            <div className="">
                              <label htmlFor="">Jenis Kelamin</label>
                              <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                <option>Pilih jenis kelamin</option>
                              </select>
                            </div>
                            {/* Kondisi Fisik */}
                            <div className="flex flex-col gap-1">
                              <div className="basis-1/2">
                                <label htmlFor="">Kondisi Fisik</label>
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Kondisi Fisik</option>
                                </select>
                              </div>
                              <div className="basis-1/2">
                                <input name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500" />
                              </div>
                            </div>
                            {/* Status Marital */}
                            <div className="basis-1/2">
                              <label htmlFor="">Status Marital</label>
                              <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                <option>Pilih Status Marital</option>
                              </select>
                            </div>
                            {/* Gol Darah */}
                            <div className="basis-1/2">
                              <label htmlFor="">Golongan Darah</label>
                              <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                <option>Pilih Golongan Darah</option>
                              </select>
                            </div>
                          </div>
                          <div className="basis-1/2">
                            {/* <div className="flex justify-between">
                            <div>
                              <input type="radio" id="age1" name="age" value="30" />
                              <label>0 - 30</label>
                            </div>
                            <div>
                              <input type="radio" id="age2" name="age" value="60" />
                              <label >31 - 60</label>
                            </div>
                          </div> */}
                          </div>
                        </div>
                        <div className={`${indexForm === 2 ? '' : 'hidden'} flex gap-3`}>
                          <div className="basis-1/2 flex flex-col gap-2">
                            {/* Nama Lengkap */}
                            <div>
                              <label htmlFor="">Nama Lengkap</label>
                              <input
                                type="text"
                                name="namaLengkap"
                                placeholder="Nama Lengkap"
                                className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            {/* Tanggal Lahir */}
                            <div>
                              <label htmlFor="">Tanggal Lahir</label>
                              <input
                                type="date"
                                name="namaLengkap"
                                placeholder=""
                                className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            {/* Tempat Lahir */}
                            <div className="flex items-end gap-2">
                              <div className="basis-1/2">
                                <label htmlFor="">Tempat Lahir</label>
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Provinsi</option>
                                </select>
                              </div>
                              <div className="basis-1/2">
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Kota</option>
                                </select>
                              </div>
                            </div>
                            {/* Alamat */}
                            <div className="flex flex-col gap-1">
                              <div className="basis-1/2">
                                <label htmlFor="">Alamat</label>
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Provinsi</option>
                                </select>
                              </div>
                              <div className="basis-1/2">
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Kota</option>
                                </select>
                              </div>
                              <div className="basis-1/2">
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Kecamatan</option>
                                </select>
                              </div>
                              <div className="basis-1/2">
                                <select name="" id="" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500">
                                  <option>Pilih Desa</option>
                                </select>
                              </div>
                              <div>
                                <textarea rows="2" className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="basis-1/2">
                            {/* <div className="flex justify-between">
                            <div>
                              <input type="radio" id="age1" name="age" value="30" />
                              <label>0 - 30</label>
                            </div>
                            <div>
                              <input type="radio" id="age2" name="age" value="60" />
                              <label >31 - 60</label>
                            </div>
                          </div> */}
                          </div>
                        </div>
                         <button type="button" onClick={() => setIndexForm(indexForm - 1)} className="py-1.5 px-7 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-700">prev</button>
                         <button type="button" onClick={() => setIndexForm(indexForm + 1)} className="py-1.5 px-7 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-700">next</button>
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