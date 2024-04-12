import './index.css'

const BlogItem = props => {
    const {blogDetails} = props
    const {image, title,  description} = blogDetails
    return (
    <li className='list-item'>
            <img
            className='student-image'
            src={image}
            alt="image"
        />
        <div>
        <h1 className='student-title'>{title}</h1>
        <p className='student-description'>{description}</p>
        </div>
    </li>
    )
}
export default BlogItem