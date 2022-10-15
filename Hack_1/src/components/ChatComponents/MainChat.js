 import React, { useRef, useState } from 'react'
import SendMessage from './SendMessage'


const MainChat = ({student}) => {
    const scroll = useRef()
    console.log(student)

    return (
        <div className="main-chat">
            <div className="mainChatHeaderWrapper">
                <div className="mainChatHeader-">
                    <p id="contact-name-">Contact Name</p>
                    <p id="status-">Online</p>
                </div>
            </div>
            <hr />
            <div className="chatSpace-">
                <div className="msgs-">

                    

                    <div className="msg-wrapper- sent-">
                        <img className="msgImage-" src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                        <div className="nameMessage-">
                            <p className="msg-name-">Nishant Narsale</p>
                            <div className={'msg-'}>
                                <p>hey there..What's up? Great content new content what's next</p>
                            </div>
                        </div>
                    </div>

                    <div className="msg-wrapper- sent-">
                        <img className="msgImage-" src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                        <div className="nameMessage-">
                            <p className="msg-name-">Nishant Narsale</p>
                            <div className={'msg-'}>
                                <p>hey there..What's up?</p>
                            </div>
                        </div>
                    </div>

                    <div className="msg-wrapper-">
                        <img className="msgImage-" src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                        <div className="nameMessage-">
                            <p className="msg-name-">Nishant Narsale</p>
                            <div className={'msg-'}>
                                <p>hey there..What's up?</p>
                            </div>
                        </div>
                    </div>

                    <div className="msg-wrapper-">
                        <img className="msgImage-" src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                        <div className="nameMessage-">
                            <p className="msg-name-">Nishant Narsale</p>
                            <div className={'msg-'}>
                                <p>hey there..What's up?</p>
                            </div>
                        </div>
                    </div>

                    <div className="msg-wrapper- sent-">
                        <img className="msgImage-" src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                        <div className="nameMessage-">
                            <p className="msg-name-">Nishant Narsale</p>
                            <div className={'msg-'}>
                                <p>hey there..What's up?</p>
                            </div>
                        </div>
                    </div>

                    <div className="msg-wrapper-">
                        <img className="msgImage-" src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                        <div className="nameMessage-">
                            <p className="msg-name-">Nishant Narsale</p>
                            <div className={'msg-'}>
                                <p>hey there..What's up?</p>
                            </div>
                        </div>
                    </div>

                </div>

                
            </div>

            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default MainChat
