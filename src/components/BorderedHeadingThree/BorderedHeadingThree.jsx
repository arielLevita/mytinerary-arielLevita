const BorderedHeadingThree = ({ children }) => {
    return (
        <div className="flex items-center rounded-xl bg-gradient-to-br from-purple-400 to-blue-100 to-40% p-1">
            <div className="w-full h-full md:text-2xl font-semibold flex justify-between items-center rounded-lg bg-blue-100 py-2 px-4">
                {children}
            </div>
        </div>
    )
}

export default BorderedHeadingThree