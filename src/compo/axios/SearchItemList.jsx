import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchItemList() {
    const [name, setName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleSearch = async () => {
        try {
            setIsLoading(true);
            setError(null);

            // name 파라미터를 쿼리스트링으로 전달
            const response = await axios.get(`/api/membersByName?name=${name}`);
            // const response = await axios.post('/api/membersByNamePost', { name: name });
            setSearchResults(response.data);
        } catch (err) {
            setError('검색 중 오류가 발생했습니다: ' + err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="search-container">
            <h2>회원 검색</h2>
            <div className="search-form">
                <input
                    type="text"
                    placeholder="검색할 이름을 입력하세요"
                    value={name}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>검색</button>
            </div>

            {isLoading && <p>검색 중...</p>}
            {error && <p className="error">{error}</p>}

            {searchResults.length > 0 ? (
                <div className="search-results">
                    <h3>검색 결과</h3>
                    <ul>
                        {searchResults.map((member, index) => (
                            <li key={member.id}>
                                {member.id} / {member.name} / {member.gender} / {member.birth}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : !isLoading && !error && (
                <p>검색 결과가 없습니다.</p>
            )}
        </div>
    );
}

export default SearchItemList;