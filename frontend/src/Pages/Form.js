import FormTextFields from "../Components/FormTextFields";
import stylesheet from '../index.css';
import Header from '../Components/Header';

export default function Form() 
{
    return (
        <>
            <Header/>
            <div id='main'>
            <h1>Register here...</h1>
            <FormTextFields/>
            </div>
        </>
    )
}