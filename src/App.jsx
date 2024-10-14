import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Layout } from "./layout"
import { Home, Login } from "./pages"
import { AbilityContextProvider } from "./utils/casl"

function App() {

  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (localStorage.getItem('username') === null || localStorage.getItem('username') === '') {
  //     return navigate('/login')
  //   }
  // }, [])

  // const PagesConfig = [
  //   {
  //     name: 'Master',
  //     link: '/master',
  //     access: ['SUPER_ADMIN', 'ADMIN'],
  //     child: [
  //       {
  //         name: 'Home',
  //         link: '/home',
  //         component: <Home />
  //       },
  //       {
  //         name: 'About',
  //         link: '/about',
  //         component: <About />
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Admin',
  //     link: '/admin',
  //     component: <Admin />,
  //     access: ['ADMIN']
  //   }
  // ]

  // const permision = ['ADMIN', 'SUPER_ADMIN']
  // const menu = PagesConfig.filter((page) => {
  //   return permision.some((hak) => hak == page.access)
  // })

  return (
    <>
      <AbilityContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* {PagesConfig.map((page) => {
                return page.child ? (
                  page.child.map((child) => {
                    return <Route path={child.link} element={child.component} />
                  })
                ) : (
                  <Route path={page.link} element={page.component} />
                )
              })} */}
              {/* {routes} */}
              <Route index element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AbilityContextProvider>
    </>
  )
}

export default App
