import SearchBox from "../SearchBox/SearchBox"
import CitiesCards from "../CitiesCards/CitiesCards"

const CitiesMain = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-purple-50">
            {/* <img src="https://i.postimg.cc/3RNDjW4Q/Under-Construction-Transparent.png" alt="web site under construction" className="max-w-xs aspect-square" /> */}
            <SearchBox />
            <CitiesCards />
        </div>
    )
}

export default CitiesMain