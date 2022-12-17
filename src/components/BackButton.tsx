import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

type BackButtonProps = {
  to: string
}

function BackButton({ to }: BackButtonProps) {
  return (
    <div className="flex">
      <Link to={to}>
        <div className="my-8 flex flex-row items-center justify-center gap-2 py-3 px-6 rounded-full border border-slate-200 text-md">
          <ArrowLeftIcon width={24} height={24} />
          Back
        </div>
      </Link>
    </div>
  )
}

export default BackButton
