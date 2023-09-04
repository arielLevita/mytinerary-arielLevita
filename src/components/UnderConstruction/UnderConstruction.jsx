import GoBackButton from "../GoBackButton/GoBackButton"

const UnderConstruction = () => {
    return (
        <div className="h-screen flex justify-around items-center flex-col ">
            <img src="https://i.postimg.cc/3RNDjW4Q/Under-Construction-Transparent.png" alt="web site under construction" className="max-w-xs aspect-square my-24" />
            <GoBackButton />
        </div>
    )
}

export default UnderConstruction