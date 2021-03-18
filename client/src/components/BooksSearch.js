import React, { useState } from 'react';
import API from '../utils/API';

function BooksSearch(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]); 
    const [error, setError] = useState(null);

    const onBookSearch = async () => {
        try {
            const result = await API.search(searchTerm);
            setBooks(result.data.items);
        } catch(ex) {
            setError(ex);
        }
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Input a Search Term" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} /> 
                <button onClick={onBookSearch}>Search</button>
            </div>  
            {error && <div style={{color:"red"}}>{error}</div>}          
            {books.length > 0 && <div>
                <p>Results</p>
                <div>
                    {books.map(book => (
                        <div key={book.id}> 
                            <div>
                                <img src={book.volumeInfo.imageLinks.thumbnail} />
                            </div>
                            <div>
                                <label>Title:</label>
                                <span>{book.volumeInfo.title}</span>
                            </div>
                            <div>
                                <label>Authors:</label>
                                <span>{book.volumeInfo.authors && book.volumeInfo.authors.join(",")}</span>
                            </div>
                            <div>
                                <label>Description:</label>
                                <span>{book.volumeInfo.description}</span>
                            </div>  
                            <div>
                                <span><a href={book.volumeInfo.infoLink}>Link</a></span>
                            </div>                                                                                        
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}

export default BooksSearch;