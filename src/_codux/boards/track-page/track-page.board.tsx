import { createBoard } from '@wixc3/react-board';
import { TrackPage } from '../../../routes/track-page/track-page';

import {resultExample} from '../result/result'


export default createBoard({
    name: 'TrackPage',
    Board: () => <TrackPage trackId={resultExample.trackId}/>
});
