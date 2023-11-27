import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsByItineraryId } from "../../store/actions/commentActions";
import { get_users } from "../../store/actions/userActions";
import IconSend from "../Icons/IconSend/IconSend";
import axios from "axios";

const CommentsSection = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const comments = useSelector((store) => store.commentReducer.comments);
    const [sortedComments, setSortedComments] = useState([]);
    const [newCommentsArray, setNewCommentsArray] = useState([]);
    const [newCommentText, setNewCommentText] = useState("");
    const user = localStorage.getItem('user');
    const parsedUser = JSON.parse(user);
    const allUsers = useSelector((store) => store.userReducer.allUsers);

    useEffect(() => {
        dispatch(getCommentsByItineraryId(id));
        dispatch(get_users());
    }, [dispatch, id]);

    const handleNewComment = async (e) => {
        e.preventDefault();
        const matchingUser = allUsers.find((user) => user.email === parsedUser.email);
        if (!matchingUser) {
            console.error("User not found");
            return;
        }

        const newDBComment = {
            text: newCommentText,
            itineraryId: id,
            userId: matchingUser._id,
        };
        
        const newComment = {
            text: newCommentText,
            user: {
                name: parsedUser.name,
                email: parsedUser.email,
                photo: parsedUser.photo
            },
            updatedAt: new Date().toISOString()
        };

        try {
            const postComment = await axios.post('http://localhost:3000/api/comments', newDBComment)
            if (postComment.status === 200) {
                console.log(sortedComments)
            }
        } catch (error) {
            console.log(error)
        }
        setNewCommentsArray([...newCommentsArray, newComment].reverse());
        
        setNewCommentText("");
    };
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        const sorted = [...comments].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setSortedComments(sorted);
    }, [comments]);
    

    return (
        <div>
            <div className="my-8">
                <form action="" className="relative">
                    <label htmlFor="commentInput">Leave your comment:</label>
                    <textarea
                        name="commentInput"
                        id="commentInput"
                        rows="4"
                        className="w-full rounded-lg focus-visible:outline-none pl-2 pr-10 py-2 border border-indigo-200"
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                    ></textarea>
                    <button type="submit" onClick={handleNewComment} className="absolute bottom-3 right-2 z-10 rounded-md p-2 bg-green-600 text-white shadow shadow-indigo-400"><IconSend /></button>
                </form>
            </div>

            <div className="px-4">
                {newCommentsArray?.map((comment, index) => (
                    <div key={comment.updatedAt + index} className="mb-6">
                        <div className="flex items-center">
                            <img src={comment.user.photo} alt={`profile photo of ${comment.user.name}`} className="h-8 items-center rounded-full aspect-square" />
                            <div className="flex items-baseline">
                                <p className="font-medium italic mx-2">{comment.user.name}</p>
                                <p className="mx-2 text-xs tracking-wider">{formatDate(comment.updatedAt)}</p>
                            </div>
                        </div>
                        <p className="mx-10">{comment.text}</p>
                    </div>
                ))}
            </div>

            <div className="px-4">
                {sortedComments?.map(comment => (
                    <div key={comment._id} className="mb-6">
                        <div className="flex items-center">
                            <img src={comment.user?.photo} alt={`profile photo of ${comment.user?.name}`} className="h-8 items-center rounded-full aspect-square" />
                            <div className="flex items-baseline">
                                <p className="font-medium italic mx-2">{comment.user?.name}</p>
                                <p className="mx-2 text-xs tracking-wider">{formatDate(comment?.updatedAt)}</p>
                            </div>
                        </div>
                        <p className="mx-10">{comment?.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentsSection;

