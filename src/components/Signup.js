import React from 'react';
import FormField from './FormField';
import CoolButton from './CoolButton';
import 'bulma/css/bulma.css';

class Signup extends React.Component {
    render() {
        return (
            <div className='signup'>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g.alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="*********"/>
                <CoolButton isSmall isDanger className="is-rounded my-class" name="Signup"/>
            </div>
        )
    }
}


export default Signup;