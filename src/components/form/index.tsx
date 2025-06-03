import { zodResolver } from '@hookform/resolvers/zod'
import type { FormHTMLAttributes } from 'react'
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form'
import type { ZodSchema } from 'zod'

import { Input } from './components/input'
import { Checkbox } from './components/checkbox'

type FormData<T extends ZodSchema> =
  T extends ZodSchema<infer Data> ? Data : never

interface FormProps<T extends ZodSchema>
  extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
  formSchema: T
  onSubmit: SubmitHandler<FormData<T>>
  defaultValues?: FormData<T>
  resetOnSubmit?: boolean
  className?: string
}

export function Form<T extends ZodSchema>({
  children,
  formSchema,
  onSubmit,
  defaultValues,
  resetOnSubmit,
  className,
}: FormProps<T>) {
  const methods = useForm({ defaultValues, resolver: zodResolver(formSchema) })

  const handleSubmit = methods.handleSubmit(async (data: FormData<T>) => {
    await onSubmit(data)

    if (resetOnSubmit) {
      methods.reset()
    }
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={className}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.Input = Input
Form.Checkbox = Checkbox
