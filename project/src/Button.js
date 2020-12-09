import React, {useContext} from 'react';
import Context from './Context';


function Button() {
    const { count, updateState } = useContext(Context);
    return (
        <div>
            <button onClick={ () => updateState(count +1)} >Check Counter</button>
        </div>
    )
}

export default Button
