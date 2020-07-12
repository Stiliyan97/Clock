    
	const secondHand = document.querySelector('.seconds-hand');
	const minutesHand = document.querySelector('.minutes-hand');
	const hoursHand = document.querySelector('.hours-hand');
	const hoursSpan = document.querySelector('.hours');
	const minutesSpan = document.querySelector('.minutes');
	const secondsSpan = document.querySelector('.seconds');

    const setDate = () =>{
   	const now = new Date();
   	//seconds
    const seconds = now.getSeconds();
    const secondsText = document.createTextNode(`${seconds}`)
	if(secondsSpan.innerHTML === ''){
   	secondsSpan.appendChild(secondsText);
    } else {
    	secondsSpan.removeChild(secondsSpan.lastChild);
    	secondsSpan.appendChild(secondsText);
    }
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //minutes
     const minutes = now.getMinutes();
         const minutesText = document.createTextNode(`${minutes}`)
    if(minutesSpan.innerHTML === ''){
    	minutesSpan.appendChild(minutesText);
    } else {
   	minutesSpan.removeChild(minutesSpan.lastChild);
   	minutesSpan.appendChild(minutesText);
   	}
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

	//hours
    const hours = now.getHours();
      const hoursText = document.createTextNode(`${hours}`)
    if(hoursSpan.innerHTML === ''){
    hoursSpan.appendChild(hoursText);
    } else{
    	hoursSpan.removeChild(hoursSpan.lastChild)
    	hoursSpan.appendChild(hoursText);
    }
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
  setInterval(setDate, 1000);
  setDate();