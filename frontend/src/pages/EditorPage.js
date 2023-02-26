import React ,{useState , useRef,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ACTIONS from '../../Actions';
import Client from '../components/Client';
import Editor from '../components/Editor';
import { initSocket } from '../socket';

const EditorPage = () => {
  const socketRef = useRef(null);   // used to store data while multiple rendering and preventing rerender
  const location = useLocation();
  useEffect(() => {
const init = async () => {
socketRef.current = await initSocket();
  socketRef.current.emit(ACTIONS.JOIN) , {
  roomId,
  username : location.state?.username,
};
}
init();
  } , [])
  const [ clients,setClients] = useState([
   { socketId:1 , username:'ketan sarna'},
  
  ]);
  return (
    <>
    <div className='mainWrapper'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'>
            <img className='logoImage' src="/code-sync.png" alt="logo"/>
          </div>
          <h3>Connected</h3>
          <div className='clientsList'>
            {
              clients.map((client) => (
                <Client key={client.socketId} username={client.username}/>
              )
              )
            }
          </div>
        </div>
        <button className='btn copyBtn'>Copy ROOM ID</button>
        <button className='btn leaveBtn'>Leave</button>
      </div>
      <div className='editorWrapper'>
        <Editor />
      </div>
    </div>
    </>
  )
}

export default EditorPage;