import { useState } from 'react'; // Import React and useState
import IconMagnifyingGlass from '../Icons/IconMagnifyingGlass/IconMagnifyingGlass';

const SearchBox = () => {
    const [search, setSearch] = useState(''); // Use state to manage search input

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center max-w-md mx-auto bg-white border border-gray-300 rounded-lg">
                <div className="w-full">
                    <input
                        type="search"
                        className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                        placeholder="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className={`flex items-center justify-center w-12 h-12 text-white rounded-r-lg ${search.length > 0 ? 'bg-cyan-700' : 'bg-gray-500 cursor-not-allowed'}`}
                        disabled={search.length === 0}
                    >
                        <IconMagnifyingGlass />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
