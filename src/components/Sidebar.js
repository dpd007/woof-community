import "./css/Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ViewListIcon from "@mui/icons-material/ViewList";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BookIcon from "@mui/icons-material/Book";
import ShieldIcon from "@mui/icons-material/Shield";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Sidebar = () => {
  return (
    <div className="m-3">
      <aside className="sidebar__main">
        <div className="info__div card p-3">
          <p>
            <span>WOOF Community</span> is a community of 15K+ amazing dog
            parents where you can learn how to do good parenting for your dog.
          </p>
          <p>
            We're a place where many dog parents share their tips and
            experiences with us and also you, to get everyone be better at
            parenting.
          </p>
          <div className="text-center pt-2 mt-2">
            <button id="account__btn">create account</button>
            <a href={true} className="nav-link">
              Login
            </a>
          </div>
        </div>
        <div className="menu__div card p-3">
          <div>
            <HomeIcon /> <label>Home</label>
          </div>
          <div>
            <ViewListIcon /> <label>Listing</label>
          </div>
          <div>
            <VideoLibraryIcon /> <label>Video Libraray</label>
          </div>
          <div>
            <LocalOfferIcon /> <label>Tag</label>
          </div>
          <div>
            <TipsAndUpdatesIcon /> <label>FAQ</label>
          </div>
          <h5>Others</h5>
          <div>
            <BookIcon /> <label>Code of Conduct</label>
          </div>
          <div>
            <ShieldIcon /> <label>Privacy & Policy</label>
          </div>
        </div>
        <div className="sidebar__footer p-3">
          <div>
            <TwitterIcon />
          </div>
          <div>
            <FacebookIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
