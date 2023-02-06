import axios from 'axios';

export interface Track {
  trackId: number;
  trackName: string;
  collectionName: string;
  artistName: string;
  artworkUrl60: string;
  previewUrl: string;
}

interface Response {
  results: Track[];
}

const API_ENDPOINT = 'https://itunes.apple.com/search';

export const fetchTracks = async (term: string) => {
  const res = await axios.get<Response>(API_ENDPOINT, {
    params: { term, entity: 'song' },
  });
  return res.data.results;
};
