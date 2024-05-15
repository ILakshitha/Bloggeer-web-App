import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DashProfile from "../component/DashProfile";
import DashSidebar from "../component/DashSidebar";
import DashPosts from "../component/DashPosts";


export default function Dashbord() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
   
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
  <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
          {/*SIdebar*/}
          <DashSidebar/>

      </div>

      {/*profile*/}
      {tab=== 'profile' && <DashProfile/>}

      {/*posts...*/}
      {tab === 'posts' && <DashPosts/>}
    </div>
  )
}
