
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/all';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger)

// Cần thiết cho scroll
// import ScrollTrigger from 'gsap/all';
// import { useRef } from 'react';
// gsap.registerPlugin(ScrollTrigger)
// const scrollRef = useRef

function TestGSAPScroll(){
  const scrollRef = useRef()
  

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children)
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,
        rotation: 360,
        scale: 2,
        scrub: true,
        // repeat: -1,
        duration: 2,

        scrollTrigger: {
          trigger: box,
          // Animation bắt đầu khi bottom viewport chạm bottom khung
          start: 'top 100%',
          end: 'top 20%',
          toggleActions: 'play none none none', // Add this line

        }
      })
    })
  }, {scope: scrollRef})

  return (
    <>
      <div className=' abc bg-black' ref={scrollRef}>

        <div id='green' className='h-20 rounded-sm w-20 bg-green-600 mb-4'>
        </div>

        <div id='green' className='h-20 rounded-sm w-20 bg-green-600'>
        </div>
      </div>
    </>
  )
}
export default TestGSAPScroll