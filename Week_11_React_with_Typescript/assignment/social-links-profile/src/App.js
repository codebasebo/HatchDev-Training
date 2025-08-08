
import './App.css';

function SocialProfile() {
  return (
    <main>
      <div class = "container">
        <div class= "card">
          <img class="header-image" src="avatar-jessica.jpeg" alt="" />
        <h2 > Jessica Randall</h2>
        <p class="location">London, United Kingdom</p>
        <p class= "bio"> "Front-end developer and avid reader."</p>

        <div class="buttons">
          <a href="#" class= "btn green" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" class="btn dark" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>
        <a href="#" class="btn dark" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" class="btn dark" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" class="btn dark" target="_blank" rel="noopener noreferrer">Instagram</a>

        </div>
        </div>
      </div>
    </main>
   
  );
}

export default SocialProfile;
