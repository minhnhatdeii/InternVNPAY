// src/redux/slices/tripsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import tripData from '../../data/trips.json';

const listBus = tripData.json.coreData.data;

function formatDateString(dateStr, year) {
  const [day, month] = dateStr.split('/');
  const d = day.padStart(2, '0');
  const m = month.padStart(2, '0');
  return `${d}-${m}-${year}`;
}
function removeDuplicateBusById(busList) {
  const uniqueMap = new Map();

  for (const bus of busList) {
    const id = bus.transport_information.id;
    if (!uniqueMap.has(id)) {
      uniqueMap.set(id, bus);
    }
  }
  return Array.from(uniqueMap.values());
}
function removeDuplicateTypeBusByName(busList) {
  const uniqueMap = new Map();

  for (const bus of busList) {
    const type = bus.vehicle_type;
    if (!uniqueMap.has(type)) {
      uniqueMap.set(type, bus);
    }
  }
 
  return Array.from(uniqueMap.values());
}

function filterTripsByDate(trips, selectedDateStr, year) {
  const formattedDate = formatDateString(selectedDateStr, year);
  return trips.filter(trip => trip.departure_date === formattedDate);
}
function sortTrips(trips, typeIndex, isAscending) {
  const sorted = [...trips]; // clone để không mutate gốc

  sorted.sort((a, b) => {
    let aValue, bValue;

    switch (typeIndex) {
      case 0: // Giờ chạy
        aValue = parseInt(a.departure_time.replace(':', ''), 10);
        bValue = parseInt(b.departure_time.replace(':', ''), 10);
        break;
      case 1: // Giá vé
        aValue = a.discount_amount;
        bValue = b.discount_amount;
        break;
      case 2: // Đánh giá
        aValue = a.transport_information.rating;
        bValue = b.transport_information.rating;
        break;
      default:
        return 0;
    }

    return isAscending ? aValue - bValue : bValue - aValue;
  });

  return sorted;
}
const savedTripState = JSON.parse(sessionStorage.getItem('tripState'));
const initialState = savedTripState || {
  busList: [],
  operatorList: [],
  typeBusList: [],
  loading: false,
};

const tripsSlice = createSlice({
  name: 'trip',
  initialState,
  
  reducers: {
    initOperatorList(state) {
    const clone = [...listBus];
        state.operatorList = removeDuplicateBusById(clone);
    },
    initTypeBusList(state) {
    const clone = [...listBus];
        state.typeBusList = removeDuplicateTypeBusByName(clone);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    filterTripsByDateAction(state, action) {
        const { dateStr, year } = action.payload;
        const clonedList = [...listBus];
        const filtered = filterTripsByDate(clonedList, dateStr, year);
        const sorted = sortTrips(filtered, 0, true);
        state.busList = sorted;
        state.loading = false;
        
    },
    sortTripsByTypeAction(state, action) {
        const { typeIndex, isAsc } = action.payload;
        const sorted = sortTrips(state.busList, typeIndex, isAsc);
        state.busList = sorted;
        state.loading = false;
    },
    setBusList(state, action) { // set busList
      state.busList = action.payload;
    },
    resetBusList(state, action) {
        const { dateStr, year } = action.payload;
        const clonedList = [...listBus];
        const filtered = filterTripsByDate(clonedList, dateStr, year);
        const sorted = sortTrips(filtered, 0, true);
        state.busList = sorted;
    }
  },
});

export const { 
   setLoading,
  filterTripsByDateAction,
  sortTripsByTypeAction, 
  setBusList,initOperatorList,
resetBusList, initTypeBusList} = tripsSlice.actions;
export default tripsSlice.reducer;
