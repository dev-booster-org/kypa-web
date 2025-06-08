import { Copy, Ellipsis, Eye } from 'lucide-react'

interface PasswordCardProps {
  name: string
  email: string
  folderName: string
  favicon: string
}

export function PasswordCard({
  name,
  email,
  folderName,
  favicon,
}: PasswordCardProps) {
  return (
    <div className="p-4 rounded border border-gray-200 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-zinc-100 dark:bg-zinc-600 rounded p-1 w-14 h-14 flex items-center justify-center">
            <img src={favicon} alt={name} className="w-8 h-8 rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{name}</span>
            <span className="text-sm">{email}</span>
            <span className="text-sm">{folderName}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Eye size={18} className="cursor-pointer" />
          <Copy size={18} className="cursor-pointer" />
          <Ellipsis size={18} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
