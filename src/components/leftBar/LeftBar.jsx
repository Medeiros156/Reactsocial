import "./leftBar.scss";
// import Friends from "../../assets/1.png";
import Friends from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import MovieIcon from '@mui/icons-material/Movie';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CollectionsIcon from '@mui/icons-material/Collections';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MessageIcon from '@mui/icons-material/Message';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <Friends/>
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupIcon/>
            <span>Groups</span>
          </div>
          <div className="item">
            <StoreIcon/>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <MovieIcon/>
            <span>Live</span>
          </div>
          
        </div>
        <hr />
        <div className="menu">
          <span>Menu</span>
          <div className="item">
            <CalendarMonthIcon/>
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsIcon/>
            <span>Games</span>
          </div>
          <div className="item">
            <CollectionsIcon/>
            <span>Gallery</span>
          </div>
          <div className="item">
            <OndemandVideoIcon/>
            <span>Videos</span>
          </div>
          <div className="item">
            <MessageIcon/>
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <ExitToAppIcon/>
            <span>Exit</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
