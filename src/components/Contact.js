import React from 'react'

function Contact() {
    return (
        <>
            <div className='container-fluid bg-opacity-50'>
                <div className='container my-5 py-5'>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                                Name
                            </label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">
                                Email
                            </label>
                            <input type="text" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">
                                Message
                            </label>
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    rows={100}
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea"
                                    defaultValue={""}
                                />
                                <label htmlFor="floatingTextarea">Comments</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                City
                            </label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">
                                State
                            </label>
                            <input id="inputState" type="text" className="form-control" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">
                                Zip
                            </label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-success'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact