import type {IItemDrawer} from "@/models/IItemDrawer";

const ItemsDrawer:IItemDrawer[] = [
    {
        name: 'Home',
        icon: 'MdiHospitalBuilding',
        routeName: 'Home'
    },
    {
        name: 'About',
        icon: 'MdiInformation',
        routeName: 'About'
    },
    {
        name: 'Contact',
        icon: 'MdiCardAccountMailOutline',
        routeName: 'Contact'
    },
    {
        name: 'Users',
        icon: 'MdiAccountGroup',
        routeName: 'Users'
    },
]

export default ItemsDrawer
