import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect (() => {
        const counter = () => {
            if (countdown > 0) {
                setTimeout(() => {
                    setCountdown(countdown - 1);
                }, 1000)
            }
            else {
                navigate("/");
            }
        }
        counter();
    }, [navigate, countdown]);

  return (
    <div className="PageNotFound">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <p>You are beeing re redirected to home page in {countdown}.</p>
    </div>
  );
};

export default NotFound;
