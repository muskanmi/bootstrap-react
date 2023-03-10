import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Bootstrap() {
  return (
    <>
        <h1 className='text-center text-danger text-capitalize my-5'> Welcome to my channel </h1>
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src="https://picsum.photos/200" className="card-img-top" alt="..." height='200px' />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card">
                        <img src="https://picsum.photos/200" class="card-img-top" alt="..." height='200px'/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card">
                        <img src="https://picsum.photos/200" class="card-img-top" alt="..." height='200px' />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Bootstrap