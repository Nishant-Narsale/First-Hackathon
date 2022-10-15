import React, { useRef } from 'react'
import SendMessage from './SendMessage'
import './StudentChat.css'


const StudentChat = () => {
    const scroll = useRef()

    return (
        <div className="wrapper">
            <div className="container">
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
                        <div className={'msg sent'}>
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                            <p>hey there..</p>
                        </div>
                    </div>

                    <div>
                        <div className={'msg sent'}>
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="img" />
                            <p>hey there..</p>
                        </div>
                    </div>
                </div>
                

                <SendMessage scroll={scroll} />
                <div ref={scroll}></div>
            </div>
        </div>
    )
}

export default StudentChat
