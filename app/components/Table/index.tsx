import cn from 'classnames'

export function Table({
  fullWidth = false,
  children,
}: React.PropsWithChildren<{ fullWidth?: boolean }>) {
  return (
    <table
      className={cn(
        'my-5 min-w-full border border-main bg-glass text-center text-white',
        { 'md:min-w-min': !fullWidth },
      )}
    >
      {children}
    </table>
  )
}

export function TableCell({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <td
      className={`border border-main px-3 py-2 ${className ? className : ''}`}
    >
      {children}
    </td>
  )
}

export function TableHead({ children }: React.PropsWithChildren<{}>) {
  return <thead className="bg-slate-900 font-bold">{children}</thead>
}
