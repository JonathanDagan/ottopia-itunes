import { createBoard } from '@wixc3/react-board';
import { Result } from '../../../components/result/result';


import { resultExample } from './result'

export default createBoard({
    name: 'Result',
    Board: () => <Result result={resultExample}></Result>,
    environmentProps: {
        windowBackgroundColor: '#ffffff'
    }
});
