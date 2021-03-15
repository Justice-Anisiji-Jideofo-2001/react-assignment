
import './style/style.scss'
import Logo from './img/Rectangle 11.png'

const App = () => {
  return (
  <div className="cover">
    <div className="cover-lay">
      <div className='navbar'>
        <div className='logo'>
          <img src={Logo} alt=""/>
        </div>
        <ul className='menu'>
          <li><a href="">watch</a></li>
          <li><a href="">discover</a></li>
          <li><a href="">attend</a></li>
          <li><a href="">participate</a></li>
          <li><a href="">abouut</a></li>
        </ul>
      </div>
      <div className='txt'>
        <div className='mie'>
      <span>introducing mie membership. </span> <br/>
      {/* <span>membership.</span> */}
      </div>
      <div className='letter'>
        <span>Engage with MIE in a whole new way. MIE members earn <br/> exclusive access to unforgettable events with big names <br/> from the MIE Group, inspiring conversations with a global <br/> community, and more.</span>
      </div>
       <button className='btn'><a href="#">Explore now</a></button>
      </div>
    </div>
  </div>
  )
}

export default App
