import { useState } from "react"


export const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState);

    const reset = () => {
        setvalues(initialState);
    }
    const handleInputChange = ({ target }) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setvalues({
            ...values,
            [target.name]: target.value
        })
    }
    return [values, handleInputChange, reset];
}
