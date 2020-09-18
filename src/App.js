import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Property from './components/Property/Property';
import PropertyDetailsForm from './components/Property/PropertyDetails/PropertyDetailsForm';
import HomeScreen from './components/HomeScereen/HomeScreen';
import RoomForm from './components/Property/Rooms/RoomForm'
//import RoomForm from './components/Property/Rooms/RoomForm';
//import AddRoomList from './components/Property/AddRoom/AddRoomList';

function App() {
    
    return (
        <Layout>
            <Switch>
                <Route path='/property/room-form' component={RoomForm} />
                <Route path='/property' component={Property} />
                <Route path='/PropertyDetailsForm' component={PropertyDetailsForm} />
                <Route path='/' exact component={HomeScreen} />
            </Switch>
            {/* {selected} */}
        </Layout>
    );
    // const [selector, setSelector] = useState('Home');
    // const [property, setProperty] = useState(null);
    // const [buttonType, setButtonType] = useState('add');

    // const passItemToComponent = (item) => {
    //     setProperty(item);
    // }

    // const selectScreen = (screen) => {
    //     setSelector(screen);
    // }

    // const passButtonType = (btn) => {
    //     setButtonType(btn)
    // }

    // let selected;
    // switch (selector) {
    //     case 'Home':
    //         selected = <HomeScreen
    //             select = {selectScreen}
    //             passProperty = {passItemToComponent}
    //             buttonType = {buttonType}
    //             passButtonType={passButtonType} />;
    //         break;
    //     case 'Property':
    //         selected = <Property
    //             select = {selectScreen}
    //             property = {property}
    //             passProperty = {passItemToComponent}
    //             passButtonType={passButtonType}
    //             buttonType = {buttonType} />
    //         break;
    //     case 'PropertyDetailsForm':
    //         selected = <PropertyDetailsForm
    //             select = {selectScreen}
    //             property = {property}
    //             passProperty = {passItemToComponent}
    //             buttonType = {buttonType} />
    //         break;
    //     case 'RoomForm':
    //         selected = <RoomForm
    //             select = {selectScreen}
    //             property = {property}
    //             passProperty = {passItemToComponent} />
    //         break;
    //     default:
    //         selected = <HomeScreen
    //             select = {selectScreen}
    //             passProperty = {passItemToComponent}
    //             buttonType = {buttonType} />
    // }

}

export default App;
