import { h, Component } from 'preact'
import nextIcon from './nextIcon.svg'
import _ from './styles.sass'

export default class Slider extends Component {
  static defaultProps = {
    onBackwardNavigation: () => {},
    onForwardNavigation: () => {},
    canHaveFocus: true
  }

  handleKeyDown = e => {
    const {
      previousSlide,
      nextSlide,
      onBackwardNavigation: navigateBack,
      onForwardNavigation: navigateForward
    } = this.props

    const keyIsArrowRight = e.key === 'ArrowRight' || e.key === 'Right'
    const keyIsArrowLeft = e.key === 'ArrowLeft' || e.key === 'Left'

    if (!!nextSlide && keyIsArrowRight) navigateForward()
    if (!!previousSlide && keyIsArrowLeft) navigateBack()
  }

  // When a user selects something on the map or in the search the content
  // of the slider will change and componentDidUpdate will be called
  // so now we set the focus here so we can use keyboard navigation

  // Still not shure if it is to agrresive to this on componentDidUpdate…
  componentDidUpdate () {
    this.ref.focus()
  }

  componentDidMount () {
    this.ref.focus()
  }

  render (props) {
    const {
      class: className,
      onForwardNavigation: navigateForward,
      onBackwardNavigation: navigateBack,
      previousSlide,
      currentSlide,
      nextSlide,
      canHaveFocus
    } = props

    const wrapperProps = {
      class: `${_.slider} ${className}`,
      ref: ref => { this.ref = ref },
      tabIndex: canHaveFocus ? 0 : null,
      onKeyDown: this.handleKeyDown
    }

    return <div {...wrapperProps}>
      {currentSlide}
      { !!previousSlide &&
        <button class={`${_.prevNextButton} ${_.prev}`} onClick={navigateBack}>
          <img src={nextIcon} />
        </button>
      }
      { !!nextSlide &&
        <button class={`${_.prevNextButton} ${_.next}`} onClick={navigateForward}>
          <img src={nextIcon} />
        </button>
      }
    </div>
  }
}
