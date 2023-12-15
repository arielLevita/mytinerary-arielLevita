/**
 * The HandleNotFound function returns a React component that displays an image for a 404 error page.
 * @returns A div element with the class name "w-[95vw] font-bold flex justify-center items-center" is
 * being returned. Inside the div, there is an image element with the src attribute set to
 * "https://i.postimg.cc/hPHvrZp1/error404.jpg" and the alt attribute set to "error 404 page not
 * found".
 */
const HandleNotFound = () => {
    return (
        <div className="w-[95vw] font-bold flex justify-center items-center">
            <img  src="https://i.postimg.cc/hPHvrZp1/error404.jpg" alt="error 404 page not found" />
        </div>
    )
}

export default HandleNotFound