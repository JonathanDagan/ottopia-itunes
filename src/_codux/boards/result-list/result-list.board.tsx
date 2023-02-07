import { createBoard } from '@wixc3/react-board';
import { ResultList } from '../../../components/result-list/result-list';
import { results } from './results';
import { Track } from '../../../services/ItunesApi';

export default createBoard({
    name: 'ResultList',
    Board: () => <ResultList results={results as Track[]} />,
    environmentProps: {
        canvasWidth: 827
    }
});
