import { Link } from "react-router-dom" // npm i react-router-dom
import Layout from "../../components/layout"

export default function Sobre() {
    return (
        <Layout>
            <h1>Sobre</h1>
            <div>
                <h2>Desenvolvedor: Guilherme Fernandes</h2>
                <h3></h3>
            </div>
            <Link to="/">Voltar para Home</Link>
        </Layout>
    )
}