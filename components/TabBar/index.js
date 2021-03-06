import { h, Component } from 'preact'
import _ from './styles.sass'

export default class TabBar extends Component {
  constructor (props) {
    super(props)
    if (!this.props.onChange) this.props.onChange = ({ selectedValue }) => {}
  }

  select = e => {
    this.props.onChange({ selectedValue: e.target.value })
  }

  render ({ id, options, title, selectedValue, class: className }) {
    return <div class={`${_.radioFilter} ${className}`}>
      <ul title={title}>
        { options.map((option, i) => <li class={option.value === selectedValue && _.active}>
          <input key={`${id}-${i}`} id={`${id}-${i}`}
            type='radio'
            name={id}
            value={option.value}
            checked={option.value === selectedValue}
            onChange={this.select} />
          <label key={`${id}-${i}`} for={`${id}-${i}`} style={{ backgroundColor: option.color }}>{ option.display }</label>
        </li>)}
      </ul>
    </div>
  }
}
