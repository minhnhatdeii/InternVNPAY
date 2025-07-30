import { useState } from 'react';
import  ic_close from '../../assets/images/ic_close.svg';
import SelectFilter from '../../Component/SelectFilter/SelectFilter';
import TripHeader from '../../Component/TripHeader/TripHeader';
import FilterTripDisplay from './FilterTripDisplay/FilterTripDisplay';
import './FilterTripPage.scss';
import { Navigator, View } from '@vnxjs/components';
import { Provider } from 'react-redux';
import {store} from '../../store/store'
import { useDispatch } from 'react-redux';



export default function FilterTripPage() {
    
    return(
        <Provider store={store}>
            <View>
                <div className="filter-trip-container">
                    <TripHeader icon={ic_close} namePage={"Lọc Chuyến đi"}/>
                    <FilterTripDisplay />
                    <div className='selectfilter-container'>
                        <SelectFilter/>
                    </div>
                </div>
            </View>
        </Provider>
    )
}