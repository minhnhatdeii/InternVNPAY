import TripHeader from "../../Component/TripHeader/TripHeader";
import SelectTripDisplay from "./SelectTripDisplay/SelectTripDisplay";
import './SelectTrip.scss'

export default function SelectTrip() {
    return (
        <div className="select-trip-container">
            <TripHeader />
            <div>
                <SelectTripDisplay/>
            </div>
        </div>
    );
}