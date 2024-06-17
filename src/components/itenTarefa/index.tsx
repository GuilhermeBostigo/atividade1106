import { Button, Box } from "@chakra-ui/react"

interface Props{
    titulo: string
}

export default function ItemTarefa({titulo}:Props){
    return (
<Box  
                    w={{base:'100%', sm:'100%', md: '100%'}} 
                    display='flex' alignItems='center'
                    mt="7px" mb='7px' p='5px' 
                    borderRadius='lg' borderWidth={'2px'}
                    bg='lightgray'>
                    <p>{titulo}</p>
                    <Button m={2} bg='red' color='white'>Pendente</Button>
                    <Button bg='red' color='white'>Excluir</Button>
                </Box>
    )
}
