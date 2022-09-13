import logo from './logo.svg';
import './App.css';
import Navbar from './navbar'
import Searchbar from './searchbar'
import Button from './button'
function App() {
  return (
    <div>
        <div className="top-con">
          <Navbar />
          <h1>GET THE BEST  HOME</h1>
          <Searchbar className="search_bar"/>
        </div>
        <div className='second__section'>
              <div className='second__section--innerdiv'>
                  <div className='image_and_text_con'>
                      <h2 className='about-us'>about us</h2>
                      <p className='image_and_text_con--small'>
                          The  ALR Estates  has the scale and
                          the reputation to lead the real estate industry into the future. 
                          While others focus on simply facilitating a transaction,
                          ALR Estates Agents believe in the value of delivering 
                          extraordinary experiences by defying mediocrity and always
                          giving you 100%.
                          </p>
                          <h1 style={{color:"black",transform:"translateX(3.4em)",marginBottom:"em"}}>High-Quality Assets Around The World.</h1>
                          <Button name="Find an Agent" s={{zIndex:"1",backgroundColor:"white",borderColor:"white",padding:"1em",borderRadius:"5px",transform:"translateX(45em)",position:"relative",top:"7em",cursor:"pointer"}} />
                  </div>
                  <img style={{position:"relative",height:"95%", width:"50%",marginRight:"0.1em"}} src="./images/unsplash_h2_3dL9yLpU.png" alt="" />
                  <img style={{transform:"translateY(22em)",position:"absolute",marginLeft:"1.5em"}} src="./images/arrow.svg" alt="" />
              </div>
        </div>
        <div className='third__section'>
            <h1 style={{transform:"translateX(14em)",position:"relative",top:"1.5em"}}>FIND HOMES AROUND YOU!</h1>
            <p style={{position:"relative",top:"3em",transform:"translateX(6em)",fontSize:"34px", fontWeight:"500",color:"white"}}>with the new API developed, you can now find homes around you</p>
            <img style={{position:"relative",bottom:"20.5em",width:"15%",left:"35em"}} src="./images/image4.png" alt="" />
            <img style={{position:"relative",top:"19.4em",width:"60%"}} src="./images/map.png" alt="" />
        </div>
        <div className='forth__section'>
            <div className='forth__section--innerdiv'>
              <div style={{display:"flex",justifyContent:"space-between",width:"100%",position:"relative",top:"7em",left:"3em"}}> 
              <p>download the app</p> 
                <div style={{display:"flex",columnGap:"4em",width:"20%"}}>
                    <p>BE AN AGENT</p> 
                    <div className='circle'></div> 
                  </div> 
                </div>
                <div style={{display:"flex"}}>
                  <img style={{width:"50%",transform:"translateY(12em)",position:"relative",left:"4em"}} src="./images/image.png" alt="" />
                  <div style={{width:"50%",display:"flex",justifyContent:"flex-end"}}>
                    <img style={{ position:"relative",width:"30%",height:"30%",transform:"translateY(34em)",position:"relative"}} src="./images/pngegg.png" alt="" />
                    {/* <Button name="get the app" s={} /> */}
                    <div style={{boxShadow:"2px 2px",cursor:"pointer",position:"relative",borderRadius:"10px",border:"2px solid white",height:"fit-content",top:"43em",right:"12.5em", padding:"1em 3em",backgroundColor:"#FFFFFF",borderColor:"#FFFFFF",color:"black"}}><p>get the app</p></div>
                  </div>
                </div>
            </div>
        </div>
        <footer>
          <div className='footer__innerdiv'>
          <ul className='first__list'>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Sitemap</li>
            <li>Terms & Conditions</li>
            <li>Accessibility Statement</li>
            <li>NY Reasonable
       Accommodations Notice</li>
            <li>Cookie Preferences</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className='second__list'>
            <div>
              <h3>GENERAL</h3>
              <li>Fair Housing Act</li>
              <li>Fraud Alert</li>
              <li>Accessibility Statement</li>
              <li>NY Reasonable Accommodations Notice</li>
            </div>

            <div>
              <h3>ABOUT ALR</h3>
              <li>Company Profile</li>
              <li>About Us</li>
              <li>In The News</li>
              <li>Philanthropy</li>
              <li>Blog</li>
            </div>
            <div>
              <h3>REAL ESTATE RESOURCES</h3>
              <li>Home Seller Resources</li>
              <li>Home Buyer Resources</li>
              <li>Real Estate Glossary</li>
              <li>Mortgage Calculators</li>
            </div>

          </ul>
          <ul className='third__list'>
            <img style={{width:"70%",transform:"translateX(8em)"}} src="./images/image5.png" alt="" />
            <div style={{marginLeft:"6em",marginTop:"4em"}}>
              <h3>POPULAR REAL ESTATE MARKETS</h3>
              <li>Atlanta Real Estate Austin Real Estate San Francisco </li>
              <li>Real Estate Los Angeles Real Estate Dallas Real Estate</li>
              <li>Houston Real Estate Chicago Real Estate Orlando Real Estate </li>
              <li>Philadelphia Real Estate Phoenix Real Estate Boston Real Estate</li>
              <li> Miami Real Estate </li>

              <h3>SEARCH BY POPULAR STATES</h3>
              <li>California Real Estate Florida Real Estate</li>
              <li> Texas Real Estate New York Real Estate Illinois </li>
              <li>Real Estate Pennsylvania Real Estate Ohio Real Estate Georgia </li>
              <li>Real Estate North Carolina Real Estate New Jersey Real Estate </li>
              <li>Virginia Real Estate Utah Real Estate</li>
            </div>

          </ul>
          </div>
        </footer>
    </div>
  );
}

export default App;
