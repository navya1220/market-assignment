import './index.css'
const classesList =  [
        {
            id: 1,
            image : "https://www.misostudy.com/data_user/solution/videosolution/thumb/thumb-1564123028_359x202.jpg",
            title : "Sample Video Title",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "

        },
        {
            id: 2,
            image : "https://www.misostudy.com/data_user/solution/videosolution/thumb/thumb-1564123028_359x202.jpg",
            title : "Sample Video Title",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        },
        {
            id: 3,
            image : "https://www.misostudy.com/data_user/solution/videosolution/thumb/thumb-1564123028_359x202.jpg",
            title : "Sample Video Title",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        },
        {
            id: 4,
            image : "https://www.misostudy.com/data_user/solution/videosolution/thumb/thumb-1564123028_359x202.jpg",
            title : "Sample Video Title",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        }
]
const Classes = () =>  (
    <div>
        <ul className="classes-container">
        {classesList.map(eachProfile => (
            <li className="classes-card">
                <img
                    src = {eachProfile.image}
                    alt = "classes-image"
                    className="classes-image"
                />
                <div className="classes-card-details">
                    <h1 className="title-name">{eachProfile.title}</h1>
                    <p className="title-description">{eachProfile.description}</p>
                    <button className="parctice-button" type="button">Practice</button>
                </div>
            </li>
        ))}
        </ul>
    </div>
)
export default Classes