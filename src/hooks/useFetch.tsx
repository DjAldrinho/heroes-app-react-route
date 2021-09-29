import {useEffect, useRef, useState} from 'react';

const baseUrl: string = 'https://pokeapi.co/api/v2';

export const useFetch = (url: string, limit: number = 100, offset: number = 0) => {

    const isMounted = useRef(true);

    const values = {
        data: null,
        loading: true,
    };

    const [state, setState] = useState(values);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({data: null, loading: true});

        fetch(`${baseUrl}/${url}?limit=${limit}&offset=${offset}`)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        data
                    });
                }
            }).catch((error) => {
            setState({
                data: null,
                loading: false,
            });
            throw  new Error(`${error.message}`);
        });
    }, [url, limit, offset]);

    return state;
}
