export interface Track {
  trackId: number;
  trackName: string;
  collectionName: string;
  artistName: string;
  artworkUrl60: string;
  previewUrl: string;
}

const API_ENDPOINT = 'https://itunes.apple.com/search';

export const fetchTrackById = async (id: number): Promise<Track> => {
  const res = await fetch(`${API_ENDPOINT}?id=${id}&entity=song`);
  const { results } = await res.json();
  return results[0];
};


export const fetchTracks = async (term: string): Promise<Track[]> => {
  const res = await fetch(`${API_ENDPOINT}?term=${term}&entity=song`);
  const { results } = await res.json();
  return results;
}
