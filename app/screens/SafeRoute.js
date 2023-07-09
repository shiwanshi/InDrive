import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { GooglePlacesAutocomplete } from
    'react-native-google-places-autocomplete';
const SafeRoute = () => {
    const [incidentMarkers, setIncidentMarkers] = useState([]);
    const [safeRoutePolyline, setSafeRoutePolyline] = useState([]);
    const [source, setSource] = useState(null);
    const [destination, setDestination] = useState(null);
    const generateSafeRoute = async () => {
        try {
            if (!source || !destination) {
                console.error('Please enter both source and destination');
                return;
            }
            const apiKey = '';
            const incidentCoordinates = incidentMarkers
                .map((marker) => `${marker.latitude},${marker.longitude}`)
                .join('|');
            console.log('Source:', source);
            console.log('Destination:', destination);
            console.log('Incident Coordinates:', incidentCoordinates);
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/directions/json?origin=${source}&
destination=${destination}&key=${apiKey}`
            );
            const data = await response.json();
            console.log('Direction API Response:', data);
            if (data.status === 'OK' && data.routes.length > 0) {
                const polylinePoints = data.routes[0].overview_polyline.points;
                const decodedPolyline = decodePolyline(polylinePoints);
                console.log('Decoded Polyline:', decodedPolyline);
                const safePolyline = filterPolyline(decodedPolyline,
                    incidentMarkers);
                setSafeRoutePolyline(safePolyline);
                console.log('Safe Polyline:', safePolyline);
            } else {
                console.error('Unable to retrieve directions from Google Directions API');
}
        } catch (error) {
            console.error('Error generating safe route:', error);
        }
    };
    const addIncidentMarker = (latitude, longitude) => {
        setIncidentMarkers([...incidentMarkers, { latitude, longitude }]);
    };
    // Helper function to decode the Google Maps polyline points
    const decodePolyline = (encodedPolyline) => {
        const poly = [];
        let index = 0,
            len = encodedPolyline.length;
        let lat = 0,
            lng = 0;
        while (index < len) {
            let b,
                shift = 0,
                result = 0;
            do {
                b = encodedPolyline.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
            lat += dlat;
            shift = 0;
            result = 0;
            do {
                b = encodedPolyline.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
            lng += dlng;
            const point = {
                latitude: lat / 1e5,
                longitude: lng / 1e5,
            };
            poly.push(point);
        }
        return poly;
    };
    const filterPolyline = (polyline, incidents) => {
        const filteredPolyline = [];
        for (let i = 0; i < polyline.length; i++) {
            const point = polyline[i];
            const isSafe = !incidents.some((marker) => {
                const latDiff = Math.abs(marker.latitude - point.latitude);
                const lngDiff = Math.abs(marker.longitude - point.longitude);
                console.log('Incident Marker:', marker);
                console.log('Point:', point);
                console.log('Lat Difference:', latDiff);
                console.log('Lng Difference:', lngDiff);
                return latDiff <= 0.001 && lngDiff <= 0.001;
            });
            if (isSafe) {
                filteredPolyline.push(point);
            }
        }
        return filteredPolyline;
    };
    // Helper function to calculate distance between two coordinates
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const p = 0.017453292519943295;
        const c = Math.cos;
        const a =
            0.5 -
            c((lat2 - lat1) * p) / 2 +
            (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
        return 12742 * Math.asin(Math.sqrt(a));
    };
    return (
        <View style={{ flex: 1, backgroundColor:'#ccefcc' , marginTop:40}}>
            
            <GooglePlacesAutocomplete
                placeholder="Enter source address"
                onPress={(data, details = null) => {
                    
                    if (details && details.geometry && details.geometry.location) {
                        const { lat, lng } = details.geometry.location;
                        setSource(`${lat},${lng}`);
                    }
                }}
                fetchDetails={true}
                query={{
                    key: '',
                    language: 'en',
                }}
                styles={{
                    textInputContainer: {
                      borderWidth: 2,
                      borderColor: 'green',
                      borderRadius: 5,
                      
                    },
                    textInput: {
                      color: 'green',
                    },
                  }}
            />
            <GooglePlacesAutocomplete
                placeholder="Enter destination address"
                onPress={(data, details = null) => {

                    if (details && details.geometry && details.geometry.location) {
                        const { lat, lng } = details.geometry.location;
                        setDestination(`${lat},${lng}`);
                    }
                }}
                fetchDetails={true}
                query={{
                    key: '',
                    language: 'en',
                }}
                styles={{
                    textInputContainer: {
                      borderWidth: 2,
                      borderColor: 'green',
                      borderRadius: 5,
                    },
                    textInput: {
                      color: 'green',
                    },
                  }}
            />
            <MapView
                style={{ flex: 1, height: 800 }}
                initialRegion={{
                    latitude: 12.912431701734498,
                    longitude: 77.56664497148714,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {/* Render incident markers */}
                {incidentMarkers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: marker.latitude, longitude:
                                marker.longitude
                        }}
                        pinColor="red"
                    />
                ))}
                {/* Render safe route polyline */}
                <Polyline
                    coordinates={safeRoutePolyline}
                    strokeColor="blue"
                    strokeWidth={4}
                />
                {/* Render source marker */}
                {source && (
                    <Marker
                        coordinate={{
                            latitude: Number(source.split(',')[0]),
                            longitude: Number(source.split(',')[1]),
                        }}
                        pinColor="green"
                    />
                )}
                {/* Render destination marker */}
                {destination && (
                    <Marker
                        coordinate={{
                            latitude: Number(destination.split(',')[0]),
                            longitude: Number(destination.split(',')[1]),
                        }}
                        pinColor="green"
                    />
                )}
            </MapView>
            <Button color='#004522' title="Generate Safe Route" onPress={generateSafeRoute}
            />
            <Button color='#138808' title="Show Incident/Danger Marker" onPress={() =>
                addIncidentMarker(12.935944654927711, 77.54160682462769)} />
        </View>
    );
};
export default SafeRoute;
