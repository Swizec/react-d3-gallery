
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppContainer from '../../../modules/react-particles-experiment/src/containers/AppContainer.jsx';
import particlesApp from '../../../modules/react-particles-experiment/src/reducers';

class ParticlesPage extends Component {
    render() {
        let store = createStore(particlesApp);

        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

export default ParticlesPage;
