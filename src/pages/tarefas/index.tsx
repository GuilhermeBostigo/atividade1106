// npm i react-router-dom
import { useEffect, useState } from "react" // importando as dependencias
import FormTarefas from "../../components/formtarefas"
import ItemTarefa from "../../components/itenTarefa"
import { Link } from "react-router-dom"
interface Tarefa{
    id: number
    title: string
    completed: boolean
} // tipagem do retorno da API
export default function Tarefas(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]) // iniciando o state
    // primeiro param (tarefas) - variavel (aqui a lista de tarefas)
    // segundo param (setTarefas) - funcao que altera a lista

    function atualizarTarefas(){ // buscar os dados da api
        fetch('https://workshop-node-ts-intro-exemplo1.onrender.com/task')
        .then((dados) => dados.json())
        .then((tarefas) => setTarefas(tarefas))
        // fetch - chamada para API, passando a rota desejada
        // .then - recebendo a resposta, colocando na variavel dados e transforma JSON em objeto
        // .then - depois de receber o objeto - setTarefas recebe a lista de tarefas
    }

    useEffect(() => {
        atualizarTarefas()
    },[]) // useEffect - para quando o componente desenhar - executar a funcao atualizarTarefas
    // 2 params - 1º funcao que deve executar () => {} | 2º dependencias, nesse caso nenhuma []

    return (
        <>
            <h1>Tarefas</h1>
            <FormTarefas atualizarTarefas={atualizarTarefas}/>
            <ul>
                {
                    tarefas.map(tarefa => ( // map = para cada item em "tarefas" ele vai preencher o valor de "tarefa"
                        <ItemTarefa key={tarefa.id} titulo={tarefa.title} />
                        // key é necessário no uso do map para identificacao
                    ))
                }
            </ul>
            <Link to="/">Home</Link>
            <br />
            <Link to="/Sobre">Sobre</Link>
            <br />
            <Link to="/Contato">Contato</Link>
        </>
    )
}





/*
import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/react";
import Layout from "../../components/layout";
import InputFatec from "../../components/inputFatec";

export default function Tarefas() {
    return (
        <Layout>
            <h1>Lista de Tarefas</h1>
            <div>
                Inserir Nova Tarefa
                
                <InputFatec
                    placeHolder="Digite o Titulo da Task"
                    defaultValue="" type="text" /><br /> 
                    <input type="checkbox"/>realizada?
                <Button colorScheme="blue" fontSize={15} my={5} ml={2}>Inserir</Button>
                
            </div>
            <div>
                <p id="1">Tarefa 1
                    <Button colorScheme="red" fontSize={15} m={5}>Pendente</Button>
                    <Button colorScheme="red" fontSize={15}>Excluir</Button></p>
                <p id="1">Tarefa 2
                    <Button colorScheme="red" fontSize={15} m={5}>Pendente</Button>
                    <Button colorScheme="red" fontSize={15}>Excluir</Button></p>
                <p id="1">Tarefa 3
                    <Button colorScheme="red" fontSize={15} m={5}>Pendente</Button>
                    <Button colorScheme="red" fontSize={15}>Excluir</Button></p>
                <p id="1">Tarefa 4
                    <Button colorScheme="red" fontSize={15} m={5}>Pendente</Button>
                    <Button colorScheme="red" fontSize={15}>Excluir</Button></p>
            </div>
            <Link to="/">Voltar para Home</Link>
        </Layout>
    )
}*/
