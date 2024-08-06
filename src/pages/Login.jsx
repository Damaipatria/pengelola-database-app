import { Formik } from "formik"

export const Login = () => {

  const onSubmitLoginForm = ((values, { resetFrom }) => {
    console.log(values)
  })

  return (
    <>
      <article className="flex justify-center items-center w-full h-screen">
        <section className="xl:basis-1/4 basis-1/3 p-5 bg-white rounded-md shadow-md">
          <h1 className="mb-5 font-semibold text-center text-2xl">Login</h1>
          <Formik
            enableReinitialize
            initialValues={{
              username: '',
              password: '',
            }}
            onSubmit={onSubmitLoginForm}
          >
            {({ handleSubmit }) => (
              <>
                <form onSubmit={handleSubmit} className="text-center">
                  <div className="flex flex-col gap-3 mb-5">
                    <div>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        name="username"
                        placeholder="Password"
                        className="w-full py-1.5 px-3 text-base border rounded-md focus:outline-none"
                      />
                    </div>
                  </div>
                  <button type="submit" className="py-1.5 px-7 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-700">Login</button>
                </form>
              </>
            )}
          </Formik>
        </section>
      </article>
    </>
  )
}