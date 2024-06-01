import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const truncatedTitle = (snippet?.title || demoVideoTitle).slice(0, 60);
  const channelId = snippet?.channelId || '';

  return (
    <Card sx={{ width: { xs: '358px', sm: '358px', md: '310px' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={`/video/${videoId || 'cV2gBU6hKfY'}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: '100%', height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Link to={`/video/${videoId || demoVideoUrl}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {truncatedTitle}
          </Typography>
        </Link>
        <Link to={`/channel/${channelId}`}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
