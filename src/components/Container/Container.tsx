import React, { ReactNode } from 'react'
import cn from 'clsx'
import s from './Container.module.css'

type ContainerProps = {
  className?: string
  children?: ReactNode
  variant?: 'default' | 'blog'
}

function Container({
  children,
  variant = 'default',
  className,
}: ContainerProps) {
  const rootClassName = cn(
    s.root,
    {
      [s.default]: variant === 'default',
      [s.blog]: variant === 'blog',
    },
    className,
  )

  return <div className={rootClassName}>{children}</div>
}

export default Container
