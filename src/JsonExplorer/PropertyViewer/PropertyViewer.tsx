import { get } from 'lodash'

import { usePathContext } from '../hooks'
import { isViewable } from '../lib'

import styles from './PropertyViewer.module.css'

interface PropertyViewerProps {
  object: object;
}

export default function PropertyViewer({ object }: PropertyViewerProps) {
  const { path, setPath } = usePathContext()
  const item = get(object, path)
  const value = isViewable(item) ? String(item) : 'undefined'

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPath(event.target.value)
  }

  return (
    <div>
      <div>
        <label htmlFor="property">Property</label>
      </div>
      <div>
        <input
          type="text"
          id="property"
          className={styles.propertyInput}
          value={path}
          onChange={handleChange} />
      </div>
      <p className={styles.propertyValue}>{value}</p>
    </div>
  )
}
