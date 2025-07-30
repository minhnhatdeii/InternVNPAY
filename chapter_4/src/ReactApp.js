import { View } from "@vnxjs/components";
import SelectTrip from "./pages/SelectTrip/SelectTrip";
import FilterTripPage from "./pages/FilterTripPage/FilterTripPage";
import { Provider } from "react-redux";
import { store } from './store/store';

export default function ReactApp() {
    return(
        
                <SelectTrip />
            
    );
}