import { createContext, useState, useEffect } from "react";
import API from '../api/api'

const AppContext = createContext()

export const AppProvider = ({ children }) => {

    // Search Modal Toggle 
    const [searchModalOpen, setSearchModalOpen] = useState(false)
    const showModal = () => {
        setSearchModalOpen(prevState => !prevState)
    }
    const closeModal = () => {
        setSearchModalOpen(prevState => !prevState)
    }

    // Search Agents
    const [searchAgent, setSearchAgent] = useState('')
    const onSearch = (e) => {
        setSearchAgent(e.target.value)
    }

    // Agents Fetch Data
    const [agents, setAgents] = useState([])
    useEffect(async () => {
        setAgents(await API.fetchAgents())

    }, [])

  
    
    return (
        <AppContext.Provider value={{ showModal, closeModal, searchModalOpen, agents, onSearch, searchAgent}}>{children}</AppContext.Provider>
    )
}

export default AppContext