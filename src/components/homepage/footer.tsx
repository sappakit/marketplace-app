export default function Footer() {
    return (
        <footer className="w-screen h-[30vh] bg-rose-50 flex-col">
            <section className="w-[70%] h-[90%] p-10 justify-self-center flex justify-center items-center">
                <div className="w-[50%] h-full bg-amber-400 flex-col justify-items-center content-center">
                    <h2>Logo</h2>
                    <p>Social media</p>
                </div>
                <div className="w-[50%] h-full p-10 bg-blue-400 flex justify-evenly items-center">
                    <ul>
                        <li>Privacy</li>
                        <li>Term</li>
                        <li>About us</li>
                    </ul>
                    <ul>
                        <li>Contact us</li>
                        <li>Map</li>
                    </ul>
                </div>
            </section>
            <section className="w-full h-[10%] self-end flex justify-center items-center bg-gray-800 text-white">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </section>
        </footer>
    )
}