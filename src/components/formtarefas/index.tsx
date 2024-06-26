import { Box, Button, Checkbox, Input } from "@chakra-ui/react"
import { useState } from "react" // importando as dependencias
interface FormTarefasProps {
    atualizarTarefas(): void
}
export default function FormTarefas({atualizarTarefas}:FormTarefasProps){
    const [titulo,setTitulo] = useState("") // cria um estado para o texto do titulo
    
    function cadastrar(){
        const novaTarefa = {
            title: titulo, // recuperado do state "titulo"
            completed: false
        } // monta o objeto para o cadastro

        fetch('https://workshop-node-ts-intro-exemplo1.onrender.com/task',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novaTarefa)
        }) // chamando a rota, configurando para ser um POST e passando os dados no Body
        .then(() => atualizarTarefas()) // chama a funcao do componente pai que foi recebedia via props
    }
    
    return (
        <Box w={{base:'100%', sm:'100%', md: '100%'}} display='flex' justifyContent='space-between'>  
            <Input
            onChange={(evento) => {
               setTitulo(evento.target.value) 
            }} // quando alteracao do campo acontece o valor do campo vai para o setTitulo
            value={titulo}
            type="text" 
            placeholder="Título da tarefa" />
            <Checkbox ml={5}>Realizada?</Checkbox>
            <Button 
            onClick={cadastrar}
            colorScheme="blue">
                Inserir
            </Button>
        </Box>
    )
}