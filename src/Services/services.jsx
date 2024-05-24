import './services.css'
import ServiceComponent from './Component/serviceComponent';
import { useState } from 'react';
import { ReactComponent as ios } from './ios.svg';
import { ReactComponent as android } from './android.svg';
import { ReactComponent as website } from './website1.svg';


function MyServices() {

    let map = [
        { 'name': 'Ios', 'icon': ios, },
        { 'name': 'Android', 'icon': android, },
        { 'name': 'Web', 'icon': website, },
    ];

    const [data] = useState(map);
    return (<>
        <div className="service">
            <h4>My Services</h4>
            <div className='paragraph'>
                <p>Specializing in Flutter development, I craft sleek and responsive mobile applications tailored to your unique needs. From UI design to seamless functionality, I deliver top-notch solutions for your digital ventures</p>
            </div>
            <div className='service-component'>

                <ServiceComponent message={data[0].name} Myicon={data[0].icon}></ServiceComponent>
                <ServiceComponent message={data[1].name} Myicon={data[1].icon}></ServiceComponent>
                <ServiceComponent message={data[2].name} Myicon={data[2].icon}></ServiceComponent>

            </div>
        </div>

    </>);
}

export default MyServices;