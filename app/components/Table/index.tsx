export function Table({ children }: React.PropsWithChildren<{}>) {
  return (
    <table className="my-5 min-w-full border border-slate-600 bg-glass text-center md:min-w-min">
      {children}
    </table>
  )
}

export function TableCell({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  // TODO: Refactor to use clx package after
  return (
    <td
      className={`border border-slate-500 px-3 py-2 ${
        className ? className : ''
      }`}
    >
      {children}
    </td>
  )
}

export function TableHead({ children }: React.PropsWithChildren<{}>) {
  return <thead className="bg-slate-800">{children}</thead>
}
