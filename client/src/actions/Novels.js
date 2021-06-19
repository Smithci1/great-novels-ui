
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
    const { data } = await axios.get('http://localhost:1337/api')

    return data
}