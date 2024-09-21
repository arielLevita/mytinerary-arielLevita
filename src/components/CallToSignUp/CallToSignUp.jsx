import { Link as Anchor } from "react-router-dom";

const CallToSignUp = () => {
    return (
        <section className="px-4 py-20">
            <h2 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl mb-4">Join our community of passionate travelers</h2>
            <p className="text-center text-pretty lg:text-lg w-2/3 mx-auto mb-2">Create an account to start planning your next adventure. Once you sign up, you can like our itineraries, share comments with the community, and more.</p>
            <div className="flex justify-center">
                <Anchor to={'/signup'} className="my-4">
                    <button className="bg-purple-800 bg-gradient-to-br from-purple-600 backdrop-blur bg-opacity-70 shadow-lg text-shadow font-semibold text-base md:text-xl text-white rounded-full hover:shadow-2xl hover:bg-purple-900 hover:bg-opacity-80 border-2 border-opacity-50 border-white pt-2.5 pb-3 px-6">Sign Up</button>
                </Anchor>
            </div>
        </section>
    )
}

export default CallToSignUp