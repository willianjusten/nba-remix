export function Table({ children }: React.PropsWithChildren<{}>) {
  return (
    <table className="my-5 min-w-full border border-slate-600 bg-glass text-center text-white md:min-w-min">
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
      className={`border border-slate-500 px-3 py-2 ${
        className ? className : ''
      }`}
    >
      {children}
    </td>
  )
}

export function TableHead({ children }: React.PropsWithChildren<{}>) {
  return <thead className="bg-slate-900 font-bold">{children}</thead>
}
