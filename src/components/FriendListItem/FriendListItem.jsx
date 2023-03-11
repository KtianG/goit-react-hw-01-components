import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

/**
 * Generate single item from friendlist
 * @param {friend} - object containing users friend data to be used
 */
export function FriendListItem({ friend }) {
  const { avatar, name, isOnline, id } = friend;

  const status_color = isOnline ? 'green' : 'red';

  return (
    <li key={id} className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: status_color }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User Avatar" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};
