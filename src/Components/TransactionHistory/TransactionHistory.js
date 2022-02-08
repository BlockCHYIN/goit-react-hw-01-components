import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'

export default function TransactionHistory({
    items
}){
return (
<table className={s.transactionHistory}>
  <thead className={s.tableTitle}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
 <tbody className={s.tableBody}>
{items.map(item=>(
    <tr key={item.id} className={s.tableLines}>
      <td className={s.tableItem}>{item.type}</td>
      <td className={s.tableItem}>{item.amount}</td>
      <td className={s.tableItem}>{item.currency}</td>
    </tr> 
))
}
  </tbody>
</table>
)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string.isRequired)),
  };