import React from 'react'
import e2 from "./download.jpg"
import e3 from "./img.jpg"
function Education() {
    return (
        <>
            <div className='container-fluid'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card mb-3" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://cms-moorpark-ca.schoolloop.com/://cdn.schoolloop.com/uimgcdn/aHR0cDovL2Ntcy1tb29ycGFyay1jYS5zY2hvb2xsb29wLmNvbS91aW1nL2ZpbGUvMTQ4NjIwNTY1NDY2MC83Mjc1NDIyODM2NjQ5NTE2NDE4LnBuZz8xNTYxNzM5MzAzNDI0" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Chaparral Middle School</h5>
                                            <p className="card-text">
                                                This school is where I currently study in grade 7. The subjects I have chosen is Math, Enlish, History, Science, P.E, and Health. I will continue in this school until 9th grade where I will move on to Moorpark High school.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">2021-Present</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6'>
                            <div className="card mb-3" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={e2} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Flory Academy of Science and Technology</h5>
                                            <p className="card-text">
                                                I studied in this school from Transitional Kindergarden till third grade. The subjects I learned were math, English, social studies, and arts. Then I moved on to Mountain Meadows Elementary school.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">2015-2019</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6'>
                            <div className="card mb-3" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={e3} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Mountain Meadows</h5>
                                            <p className="card-text">
                                                In Mountain Meadows I studied grades 4 and 5. In these grades I learned social studies, math, and English. I moved on to Chaparral middle school where I am currently studying. 
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">2019-2021</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education