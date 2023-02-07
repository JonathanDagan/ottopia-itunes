import { createBoard } from '@wixc3/react-board';
import { Result } from '../../../components/result/result';


import { resultExample } from './result'

export default createBoard({
    name: 'Result',
    Board: () => <Result result={resultExample}></Result>,
    environmentProps: {
        windowBackgroundColor: '#ffffff',
        canvasWidth: 1130,
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 568
    }
});
