import CitiesLinks from "../CitiesLinks/CitiesLinks";
import './CitiesCards.css'

const CitiesCards = () => {

    const cities = [
        {key: 1, name: 'Rome', coverURL: 'https://i.postimg.cc/28nkMjKB/rome.jpg', country: 'Italy'},
        {key: 2, name: 'Athens', coverURL: 'https://i.postimg.cc/k5v74jmM/athens.jpg', country: 'Greece'},
        {key: 3, name: 'Barcelona', coverURL: 'https://i.postimg.cc/3Rb54Vbh/barcelona.jpg', country: 'Spain'},
        {key: 4, name: 'Paris', coverURL: 'https://i.postimg.cc/FzJqfRLb/paris.jpg', country: 'France'},
        {key: 5, name: 'Beijing', coverURL: 'https://i.postimg.cc/nrgJ5gv2/beijing.jpg', country: 'China'},
        {key: 6, name: 'Reikiavik', coverURL: 'https://i.postimg.cc/QN2NfK03/reikiavik.jpg', country: 'Iceland'},
        {key: 7, name: 'Dubai', coverURL: 'https://i.postimg.cc/908MfLyw/dubai.jpg', country: 'United Arab Emirates'},
        {key: 8, name: 'London', coverURL: 'https://i.postimg.cc/sDGySfrN/london.jpg', country: 'England'},
        {key: 9, name: 'Moscow', coverURL: 'https://i.postimg.cc/QC9LpmRT/moscow.jpg', country: 'Russia'},
        {key: 10, name: 'Pisa', coverURL: 'https://i.postimg.cc/NLqnRc63/pisa.jpg', country: 'Italy'},
        {key: 11, name: 'New York', coverURL: 'https://i.postimg.cc/ZqHhZC8C/new-york.jpg', country: 'United States of America'},
        {key: 12, name: 'Tokio', coverURL: 'https://i.postimg.cc/dVBqQHvs/tokio.jpg', country: 'Japan'},
        {key: 13, name: 'Sydeney', coverURL: 'https://i.postimg.cc/wxyT5Q52/sydney.jpg', country: 'Australia'},
        {key: 14, name: 'Petra', coverURL: 'https://i.postimg.cc/NFW3bTcP/petra.jpg', country: 'Jordan'},
        {key: 15, name: 'Rio do Janeiro', coverURL: 'https://i.postimg.cc/x1Yf2rwp/rio-de-janeiro.jpg', country: 'Brazil'},
        {key: 16, name: 'Iguazú', coverURL: 'https://i.postimg.cc/N06jXs1c/iguazu.jpg', country: 'Argentine'},
        {key: 17, name: 'Agra', coverURL: 'https://i.postimg.cc/t4Pq0qvx/agra.jpg', country: 'India'},
        {key: 18, name: 'Las vegas', coverURL: 'https://i.postimg.cc/HkGmtGWs/las-vegas.jpg', country: 'United States of America'},
        {key: 19, name: 'Cairo', coverURL: 'https://i.postimg.cc/02hkHMnv/cairo.jpg', country: 'Egipt'},
        {key: 20, name: 'Alesund', coverURL: 'https://i.postimg.cc/XvbV4RtD/alesund.jpg', country: 'Norway'},
    ];

    return (
        <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            
            {cities.map((city) => (
                    <CitiesLinks key={city.key} name={city.name} coverURL={city.coverURL}/>
            )).slice(0, 15)}

        </div>
    )
}

export default CitiesCards