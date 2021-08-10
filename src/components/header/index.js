import React,{useState} from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

const Header=()=>{
    const {getUser}=useGithub();
    const [usernameforSearch,setUsernameforSearch]=useState();

    const submitGetUser=()=>{
        if(!usernameforSearch) return;
        return getUser(usernameforSearch);
    }

    return(
        <header>
            <S.Wrapper>
                <input
                    type="text"
                    placeholder="Digite o nome do usuário: "
                    onChange={(e)=>setUsernameforSearch(e.target.value)}
                />
                <button type="submit" onClick={submitGetUser}>
                        <span>Buscar</span>
                </button>


            </S.Wrapper>
        </header>
    )

};

export default Header;