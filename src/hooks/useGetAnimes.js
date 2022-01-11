import React, { useEffect, useState } from 'react'

const useGetAnimes = () => {
    const [data, setdata] = useState({});
    const [page, setpage] = useState(1);
    const [animeSelected, setanimeSelected] = useState({});

    useEffect(() => {
        getAnimes();
        setpage(page + 1);
    }, []);

    const getAnimes = async () => {
        const response = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=${5*page}`);
        const json = await response.json();
        setdata(json.data);
        setanimeSelected(json.data[0]);
    }

    const nextPage = () => {
        setpage(page+1);
        getAnimes();
    }

    const prevPage = () => {
        if(page > 1) {
            setpage(page-1);
            getAnimes();
        }
    }

    const selectAnime = (pos) => {
        setanimeSelected(data[pos]);
    }

    return {data, nextPage, selectAnime, animeSelected, prevPage};

}

export default useGetAnimes;
