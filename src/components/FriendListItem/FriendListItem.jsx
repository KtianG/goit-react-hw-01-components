import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

/**
 * Generate single item from friendlist
 * @param {friend} - object containing users friend data to be used
 */
export function FriendListItem({ avatar, name, isOnline }) {
  const status_color = isOnline ? 'green' : 'red';

  return (
    <li className={css.item}>
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
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
