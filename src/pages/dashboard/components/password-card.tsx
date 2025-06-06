interface PasswordCardProps {
  title: string
}

export function PasswordCard({ title }: PasswordCardProps) {
  return (
    <div className="border-gray-200 w-1/4 bg-blue-50 dark:bg-zinc-700 dark:border-zinc-600 rounded p-4 flex flex-col gap-4 shadow">
      <span className="text-lg font-bold">{title}</span>
    </div>
  )
}
