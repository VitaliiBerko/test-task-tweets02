import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Card,
  Description,
  Logo,
  Text,
} from "./UserCardItem.styled.js";
import logo from "../../images/Logo.svg";
import avatarImg from "../../images/Hansel.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setFollowersCountAction,
  setToggleFollowingAction,
} from "../../redux/usersSlice";
import { selectFollowingStatud } from "../../redux/usersSelector";

const UserCardItem = ({ user }) => {
  const dispatch = useDispatch();
  const { avatar, tweets, followers, id } = user;

  const followingStatus = useSelector(selectFollowingStatud);

  const isFollowing = followingStatus[id] ?? false;

  const followersCount = useSelector(
    (state) => state.users.followersCount[id] ?? followers
  );

  const handleOnFollow = () => {
    const updatedFollowersCoutn = isFollowing
      ? followersCount - 1
      : followersCount + 1;

    dispatch(
      setFollowersCountAction({
        userId: id,
        followersCount: updatedFollowersCoutn,
      })
    );

    dispatch(
      setToggleFollowingAction({ userId: id, isFollowing: !isFollowing })
    );
  };

  return (
    <Card>
      <Logo src={logo} alt="Logo" />

      <Avatar
        src={avatar || avatarImg}
        alt="User avatar"
        
      />

      <Description>
        <Text>{tweets} TWEETS</Text>
        <Text>{followersCount.toLocaleString("en-US")} FOLLOWERS</Text>

        <Button onClick={handleOnFollow}>
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </Description>
    </Card>
  );
};

UserCardItem.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCardItem;
