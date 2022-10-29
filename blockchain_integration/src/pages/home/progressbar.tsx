import React, {useState, useEffect} from 'react'
import { Button as But} from '@chakra-ui/react';

function Progressbar() {

	const [value, setValue] = useState(false);

    const activeInactiveButtontransferstyle = () => {
   
		setValue(prevValue => !prevValue );
		
		pullbuttonTransferstyle();
		
		};

	const buttonsignalTransferstyle = value ? 0 : 1
		
    const pullbuttonTransferstyle = async () => {
		
			  
		const res = await fetch('http://localhost:5000/tranferstyle',
		{ method : "POST", 
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(buttonsignalTransferstyle)})
		const data = await res.json();
		  
		}



	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 800)
		}
	},[filled, isRunning])
  return (
	  <div>
		   <But  colorScheme= "red"  borderRadius='md' w="100%" h="30px" bg= "red"  onClick={(e) => {setIsRunning(true); activeInactiveButtontransferstyle();}}> Style transfer</But>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#e80b9d" ,
				  transition:"width 1s"
			  }}></div>
			  <span className="progressPercent">{ filled }%</span>
		  </div>
		  
	</div>
  )
}

export {Progressbar}