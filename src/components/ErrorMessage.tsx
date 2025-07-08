import type { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode //Con reactnode se pueden renderizar componentes dentro de otros componentes
}

export default function ErrorMessage({children} : ErrorMessageProps) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">{children}</p>
  )
}
