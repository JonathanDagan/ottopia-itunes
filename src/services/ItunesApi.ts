export interface Track {
  trackId: number;
  trackName: string;
  collectionName: string;
  artistName: string;
  artworkUrl60: string;
  artworkUrl100: string;
  previewUrl: string;
  trackTimeMillis: number;
  primaryGenreName: string;
}

const API_ENDPOINT = 'https://itunes.apple.com';

export const fetchTrackById = async (id: string): Promise<Track> => {
  const res = await fetch(`${API_ENDPOINT}/lookup?id=${id}&entity=song`);
  const { results } = await res.json();
  return results[0];
};


export const fetchTracks = async (term: string): Promise<Track[]> => {
  const res = await fetch(`${API_ENDPOINT}/search?term=${term}&entity=song`);
  const { results } = await res.json();
  return results;
}
