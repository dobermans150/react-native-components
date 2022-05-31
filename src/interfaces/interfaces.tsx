export interface MenuItem {
    name: string,
    icon: string,
    component: routeName,
}


type routeName = 'HomeScreen' | 'Animation101Screen' | 'Animation102Screen' | 'SwitchScreen' | 'AlertScreen' | 'TextInputScreen';
