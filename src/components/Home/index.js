import CourseCard from "../CourseCard"
import './index.css'
const Home = () => (
    <div className="home-container">
        <div className='body-card'>
            <img 
                className='image'
                src='https://altusknowledge.co.in/wp-content/uploads/2021/12/neet-crash-course-1.webp'
                alt='image'
            />
        </div>
        <CourseCard/>
        <div className="bottom-container">
            <div>
                <h1 className="address">KARO ABHAYAAS 112, ELECTRONIC CITY BANGALORE, INDIA</h1>
            </div>
            <div className="contact-details" >
                <h1 className="text">SOME TEXT ABOUT SOMETHING AND THEN SOME OTHER THING</h1>
                <button className="contact-btn">Contact us</button>
            </div>
        </div>
    </div>
)

export default Home