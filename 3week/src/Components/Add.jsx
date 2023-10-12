import '../index.css';

export default function Add({title, overview}){

    return(
        <div className='addContent'>
            <span>{title}</span>
            <br></br>
            <br></br>
            <span>{overview}</span>
        </div>

        );
}

