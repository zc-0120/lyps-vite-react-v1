import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

/* 頁面 */
import Index from './pages/Home'
import Aboutus from './pages/aboutus'
import Proposal from './pages/proposal';

/* icon */
import HomeIcon from './icons/Homeicon';
import NewsIcon from './icons/Newsicon';
import ProposalIcon from './icons/ProposalIcon';

import logo from './applogo_icon.svg'
import './App.css'



function NavBar(){
  const location = useLocation();
  const currentPath = location.pathname;
  const btn = document.getElementById('changemenu')

  function changemenu(){
    var Nav = document.getElementById('sidebar')
    var btn = document.getElementById('changemenu')
    if (Nav.classList.contains('open')){
      Nav.classList.remove('open')
      Nav.classList.add('close')
      setTimeout(() => {
        Nav.classList.add('hidden')
      }, 200);
      btn.classList.remove('normal')
      btn.classList.add('open')

    } else if (Nav.classList.contains('close')){
      Nav.classList.remove('hidden')
      setTimeout(()=>{
        Nav.classList.add('open')
        Nav.classList.remove('close')
      }, 200)
      setTimeout(()=>{
        btn.classList.add('normal')
      },200)
      btn.classList.remove('open')
    }
  }

  return (
    <div className={currentPath === '/manage' ? 'managepage':''}>
      <nav className='sidebar open' id='sidebar'>
        <img src={logo} className='applogo'></img>
        <a href="./">
          <div className='edgelinebox'>
            <span className={currentPath === '/' ? 'active':'hidden'}></span>
            <div className={currentPath === '/' ? 'isin':'sbtn'}>
              <HomeIcon />
            </div>
          </div>
          <p>首頁</p>
        </a>
        <a href="./announcement">
          <div className='edgelinebox'>
            <span className={currentPath === '/announcement' ? 'active':'hidden'}></span>
            <div className={currentPath === '/announcement' ? 'isin':'sbtn'}>
              <NewsIcon />
            </div>
          </div>
          <p>校園公告</p>
        </a>
        <a href="./proposal">
        <div className='edgelinebox'>
            <span className={currentPath === '/proposal' ? 'active':'hidden'}></span>
            <div className={currentPath === '/proposal' ? 'isin':'sbtn'}>
              <ProposalIcon />
            </div>
          </div>
          <p>提案進度</p>
        </a>
        
      </nav>
      <button className='sidechangebtn' id='changemenu' onClick={changemenu}>
      <svg fill="none" height="24" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  )
}

