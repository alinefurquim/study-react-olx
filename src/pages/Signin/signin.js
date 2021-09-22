import React, { useState } from 'react';
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents';
import { PageArea } from './styled';
import useAPI from '../../helpers/olxAPI';
import { doLogin } from '../../helpers/authHandler';

const Page = () => {
    const api = useAPI();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        const json = await api.login(email, password);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        }
        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
                <PageArea>
                    {error && 
                        <ErrorMessage>{error}</ErrorMessage>}
                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area-title">Email</div>
                            <div className="area-input">
                                <input
                                    type="email"
                                    disabled={disabled}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required>
                                </input>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area-title">Senha</div>
                            <div className="area-input">
                                <input 
                                    type="password" 
                                    disabled={disabled}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required>
                                </input>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area-title">Lembrar senha</div>
                            <div className="">
                                <input 
                                    type="checkbox" 
                                    disabled={disabled}
                                    checked={rememberPassword}
                                    onChange={() => setRememberPassword(!rememberPassword)}>
                                </input>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area-title">Login</div>
                            <div className="area-input">
                                <button disabled={disabled}>Login</button>
                            </div>
                        </label>
                    </form>
                </PageArea>
           </PageContainer>
    );
}
export default Page;