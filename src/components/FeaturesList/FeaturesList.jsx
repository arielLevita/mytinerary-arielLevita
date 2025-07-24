/* eslint-disable react/no-unescaped-entities */
import { 
    IconCheck, 
    IconGlobe, 
    IconChatLeftText, 
    IconGeoAlt, 
    IconCompass, 
    IconMagnifyingGlass, 
    IconImages,
    IconCash,
    IconHeartEmpty
} from "../Icons/Icons";

const FeaturesList = () => {
    const features = [
        {
            icon: IconGlobe,
            name: 'Explore',
            description: 'Find ideas for you next adventure'
        },
        {
            icon: IconCheck,
            name: 'Itineraries',
            description: 'Browse itineraries created by travelers'
        },
        {
            icon: IconChatLeftText,
            name: 'Chat',
            description: 'Share comments about your experience'
        },
        {
            icon: IconGeoAlt,
            name: 'Map',
            description: 'View destinations on a map'
        },
        {
            icon: IconCompass,
            name: 'Discover',
            description: 'Discover local attractions and activities'
        },
        {
            icon: IconMagnifyingGlass,
            name: 'Search',
            description: 'Search for specific destinations'
        },
        {
            icon: IconImages,
            name: 'Photos',
            description: 'View photos of popular destinations'
        },
        {
            icon: IconCash,
            name: 'Budget',
            description: 'Set a budget for your trip'
        },
        {
            icon: IconHeartEmpty,
            name: 'Like',
            description: 'Like your favourite destinations and itineraries'
        }
    ];

    return (
        <section className='mb-8 md:mb-16 lg:mb-24'>
            <div className='px-4'>
                <h2 className='text-2xl md:text-4xl text-center font-semibold mb-2'>Features you'll love</h2>
                <p className='font-semibold text-pretty text-center text-indigo-700 mb-6'>Discover the world with ease. Whether you're planning a weekend getaway or a month-long adventure, we've got you covered.</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {features.map((feature, index) => (
                        <div key={index} className="border border-gray-300 bg-white p-4 w-56 h-36 rounded-lg shadow">
                            <div className="h-6 w-6 mb-2">
                                <feature.icon />
                            </div>
                            <h5 className="font-semibold mb-2">{feature.name}</h5>
                            <p className="text-gray-500">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesList;
