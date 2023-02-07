import { createBoard } from '@wixc3/react-board';
import { NoResultsError } from '../../../components/no-results-error/no-results-error';

export default createBoard({
    name: 'NoResultsError',
    Board: () => <NoResultsError term={'aa'}/>
});
