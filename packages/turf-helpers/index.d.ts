/// <reference types="geojson" />

export type Point = Array<number>
export type LineString = Array<Array<number>>
export type Polygon = Array<Array<Array<number>>>
export type MultiPoint = Array<Point>
export type MultiLineString = Array<LineString>
export type MultiPolygon = Array<Polygon>
export type Units = "miles" | "nauticalmiles" | "degrees" | "radians" | "inches" | "yards" | "meters" | "metres" | "kilometers" | "kilometres"

/***
 * http://turfjs.org/docs/#feature
 */
export function feature(geometry: GeoJSON.Feature<any>, properties?: Object): GeoJSON.Feature<any>;

/***
 * http://turfjs.org/docs/#point
 */
export function point(coordinates: Point, properties?: Object): GeoJSON.Feature<GeoJSON.Point>;

/***
 * http://turfjs.org/docs/#polygon
 */
export function polygon(coordinates: Polygon, properties?: Object): GeoJSON.Feature<GeoJSON.Polygon>;

/***
 * http://turfjs.org/docs/#linestring
 */
export function lineString(coordinates: LineString, properties?: Object): GeoJSON.Feature<GeoJSON.LineString>;

/***
 * http://turfjs.org/docs/#featurecollection
 */
export function featureCollection(features: Array<GeoJSON.Feature<any>>): GeoJSON.FeatureCollection<GeoJSON.MultiPoint>;

/***
 * http://turfjs.org/docs/#multilinestring
 */
export function multiLineString(coordinates: MultiLineString, properties?: Object): GeoJSON.Feature<GeoJSON.MultiLineString>;

/***
 * http://turfjs.org/docs/#multipoint
 */
export function multiPoint(coordinates: MultiPoint, properties?: Object): GeoJSON.Feature<GeoJSON.MultiPoint>;

/***
 * http://turfjs.org/docs/#multipolygon
 */
export function multiPolygon(coordinates: MultiPolygon, properties?: Object): GeoJSON.Feature<GeoJSON.MultiPolygon>;

/***
 * http://turfjs.org/docs/#geometrycollection
 */
export function geometryCollection(geometries: Array<GeoJSON.GeometryObject>, properties?: Object): GeoJSON.GeometryCollection;

/***
 * http://turfjs.org/docs/
 */
export function radiansToDistance(radians: number, units: Units): number

/***
 * http://turfjs.org/docs/
 */
export function distanceToRadians(distance: number, units: Units): number

/***
 * http://turfjs.org/docs/
 */
export function distanceToDegrees(distance: number, units: Units): number