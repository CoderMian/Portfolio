import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import '../../src/experience.css'
function Experience() {
  return (
   <section id="experience">
     <h5>What Skills I Have</h5>
     <h2>My Experience</h2>
     <div className="container experience_container">
      <div className="experience_front_end">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon'/>
           <div>
           <h4>HTML</h4>
            <small className='text-align'>Experience</small>
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon' />
           <div>
           <h4>CSS</h4>
            <small className='text-align'>Intermediate</small>
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon' />
            <div>
            <h4>JavaScript</h4>
            <small className='text-align'>Experience</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon' />
           <div>
           <h4>Bootstrap</h4>
            <small className='text-align'>Intermediate</small>
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon' />
         <div>
         <h4>TailWind</h4>
            <small className='text-align'>Intermediate</small>
         </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon' />
        <div>
        <h4>React</h4>
            <small className='text-align'>Intermediate</small>
        </div>
          </article>
        </div>
      </div>
      {/*End of Front End  */}
      <div className="experience_back_end">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon' />
            <div>
            <h4>Node  Js</h4>
            <small className='text-align'>Basic</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon' />
           <div>
           <h4>Php</h4>
            <small className='text-align'>Basic</small>
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon' />
            <div>
            <h4>MySql</h4>
            <small className='text-align'>Basic</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon' />
           <div>
             <h4>Laravel</h4>
            <small className='text-align'>Basic</small>
           </div>
          </article>
        </div>
      </div>
     </div>
   </section>
  )
}

export default Experience
