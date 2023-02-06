import { createBoard } from '@wixc3/react-board';
import { AudioPreview } from '../../../components/audio-preview/audio-preview';

import { resultExample } from '../result/result'

export default createBoard({
    name: 'AudioPreview',
    Board: () => <AudioPreview src={resultExample.previewUrl} />,
    environmentProps: {
        canvasWidth: 16
    }
});
