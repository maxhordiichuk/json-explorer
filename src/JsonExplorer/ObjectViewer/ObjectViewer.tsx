import FieldName from '../FieldName'
import {isViewable} from "../lib";

interface ObjectViewerProps {
  value: unknown;
  level?: number;
  path?: string;
}

export default function ObjectViewer({ value, level = 0, path = '' }: ObjectViewerProps) {
  const bracketIndentation = '  '.repeat(level)
  const indentation = '  '.repeat(level + 1)

  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((item, index) => {
          const nextPath = path ? `${path}[${index}]` : String(index)

          return (
            <div key={index}>
              {indentation}<ObjectViewer value={item} level={level + 1} path={nextPath} />,
            </div>
          )
        })}
        {bracketIndentation}]
      </>
    )
  }

  if (value !== null && typeof value === "object" && !isViewable(value)) {
    return (
      <>
        {'{'}
        {Object.entries(value).map(([name, item]) => {
          const nextPath = path ? `${path}.${name}` : name

          return (
            <div key={name}>
              {indentation}<FieldName name={name} value={item} path={nextPath} />:{' '}
              <ObjectViewer value={item} level={level + 1} path={nextPath} />,
            </div>
          )
        })}
        {bracketIndentation}{'}'}
      </>
    )
  }

  if (typeof value === "string") {
    return `'${value}'`
  }

  return String(value)
}
