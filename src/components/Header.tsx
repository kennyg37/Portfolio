import Darkmode from './navbar/Darkmode'
import Logo from './navbar/Logo'
import Menu from './navbar/Menu'

const Header = () => {
  return (
    <div className='flex p-2'>
        <div>
            <Logo />
        </div>
        <div>
            <Darkmode />
        </div>
        <div>
            <Menu />
        </div>
    </div>
  )
}

export default Header