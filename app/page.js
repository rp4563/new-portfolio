import Image from 'next/image'

export default function Home() {
  return ( 
    <>
    <header>
      <nav>
        <div className="left">Ritik's Portfolio</div>
        <div className="right">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Contact me</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <section className="firstsection">
        <div className="leftsection">
         <div> Hi,My name is <span className="purple">Ritik Singh Pundhir </span></div>


          <div className="passion">and I am a passionate</div>

          <span id="element"></span>
          <div className="buttons">
            <button className="btn">Download Resume</button>
            <button className="btn">Visit Github</button>
          </div>
        </div>
        <div className="rightsection">
          <img src="portfolio image.png" alt="" className="focused-image" />
        </div>
      </section>
      <hr />

      <section className="secondSection">
        <span className="text-gray">What I have done so far</span>
        <h1>Work Experience</h1>
        <div className="box">
          <div className="vertical">
            <img className="image-top" src="portfolio image.png" alt="" />
            <div className="vertical-title">HTML Developer (2021-2022)</div>
            <div className="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium incidunt veniam modi. Suscipit laudantium consectetur
              dolor, cum libero eum explicabo maiores architecto molestias!
            </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="portfolio image.png" alt="" />
            <div className="vertical-title">  Node.js Developer (2022-2023)</div>
            <div className="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium incidunt veniam modi. Suscipit laudantium consectetur
              dolor, cum libero eum explicabo maiores architecto molestias!
            </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="portfolio image.png" alt="" />
            <div className="vertical-title">HTML Developer (2021-2022)</div>
            <div className="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium incidunt veniam modi. Suscipit laudantium consectetur
              dolor, cum libero eum explicabo maiores architecto molestias!
            </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="portfolio image.png" alt="" />
            <div className="vertical-title">HTML Developer (2021-2022)</div>
            <div className="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium incidunt veniam modi. Suscipit laudantium consectetur
              dolor, cum libero eum explicabo maiores architecto molestias!
            </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="portfolio image.png" alt="" />
            <div className="vertical-title">HTML Developer (2021-2022)</div>
            <div className="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium incidunt veniam modi. Suscipit laudantium consectetur
              dolor, cum libero eum explicabo maiores architecto molestias!
              
            </div>
          </div>
          
        </div>
      </section>
    </main>

    <footer>
      <div className="footer">
        <div className="footer-first">
          <h3>Ritik's Developer portfolio</h3>
        </div>
        <div className="footer-second">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            
          </ul>
        </div>
        <div className="footer-third">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            
          </ul>
        </div>
        <div className="footer-fourth">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            
          </ul>
        </div>
      </div>
      <div className="footer-rights">
        Copyright &copy; ritiksportfolio.com | All rights reserved
      </div>
    </footer>

    </>
  )
}
