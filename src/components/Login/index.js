import './index.css' 

const Login = () => (
    <div className='login-container'>
        <form action='' className='login-page'>
            <div >
                <input className='user-data' type='email' placeholder='USERNAME'/>
            </div>
            <div >
                <input className='user-data' type='password' placeholder='PASSWORD'/>
            </div>
            <button className='login-btn'>LOGIN</button>
            <h1 className='signup'>Don't have an account? Sign Up</h1>
        </form>
    </div>
)

export default Login