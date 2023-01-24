import { useEffect } from 'react'
import { usePage } from '../../components/usePage'
import IndexPage from '../index'

export default function Ko() {
  const { setLang } = usePage() ?? {}

  useEffect(() => {
    setLang('ko')
  }, [])

  return <IndexPage />
}
