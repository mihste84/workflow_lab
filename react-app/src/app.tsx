import classNames from 'classnames'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/common/header'
import SideNav from './components/common/side-nav'

function App() {
  var [showSideNav, setShowSideNav] = useState(true)

  var toggleSideNav = () => {
    setShowSideNav(!showSideNav)
  }

  return (
    <>
      <section className="fixed top-0 right-0 left-0 h-14 bg-blue-500">
        <Header />
      </section>
      <section className="container flex h-screen flex-nowrap pt-14">
        <aside className={classNames(showSideNav ? 'w-60' : 'w-9', 'max-w-full border-x-2')}>
          <SideNav toggleSideNav={toggleSideNav} showSideNav={showSideNav} />
        </aside>
        <main className="max-w-full grow basis-0">
          <Outlet />
        </main>
      </section>
    </>
  )
}

export default App
