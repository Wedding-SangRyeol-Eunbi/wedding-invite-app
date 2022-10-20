import '../../static/css/ToastMessage.css';
function ToastMessage({msg = ''}) {
    return <div className="toast">{msg}</div>;
}

export default ToastMessage;
