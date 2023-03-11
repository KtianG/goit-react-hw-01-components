import css from './FriendList.module.css';
import PropTypes from 'prop-types';

import { FriendListItem } from '../FriendListItem/FriendListItem';

/**
 * Generate friendlist
 * @param {friends_array} - array of objects containing users friends data
 */
export function FriendList({ friends_array }) {
  return (
    <ul className={css['friend-list']}>
      {friends_array.map(element => (
        <FriendListItem friend={element} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends_array: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
