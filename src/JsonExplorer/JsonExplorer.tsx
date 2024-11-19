import ObjectViewer from './ObjectViewer'
import PropertyViewer from './PropertyViewer'
import { PathContextProvider } from './contexts'

import styles from './JsonExplorer.module.css'

interface JsonExplorerProps {
  object: object;
}

export default function JsonExplorer({ object }: JsonExplorerProps) {
  return (
    <PathContextProvider>
      <PropertyViewer object={object} />
      <pre className={styles.objectViewer}>
        <ObjectViewer value={object} />
      </pre>
    </PathContextProvider>
  )
}
