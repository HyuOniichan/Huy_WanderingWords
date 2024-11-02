import { Link } from "react-router-dom";

function BackBtn({ path }) {
    return (
        <Link to={'/' + path}>
            <button
                type="button"
                className="btn btn-light position-absolute start-2 d-flex justify-content-center align-items-center"
                style={{ width: 100, top: -5 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                </svg>
                <span className="mx-1">Back</span>
            </button>
        </Link>
    )
}

export default BackBtn; 
