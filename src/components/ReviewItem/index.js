import './index.css'

const ReviewItem = props => {
    const {reviewDetails} = props 
    const {title, description} = reviewDetails
    return  (
        <li className='review-list'>
            <h1 className='student-title'>{title}</h1>
            <hr className='horizontal-line'/>
        <p className='student-description'>{description}</p>
        </li>
    )
}

export default ReviewItem