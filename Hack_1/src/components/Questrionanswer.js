import {React,useState }from 'react'
import Question from './Question';
import "./Questionpage.css"


const Questrionanswer = () => {
   const [showScore, setShowScore] = useState(false);
  const today = new Date();
  const date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  const dayIndex = today.getDay();
  const getDayName = (dayIndex) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayIndex];
  };
  const dayName = getDayName(dayIndex);
 
  var countDownDate = new Date("oct 29, 2021 00:30:00").getTime();
  var x = setInterval(function () {

    var now = new Date().getTime();


    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
    document.getElementById("timer").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "🖕🏻";
      setShowScore(true);
    }
  }, 1000);
  return (
    <div className="mainpage">
      <div className="leftsidebar">
        <div className="logoorlgado"></div>
        <div className="overview" id="timer">
          <h2>NO</h2>
        </div>
        <div className="Exams">
          <h2>Time limit</h2>
        </div>
        <div className="History">
          <h2>hello heko huihibib ohoih </h2>
        </div>
      </div>
      <div className="rightsidebar">
        <div className="rightadjust">
          <div className="hellogillo">
            <div className="goodmorning">
              <h1>Good morning SOR</h1>
            </div>
            <div className="time">
              <span>{dayName}</span>
              <span>{date}</span>
              <span>{strTime}</span>
            </div>
          </div>
          <div className="line"></div>
          <div className="numberofexams">
            <Question  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questrionanswer;
