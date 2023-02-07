import { createBoard } from '@wixc3/react-board';
import { LandingPage } from '../../../routes/landing-page/landing-page';

export default createBoard({
    name: 'LandingPage',
    Board: () => <LandingPage />
});
