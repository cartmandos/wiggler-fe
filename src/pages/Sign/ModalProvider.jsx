import {ModalContext} from './ModalContext'
import {useState, useContext} from 'react'

export function ModalProvider({children, defaultPath}) {
  const [currentPath, setCurrentPath] = useState(defaultPath)

  const value = {
    setCurrentPath,
    currentPath,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
export function useModal() {
  return useContext(ModalContext)
}

export function useModalPath() {
  const {currentPath} = useModal()
  return currentPath
}

export function useNavigateModal() {
  const {currentPath, setCurrentPath} = useModal()
  return function navigateModal(path) {
    setCurrentPath(path)
  }
}
