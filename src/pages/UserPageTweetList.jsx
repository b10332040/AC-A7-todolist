import { NavLink, useParams } from 'react-router-dom';

function UserPageTweetList() {
  let { userId } = useParams();

  return (
    <div>
      <nav>
        <NavLink to={`/${userId}`}>推文</NavLink>
        <NavLink to={`/${userId}/reply`}>回復</NavLink>
      </nav>
      <p>TweetList</p>
    </div>
  );
}

export default UserPageTweetList;
