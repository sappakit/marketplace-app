export default function MainProfile() {
    return (
        <main className="w-screen h-screen bg-rose-100 flex flex-col items-center justify-start gap-10 p-10">
            <figure className="max-sm:w-[55vw] max-sm:h-[15vh] sm:w-[28vw] sm:h-[18vh] xl:w-[15vw] xl:h-[15vh] mb-[3rem] text-center">
                <img src="src\assets\profile_image.jpg" alt="Edward Elric profile" className="w-[100%] h-[100%] mb-4 rounded-full object-cover"></img>
                <h2 className="max-sm:text-xl text-3xl lg:text-2xl font-extrabold">Edward Elric</h2>
            </figure>
            <article className="w-[40%] p-4 rounded-xl border-4 border-red-400 bg-white flex items-start justify-start">
                <ul>
                    <li className="text-xl lg:text-lg">Name: John Doe</li>
                    <li className="text-xl lg:text-lg">Age: 30</li>
                    <li className="text-xl lg:text-lg">Email: johndoe01@gmail.com</li>
                    <li className="text-xl lg:text-lg">Phone: 123-456-7890</li>
                    <li className="text-xl lg:text-lg">Address: 123 Main St, Anytown, USA</li>
                </ul>
            </article>
            <aside className="w-screen h-[10vh] p-4 flex items-center justify-center gap-10">
                <div className="w-auto h-auto p-4 bg-red-400 rounded-4xl content-center">
                    <p className="text-lg font-extrabold">
                        Save items:
                    </p>
                    <p className="text-2xl text-white font-extrabold">
                        20
                    </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                </div>
                <div className="w-auto h-auto p-4 bg-red-400 rounded-4xl content-center">
                     <p className="text-lg font-extrabold">
                        Purchased items:
                    </p>
                    <p className="text-2xl text-white font-extrabold">
                        50
                    </p> 
                </div>
                <div className="w-auto h-auto p-4 bg-red-400 rounded-4xl content-center">
                     <p className="text-lg font-extrabold">
                        Sold items:
                    </p>
                    <p className="text-2xl text-white font-extrabold">
                        30
                    </p> 
                </div>
            </aside>
            <section className="w-[40%] h-full xl:w-[40%] p-4 rounded-xl bg-white flex flex-col items-start justify-start">
                <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
                <ul>
                    <li className="text-xl">Purchased "Product A" on 2024-05-01</li>
                    <li className="text-xl">Saved "Product B" on 2024-05-02</li>
                    <li className="text-xl">Sold "Product C" on 2024-05-03</li>
                </ul>
            </section>
        </main>
    )
}