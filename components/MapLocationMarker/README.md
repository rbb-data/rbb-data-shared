# MapLocationMarker

Renders a marker at a given location on a map and moves the map so the marker is at its center.
## Dependencies

### npm

```
npm i react-leaflet-div-icon
```

### context

`context.map` see: https://react-leaflet.js.org/docs/en/intro.html#component-context  
This means this component needs to be a child or some grandchild of [`<Map>`](https://react-leaflet.js.org/docs/en/components.html#map)

## Parameters

| Param | Type | Description | Default |
| --- | --- | --- |
| locationUpdate | `Object` | Containing a `loacation` and a `timestamp`. `timestamp` is needed so the map will only be moved when a new location is set. | undefined |
| pane | `String` | The name of the pane the marker should be rendered on. | 'markerPane' |

## Example

**Code**

```jsx
const locationUpdate = {
  timestamp: 1518101074583,
  location: {
    lat: 52.69,
    lng: 13.06
  }
}

<MapLocationMarker locationUpdate={locationUpdate} />
```

**Screenshot**

![](./example.png)