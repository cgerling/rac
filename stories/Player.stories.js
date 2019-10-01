import React from 'react'
import {storiesOf} from '@storybook/react'

import Player from '../src/index.js'

const src = 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'

storiesOf('Player', module).add('default', () => <Player src={src} />)
