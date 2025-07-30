import TripHeader from "../../Component/TripHeader/TripHeader";
import SelectTripDisplay from "./SelectTripDisplay/SelectTripDisplay";
import './SelectTrip.scss'
import ic_back from '../../assets/images/ic_back.svg';
import { Provider } from "react-redux";
import { store } from '../../store/store';
import { View } from "@vnxjs/components";

export default function SelectTrip() {
    return (
        <Provider store={store}>
            <View>
                <div className="select-trip-container">
                    <TripHeader icon={ic_back} namePage={"Chọn Chuyến đi"} route={"Hồ Chí Minh - Đà Lạt"}/>
                    <div>
                        <SelectTripDisplay/>
                    </div>
                 </div>
            </View>
        </Provider>
        
    );
}