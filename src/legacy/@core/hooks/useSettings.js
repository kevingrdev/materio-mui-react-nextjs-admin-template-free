import { useContext } from 'react'
import { SettingsContext } from 'src/legacy/@core/context/settingsContext'

export const useSettings = () => useContext(SettingsContext)
