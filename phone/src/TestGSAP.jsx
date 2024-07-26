import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function TestGSAP(){
  // useGSAP(() => {
  //   gsap.to('#bluebox', {
  //     x: 250,
  //     repeat: -1,
  //     yoyo: true,
  //     duration: 2,
  //     ease: 'elastic',
  //   })
  // }, [])
  const timeLine = gsap.timeline({
    repeat: -1, repeatDelay: 1, yoyo: true,
  });

  // useGSAP(() => {
  //   gsap.fromTo('#bluebox', {
  //     borderRadius: '0%',
  //     x: 0,
  //     rotation: 0,
  //   }, {
  //     borderRadius: '100%',
  //     x: 250,
  //     rotation: 360,
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 2,
  //     ease: 'bounce.out',
  //   }
  //   )
  // })

  useGSAP(() => {
    timeLine.to('#bluebox', {
      x: 250,
      borderRadius: '100%',
      duration: 2, 
      ease: 'bounce.out',
    })
    timeLine.to('#bluebox', {
      y: 200,
      borderRadius: '50%',
      scale: 2,
    })
  })
  const log = () => {
    console.log(gsap)
  }
  return (
    <>
      
      <button onClick={() => {if(timeLine.paused()) timeLine.play(); else timeLine.pause()}}>Play or Pause</button>
      <div id='bluebox' className='h-20 rounded-sm w-20 bg-blue-600 border-blue-600' onClick={log}>
        
      </div>
    </>
  )
}
export default TestGSAP