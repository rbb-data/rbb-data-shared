# MapLocationMarker

Renders a marker at a given location.
## Dependencies

### npm

```
npm i react-leaflet-div-icon
```

### context

This component needs to be a child or some grandchild of [`<Map>`](https://react-leaflet.js.org/docs/en/components.html#map)

## Parameters

| Param | Type | Description | Default |
| --- | --- | --- |
| location | `Object` | with `lat` `lng` - the location of the marker on the map | undefined |
| pane | `String` | The name of the pane the marker should be rendered on. | 'markerPane' |

## Example

**Code**

```jsx
const locationUpdate = {
  location: {
    lat: 52.69,
    lng: 13.06
  }
}

<MapLocationMarker locationUpdate={locationUpdate} />
```

**Screenshot**

![](./example.png)