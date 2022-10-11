import { useContext } from 'react'
import { EditorContext } from '../context'

export function useHandlers() {
  const { editor } = useContext(EditorContext)

  return editor
}
