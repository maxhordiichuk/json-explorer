import { usePathContext } from '../hooks'
import { isViewable } from '../lib';

import styles from './FieldName.module.css'

interface FieldNameProps {
  name: string;
  value: unknown;
  path: string;
}

export default function FieldName({ name, value, path }: FieldNameProps) {
  const { setPath } = usePathContext()

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setPath(path)
  }

  if (isViewable(value)) {
    return (
      <a href="#" className={styles.link} onClick={handleClick}>{name}</a>
    )
  }

  return <span>{name}</span>
}
