import React,{useState} from "react"
// import { SyntheticEvent } from "react"
import "./Authopopup.css"
import logo from "../../assets/logo.jpeg"
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import {AdapterDayjs} from 
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers';
// import { ToastContainer, toast } from "react-toastify";
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'

const Authopopup = ({setShowpopup}) => {
    const [showsignup, setshowsignup] = useState(false)

    const handleLogin = () => {}
    const handleSignup = () => {}
  return (
    <div className="popup">
        <button className='close' onClick={() => {setShowpopup(false)}}>
                <AiOutlineClose />
        </button>
        {
            showsignup ? (
                <div className="authform">
                    <div className="left">
                        <img src = {logo} alt = "Logo"/>
                    </div>
                    <div className="right">
                        <h1>Signup to become a freak</h1>
                        <form action="">

                        <Input placeholder="email" size="lg" variant="solid" color="warning" />
                        <Input placeholder="password" size="lg" variant="solid" color="warning" type="password" />

                        <div className="form_input_leftright">
                            <Input placeholder="Age" size="lg" variant="solid" type="number" color="warning" />
                            <Input placeholder="Weight" size="lg" variant="solid" type="number" color="warning" />
                        </div>

                        <Select
                            color="warning"
                            placeholder="Gender"
                            size="lg"
                            variant="solid"
                        >
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>

                        <br />

                        <label htmlFor="">Height</label>
                        <div className="form_input_leftright">
                            <Input placeholder="ft" size="lg" variant="solid" type="number" color="warning" />
                            <Input placeholder="in" size="lg" variant="solid" type="number" color="warning" />
                        </div>

                        <button onClick={() => {
                            handleSignup()
                        }}
                        >Signup</button>
                        </form>
                        <p>Already have an account?<button onClick={ () => {
                            setshowsignup(false)
                        }}>Login</button>
                        </p>
                    </div>
            
                </div>
            ) : (
                <div className="authform">
                    <div className="left">
                        <img src = {logo} alt = "Logo"/>
                    </div>
                    <div className="right">
                        <h1>Login to become a freak</h1>
                        <form action="">

                        <Input placeholder="email" size="lg" variant="solid" color="warning" />
                        <Input placeholder="password" size="lg" variant="solid" color="warning" type="password" />

                        <button onClick={() => {
                            handleLogin()
                        }}
                        >Login</button>
                        </form>
                        <p>Don't have an account?<button onClick={ () => {
                            setshowsignup(true)
                        }}>Signup</button>
                        </p>
                    </div>
            
                </div>
            )
        }
    </div>
  )
}

export default Authopopup