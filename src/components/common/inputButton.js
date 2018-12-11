import React from 'react';

const InputButton = ({...props}) =>
{           
    const {onClick,...rest} = props;
    console.log(onClick);
    return(
        <input type="submit" onClick={()=>onClick()} {...rest}  />
    );
}  

export default InputButton;