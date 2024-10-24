export async function fetchOSMWebcams(lat, lon, radius = 10000) { // radius in meters
  const overpassUrl = 'https://overpass-api.de/api/interpreter';
  const query = `
    [out:json];
    node["webcam"](around:${radius},${lat},${lon});
    out;
  `;
  try {
    const response = await fetch(overpassUrl, {
      method: 'POST',
      body: query,
    });
    const data = await response.json();
    if (data.elements && data.elements.length > 0) {
      // Parse the data to extract webcam URLs
      // OSM webcams may have 'url' tags or similar
      return data.elements.map((element) => ({
        name: element.tags.name || 'Unnamed Webcam',
        lat: element.lat,
        lon: element.lon,
        url: element.tags.url || '',
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching OSM webcams:', error);
    return [];
  }
}
