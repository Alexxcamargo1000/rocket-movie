import { Container } from "./styles";
import { User, LockSimple, EnvelopeSimple, ArrowLeft } from "phosphor-react";
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

export function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSingUp(e) {
    setIsLoading(!isLoading)
    e.preventDefault()
   try {
    await api.post("/users", {
      name,
      email,
      password
    })

    navigate('/')
    alert("cadastro realizado")
    setIsLoading(!isLoading)

   } catch (error) {
    console.log(error);
    if (error.response) {
      alert(error.response.data.message);
    }else{
      alert("erro ao cadastrar")
    }
   }

  }

  return (
    <Container>
      <main>
        <div>
          <h1 className="logo">RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <form action="" onSubmit={handleSingUp}>
            <legend>Crie sua conta</legend>
            <Input 
              icon={User} 
              type="text" 
              placeholder="Nome"
              onChange={ e => setName(e.target.value) }
              value={name}
            />
            <Input 
              icon={EnvelopeSimple} 
              type="email" 
              placeholder="E-mail" 
              onChange={ e => setEmail(e.target.value) }
              value={email}
            />
            <Input 
              icon={LockSimple} 
              type="password" 
              placeholder="Senha" 
              onChange={ e => setPassword(e.target.value) }
              value={password}
            />
            <button disabled={isLoading} style={{cursor: `${isLoading ? 'not-allowed': '' }`}}>Cadastrar</button>
          </form>
          <Link to="/">
            <ArrowLeft size={19} />
            Voltar para o login
          </Link>
        </div>
      </main>
      <div className="bgImage" />
    </Container>
  );
}
