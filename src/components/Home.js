import React from 'react'
import '../App.css';


function Home() {
    return (
<>
<div className="container py-5">
    <div className="row ">
        <div className="col text-center">
            <img id='profile' className='rounded-circle' src="https://avatars.githubusercontent.com/u/90488562?v=4" alt="Profile Picture" />
        </div>
        <div className="col d-flex align-items-center">
            <div>
            <h1>I am Sowmith</h1>
            <h3>7th grade student living in California. I am currently learning web development.</h3>
            </div>
        </div>
    </div>
</div>
</>
    )
}

export default Home