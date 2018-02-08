import { h, Component } from 'preact'

import DivIcon from 'react-leaflet-div-icon'
import colors from '../../styles/colors.sass'

export default class MapLocationMarker extends Component {
  static defaultProps = {
    pane: 'markerPane'
  }

  componentDidUpdate (oldProps) {
    const { locationUpdate } = this.props
    const oldTimestamp = oldProps.locationUpdate && oldProps.locationUpdate.timetamp

    if (locationUpdate === null || locationUpdate === undefined) return
    if (oldTimestamp === locationUpdate.timetamp) return

    // search result was added in this update
    const latLng = [locationUpdate.location.lat, locationUpdate.location.lng]
    const zoom = 14
    this.context.map.setView(latLng, zoom)
  }

  render ({ locationUpdate, pane }) {
    const location = locationUpdate && locationUpdate.location
    if (!location) return null

    const markerProps = {
      position: [location.lat, location.lng],
      iconSize: [26, 34],
      iconAnchor: [13, 34],
      pane: pane,
      className: false,
      interactive: false
    }
    return <DivIcon {...markerProps}>
      <svg viewBox='0 0 13 17' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <g id='Artboard-Copy' transform='translate(-599.000000, -303.000000)' stroke={colors.red} stroke-width='2'>
          <path d='M605.79257,316.961064 L606.691853,314.890485 L607.130272,314.754643 C609.41294,314.047368 611,311.927529 611,309.5 C611,306.462434 608.537566,304 605.5,304 C602.462434,304 600,306.462434 600,309.5 C600,312.137293 601.870627,314.389739 604.425277,314.895244 L604.939551,314.997006 L605.79257,316.961064 Z M605.5,315 C602.462434,315 600,312.537566 600,309.5 C600,306.462434 602.462434,304 605.5,304 C608.537566,304 611,306.462434 611,309.5 C611,312.537566 608.537566,315 605.5,315 Z' />
        </g>
      </svg>
    </DivIcon>
  }
}
