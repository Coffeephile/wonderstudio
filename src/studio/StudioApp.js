import React from 'react'
import styles from './StudioApp.styl'
import AppPreview from './AppPreview'
import CodeEditorContainer from './CodeEditorContainer'

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import { withState, compose } from 'recompose'
import * as Studio from './Studio'

export default compose(
  DragDropContext(HTML5Backend),
  withState('state', 'onUpdateState', Studio.getInitialState())
)(React.createClass({
  propTypes: {
    state: React.PropTypes.object,
    onUpdateState: React.PropTypes.func
  },
  onDispatch (message) {
    this.props.onUpdateState(message(Studio))
  },
  query (message) {
    return message(Studio)(this.props.state)
  },
  render () {
    return <div className={styles.root}>
      <div className={styles.title}>
        <div className={styles.appTitle}>
          <em>wonderful.software</em><span>/</span><strong>studio</strong>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.left}>
          <AppPreview state={this.props.state} dispatch={this.onDispatch} query={this.query} />
        </div>
        <div className={styles.right}>
          <CodeEditorContainer code={this.props.state.app.code} />
        </div>
      </div>
    </div>
  }
}))