function TopBar(){
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className={currentPath === '/manage' ? 'managepage':'navbar'}>
      <button className='navbtn'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
          <path d="M 24 4 C 22.423103 4 20.902664 4.1994284 19.451172 4.5371094 A 1.50015 1.50015 0 0 0 18.300781 5.8359375 L 17.982422 8.7382812 C 17.878304 9.6893592 17.328913 10.530853 16.5 11.009766 C 15.672739 11.487724 14.66862 11.540667 13.792969 11.15625 L 13.791016 11.15625 L 11.125 9.9824219 A 1.50015 1.50015 0 0 0 9.4257812 10.330078 C 7.3532865 12.539588 5.7626807 15.215064 4.859375 18.201172 A 1.50015 1.50015 0 0 0 5.4082031 19.845703 L 7.7734375 21.580078 C 8.5457929 22.147918 9 23.042801 9 24 C 9 24.95771 8.5458041 25.853342 7.7734375 26.419922 L 5.4082031 28.152344 A 1.50015 1.50015 0 0 0 4.859375 29.796875 C 5.7625845 32.782665 7.3519262 35.460112 9.4257812 37.669922 A 1.50015 1.50015 0 0 0 11.125 38.015625 L 13.791016 36.841797 C 14.667094 36.456509 15.672169 36.511947 16.5 36.990234 C 17.328913 37.469147 17.878304 38.310641 17.982422 39.261719 L 18.300781 42.164062 A 1.50015 1.50015 0 0 0 19.449219 43.460938 C 20.901371 43.799844 22.423103 44 24 44 C 25.576897 44 27.097336 43.800572 28.548828 43.462891 A 1.50015 1.50015 0 0 0 29.699219 42.164062 L 30.017578 39.261719 C 30.121696 38.310641 30.671087 37.469147 31.5 36.990234 C 32.327261 36.512276 33.33138 36.45738 34.207031 36.841797 L 36.875 38.015625 A 1.50015 1.50015 0 0 0 38.574219 37.669922 C 40.646713 35.460412 42.237319 32.782983 43.140625 29.796875 A 1.50015 1.50015 0 0 0 42.591797 28.152344 L 40.226562 26.419922 C 39.454197 25.853342 39 24.95771 39 24 C 39 23.04229 39.454197 22.146658 40.226562 21.580078 L 42.591797 19.847656 A 1.50015 1.50015 0 0 0 43.140625 18.203125 C 42.237319 15.217017 40.646713 12.539588 38.574219 10.330078 A 1.50015 1.50015 0 0 0 36.875 9.984375 L 34.207031 11.158203 C 33.33138 11.54262 32.327261 11.487724 31.5 11.009766 C 30.671087 10.530853 30.121696 9.6893592 30.017578 8.7382812 L 29.699219 5.8359375 A 1.50015 1.50015 0 0 0 28.550781 4.5390625 C 27.098629 4.2001555 25.576897 4 24 4 z M 24 7 C 24.974302 7 25.90992 7.1748796 26.847656 7.3398438 L 27.035156 9.0644531 C 27.243038 10.963375 28.346913 12.652335 30 13.607422 C 31.654169 14.563134 33.668094 14.673009 35.416016 13.904297 L 37.001953 13.207031 C 38.219788 14.669402 39.183985 16.321182 39.857422 18.130859 L 38.451172 19.162109 C 36.911538 20.291529 36 22.08971 36 24 C 36 25.91029 36.911538 27.708471 38.451172 28.837891 L 39.857422 29.869141 C 39.183985 31.678818 38.219788 33.330598 37.001953 34.792969 L 35.416016 34.095703 C 33.668094 33.326991 31.654169 33.436866 30 34.392578 C 28.346913 35.347665 27.243038 37.036625 27.035156 38.935547 L 26.847656 40.660156 C 25.910002 40.82466 24.973817 41 24 41 C 23.025698 41 22.09008 40.82512 21.152344 40.660156 L 20.964844 38.935547 C 20.756962 37.036625 19.653087 35.347665 18 34.392578 C 16.345831 33.436866 14.331906 33.326991 12.583984 34.095703 L 10.998047 34.792969 C 9.7799772 33.330806 8.8159425 31.678964 8.1425781 29.869141 L 9.5488281 28.837891 C 11.088462 27.708471 12 25.91029 12 24 C 12 22.08971 11.087719 20.290363 9.5488281 19.160156 L 8.1425781 18.128906 C 8.8163325 16.318532 9.7814501 14.667839 11 13.205078 L 12.583984 13.902344 C 14.331906 14.671056 16.345831 14.563134 18 13.607422 C 19.653087 12.652335 20.756962 10.963375 20.964844 9.0644531 L 21.152344 7.3398438 C 22.089998 7.1753403 23.026183 7 24 7 z M 24 16 C 19.599487 16 16 19.59949 16 24 C 16 28.40051 19.599487 32 24 32 C 28.400513 32 32 28.40051 32 24 C 32 19.59949 28.400513 16 24 16 z M 24 19 C 26.779194 19 29 21.220808 29 24 C 29 26.779192 26.779194 29 24 29 C 21.220806 29 19 26.779192 19 24 C 19 21.220808 21.220806 19 24 19 z"></path>
        </svg>
      </button>
      <button className='navbtn'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
          <path d="M 24 4.015625 C 16.289774 4.0178592 10 10.286931 10 18 C 10 21.999465 11.691407 25.619495 14.388672 28.167969 C 14.705917 28.467557 14.938931 28.889561 15.046875 29.373047 L 17.513672 40.476562 C 17.969216 42.527257 19.805576 44 21.90625 44 L 26.09375 44 C 28.194629 44 30.030487 42.527102 30.486328 40.476562 L 32.955078 29.373047 L 32.955078 29.371094 C 33.062069 28.888989 33.293691 28.469343 33.611328 28.169922 L 33.611328 28.167969 L 33.613281 28.167969 C 36.309356 25.619613 38 21.999465 38 18 C 38 10.286931 31.710226 4.0178592 24 4.015625 z M 24 7.015625 C 30.093774 7.0173908 35 11.909069 35 18 C 35 21.156535 33.67466 23.980731 31.550781 25.988281 C 30.753594 26.740588 30.250209 27.709621 30.025391 28.722656 L 28.853516 34 L 19.146484 34 L 17.974609 28.720703 C 17.748553 27.708189 17.245974 26.740693 16.449219 25.988281 C 14.324484 23.980755 13 21.156535 13 18 C 13 11.909069 17.906226 7.0173908 24 7.015625 z M 19.814453 37 L 28.185547 37 L 27.558594 39.826172 C 27.404435 40.519634 26.804871 41 26.09375 41 L 21.90625 41 C 21.192924 41 20.595862 40.521478 20.441406 39.826172 L 19.814453 37 z"></path>
        </svg>
      </button>
      <p className='vertext'>校園資訊整合平台 v1.0</p>
    </div>
  )
}

function App() {
  return (
      <Router basename='/LYSA-APP'>
        <main>
          <NavBar></NavBar>
          <div className='section'>
            <TopBar />
            <Routes>
              <Route path='/' element={<Index />}></Route>
              <Route path='/announcement' element={<Aboutus />}></Route>
              <Route path='/proposal' element={<Proposal />}></Route>
            </Routes>
          </div>
        </main>
      </Router>
  )
}

export default App
