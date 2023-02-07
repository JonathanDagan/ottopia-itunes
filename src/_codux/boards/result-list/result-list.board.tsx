import { createBoard } from '@wixc3/react-board';
import { ResultList } from '../../../components/result-list/result-list';
import { results } from './results';

export default createBoard({
    name: 'ResultList',
    Board: () => <ResultList results={results} />,
    environmentProps: {
        canvasWidth: 827
    }
});
