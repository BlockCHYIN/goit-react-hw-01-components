import user from './DataJson/user.json';
import data from './DataJson/data.json';
import friends from './DataJson/friends.json';
import transactions from './DataJson/transactions.json';

import  Container  from './Components/Container/';
import Profile from './Components/Profile/Profile';
import FriendList from './Components/FriendList/FriendList';
import Statistics from './Components/Statistics/Statistics';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

export const Section = () => {
    return(
<div>
<Container title='Profile'>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
</Container>
<Container title='Statistics'>
 <Statistics title="Upload stats" stats={data} />
 <Statistics stats={data} /> 
</Container>
<Container title='FriendList'>
 <FriendList friends={friends} />   
</Container>
<Container title='TransactionHistory'>
 <TransactionHistory items={transactions} />  
</Container>
</div>
    )
}
