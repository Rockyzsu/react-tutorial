
import { useState } from "react";
import MDEditor from '@uiw/react-md-editor';

function Markdown(){
const [text,setText] = useState('');
const [message,setMessage] = useState([]);
return (<section>
<MDEditor height={300} value={text} onChange={setText} />
<button
onClick={() => setMessage((msgs)=>[{body:text,timestamp:new Date().toISOString()},...msgs])}
>Pos</button>
{message.map((msg)=>{
    return (
        <dl>
            <dt>{msg.timestamp}</dt>
            <dd><MDEditor.Markdown source={msg.body}/></dd>
        </dl>
    )
})}
</section>)
}


export default Markdown;