import { useState } from 'react'; 
import { useAuth } from '../pages/AuthContext'; 
import leaf from '../assets/leaf.svg'; 
import logoutIcon from '../assets/logout.svg'; 

const Navbar = () => {
  const { isLoggedIn, handleLogout } = useAuth(); 
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutPopup(false); 
    handleLogout(); 
  };

  return (
    <div className="w-full bg-black h-16 rounded-full flex my-2 items-center justify-between px-6">
      <div className="flex items-center">
        <img src={leaf} alt="Leaf Icon" className="h-8 w-8 mr-2" />
        <p className="text-green-400 text-2xl font-pacifco font-bold">PlanetCare</p>
      </div>

      {isLoggedIn ? (
        <div className="relative">
          <img
            src={logoutIcon}
            alt="Logout"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setShowLogoutPopup(!showLogoutPopup)}
          />
          {showLogoutPopup && (
            <div className="absolute top-10 right-0 bg-white shadow-md p-4 rounded-md">
              <button
                onClick={handleLogoutClick}
                className="bg-red-600 text-white px-4 py-2 rounded-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className='text-white'>LogIn</div>
      )}
    </div>
  );
};

export default Navbar;
