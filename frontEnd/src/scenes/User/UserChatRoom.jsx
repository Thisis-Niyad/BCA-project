import React,{useState,useEffect,useRef} from 'react'
import ChatRoom from '../../Components/ChatRoom'
import Api from '../../Api'
import io from 'socket.io-client'

const socket =io.connect("http://localhost:5000")
function UserChatRoom() {
  const[msg,setMsg]=useState("")
  const [serverMsg,setServerMsg]=useState("")
  const [room,setRoom]=useState("")
  //       const [messages, setMessages] = useState([
  //         { sender: "artist", text: "Hello! How can I help you?" },
  //         { sender: "user", text: "I want a custom artwork." }
  //       ]);

  //         const [newMessage, setNewMessage] = useState("");
        
  //         const sendMessageN = () => {
  //           if (!newMessage.trim()) return;
  //           setMessages([...messages, { sender: "user", text: newMessage }]);
  //           setNewMessage("");
  //         };

  //           const sendImage = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   const imageURL = URL.createObjectURL(file);
  //   setMessages([...messages, { sender: "user", image: imageURL }]);
  // };

  const sendMessage=()=>{
    console.log(msg);
    
    socket.emit("send_message",{
      message:msg,
      room:room
    })
  }
   const joinRoom=()=>{
      if (room !=="") {
        socket.emit("join_room",room)
      }
    }

    // useEffect(()=>{
    //   socket.on("receive_message",(data)=>{
    //     setServerMsg(data)
    //   });
    // },[socket])
    useEffect(() => {
  const handleMessage = (data) => {
    setServerMsg(data);
  };

  socket.on("receive_message", handleMessage);

  return () => {
    socket.off("receive_message", handleMessage);
  };
}, []);


const socketRef = useRef(null);

useEffect(() => {
  socketRef.current = io("http://localhost:5000");

  socketRef.current.on("connect", () => {
    console.log("Connected:", socketRef.current.id);
  });

  socketRef.current.on("receive_message", (data) => {
    console.log("Message received:", data);
    setServerMsg(data);
  });

  return () => {
    socketRef.current.disconnect();
  };
}, []);

  return (
    <div>
      <div>
        <input onChange={(e)=>{setRoom(e.target.value)}} type="text" />
        <button onClick={joinRoom}>join room</button>
        <input onChange={(e)=>{setMsg(e.target.value)}} type="text"/>
        <button onClick={sendMessage}>send</button>
        <h2>{serverMsg? serverMsg.message:null}</h2>
      </div>
      <ChatRoom 
      // sendImage={sendImage}
      //   setNewMessage={setNewMessage} 
      //   messages={messages} 
      //   newMessage={newMessage}
      //   sendMessage={sendMessageN}
        />
    </div>
  )
}

export default UserChatRoom
