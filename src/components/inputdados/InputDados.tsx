import { Input } from '@chakra-ui/react'
import styles from './inputDados.module.css' 

interface Props{
    type: 'text' | 'email' | 'number'
    label: string
}

function InputDados({type,label}:Props){


    return(
        <Input 
        className={styles.inputFatec}
        mt='5' 
        type={type}     
        placeholder={label}  />  
    )
}

export default InputDados