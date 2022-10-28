import React, {useState, useEffect} from 'react'
import { Button as But} from '@chakra-ui/react';

function Progressbar() {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 600)
		}
	},[filled, isRunning])
  return (
	  <div>
		   <But colorScheme= "red"  borderRadius='md' w="100%" h="30px" bg= "red"  onClick={() => {setIsRunning(true)}} type="submit">Style transfer</But>
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