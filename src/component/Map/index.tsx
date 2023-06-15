import styles from './styles.module.scss'
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";


export default function Map() {

    const endereco = {
        lat: -23.6142884,
        lng: -46.5650718,
    };

    return (
        <div className={styles.container}>
            <LoadScript googleMapsApiKey="AIzaSyBxthLYwoFH7BNLAWjbMv9vDrONzn0SanE">
                <GoogleMap
                    center={endereco}
                    zoom={15}
                    mapContainerStyle={{ height: "465px", width: "100%" }}
                >
                    <Marker position={endereco} />
                </GoogleMap>
            </LoadScript>
        </div>

    )
}