import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Property from './components/Property/Property';
import PropertyDetailsForm from './components/Property/PropertyDetails/PropertyDetailsForm';
import HomeScreen from './components/HomeScereen/HomeScreen';
import RoomForm from './components/Property/Rooms/RoomForm'

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

}

export default App;
