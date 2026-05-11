import React from 'react';

const ExplorebyCategory = () => {
    return (
        <div className="flex items-center justify-center py-12 mt-10">
            <div className="border-y border-gray-300 md:py-20 py-10 w-full">

                {/* Header */}
                <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-1.5 border border-orange-400 text-orange-500 font-semibold px-4 py-2 rounded-md mb-4">
                        ✦ Browse
                    </span>
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Explore by Category</h2>
                    <p className="text-gray-500 text-sm">Find your perfect vibe from our curated collection.</p>
                </div>

                {/* Images */}
                {/* ADD group HERE on the parent */}
                <div className="group cursor-pointer">
                    <div className="relative mx-auto w-60 h-64">
                        <img
                            className="absolute bottom-0 w-52 left-0"
                            src="/Images/Home/folder_image_down.png"
                            alt=""
                        />
                        <div className="absolute bottom-0  transition-all duration-300 w-48 h-32 left-0">
                            <div className="h-full absolute group-hover:bottom-40 group-hover:left-0  w-full bg-white mx-auto rounded-xl ml-4 p-2 text-center">
                                1
                            </div>
                            <div className="h-full absolute w-full bg-white mx-auto rounded-xl ml-4 p-2 text-center">
                                2
                            </div>
                            <div className="h-full absolute w-full bg-white mx-auto rounded-xl ml-4 p-2 text-center">
                                3
                            </div>
                            <div className="h-full absolute w-full bg-white mx-auto rounded-xl ml-4 p-2 text-center">
                                4
                            </div>
                        </div>
                        <img
                            className="absolute bottom-0 w-60 left-0 rotate-180"
                            src="/Images/Home/folder_image_up.png"
                            alt=""
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ExplorebyCategory;