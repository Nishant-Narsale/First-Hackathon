import React , {useState} from 'react'
import {Input, Button} from '@mui/material'

function SendMessage({scroll}) {
    const [msg, setMsg] = useState('')


    async function SendTheMessage(e){
        e.preventDefault();
        
        setMsg('');
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <form className="sendMsg" onSubmit={SendTheMessage}>
                <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} value={msg} placeholder="Message......" onChange={e => {setMsg(e.target.value)}} />
                <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
            </form>
        </div>
    )
}

export default SendMessage
