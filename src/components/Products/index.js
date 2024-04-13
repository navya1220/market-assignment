import './index.css'

const productList = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYExByMB9Pmixm1K0yjOpILRCkSSJnHlmSIr1etU38FbHQde1_jeHrkHxCp4OKqFYQjfQ&usqp=CAU",
        title : "Product Name",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        rupees : "1500/-"
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYExByMB9Pmixm1K0yjOpILRCkSSJnHlmSIr1etU38FbHQde1_jeHrkHxCp4OKqFYQjfQ&usqp=CAU",
        title : "Product Name",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        rupees : "1500/-"
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYExByMB9Pmixm1K0yjOpILRCkSSJnHlmSIr1etU38FbHQde1_jeHrkHxCp4OKqFYQjfQ&usqp=CAU",
        title : "Product Name",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        rupees : "1500/-"
    },
    
]

const Products = () =>  (
    <div>
        <ul className="product-container">
        {productList.map(eachProfile => (
            <li className="product-card">
                <img
                    src = {eachProfile.image}
                    alt = "product-image"
                    className="product-image"
                />
                <div className="product-card-details">
                    <h1 className="title-name">{eachProfile.title}</h1>
                    <p className="title-description">{eachProfile.description}</p>
                    <p className='product-rupees'>{eachProfile.rupees}</p>
                    <button className="add-to-card-button" type="button">Add to Cart</button>
                </div>
            </li>
        ))}
        </ul>
    </div>
)
export default Products