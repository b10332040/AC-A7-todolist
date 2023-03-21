import { Outlet } from 'react-router-dom';

function UserPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <p>sideBar</p>
        </div>
        <div className="col-6">
          <Outlet />
        </div>
        <div className="col-3">
          <p>PopularList</p>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
