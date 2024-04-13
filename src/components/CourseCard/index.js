import './index.css' 
import BlogItem from '../BlogItem'
import ReviewItem from '../ReviewItem'
const blogList = [
    {
        id: 1,
        image: 'https://careerpoint.ac.in/wp-content/uploads/2023/06/rs_223.png',
        title: 'Amit Jha',
        description: '“Some review submitted by the user about the company”'
    },
    {
        id: 2,
        image: 'https://careerpoint.ac.in/wp-content/uploads/2023/06/rs_223.png',
        title: 'Amit Jha',
        description: '“Some review submitted by the user about the company”'
    },
    {
        id: 3,
        image: 'https://careerpoint.ac.in/wp-content/uploads/2023/06/rs_223.png',
        title: 'Amit Jha',
        description: '“Some review submitted by the user about the company”'
    },
    {
        id: 4,
        image: 'https://careerpoint.ac.in/wp-content/uploads/2023/06/rs_223.png',
        title: 'Amit Jha',
        description: '“Some review submitted by the user about the company”'
    },
    
]
const reviewsList = [
    {
        id: 1,
        title: 'Amit Jha',
        description: '“Some review submitted by the user about the company”'
    },
    {
        id: 2,
        title: 'Amit Jha',
        description: '“Some review submitted by the user about the company”'
    },
    {
        id: 3,
        title: 'Amit Jha',
        description: '“Some review submitted by the user about the company”'
    },
    {
        id: 4,
        title: 'Amit Jha',
        description: '“Some review submitted by the user about the company”'
    },
    
]
const CourseCard = () => {
    return (
        <div>
        <div className='course-container'>
            <h1 className='top-student-title'>Top Students</h1>
        <ul className='coursecard-list'>
        {blogList.map(eachProfile => (
        <BlogItem key={eachProfile.id} blogDetails={eachProfile} />
        ))}
        </ul>
        </div>
        <div className='review-container'>
            <h1 className='top-student-title'>Reviews</h1>
        <ul className='coursecard-list'>
        {reviewsList.map(eachProfile => (
        <ReviewItem key={eachProfile.id} reviewDetails={eachProfile} />
        ))}
        </ul>
        </div>
        </div>
    )
}
export default CourseCard