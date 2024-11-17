interface Props {
  title: string,
  children: React.ReactNode
}

export default function Card({title, children }: Props) {
  return (
    <div className="w-full h-full p-6 shadow-xl border rounded-3xl">
      <h2 className="font-medium w-full text-2xl mb-6">{title}</h2>
      {children}
    </div>
  )
}