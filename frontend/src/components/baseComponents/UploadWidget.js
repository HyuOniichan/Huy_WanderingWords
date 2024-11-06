import { useContext, useEffect, useRef } from "react";
import { ToastContext } from "../../App";

function UploadWidget() {

    const handleToast = useContext(ToastContext);
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
        }, (err, res) => {
            if (!err && res && res.event === 'success') {
                handleToast('check', 'upload done', 'Your image has been uploaded successfully');
            }
        }
        )
    }, [])

    return (
        <button type="button" className="cloudinary-button border-0" onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    )

}

export default UploadWidget; 
