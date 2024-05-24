import './serviceComponent.css'
function ServiceComponent({message,Myicon}) {
    return <div className='servicecomp'>
        <Myicon className='image'></Myicon>
        <h4>{message} App</h4>
        <p>There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered alteration in some</p>
    </div>
}

export default ServiceComponent; 