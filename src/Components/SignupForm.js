import React, { useState } from 'react';
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName:"", lastName:"" , email:"",password:"",confirmPassword:""
    })

    const [showPassword, setshowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);
    const [accountType , setaccountType] = useState("student");

    function changeHandler(event) {
        setFormData ( (prevData) => (
            {
                ...prevData , 
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.success("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created");
        const accountData = {
            ...formData
        };
        console.log("Printing account data");
        console.log(accountData);

        navigate("/dashboard");

    }



    return (
        <div>
            {/*Student-Instructor tab*/}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                 onClick={() => setaccountType("student")} 
                 className={'${accountType === "student"  ? "bg-richblack-900 text-richblack-5" : bg-transparent text-richblack-200 } py-2 px-5 rounded-full transition-all duration-200'}>
                    Student
                </button>
                <button
                 onClick={() => setaccountType("Instructor")}
                 className={'${accountType === "Instructor"  ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200'}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/*First and Last name*/}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input required type="text" name="firstName" onChange={changeHandler} placeholder='Enter first name' value={formData.firstName}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input required type="text" name="lastName" onChange={changeHandler} placeholder='Enter last name' value={formData.lastName}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                    </label>
                </div>
                    {/* email address */}
                <div className='mt-[20px]'>
                    <label className='w-full mt-[10px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                        <input required type="email" name="email" onChange={changeHandler} placeholder='Enter Email address' value={formData.email} 
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    </label>
                </div>
                {/*Create Password and confirm password */}
                <div className='w-full flex gap-x-4 mt-[20px]'>
                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                        <input required type={showPassword ? ("text") : ("password")} name="password" onChange={changeHandler} placeholder='Enter Password' value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                        <span 
                        className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={ () => setshowPassword((prev)  => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>

                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input required type={showConfirmPassword ? ("text") : ("password")} name="confirmpassword" onChange={changeHandler} placeholder='confirm Password' value={formData.confirmPasswordpassword} 
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                        <span 
                        className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={ () => setshowConfirmPassword((prev)  => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                </div>

                <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>
            </form>
        </div>
    )
}
export default SignupForm 