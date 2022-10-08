import { Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";
import avatarSvg from "../../assets/avatar_placeholder.svg";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { User, EnvelopeSimple, LockSimple, Camera } from "phosphor-react";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import { api } from "../../services/api";

export function Profile() {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarSvg
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);
  


  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleUpdateUser() {
    const update = {
      name,
      email,
      password:newPassword,
      old_password: oldPassword,
    }

    const userUpdate = Object.assign(user, update);
    updateUser({user: userUpdate, avatarFile })
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <ArrowLeft size={16} />
          Voltar
        </Link>
      </header>

      <main>
        <div className="avatar">
          <img src={avatar} alt="" />
          <label htmlFor="avatar">
            <Camera size={20} />
          </label>
          <input type="file" id="avatar" onChange={handleChangeAvatar}/>
        </div>

        <form action="">
          <Input
            type="text"
            icon={User}
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            type="email"
            icon={EnvelopeSimple}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Input
            type="password"
            icon={LockSimple}
            placeholder="Senha atual"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Input
            type="password"
            icon={LockSimple}
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button type="button" onClick={handleUpdateUser}>Salvar</button>
        </form>
      </main>
    </Container>
  );
}
