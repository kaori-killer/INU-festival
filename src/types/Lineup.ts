import Artist from './Guest';

interface Lineup {
    id: string,
    day: string,
    date: string;
    artist: Artist[],
}

export default Lineup;
