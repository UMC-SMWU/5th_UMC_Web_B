import * as C from './Add.style'; 

export default function Add({title, overview}){

    return(
        <C.Addcontent>
            <span>{title}</span>
            <br></br>
            <br></br>
            <span>{overview}</span>
        </C.Addcontent>

        );
}

