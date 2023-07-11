import type {IHotel} from "@/modules/hotels/models/IHotel";

const Hotels:IHotel[] = [
    {
        name: 'Lakewood',
        logo: 'https://static.vecteezy.com/system/resources/previews/015/694/764/non_2x/skyscraper-hotel-building-flat-cartoon-hand-drawn-illustration-template-with-view-on-city-space-of-street-panorama-design-vector.jpg',
        rate: 3,
        weekPrices: {
            regular: '110',
            reward: '80'
        },
        weekendPrices: {
            regular: '90',
            reward: '80'
        },
    },
    {
        name: 'Bridgewood',
        logo: 'https://media.istockphoto.com/id/1011283370/es/vector/edificio-de-hotel-y-playa-de-mar-costa-de-arena-con-palmeras.jpg?s=612x612&w=0&k=20&c=suNyHwG51GWWOlzIvDIPoa3d-j-XSgeQ7tft8YwC9ag=',
        rate: 4,
        weekPrices: {
            regular: '160',
            reward: '110'
        },
        weekendPrices: {
            regular: '60',
            reward: '50'
        },
    },
    {
        name: 'Ridgewood',
        logo: 'https://png.pngtree.com/png-vector/20190529/ourlarge/pngtree-summer-holidays-background-on-the-beach-with-hotel-and-travel-accessories-png-image_1109260.jpg',
        rate: 5,
        weekPrices: {
            regular: '220',
            reward: '100'
        },
        weekendPrices: {
            regular: '150',
            reward: '40'
        },
    },
]

export default Hotels
