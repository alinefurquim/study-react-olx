import React, { useEffect, useState } from 'react';
import { PageArea, SearchArea} from './styled';
import useAPI from '../../helpers/olxAPI';
import {PageContainer} from '../../components/MainComponents';
import { Link } from 'react-router-dom';
import AdItem from '../../components/partials/adItem/adItem';

const Page = () => {
    const api = useAPI();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() =>  {
        const getStates = async () => {
            const statelist = await api.getStates();
            setStateList(statelist);
        }
        getStates();
    }, []);

    useEffect(() =>  {
        const getCategories = async () => {
            const categorie = await api.getCategories();
            setCategories(categorie);
        }
        getCategories();
    }, []);

    useEffect (() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);

    return (
        <div>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="query" placeholder="O que você procura?" />
                            <select name="state">
                                {stateList.map ((i, k) =>
                                    <option key={k} value = {i.name}>{i.name}</option>)}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i, k) => 
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt=""/>
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios recentes</h2>
                    <div className="list">
                        {adList.map((i, k) => {
                           return <AdItem key={k} data={i} />
                        })}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver todos</Link>
                    <hr />
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </p>
                    
                </PageArea>
            </PageContainer>
        </div>
    );
}

export default Page;