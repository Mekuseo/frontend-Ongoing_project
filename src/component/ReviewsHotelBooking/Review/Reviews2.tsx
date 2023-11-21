// const Review = () => {
//     return(
//         <>
//             <div className="chat">

//                 <p className="dateChat">
//                     25th June, 2023
//                 </p>
//                 <div className="row">
//                     <div>
//                         <ul className="chat-list">
//                             <li className="in">
//                                 <div className="chat-img">
//                                     <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
//                                 </div>
//                                 <div className="chat-body">
//                                     <div className="chat-message">
//                                         <p>
//                                             I am writing to inform you I didn’t like your place
//                                         </p>
//                                     </div>
//                                 </div>
//                             </li>
//                             <p className="timeReceived">
//                                 Today, 2:02pm
//                             </p>

//                             <li className="out">
//                                 <div className="chat-img">
//                                     <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar6.png" />
//                                 </div>
//                                 <div className="chat-body">
//                                     <div className="chat-message">
//                                         <p>
//                                             We are sorry to hear about this, kindly let us know what specific issues you had with the place. 
//                                         </p>
//                                     </div>
//                                 </div>
//                             </li>
//                             <p className="timeSent">   
//                                 Today, 7:00pm
//                             </p>
//                         </ul>
//                     </div>
//                 </div>

//                 <form action="" className="chatForm">
//                     <div className="chatInput-container">
//                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVR4nO2Wz2vUUBDHU/SiXgXrDxQsgtqDB4+K9yJ6W/wLVNzNvGS7mUnrZW9FKYI9bpt5iSIi/RO8CP4JCj3Zs6JYL1UUYVcmm5fdrtmIfclJv7Cw4SXvkzfzzcw4zn9ZqNvtHgQd3lBMD5TGNeCw5ffuH7fZ84/yE5oHjVtK02D8B0zfgMmvBaqSpcuKcScHyn+md4qpP/YCfp3Q715Mt52BMyNrwJ2LoOntcA2/NuNgthaoy7QweY/AzcmBw3vWUDENaPxQBs3hGrezcD+2BitNz9LNNP4sg0rYgelLlvsVK+idXvewuDXbbLXsXlfTXWMwNwqvW4GVxnPD09InSII5xeFVYHzlxdjYA2VakDRkL/imsdk4YAWGdTolUJfDS14UXgOm3WEO8eUU6I6YzKlC3gZd2AulXTcOrhRBxf37zqmA2kn7ZA6egKbXadjxkRjOCtqMOmeA6QUw/jA5LTqpXEvYZX1ULvHjvqBKioM8bEpeYU4zaLx8fgwqIX6unoSnrSoSSNgYVyWMRVDzzGJv8ag0is7TzpG/BpaVQTHOJFTC7lQhP6H5abVXvtOinLYiPFFBE8etabXX03hLMb1OT54EcyanPi+dtQJ7Ed40RkpbW4nkkzGtrr3ZPmQFBo0PM/d+Nv20SBIJ850CY+LYSmlcy1y8XQYdVSR6rzaWj1mDgcNWtmG/qK5WVgYLG3vW6mRcyeEDZyZrbdVDjWQgGw1s1JeBLW/idUGNlEZP3PrbmDoehbrUjINZpbGZGo5xRSYH6ybu/Ov6BdrcO2czsmp9AAAAAElFTkSuQmCC"
//                         className="chatIcon"
//                         />

