import { Link } from 'react-router-dom'
import BiznesHesabi from './BiznesHesabi'
import './MainGiris.scss'


export default function mainGiris() {
    return (
        <div className='mainBox'>
            <div className='mainBox-inner'>
            <h2>TURBO.AZ</h2>
            <p>Öz elanlarınıza baxmağın, onları redaktə və bərpa etməyin rahat yolu</p>
            <button className='button1'>Telefon nömrəsi ilə giriş</button>
            <Link to='/bizneshesabi'><button className='button2'>Biznes hesabınıza giriş</button></Link>
            </div>
        </div>
    )
}