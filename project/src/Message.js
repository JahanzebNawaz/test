import React, { useContext } from 'react';
import Button from './Button';
import Context from './Context';

// function Message({count, onUpdate}) {
//     return (
//         <div>
//           <h2>{count}</h2>
//           <button onClick={ () => onUpdate(count+1) } >Check Counter</button>
//           {/* <Button count={count} onUpdate={onUpdate} /> */}
//         </div>
//     )
// }



function Message() {
    const {count} = useContext(Context);
    return (
        <div>
          <h2>{count}</h2>
          <Button />
          {/* <button >Check Counter</button> */}
          {/* <Button count={count} onUpdate={onUpdate} /> */}
        </div>
    )
}

export default Message
