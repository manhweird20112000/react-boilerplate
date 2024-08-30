import { useTranslate } from '@/hooks/use-translate'


export default function HomePage () {

  const { translate } = useTranslate()

  return <div>
    {translate('sign-in.password')}
  </div>
}
