import React from 'react';


const TextInput = ({ props }) => {
    return (
        <div>
            <input placeholder='Translate to French'/>
            <button 
                className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                // onClick={onButtonSubmit}
                // USE BOOTSTRAP?
                >Submit
            </button>
        </div>
    );
}

export default TextInput;