import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  autoComplete?: string
}

export function Input({
  label,
  name,
  autoComplete = 'off',
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="w-full flex flex-col gap-1">
      {label || errors[name] ? (
        <div className="flex items-center justify-between text-sm font-bold">
          <label htmlFor={name}>{label}</label>
          <span className="text-red-500">
            {errors[name]?.message as string}
          </span>
        </div>
      ) : null}
      <input
        id={name}
        {...register(name)}
        {...rest}
        autoComplete={autoComplete}
        className="p-2 rounded border border-zinc-300 focus:border-blue-500 outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:focus:border-blue-500"
      />
    </div>
  )
}
