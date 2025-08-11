import React, { useState } from 'react';

function MovieSearchApp() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_KEY = '58bc3961'; // 본인의 API 키로 교체하세요.

    const searchMovies = async () => {
        if (query.trim() === '') return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
            );
            const data = await response.json();

            if (data.Response === 'True') {
                setMovies(data.Search);
            } else {
                setMovies([]);
                setError(data.Error);
            }
        } catch (err) {
            setError('검색 중 오류가 발생했습니다.');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    // Enter 키로도 검색 가능하게 처리
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchMovies();
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: 'auto', padding: '1rem' }}>
            <h1>영화 검색 앱</h1>
            <input
                type="text"
                placeholder="영화 제목을 입력하세요"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{ width: '70%', padding: '0.5rem', fontSize: '1rem' }}
            />
            <button onClick={searchMovies} style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}>
                검색
            </button>

            {loading && <p>검색 중입니다...</p>}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {movies.map((movie) => (
                    <li key={movie.imdbID} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                        <h3>{movie.Title} ({movie.Year})</h3>
                        {movie.Poster !== 'N/A' ? (
                            <img src={movie.Poster} alt={`${movie.Title} 포스터`} style={{ maxWidth: '150px' }} />
                        ) : (
                            <div style={{ width: '150px', height: '225px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                포스터 없음
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// query 상태는 검색어를 저장합니다.
// movies 상태는 검색 결과 영화 배열을 저장합니다.
// loading 상태는 검색 중임을 표시하며 사용자 경험을 향상시킵니다.
// error 상태는 API 요청 실패나 검색 결과가 없을 때 메시지를 보여줍니다.
// fetch API로 OMDB 서버에 요청 후 데이터를 받아 화면에 렌더링합니다.
// Enter 키나 버튼 클릭으로 검색을 수행합니다.

export default MovieSearchApp;