
import { lazy, createRef } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './index.css'
import NavBar from './components/NavBar'
import NavBarLink from './components/NavBarLink'

import Experience from './pages/Experience'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Showcase from './pages/Showcase'
import ErrorPage from './pages/ErrorPage'
import CaseStudyPerspectives from './pages/case-studies/CaseStudyPerspectives'
import CaseStudySocialGraph from './pages/case-studies/CaseStudySocialGraph'
import CcTdmSunderland from './pages/creative-context/CcTdmSunderland'

const routes = [
  { path: '/', name: 'Home', level: 1, element: <Experience />, nodeRef: createRef() },
  { path: '/about-me', level: 1, name: 'About Me', element: <AboutMe />, nodeRef: createRef() },
  { path: '/portfolio', level: 1, name: 'Portfolio', element: <Portfolio />, nodeRef: createRef() },
  { path: '/portfolio/case-study-1', level: 2, name: 'Perspectives', element: <CaseStudyPerspectives />, nodeRef: createRef() },
  { path: '/portfolio/case-study-2', level: 2, name: 'Social Graph', element: <CaseStudySocialGraph />, nodeRef: createRef() },
  { path: '/showcase', level: 1, name: 'Showcase', element: <Showcase />, nodeRef: createRef() },
  { path: '/showcase/tdm-sunderland', level: 2, name: 'TDM Ident Animation', element: <CcTdmSunderland />, nodeRef: createRef() }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: (route.path === '/') ? undefined : route.path,
      element: route.element,
    })),
    errorElement: <ErrorPage />
  }
])

function MainLayout() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } = routes.find((route) => {
    return route.path === location.pathname
  }) ?? {} // ?? {} is a fallback in case the find method returns undefined
  return (
    <>      
      <NavBar>
          {routes.map((route) => (            
            route.level === 1 && <NavBarLink
              key={route.path}
              as={NavLink}
              to={route.path}
              hoverColor={route.hoverColor}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end
            >
              {route.name}
            </NavBarLink>
          ))}
      </NavBar>
      <div className="min-w-full" name="top">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)