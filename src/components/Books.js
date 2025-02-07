import React, { useEffect, useState } from 'react';
import BookCards from './BookCards';
import axios from 'axios';

const Books = () => {
    const [data, setData] = useState([]);
    const [deleted, isDeleted] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/getAllBooks')
            .then((response) => {
                setData(response.data);
                isDeleted(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [deleted]);  // Fix dependency to prevent infinite re-renders

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/${id}`);
            isDeleted(true);
        } catch (error) {
            console.error('Error deleting record:', error);
        }
    };

    return (
        <div style={{
            animation: "fadeIn 1s ease-out forwards",
            height: '100vh',
            overflowY: 'auto',
            paddingBottom: '20px',
            boxSizing: 'border-box'
        }}>
            {data.length > 0 ? (
                <div style={{ 
                    display: 'flex', flexWrap: 'wrap', 
                    justifyContent: 'center', alignItems: 'center', 
                    gap: '20px', margin: '40px' 
                }}>
                    {data.map((book) => (
                        <BookCards key={book.id} record={book} onDelete={handleDelete} />
                    ))}
                </div>
            ) : (
                <div style={{
                    textAlign: 'center',
                    marginTop: '80px',
                    fontSize: '50px',
                    color: 'white',
                    
                    
                }}>
                     <span style={{ fontSize: '100px' }}>📚</span>
                    <br/>
                    No books available. Add a new book to get started!
                </div>
            )}
        </div>
    );
};

export default Books;
