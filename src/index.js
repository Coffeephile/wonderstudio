import React from 'react'
import {render} from 'react-dom'
import 'normalize.css'
import './index.styl'
import { loadCSS } from 'fg-loadcss'

import StudioApp from './studio/StudioApp'

render(<StudioApp />, document.querySelector('#app'))

loadCSS('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700')
loadCSS('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700')
loadCSS('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,600')
