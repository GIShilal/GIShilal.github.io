export let URLGeoJson = "https://asia-southeast2-formidable-feat-401903.cloudfunctions.net/petapedia";
export let urlPostGCF = "https://asia-southeast2-formidable-feat-401903.cloudfunctions.net/geopost";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`