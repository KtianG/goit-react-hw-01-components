import css from './App.module.css';

import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export function App() {
  return (
    <div className={css.app}>
      <FriendList friends_array={friends} />
      <div className={css['main-content']}>
        <Statistics data_array={data} />
        <TransactionHistory transactions_array={transactions} />
      </div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}
