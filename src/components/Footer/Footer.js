import React from 'react';
import App from '../App/App';

export class Footer extends React.Component {
    constructor (props){
        super(props);
        
    }

    render() {
        return (
            <footer className='footer'>
                <p>
                    Created by <a href='https://patrickbehrensjungfer.com'>Patrick Behrens-Jungfer</a>
                </p>
                <p>Icons from <a href='https://www.freepik.com/'>Freepik</a></p>
            </footer>
        )
    }
}