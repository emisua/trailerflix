import { useEffect, useRef, useState } from 'react'
import SearchInput from './SearchInput'

const Header = ({ fixed }: { fixed: boolean }) => {
  const navbarRef = useRef(null)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    if (!fixed) return

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      const isNavbarFixed = scrollY >= 50

      setIsFixed(isNavbarFixed)
    }

    // Agregar el evento de scroll y limpiarlo al desmontar el componente
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Aplicar la clase 'fixed' condicionalmente
  const navbarClass = isFixed
    ? 'bg-neutral-950/70 backdrop-blur-lg shadow-xl'
    : ''

  return (
    <header
      className={`${navbarClass} fixed w-full p-4 z-10 top-0 left-0 right-0 transition-all duration-500  py-6`}
      ref={navbarRef}
    >
      <nav className='flex justify-between items-center gap-4 container max-w-screen-lg mx-auto '>
        <a
          className='logo text-white font-black text-2xl flex-1 w-1/2'
          href='/'
        >
          The TRAILERS
        </a>
        <div className='search flex-1 w-1/2 max-w-[200px]'>
          <SearchInput />
        </div>
      </nav>
    </header>
  )
}
export default Header
