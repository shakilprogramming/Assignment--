import 'animate.css';

const Shah = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl m-4 lg:m-8 p-4 lg:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
                <figure className="w-full lg:w-1/2">
                    <img
                        src="../../public/picture4.jpg" 
                        style={{ width: '100%', height: 'auto' }}
                        alt="Description"
                    />
                </figure>
                <div className="card-body animate__animated animate__fadeIn w-full lg:w-1/2">
                    <p className="text-lg sm:text-xl font-semibold animate__animated animate__zoomIn mb-2">
                        Our website provides important information for the client.
                    </p>
                    <p className="text-lg sm:text-xl font-semibold animate__animated animate__zoomIn">
                        For further information, contact us.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Shah;
