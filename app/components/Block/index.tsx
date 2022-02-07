export type BlockProps = {
  href: string
  title: string
  description: string
}

const Block = ({ href, title, description }: BlockProps) => (
  <a
    className="mt-6 flex w-96 flex-col rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    href={href}
  >
    <h3 className="text-2xl font-bold">{title} &rarr;</h3>
    <p className="mt-4 text-xl">{description}</p>
  </a>
)

export default Block
