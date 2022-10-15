import React, { useRef } from 'react'
import SendMessage from './SendMessage'

const MainChat = () => {
    const scroll = useRef()

    return (
        <div className="main-chat">
            <div className="mainChatHeader">
                <p>Contact Name</p>
                <p>Online</p>
            </div><hr />
            <div className="chatSpace">
                <div className="msgs">
                    <div>
                        <div className={'msg sent'}>
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                            <p>hey there..</p>
                        </div>
                    </div>
                    <div>
                        <div className={'msg received'}>
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                            <p>hey there</p>
                        </div>
                    </div>
                    <div>
                        <div className={'msg received'}>
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                            <p>hey there</p>
                        </div>
                    </div>
                    <div>
                        <div className={'msg received'}>
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                            <p>hey there</p>
                        </div>
                    </div>
                    <div>
                        <div className={'msg received'}>
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                            <p>hey there</p>
                        </div>
                    </div>
                    <div>
                        <div className={'msg sent'}>
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                            <p>hey there</p>
                        </div>
                    </div>
                </div>

                <SendMessage scroll={scroll} />
                <div ref={scroll}></div>
            </div>
        </div>
    )
}

export default MainChat
