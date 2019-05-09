import React, { Component } from 'react';
import Wrapper from './wrapper'
import store from './core/index'
import { Provider } from 'react-redux';



 class CreateManageModule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Provider store={store}>
                <div>
                    <Wrapper {...this.props} />
                </div>
            </Provider>
            </div>
        );
    }
}
export default CreateManageModule
