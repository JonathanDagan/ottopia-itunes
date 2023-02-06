import { createBoard } from '@wixc3/react-board';
import { LandingPage } from '../../../components/landing-page/landing-page';

export default createBoard({
    name: 'LandingPage',
    Board: () => <LandingPage />
});
