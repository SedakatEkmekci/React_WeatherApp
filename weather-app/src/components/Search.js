import { useState } from 'react';
import axios from 'axios';

// function Search() {
//     const [data, setData] = useState({});
//     const [location, setLocation] = useState('');
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&appid=dba667ca31672d6b523c15ae1accbdec`;

//     const searchLocation = (event) => {
//         if (event.key === 'Enter') {
//             axios.get(url).then((response) => {
//                 setData(response.data)
//                 console.log(response.data)
//             })
//             setLocation('');
//         }
//     };
//     return (
//         <div className="app">
//             <div className="search">
//                 <input
//                     value={location}
//                     onChange={event => setLocation(event.target.value)}
//                     onKeyPress={searchLocation}
//                     placeholder='Enter Location'

//                     type="text" />
//             </div>
//         </div>
//     )
// }

// export default Search
