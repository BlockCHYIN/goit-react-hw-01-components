import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'
import s from './FriendList.module.css'

 const FriendList = ({friends}) =>
{
return (
<ul className={s.friendList}>
 {
friends.map(friend =>(
     <FriendListItem 
     key={friend.id}
    name={friend.name}
    isOnline={friend.isOnline}
    avatar={friend.avatar}
    /> 
))
} 
  </ul>
)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
      ),
  };

export default FriendList;