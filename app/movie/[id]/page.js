
//  got reference from this article "https://tutorend.com/tutorials/social-sharing-in-react-next-js-with-react-share"
"use client";
import { useEffect, useState } from 'react';
import {LinkedinShareButton,TwitterShareButton,WhatsappShareButton,LinkedinIcon,TwitterIcon,WhatsappIcon} from "react-share";
const MovieDetail = ({ params }) => {
    const { id } = params;
    const [movie, setMovie] = useState(null);

    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const title =
        typeof document !== "undefined"
            ? document.title
            : "Check out this awesome content!";


    useEffect(() => {
        const fetchMovie = async () => {
            if (id) {
                try {
                    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
                    const data = await response.json();
                    setMovie(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
        fetchMovie();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (<>
        <div className="p-4">
            <h1 className="text-3xl font-bold">{movie.Title}</h1>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className='flex flex-justify flex-wrap m-5 '>
              <h2 >  Share you Favourite Movies :-</h2>
            <LinkedinShareButton  url={shareUrl} quote={title}>
          <LinkedinIcon className='p-2 m-2' size={80}  />
        </LinkedinShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon className=' m-2' round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon className=' m-2' iconFillColor="white"/>
        </WhatsappShareButton>
        </div>
        </>
    );
};

export default MovieDetail;
