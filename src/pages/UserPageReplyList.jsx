import { NavLink, useParams } from 'react-router-dom';

function UserPageReplyList() {
  let { userId } = useParams();

  return (
    <div>
      <nav>
        <NavLink to={`/${userId}`}>推文</NavLink>
        <NavLink to={`/${userId}/reply`}>回復</NavLink>
      </nav>
      <p>ReplyList</p>
    </div>
  );
}

export default UserPageReplyList;
