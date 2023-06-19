import Cars from '../components/cars/Cars'
import './Home.scss'

export default function Home() {
    return (
        <div className='home'>
            <img src="/assets/Home/reklam/reklam left.png" alt="" />
            <Cars />
            <img src="/assets/Home/reklam/reklam right.png" alt="" />

        </div>
    )
}