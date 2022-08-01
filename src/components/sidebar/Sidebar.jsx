import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
            src="https://images.unsplash.com/photo-1597976618063-810eb50c84fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFuJTIwaW4lMjBuYXR1cmV8ZW58MHx8MHx8&w=1000&q=80" 
            alt=""
            />
            <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Travel</li>
            <li className="sidebarListItem">Food</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Fitness</li>
            <li className="sidebarListItem">Tech</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US </span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
        </div>
     </div>
       )
     }
