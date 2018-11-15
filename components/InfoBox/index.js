/* eslint-env browser */
import style from './styles.sass'

import { h, Component } from 'preact'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

export default class Search extends Component {
  render () {
    return <div class={style.wrapper}>
      <div class={style.infoWrapper}>
        <button class={style.infoButton} onClick={this.toggleInfoText}>
          <FontAwesomeIcon icon={faInfo} />
        </button>
        <div class={style.infoBox}>
          <p>
            Diese Infografik von rbb|24 soll möglichst schnell und transparent die aktuelle Stickstoffdioxid-Belastung in Berlin und Brandenburg darstellen. Dafür werden mit einem automatisierten Programm die offiziellen Messdaten alle 10 Minuten von den landeseigenen Webseiten in <a href='https://luftdaten.berlin.de/lqi' target='_blank'>Berlin</a> und <a href='https://luftdaten.brandenburg.de/home/-/bereich/aktuell' target='_blank'>Brandenburg</a> abgefragt.
            Dort erfahren Sie auch die genauen Standorte der Messstationen.
          </p>
          <p>
            Unsere Farbskala orientiert sich an bisherigen Stickoxid-Recherchen des rbb: Niedrige Belastung wird grün dargestellt. Höhere Belastung in orange, rot und schließlich schwarz. Die Sortierung und Farbe der Stationen spiegelt stets den aktuellsten, übermittelten Wert wieder.
          </p>
          <p>
            Sollte aus irgendwelchen Gründen kein Messwert übermittelt werden, wird der fehlende Datensatz interpoliert. Die Ticks auf der Y-Achse zeigen den heutigen Minimal- und Maximalwert sowie den errechneten Mittelwert in Mikrogramm pro Kubikmeter Luft (µg/m³).
          </p>
          <p>
            <b>Quellen:</b>
            <div>
              Berlin: Messungen durch die <a href='https://luftdaten.berlin.de/lqi' target='_blank'>Senatsverwaltung Umwelt, Verkehr und Klimaschutz</a>
            </div>
            <div>
              Brandenburg: Messungen durch das <a href='https://luftdaten.brandenburg.de/home/-/bereich/aktuell' target='_blank'>Landesamt für Umwelt</a>
            </div>
          </p>
          <p>
            <b>Credits:</b>
            <div>Design: Manuel Reich</div>
            <div>Programmierung: Jenny Gebske, Arne Schlüter</div>
            <div>Projektmanagement: Götz Gringmuth-Dallmer</div>
            <div>Konzept: Dominik Wurnig</div>
          </p>

        </div>
      </div>
    </div>
  }
}
