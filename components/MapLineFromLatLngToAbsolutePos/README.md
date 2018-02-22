# MapLineFromLatLngToAbsolutePos

Renders a Line from an absolute position of the screen to a geo position on a map

## Parameters

| Param | Type | Description |
| --- | --- | --- |
| location | `Object` | with `lat` `lng` - the location of the marker on the map |
| position | `Object` | with `top` or `bottom` and `left` or `right` specifying the start postion of the line relative to the map container. By default pixel values are used. You can set `usePercentValues` to true to use percent values. You can't mix pixel and percent values. |
| … |  | anything you can pass to [`Path`](http://leafletjs.com/reference-1.3.0.html#path) can also be passed to this line |

### context

This component uses the [`map` context of react leaflet](https://react-leaflet.js.org/docs/en/intro.html#component-context)
and therefore needs to be a child or some grandchild of [`<Map>`](https://react-leaflet.js.org/docs/en/components.html#map)

## Example

**Code**

```jsx
const lineProps = {
  location: {
    lat: 52.69,
    lng: 13.06
  }
  position: { bottom: 0, left: 0.5, usePercentValues: true },
  color: black,
  weight: 2
}

<MapLineFromLatLngToAbsolutePos {...lineProps} />
```
