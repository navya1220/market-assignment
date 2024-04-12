import CourseCard from "../CourseCard"
import Body from "../Body"
import './index.css'
const Home = () => (
    <div>
        <Body/>
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