//                         <input className="chatInput-field" type="text" placeholder=""/>
//                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEWElEQVR4nO1YzW8bVRBfVeUAtFAJuLQSp/IhceAjcESFHgoIiQJ/hA+x522deGYdkLrQr2uhDYeInWcHLggJqSonCEiIigMSFE6kcKNB4oCgpSEglVLQb/d5kxTHXu96HYL8k/Zg786893vz8WbG88YYY4yRo/5u/WZSeZmsXDAq14yVvzM9KtdiGcsvQYe3majMhbcYK59k3vyGpPgzjnjnphEhlTfc6f5Yi4JnwzDcnlU2DMPtkIFsQohnC20Gp9HrtMjyua5y88HdxspVsvxnTYMH867vtxoPQQd0QWd+IhlM302OlA/HRFXeyb24A3Qkuviwl8u/lSu9NpuFJEWNA15BUNQ48C+9Kr8Zy+fJ8hHSmbu6Cvqt4AlSubgqyJ93XcDyuT6Z59MwDLcVJRKG4Tbo6rHOrzUrL64nYeWp2B+TbPFezfLjgwTpqDD91vStOHCjfMbF6l9GGy/EL6fmpu4kKz8lL2TK2yIgy4HznMvggAB9xVni47IW9SO+DwuTykdGeRG+Hvu78qKxsmBUpDrfvHdQvUb5rHO1Vz1j+WuXHfZ1PkAuJ5UfjOWlmsozeQmYdnMi3nzGS5Dwbbs5kVU/Rfyks8p5EFnBD/hfugHLS2uUXxyUAOKLlE8blevOZX8my5Ef8XOwDtaK/T22VHDQqCi+MUkQXzcqp7LEKG5+p/9Kmk7XnWQBIn7L3wU3dSe1YlSO0tt0Wz85fGMsHyOV3zvWga5+cun+uxGBO4EMSFCr8XRWEpW5yk0dErFsFDycVTbdWLs5seYgF/pZpieRvIjdyZGoRrw7r55qxLs7ZEjltZESiU8yjgleyWOJG3HI8iNwM9wVvfQNnUianVSOFtXVAakcdxn1Q28URJB90uyUIbCzojIX3G6Uf3GJ457SiRgNmq5kiLwhgyxb6K5FzOUTwe0cEwkOFtHTDailernXUImQynfQUX+zudcbMvxVt70wAovwMnRMzoY7vCFjcjbc4WJkuXyLWLlSFhGKb/yk/xhBsPO30JGngu2HWmvmfledL/4vgt1Y+WAEFhFx5ldvyCDltrPIdNe1xxfiBlhtoPiYNyQY5RO93KrUohGFHgq+ovqqET9qlP9A0YiB3UjLeHR2zipL9XZ9T1499XZ9z2pPwid7rlkGkaTFTVws6fmbj+Ualyp/v6mNVbIRf1eajtFPqBxHFZux0j0Bd+rUVoVb3aLAKRrLr8cDtCR1ohRv+S1+HhccKgA88WWX3BOtTrlOsQyfzDogTPdfZnlxqC0PkJX3u41+NngWBkkU68oXUvkKPzCK9EoCmiL0E3CXZCiHIpOXyfI3SK1kpZGncq7ZYL9z4S/RuBxx5j/jbTGQszampR7G8zCN88/A2yIgKzPOGpeq88074j8xnl8TmGcxiiwjZopiEgnCBvtTS2DCcmOhmmQPvjxAYG7qQyqXNqy2MZ7HZBvB0+n6/ksPIcMqf4GYSN1pjDHGGMPbivgH82uUNdUK3pAAAAAASUVORK5CYII="
//                         className="chatIcon"
//                         />
                    
