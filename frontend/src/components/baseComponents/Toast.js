import Icon from "./Icon";

function Toast({ toastList }) {

    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 10 }}>
            {toastList ? toastList.map((toast, index) =>
                <div className="toast fade show" key={index} style={{ transition: 'all 1s ease' }}>
                    <div className="toast-header">
                        <Icon type={toast.type? toast.type : 'warn'} />
                        <strong className={`ms-2 me-auto text-capitalize`}>{toast.header ? toast.header : `warning`}</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        {toast.msg ? toast.msg : `Something went wrong...`}
                    </div>
                </div>
            ) : ``}
        </div>
    )
}

export default Toast; 
