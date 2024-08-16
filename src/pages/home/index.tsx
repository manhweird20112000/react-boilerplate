import { useTranslate } from '@/hooks/use-translate'


export default function HomePage () {

  const { translate } = useTranslate()

  return <div>
    <h1>{translate('hello')}</h1>
  </div>
}
