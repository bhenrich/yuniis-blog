import React from "react";
import RSSFeed from "./RSSFeed";
import "./App.css"; // Import the CSS file

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import RssFeedIcon from '@mui/icons-material/RssFeed';

function App() {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1 className="site-name">
            YuNii's Blog &nbsp;
            <RssFeedIcon fontSize="large" className="rss_icon" />
          </h1>
          <nav className="header-nav">
            <a href="https://twitter.com/yuniidev" target="_blank" rel="noopener noreferrer" className="social_link">
              <TwitterIcon fontSize="small" className="social_icon" />
              Twitter &nbsp;
            </a>
            <a href="https://github.com/bhenrich" target="_blank" rel="noopener noreferrer" className="social_link">
              <GitHubIcon fontSize="small" className="social_icon" />
              GitHub &nbsp;
            </a>
            <a href="https://spacehey.com/yunii" target="_blank" rel="noopener noreferrer" className="social_link">
              <ChatBubbleOutlineIcon fontSize="small" className="social_icon" />
              SpaceHey &nbsp;
            </a>
          </nav>
        </div>
      </header>
      <div className="list_posts">
        <RSSFeed />
      </div>
      <footer className="footer">
        <div className="footer-text">
          Proudly made using ReactJS and Material-UI. All blog posts are fetched from YuNii's SpaceHey RSS feed.
          &nbsp;&nbsp;&copy; Benjamin Henrich 2023
        </div> <br />
        <div className="footer-badges">
          <img src="https://www.rssboard.org/rss-validator/images/valid-rss-rogers.png" alt="Valid RSS" /> &nbsp;
          <img src="https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="ReactJS" /> &nbsp;
          <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material-UI" /> &nbsp;
          <img src="https://img.shields.io/badge/SpaceHey-FF0000?style=for-the-badge&logo=spacehey&logoColor=white" alt="SpaceHey" /> &nbsp;
          <img src="http://www.notepad.org/notepad-logo3.gif" alt="Made with Notepad" />

        </div>
      </footer>
    </div>
  );
}

export default App;
