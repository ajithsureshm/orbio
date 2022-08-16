import React from 'react'
import {Row,Col} from 'react-bootstrap';
import body from '../img/Signuppage(1).png'
import './Login.css'
function Login() {
  return (
    <div>

        <Row>

        <Col sm={6} md={6} lg={6} xl={6}>
        <div align="left" className='imgDiv' >
            <img src={body} alt="img"  />

            <p className='img_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aliquam? Atque nam, mollitia voluptatibus error dignissimos consectetur nemo in dolore reprehenderit ut suscipit, modi iusto quidem ipsam omnis. Libero, consectetur.</p>
        </div>
        </Col>

        <Col sm={6} md={6} lg={6} xl={6}>
        <div className='loginDiv'>
          <form action="">
            <div className='head_buttons'>
              <div className='btn1'>Client</div>
              <div className='btn2'>Interviewer</div>
            </div>

            <div className="login_data">
              <form action="">

                <br />
                <br />

              <h4>Create New Account</h4>

              <h6>Already have an Account ? <a style={{"color":"red"}} href="">Login</a> </h6> <br />

                <div className='login_form'>
                <label className='label'  htmlFor="">Name</label> <br />
                <input className='input' type="text" placeholder='Enter Your Name' /> 
                </div>

                <div className='login_form'>
                <label className='label'  htmlFor="">Email</label> <br /> 
                <input className='input' type="email" placeholder='Enter Your Email Id' />
                </div>

                <div className='login_form'>
                <label className='label'  htmlFor="">Mobile Number</label> <br />
                <input className='input' type="number" placeholder='Enter Your Number' />
                </div>

                <div className='login_form'>
                <label className='label'  htmlFor="">Password</label> <br />
                <input className='input' type="password" placeholder='Enter Your Password' />
                </div>

                <div className='login_form '>
                <button className='login_btn'>Next</button>
                </div>


              </form>
            </div>
          </form>
        </div>
        </Col>
        </Row>
    </div>
  )
}

export default Login