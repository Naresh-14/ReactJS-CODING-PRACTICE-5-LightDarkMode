import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const {mode} = this.state
    const ButtonText = mode ? 'Dark Mode' : 'Light Mode'
    const modeClassName = mode ? 'dark-mode' : 'light-mode'

    return (
      <div className="container">
        <div className={`card ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            type="button"
            className="mode-button"
            onClick={this.onClickButton}
          >
            {ButtonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
