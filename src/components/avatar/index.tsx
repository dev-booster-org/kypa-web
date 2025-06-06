import { tv, type VariantProps } from 'tailwind-variants'

const avatarVariants = tv({
  base: 'flex items-center justify-center rounded-full',
  variants: {
    size: {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
    },
    'cursor-pointer': {
      true: 'cursor-pointer',
    },
  },
})

type AvatarVariants = VariantProps<typeof avatarVariants>

interface AvatarProps extends AvatarVariants {
  src?: string
  alt?: string
  cursorPointer?: boolean
}

export function Avatar({
  src,
  alt,
  size = 'md',
  cursorPointer = false,
}: AvatarProps) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={src ?? 'https://github.com/shadcn.png'}
        alt={alt ?? 'Avatar'}
        className={avatarVariants({ size, 'cursor-pointer': cursorPointer })}
      />
    </div>
  )
}
