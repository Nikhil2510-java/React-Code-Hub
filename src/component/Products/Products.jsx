const Products = (props) => {
    return (
        <div style={{
            display: 'flex',
            marginBottom:'20px',
            border: '1px solid #ccc'
        }}>
            <img style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover'
            }}
             src={props.image} alt={props.image} />
            <div style={{
                padding : '0 20px',
                justifyContent: 'center'
            }}>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Products;