import { createBoard } from '@wixc3/react-board';
import { SearchView } from '../../../components/search-view/search-view';

export default createBoard({
    name: 'Search',
    Board: () => <SearchView />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1931
    }
});
