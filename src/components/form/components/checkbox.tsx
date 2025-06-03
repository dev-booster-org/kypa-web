import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  defaultChecked?: boolean
}

export function Checkbox({
  label,
  name,
  defaultChecked = false,
  ...rest
}: CheckboxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <label className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          {...register(name)}
          {...rest}
          className="w-4 h-4"
        />
        <span className="text-sm font-bold">{label}</span>
      </div>
      <span className="text-red-500 text-sm font-bold">
        {errors[name]?.message as string}
      </span>
    </label>
  )
}
