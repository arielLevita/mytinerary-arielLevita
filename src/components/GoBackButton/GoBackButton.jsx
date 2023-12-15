/**
 * The GoBackButton component is a React button that uses the useNavigate hook from react-router-dom to
 * navigate back to the previous page when clicked.
 * @returns The code is returning a functional component called GoBackButton. This component renders a
 * button with the text "Go Back". When the button is clicked, it calls the handleGoBack function,
 * which uses the useNavigate hook from react-router-dom to navigate back to the previous page. The
 * button also has some styling classes applied to it for visual appearance.
 */
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button
            onClick={handleGoBack}
            className="bg-purple-700 shadow-sm font-semibold text-base md:text-xl text-white rounded-full hover:shadow-2xl hover:bg-purple-900 border-2 border-opacity-50 border-white pt-1.5 pb-2 px-3 my-4"
        >
            Go Back
        </button>
    );
};

export default GoBackButton;