import React, { useState, useEffect } from 'react'
import axios from '../axios';
import '../Styling/banner.css'

const Banner = (props) => {
    const image_base_url = "https://image.tmdb.org/t/p/original"
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        fetchData();
        // eslint-disable-next-line
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url(${image_base_url}${movie ? movie.backdrop_path : ""})`
            }}
        >
            <div className="banner_content">
                <h2 className="banner_title">{movie?.title || movie?.name || movie?.orignal_title}</h2>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <div>
                    <h2 className="banner_description">{truncate(movie?.overview, 150)}</h2>
                </div>
            </div>
            <div className="banner_fadeBottom"></div>

        </header>
    )
}

export default Banner