//                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKklEQVR4nO2ZTWgTQRTH1+/vDzyIHhT8OAmiJxW9KILiUSF6Eg9KKO2+2abJeymCrKDiRQSlCLGZt7ZeNLeK1krpQQ8KUhVEL6IgSEH8/sCT2MrUptlsdlOzSXaTsn+Yy87O5P3mvXlvdqJpkSJFitS8GtNmgKTDIOmGYBoMqoHEAWC6mOju3Fg1QywXmyUYbwqmsfAa/tIlHagKRDDp4UJMNIlfDMtY7hsEJD4OHYL/NbDwqH8QxvdFkzFdEBLjAbXhYq/QKd8ggvGDfTLDSu/WAhJIyhUtosTTDQEC12GpyGKLChHTNGc3JYhpmjNB0hNbmPQ2PIjhkl1ET3qtI96/VwvSLjvX2/eUYWGsZiCQxT0qVQoL99qfxzPxOYLprc2ogWpBDAtjjv4XNQFRfap4TRSxn3o3bSsy7Fpqg2DsAsbzie7ECnufmTPnNgSIbqV2KeMdRewTyOQmz8kLBp8Tkh60dpmLQwUBpp3A9MOjkI3oV5Prysx/1rZvimACBYHyEHkDX7daqVUlc0s64/LuJExgIOAB4fpM0rN4Jr2sLEQhJIfiGXNhICBg0Q6VQl0MvtPSm1wpGJ+6AD5M9iYXKYPKenDCM4Kxv64ghkxuF4zfXAzty2ef9szJ1SqkXEBflY7DP27zlY7F2oEIiQlg+uyygnfhEswrKVhMI1Os/Kg6tugyvQWYPgYIQqOlP4K3nRB5tXF683iB9IAAxhMFw1JbVcoOBoRLIPq9IGxzXHH1hMS4891yMFAvEHXMOGaZ88tBYBaXAOMbt3DyGuMFA3UCuTcVRF4d3LFmcuOrcJLptqnGuMFAHUAGE7nEAq0CqYIomF6ClYL/HVPXOiIkDlUKkZcqcpW8H9rpt9aqNcg7h0eGA7ugc1x8CJnu9A8i8Vb59Btcg2xqn28Q9Z0BjL/DhhASH6nvft8g4wMYj4Ckr6F5gvG+22dAxSBK6gguZOpggJdzcSHpuDqgal4L7AekEWVEINPZI7q6PQl032ChMWUcme25bxB1TxV6auZ8dqO+aQGiMx1qfhBJl7VqpI7lQf5BKkrPYz0G0/6qICJFihRJaxT9BTDWyv4TC0fdAAAAAElFTkSuQmCC"
//                         className="chatIcon"
//                         />
                        
//                     </div>
//                 </form>

//             </div>
//         </>
//     );
// };

// export default Review;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from "react";
import Chats from "./chats";
import { analyze } from "./analyze.js";
import "./chatBot.scss"

interface ResponseBotObject {
  time: BigInteger;
  purpose: string;
  message: string;
  options?: string[];
  sender: string;
}

const Review2: React.FC = () => {
  const [userResponse, setUserResponse] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [botResponse, setBotResponse] = useState<ResponseBotObject>({
    time: "",
    purpose: "",
    message: "",
    sender: "bot"
  });
  const [sendUserResponse, setSendUserResponse] = useState<string>("");

  // setting next step when there's response and option click
  const setNextStep = (response: string) => {
    setStep(prevState => prevState + 1);
    setSendUserResponse(response);
    const res = analyze(step, response);
    setBotResponse({ ...res, sender: "bot" });
    setUserResponse("");
  };

  const optionClick = (e: React.MouseEvent<HTMLElement>) => {
    const option = e.currentTarget.dataset.id;
    if (option) {
      setNextStep(option);
    }
  };

  // // event handlers
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserResponse(e.target.value);
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setNextStep(userResponse);
  // };

  return (
    <div className="chat-container">
        <Chats
        userResponse={userResponse}
        botResponse={botResponse}
        sendUserResponse={sendUserResponse}
        optionClick={optionClick}
        />

        {/* <form onSubmit={e => handleSubmit(e)} className="chatForm">
            <div className="chatInput-container">

                <input onChange={e => handleInputChange(e)} value={userResponse}/>
      
            </div>

            <div className="sendChat">
                <div className="sendChat-button">
                    <button>Send</button>
                </div>
            </div> 
        </form> */}
    </div>
  );
};

export default Review2;