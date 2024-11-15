import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = () => {
    // const book = useLoaderData();
    // const navigate = useNavigate();

    // const [isReadAdded, setIsReadAdded] = useState(false);
    // const [isWishlistAdded, setIsWishlistAdded] = useState(false);

    // const handleRead = () => {
    //     const existingReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    //     const isAlreadyAdded = existingReadBooks.some(b => b.bookId === book.bookId);

    //     if (!isAlreadyAdded) {
    //         existingReadBooks.push(book);
    //         localStorage.setItem('readBooks', JSON.stringify(existingReadBooks));
    //         toast.success("Successfully added to Read list!", {
    //             position: "top-right",
    //             autoClose: 2000,
    //         });
    //         setIsReadAdded(true); 
    //     } else {
    //         toast.error("Already added to Read list!", {
    //             position: "top-right",
    //             autoClose: 2000,
    //         });
    //     }
    // };

    // const handleWishlist = () => {
    //     const existingWishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
    //     const isAlreadyAdded = existingWishlistBooks.some(b => b.bookId === book.bookId);

    //     if (!isAlreadyAdded) {
    //         existingWishlistBooks.push(book);
    //         localStorage.setItem('wishlistBooks', JSON.stringify(existingWishlistBooks));
    //         toast.success("Successfully added to Wishlist!", {
    //             position: "top-right",
    //             autoClose: 2000,
    //         });
    //         setIsWishlistAdded(true);
    //     } else {
    //         toast.error("Already added to Wishlist!", {
    //             position: "top-right",
    //             autoClose: 2000,
    //         });
    //     }
    // };

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-4 lg:p-6 flex flex-col lg:flex-row">
            <figure className="lg:w-1/2">
                <img src={book.image} alt={book.bookName} className="mt-6 max-w-full h-auto rounded" />
            </figure>
            <div className="card-body lg:w-1/2">
                <h1 className="text-3xl lg:text-4xl font-bold">{jobs.segment_name}</h1>
                <p className="text-lg lg:text-xl">By: {book.status}</p>
                <hr />
                <p className="text-lg lg:text-xl">{jobs.facilities}</p>
                <hr />
                <p className="text-xl lg:text-2xl font-bold">Review: <span className="font-normal">{book.review}</span></p>
                <hr />
                <p className="text-lg lg:text-xl font-bold">
                    Tag: 
                    <span className="font-normal flex flex-wrap gap-2 mt-2">
                        {book.tags.map((tag, index) => (
                            <span key={index} className="bg-[#23BE0A] text-white px-2 py-1 rounded-xl">#{tag}</span>
                        ))}
                    </span>
                </p>
                <hr />
                <table className="table-auto text-lg mt-4">
                    <tbody>
                        <tr>
                            <td className="pr-4">Number of Pages:</td>
                            <td className="font-bold">{book.totalPages}</td>
                        </tr>
                        <tr>
                            <td className="pr-4">Publisher:</td>
                            <td className="font-bold">{book.publisher}</td>
                        </tr>
                        <tr>
                            <td className="pr-4">Year of Publishing:</td>
                            <td className="font-bold">{book.yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className="pr-4">Rating:</td>
                            <td className="font-bold">{book.rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex gap-4 mt-4">
                    <button onClick={handleRead} className="px-4 py-2 bg-white text-black border border-gray-400 rounded hover:bg-gray-100">
                        Read
                    </button>
                    <button onClick={handleWishlist} className="px-4 py-2 bg-[#50B1C9] text-white rounded">
                        Wishlist
                    </button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default List;
