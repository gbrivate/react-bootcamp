import React, {useEffect, useState} from 'react';
import * as ReactDOM from "react-dom";

import Hello from './Hello';
import './style.css';
import Axios from "axios-observable";

const GetPhoto = () => {
    const axios = Axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
        timeout: 1000,
        /*headers: {'X-Custom-Header': 'blalba'}*/
    });

    const [photo, setPhoto] = useState(null);

    const options = {
        method: 'get',
        url: 'photos/1',
        responseType: 'json'
    };

    useEffect(() => {
        axios.request(options)
            .subscribe(({data}) => {
                setPhoto(data);
            });
    }, []);


    return (
        <div>
            {photo ?
                <div className="photo-div">
                    <label>
                        {photo.title}
                    </label>
                    <img src={photo.thumbnailUrl}/>
                </div>
                :
                ''}
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Hello/>
            <GetPhoto/>
        </div>
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));

/*render(<App/>, document.getElementById('root'));*/
