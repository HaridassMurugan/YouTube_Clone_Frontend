import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from './style';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { REACT_APP_BASE_URL } from '../../URLData';


const Recommendation = ({ tags }) => {
  const { currentVideo } = useSelector((state) => state.video);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`${REACT_APP_BASE_URL}/videos/random`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  const recommendation = videos.filter(
    (videoId) => videoId?._id !== currentVideo?._id
  );

  return (
    <Container>
      {recommendation.map((video) => (
        <Card type='sm' key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Recommendation;
