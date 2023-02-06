import { createBoard } from '@wixc3/react-board';
import { TrackPage } from '../../../components/track-page/track-page';

export default createBoard({
    name: 'TrackPage',
    Board: () => <TrackPage />
});
