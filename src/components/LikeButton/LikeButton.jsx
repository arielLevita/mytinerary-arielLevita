import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../store/actions/likeActions.js';
import IconHeart from '../Icons/IconHeart/IconHeart';

const LikeButton = () => {
    const dispatch = useDispatch();
    const { liked, likeCount } = useSelector((store) => store.likeReducer);
    const user = localStorage.getItem('user')

    console.log(likeCount);
    console.log(liked);
    const handleLikeClick = () => {
        if (user) {
            dispatch(toggleLike());
        }
    };

    return (
        <div className="">
            {user ? (
                <button className='w-24 flex justify-between items-center border rounded-full shadow-slate-400 border-slate-300 text-xs px-4 py-1' onClick={handleLikeClick}>
                    
                        <IconHeart liked={liked} />
                    
                    <span>{likeCount} likes</span>
                </button>
            ) : (
                <button className='w-24 flex justify-between items-center border rounded-full shadow-slate-400 border-slate-300 text-xs px-4 py-1' onClick={handleLikeClick} disabled>
                    
                        <IconHeart liked={liked} />
                    
                    <span>{likeCount} likes</span>
                </button>
            )}
        </div>
    );
};

export default LikeButton;
