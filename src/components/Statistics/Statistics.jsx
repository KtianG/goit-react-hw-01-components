import css from './Statistics.module.css';
import PropTypes from 'prop-types';

/**
 * Statistics Component
 * @param {data_array} - array of data needed to generate statistics list
 */
export function Statistics({ data_array }) {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>UPLOAD STATS</h2>
      <ul className={css['stat-list']}>{data_array.map(generateListItems)}</ul>
    </div>
  );
}

/**
 * Function generating li elements from single data_array entry
 *
 * @param {id} key of list element
 * @param {label} label of current list element
 * @param {percentage} value of current list element
 */
function generateListItems({ id, label, percentage }) {
  return (
    <li
      className={css.item}
      style={{
        backgroundColor: getRandomDarkColor(),
      }}
      key={id}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

/**
 * Generates random dark color which can be passed as backgroundColor value
 *
 */
function getRandomDarkColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 8);
  }
  return color;
}

Statistics.propTypes = {
  data_array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
