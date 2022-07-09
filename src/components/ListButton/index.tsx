import { Button, ButtonProps } from '@chakra-ui/react'

export type ListButtonProps = ButtonProps & { label: string }

export const ListButton = ({label, ...props}: ListButtonProps) => <Button borderWidth="0.1rem" borderColor="gray.400" borderRadius="0.5rem" {...props}>{label}</Button>