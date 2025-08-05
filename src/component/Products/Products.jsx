
import { useState } from "react";

const Products = (props) => {

    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore(prev => !prev);

    if (props.viewType === 'grid') {
        return (
            <div
                id={props.id}
                style={{
                    margin: '20px',
                    border: '1px solid #ccc',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '500px',
                    maxWidth: '300px',
                    backgroundColor: '#1e1e1e',
                    color: 'white'
                }}
            >
                <img
                    style={{
                        width: 'auto',
                        height: '180px',
                        objectFit: 'contain'
                    }}
                    src={props.image}
                    alt={props.title}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                        padding: '10px',
                    }}
                >
                    <div>
                        <h3 style={{ fontSize: '16px' }}>{props.title}</h3>
                        <p style={{ fontSize: '14px' }}>
                            {showMore ? props.description : props.description.slice(0, 100)}
                            {props.description.length > 100 && !showMore && '...'}
                        </p>
                    </div>

                    {props.description.length > 100 && (
                        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                            <button
                                onClick={toggleShowMore}
                                style={{
                                    color: 'black',
                                    background: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '6px',
                                    cursor: 'pointer'
                                }}
                            >
                                {showMore ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );

    }
    else {
        return (
            <div
                id={props.id}
                style={{
                    display: 'flex',
                    marginBottom: '20px',
                    border: '1px solid #ccc',
                    backgroundColor: '#1e1e1e',
                    color: 'white',
                    height: '250px',
                    maxWidth: '100%',
                }}
            >
                <img
                    style={{
                        width: '200px',
                        height: '250px',
                        objectFit: 'contain',
                        borderRight: '1px solid #ccc'
                    }}
                    src={props.image}
                    alt={props.title}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '10px 20px',
                        flex: 1
                    }}
                >
                    <div>
                        <h3 style={{ fontSize: '16px' }}>{props.title}</h3>
                        <p style={{ fontSize: '14px' }}>
                            {showMore
                                ? props.description || ''
                                : (props.description || '').slice(0, 100)}
                            {(props.description && props.description.length > 100 && !showMore) && '...'}
                        </p>
                    </div>

                    {props.description && props.description.length > 100 && (
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button
                                onClick={toggleShowMore}
                                style={{
                                    color: 'black',
                                    background: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '6px',
                                    cursor: 'pointer'
                                }}
                            >
                                {showMore ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );

    }
}

export default Products;