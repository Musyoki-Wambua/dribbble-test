import React from "react";

function Landing(){
    return(
      <div className="description">
        <div className="about-app">
          <h1>About</h1>
          <div className="about">
             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperd</p>
          </div>
          <div className="started">
             <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Get Started <i class="fa-solid fa-right-long"></i></button>
          </div>
        </div>
      <div className="image">
            {/* <img src="https://kb.accessally.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-29-at-10.15.18-AM.png"  alt="logo" className="img1"></img> */}
            <img src="https://static.collectui.com/shots/3642841/for-you-medium" alt="logo" className="img2"></img>
            <img src="https://agentestudio.com/uploads/ckeditor/pictures/1565/content_user-profile-design-9.jpg" alt="logo" className="img3"></img>
            <img src="https://cdn.dribbble.com/users/1684289/screenshots/5836111/media/e4ff9ae546ca632df6fb9c07eee7d4fa.jpg?compress=1&resize=400x300&vertical=top" alt="logo" className="img4"></img>
        </div>
        <footer className="footer">
            <div>
              <p>Copyright @ 2023 All Rights Reserved by Dribbly</p>
            </div>
            <div>
              <div className="button">
                <div className="icon"><i className="fa-brands fa-facebook"></i></div>
                <span>Facebook</span>
              </div>
              <div className="button">
                <div className="icon"><i className="fa-brands fa-github"></i></div>
                <span>Github</span>
              </div>
              <div className="button">
                <div className="icon"><i className="fa-brands fa-twitter"></i></div>
                <span>Twitter</span>
              </div>
              <div className="button">
                <div className="icon"><i className="fa-brands fa-youtube"></i></div>
                <span>YouTube</span>
              </div>
            </div>
        </footer>
  </div>
    )
}
export default Landing;