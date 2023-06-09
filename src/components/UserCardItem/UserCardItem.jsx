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

import { useState } from "react";

export const UserCardItem = ({ user, toggleUserIsFollowing }) => {
  
  const { avatar, tweets, isFollowing, id } = user;

  const [followers, setFollowers] =useState(isFollowing? parseInt(user.followers)+1 : parseInt(user.followers)) 
  
  return (
    <Card>
      <Logo src={logo} alt="Logo" />

      <Avatar src={avatar || avatarImg} alt="User avatar" />

      <Description>
        <Text className="mrBtn16">{tweets} TWEETS</Text>
        <Text className="mrBtn26">
          {followers.toLocaleString("en-US")} FOLLOWERS
        </Text>

        <Button onClick={()=>{setFollowers(isFollowing ? followers-1: followers+1); toggleUserIsFollowing(id)}} isFollowing={isFollowing}>
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
    isFollowing: PropTypes.bool
  }).isRequired,
  toggleUserIsFollowing: PropTypes.func.isRequired
};

// export default UserCardItem;
