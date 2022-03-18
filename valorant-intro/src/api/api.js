import { AGENTS_URL, BUNDLES_URL, WEAPONS_URL, SPRAYS_URL, MAPS_URL } from './config'
import axios from 'axios'

const API = {
    fetchAgents: async () => {

        try {
            const endpoint = AGENTS_URL
            const { data } = await axios.get(endpoint)
            return data.data
        } catch (error) {
            console.log(error);
        }

    },

    fetchBundles: async () => {
        try {
            const endpoint = BUNDLES_URL
            const { data } = await axios.get(endpoint)
            return data
        } catch (error) {
            console.log(error);
        }

    },

    fetchMaps: async () => {
        try {
            const endpoint = MAPS_URL
            const { data } = await axios.get(endpoint)
            return data
        } catch (error) {
            console.log(error);
        }

    },
}

export default API