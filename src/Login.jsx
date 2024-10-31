import "./loginStyle.css";
import { useEffect, useState } from "react";

export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(prev => !prev);
    };

    const checkWindowSize = () => {
        const toggleContainer = document.querySelector(".toggle-container");

        if (window.innerWidth >= 800) {
            toggleContainer.style.left = "50%";
        } else if (window.innerWidth < 800 && isSignUp) {
            toggleContainer.style.left = '40%'; // Move toggle to 30% for sign-up
        } else if(window.innerWidth < 800 && !isSignUp) {
            toggleContainer.style.left = '60%'; // Move toggle to 70% for sign-in or larger screens
        }
    };

    useEffect(() => {
        checkWindowSize(); // Initial call to set position
        window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, [isSignUp]); // Include isSignUp in the dependency array

    return (
        <div className={'loginSpace'}>
            <div className={`login ${isSignUp && 'active'}`}>
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-icons">{/* Social icons */}</div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">{/* Social icons */}</div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className={`toggle-container`}>
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="hidden" onClick={toggleForm}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className="hidden" onClick={toggleForm}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
