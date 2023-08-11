import Food from './Food';

interface FoodTruck {
    id: string,
    location: string,
    coordinate: {
        latitude: number;
        longitude: number;
    }
    menu: Food[];
}

export default FoodTruck;
